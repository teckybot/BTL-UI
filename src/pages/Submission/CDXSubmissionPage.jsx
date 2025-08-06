import React, { useEffect, useState } from "react";
import { Typography, Button, message } from "antd";
import api from "../../utils/api";
import { HiArrowNarrowLeft } from "react-icons/hi";

const { Title, Paragraph } = Typography;

const CDXSubmissionPage = ({ teamRegId, onPrev, onNext }) => {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await api.get(`/team/details/${teamRegId}`);
        setTeamData(res.data.team);
      } catch (err) {
        message.error("Failed to fetch team data.");
      }
    };

    fetchTeam();
  }, [teamRegId]);

  if (!teamData) return null;

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-[#1f3a8a] mb-4">
          🚀 Important Information
        </h2>
        <p className="text-base text-gray-700 leading-relaxed mb-6">
          CodeX is an <span className="font-semibold">online coding competition</span>. It will be conducted on{" "}
          <span className="font-semibold">17th August</span>.
          <br />
          <br />
          <span className="font-semibold">No submission is required</span> on this portal.
        </p>
        <div className="text-right">
          <button
            type="button"
            onClick={onPrev}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            <HiArrowNarrowLeft className="text-lg" />
            Back to Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default CDXSubmissionPage;
