import React, { useState } from "react";
import { Input, Button, message, Card, Space, Typography, Form } from "antd";
import { CloseCircleOutlined, CheckOutlined } from "@ant-design/icons";
import api from "../../utils/api";

const { Title, Text } = Typography;

const CheckpointForm = ({ onVerify, onCancel }) => {
  const [teamId, setTeamId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheck = async (e) => {
  if (e) e.preventDefault(); // prevent form reload

  const trimmedId = teamId.trim();
  if (!trimmedId) {
    message.error("Please enter a Team Registration ID.");
    return;
  }

  setLoading(true);
  try {
    const teamRes = await api.get(`/team/details/${trimmedId}`);

    if (teamRes.data.success) {
      const submissionRes = await api.get(`/submission/check/${trimmedId}`);

      if (submissionRes.data.hasSubmitted) {
        message.warning(
          `A submission has already been made for team ${trimmedId}.`
        );
        return;
      }

      onVerify(trimmedId);
    } else {
      message.error("Team not found. Please check your Team ID.");
    }
  } catch (err) {
    message.error(
      err.response?.data?.message || "An error occurred. Please try again."
    );
  } finally {
    setLoading(false);
  }
};



  return (
  <div className="w-full max-w-3xl mx-auto mt-10 px-6">
    <div className="text-[#2054CC] rounded-md p-6">
      <h2 className="text-3xl font-medium text-center mb-14">
        Enter Team Registration ID
      </h2>

      <form onSubmit={handleCheck} className="space-y-4">
        <div>
          <label
            htmlFor="teamId"
            className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-1"
          >
            Team Registration ID
            {/* Tooltip "?" icon */}
            <div className="relative group">
              <span className="inline-block w-4 h-4 bg-gray-300 text-gray-700 text-xs font-bold rounded-full text-center cursor-pointer">
                ?
              </span>
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap transition-opacity duration-200">
                Format: e.g., APASB001
              </div>
            </div>
          </label>

          <input
            id="teamId"
            type="text"
            placeholder="Enter your team registration ID"
            value={teamId}
            onChange={(e) => setTeamId(e.target.value.toUpperCase())}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleCheck();
            }}
            className="w-full px-4 py-2 border rounded-md text-sm text-black uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        </div>

        <div className="flex flex-wrap gap-3 justify-between">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center justify-center disabled:opacity-50"
            style={{ background: 'linear-gradient(93.58deg, #112481 0%, #2054CC 70%, #307DE3 100%)'}}
            disabled={loading}
          >
            {/* <CheckOutlined className="mr-2" /> */}
            {loading ? "Verifying..." : "Verify"}
          </button>


          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Please provide a valid Team Registration ID to proceed
      </p>
    </div>
  </div>
);


};

export default CheckpointForm;
