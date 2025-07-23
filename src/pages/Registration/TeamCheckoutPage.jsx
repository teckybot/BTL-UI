import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TeamDraftContext } from "../../context/TeamDraftContext";
import api from "../../utils/api";
import { message } from "antd";

const PER_HEAD_COST = 499;
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_xxxxx";

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
    if (!teamSummaries.length) {
      message.error("No teams to register.");
      return;
    }

    const payerEmail = draft.coordinatorEmail || "school@example.com";
    setLoading(true);
    setError("");

    try {
      // Step 1: Create Razorpay order
      const res = await api.post("/team/payment/create-order", {
        schoolRegId: draft.schoolRegId,
        payerEmail,
        teams: teamSummaries.map(({ amount, ...rest }) => rest),
      });
      if (!res.data?.order) throw new Error(res.data?.message || "Failed to create payment order.");
      const { order } = res.data;

      // Step 2: Load Razorpay SDK
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) throw new Error("Failed to load Razorpay SDK. Check your connection.");

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency || "INR",
        name: "Team Registration - Bharat Teck League",
        description: "Team Registration Payment",
        order_id: order.id,
        handler: async function (response) {
          handleVerifyPayment(order.id, response);
        },
        prefill: {
          name: "School Coordinator",
          email: payerEmail,
          contact: "9999999999",
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

  const handleVerifyPayment = async (orderId, response) => {
    try {
      const verifyRes = await api.post("/team/payment/verify", {
        schoolRegId: draft.schoolRegId,
        teams: teamSummaries,
        razorpay_order_id: orderId,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      });
      if (verifyRes.data.success) {
        clearDraft();
        navigate("/teamRegistration-success", {
          state: {
            registeredTeams: verifyRes.data.teams || [],
            pdfBase64: verifyRes.data.pdfBase64,
            pdfFileName: verifyRes.data.pdfFileName,
          },
        });
      } else if (verifyRes.data.status === "processing" || verifyRes.data.status === "pending") {
        message.info("Payment is being processed. Retrying in 3 seconds...");
        setTimeout(() => {
          handleVerifyPayment(orderId, response);
        }, 3000);
      } else {
        message.error(verifyRes.data.message || "Payment verification failed.");
      }
    } catch (err) {
      console.error(err);
      message.error(err.response?.data?.message || "Failed to verify payment.");
    }
  };

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
                <th className="p-2 border">Event</th>
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
    </div>
  );
};

export default TeamCheckoutPage;
