// CheckpointForm.jsx
import React, { useState,useEffect } from "react";
import { Input, Button, message } from "antd";
import api from "../../utils/api";

const CheckpointForm = ({ onVerify, onCancel }) => {
  const [teamId, setTeamId] = useState("");
  // const navigate = useNavigate();

  const handleCheck = async () => {
    const trimmedId = teamId.trim();
    if (!trimmedId) {
      message.error("Please enter a Team Registration ID.");
      return;
    }

    try {
      // Step 1: Verify if the team exists
      const teamRes = await api.get(`/team/details/${trimmedId}`);

      if (teamRes.data.success) {
        // Step 2 (New Logic): Check if a submission has already been made
        const submissionRes = await api.get(`/submission/check/${trimmedId}`);

        if (submissionRes.data.hasSubmitted) {
          message.warning(
            `A submission has already been made for team ${trimmedId}.`
          );
          return; // Stop the flow here
        }

        // Step 3: If no submission exists, navigate to the correct form
        // const eventCode = trimmedId.substring(2, 5).toUpperCase();

        // switch (eventCode) {
        //   case "INV":
        //     navigate(`/pdf-submission/${trimmedId}`);
        //     break;
        //   case "CDX":
        //     navigate(`/submit/cdx/${trimmedId}`);
        //     break;
        //   case "ASB":
        //   case "SPL":
        //   case "TDM":
        //     navigate(`/online-submission/${trimmedId}`);
        //     break;
        //   default:
        //     message.error("Unknown competition code in Team ID.");
        // }
        onVerify(trimmedId);

      } else {
        message.error("Team not found. Please check your Team ID.");
      }
    } catch (err) {
      message.error(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // No logging or action for keydown except what is handled in input
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h3>Enter Team Registration ID</h3>
      <Input
        placeholder="e.g. APASB001"
        value={teamId}
        onChange={(e) => setTeamId(e.target.value.toUpperCase())}
        style={{ marginBottom: 16, textTransform: "uppercase" }}
        onKeyDown={(e) => { if (e.key === 'Enter') handleCheck(); }}
      />
      <Button type="primary" onClick={handleCheck}>Verify</Button>
    </div>
  );
};

export default CheckpointForm;