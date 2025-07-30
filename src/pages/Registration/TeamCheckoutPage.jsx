import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TeamDraftContext } from "../../context/TeamDraftContext";
import api from "../../utils/api";
import { message, Modal } from "antd";

const PER_HEAD_COST = 499;
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

const TeamCheckoutPage = () => {
  const navigate = useNavigate();
  const { draft, clearDraft } = useContext(TeamDraftContext);

  const [teamSummaries, setTeamSummaries] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pollAttempts, setPollAttempts] = useState(0);
  const [schoolDetails, setSchoolDetails] = useState(null);

  const [showProcessingModal, setShowProcessingModal] = useState(false);
  const [showDelayedConfirmationModal, setShowDelayedConfirmationModal] = useState(false);


  // Fetch school details if not present in draft (cross-device fix)
useEffect(() => {
  async function fetchSchool() {
    try {
      let schoolRegId = draft.schoolRegId;

      if (!schoolRegId) {
        schoolRegId = localStorage.getItem("schoolRegId");
      }

      const path = window.location.pathname;

      if (!schoolRegId) {
        // ✅ Special case: user refreshed on checkout
        if (path === "/registration/checkout") {
          message.warning("Please submit teams again.");
          navigate("/registration/team");
        } 
        // 🔁 Default fallback for all other cases
        else if (path !== "/teamRegistration-success") {
          message.error("Please submit teams again.");
          navigate("/registration/team");
        }
        return;
      }

      const res = await api.get(`/school/${schoolRegId}`);
      if (res.data?.success && res.data?.school) {
        setSchoolDetails(res.data.school);

        if (!draft.schoolRegId) {
          draft.schoolRegId = schoolRegId;
        }
      } else {
        message.error("Failed to fetch school details. Please restart registration.");
        navigate("/registration/school");
      }
    } catch (err) {
      console.error(err);
      message.error("Could not load school details. Please try again.");
    }
  }

  fetchSchool();
}, [draft, navigate]);




  // Build team data for checkout
  useEffect(() => {
    const teams = Object.entries(draft.teams || {}).map(([num, data]) => {
      const size = data?.members?.length || 0;
      const amount = size * PER_HEAD_COST;
      return {
        teamNumber: Number(num),
        teamSize: size,
        event: data?.event || data?.eventCode || "",
        eventName: data?.eventName || "",
        members: data?.members || [],
        amount,
      };
    });
    setTeamSummaries(teams);
    setTotalAmount(teams.reduce((sum, t) => sum + t.amount, 0));
  }, [draft]);

  const handleBack = () => navigate("/modules");

  const handleProceedToPay = async () => {
    console.log("schoolDetails at pay time:", schoolDetails);

    if (!schoolDetails) {
      message.error("Missing school data. Please reload.");
      return;
    }

    if (!teamSummaries.length) {
      message.error("No teams to register.");
      return;
    }
    if (
      !schoolDetails?.coordinatorName ||
      !schoolDetails?.coordinatorEmail ||
      !schoolDetails?.coordinatorNumber
    ) {
      message.error("Coordinator details missing. Please complete registration properly.");
      return;
    }


    setLoading(true);
    setError("");

    console.log("DEBUG PAYLOAD to /team/payment/create-order:", {
      schoolRegId: draft.schoolRegId,
      teams: teamSummaries.map(({ amount, ...rest }) => rest),
    });

    try {
      const res = await api.post("/team/payment/create-order", {
        schoolRegId: draft.schoolRegId,
        teams: teamSummaries.map(({ amount, ...rest }) => rest),
      });

      if (!res.data?.order) throw new Error(res.data?.message || "Failed to create payment order.");
      const { order } = res.data;

      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) throw new Error("Failed to load Razorpay SDK. Check your connection.");

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Team Registration - Bharat Teck League",
        description: "Team Registration Payment",
        order_id: order.id,
        handler: (response) => {
          handleVerifyPayment(order.id, response, 0);
        },
        prefill: {
          name: schoolDetails.coordinatorName,
          email: schoolDetails.coordinatorEmail || schoolDetails.email,
          contact: schoolDetails.coordinatorNumber,
        },
        theme: { color: "#2563EB" },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", () => {
        setError("Payment failed or cancelled. Please try again.");
      });
      rzp.open();
    } catch (err) {
      console.error(err);
      setError(err.message || "Payment initialization failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyPayment = async (orderId, response, attempt = 0) => {

    if (attempt === 0) {
      setShowProcessingModal(true);
    }

    if (attempt >= 3) {
      setShowProcessingModal(false);
      setShowDelayedConfirmationModal(true);
      return;
    }


    try {
      const verifyRes = await api.post("/team/payment/verify", {
        razorpay_order_id: orderId,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      });

      const { status, success } = verifyRes.data;

      if (success && status === "registered") {
        navigate("/teamRegistration-success", {
          state: {
            registeredTeams: verifyRes.data.teams || [],
            pdfBase64: verifyRes.data.pdfBase64,
            pdfFileName: verifyRes.data.pdfFileName,
          },
        });
        setTimeout(() => clearDraft(), 2000);
      } else if (status === "processing" || status === "pending") {
        setTimeout(() => handleVerifyPayment(orderId, response, attempt + 1), 2000);
      } else {
        message.error(verifyRes.data.message || "Payment verification failed.");
      }
    } catch (err) {
      console.error(err);
      message.error(err.response?.data?.message || "Failed to verify payment.");
    }
  };

  useEffect(() => {
    if (showDelayedConfirmationModal) {
      savePendingTeamRegistration();
    }
  }, [showDelayedConfirmationModal]);

  const savePendingTeamRegistration = async () => {
    try {
      await api.post("/team/savePending", {
        schoolRegId: draft.schoolRegId,
        teams: Object.values(draft.teams || {}), // array form
      });
      console.log("Saved pending registration fallback due to webhook miss.");
    } catch (err) {
      console.error("Error saving pending registration:", err);
    }
  };

  const hasUnsavedChanges = teamSummaries.length > 0 && !showDelayedConfirmationModal;

  // Warn on tab close or refresh during payment session
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (teamSummaries.length > 0 && !showDelayedConfirmationModal) {
        e.preventDefault();
        e.returnValue = ""; // Required for browser prompt
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [teamSummaries, showDelayedConfirmationModal]);


  return (
    <div className="max-w-3xl mx-auto mt-32 p-6 bg-white rounded-xl shadow border">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Checkout</h2>

      {teamSummaries.length === 0 ? (
        <div className="text-center text-gray-500 py-16">
          No teams to checkout. Please go back and add teams.
        </div>
      ) : (
        <>
          <table className="w-full mb-6 border">
            <thead>
              <tr className="bg-blue-50 text-gray-700">
                <th className="p-2 border">Team #</th>
                <th className="p-2 border">Team Size</th>
                <th className="p-2 border">Competition</th>
                <th className="p-2 border">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {teamSummaries.map((team, idx) => (
                <tr key={idx} className="text-center">
                  <td className="p-2 border">{team.teamNumber || idx + 1}</td>
                  <td className="p-2 border">{team.teamSize}</td>
                  <td className="p-2 border">{team.eventName || team.event}</td>
                  <td className="p-2 border">₹{team.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end items-center mb-6">
            <span className="font-semibold text-lg">Total: </span>
            <span className="ml-4 text-xl font-bold text-green-700">₹{totalAmount}</span>
          </div>

          {error && <div className="mb-4 text-red-600">{error}</div>}

          <div className="flex justify-between">
            <button
              className="px-6 py-2 rounded border border-blue-600 text-blue-600 bg-white hover:bg-blue-50"
              onClick={handleBack}
              disabled={loading}
            >
              Back
            </button>
            <button
              className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
              onClick={handleProceedToPay}
              disabled={loading || !teamSummaries.length}
            >
              {loading ? "Processing..." : `Proceed to Pay ₹${totalAmount}`}
            </button>
          </div>
        </>
      )}

      <Modal
        open={showProcessingModal}
        footer={null}
        closable={false}
        centered
      >
        <p className="text-lg font-medium text-center">Registration is in process. Please wait...</p>
        <p className="text-lg font-medium text-center">Don't close the window!!</p>
      </Modal>

      <Modal
        open={showDelayedConfirmationModal}
        onCancel={() => {
          setShowDelayedConfirmationModal(false);
          navigate("/registration/team");
        }}
        closable={true}
        maskClosable={false} // Prevent click outside
        footer={null}
        centered
      >
        <p className="text-lg font-medium text-center mb-2">✅ Payment confirmed.</p>
        <p className="text-gray-600 text-center">
          Registration is still in process. You’ll receive a confirmation email shortly. You can now close this window.
        </p>
      </Modal>


    </div>
  );
};

export default TeamCheckoutPage;
