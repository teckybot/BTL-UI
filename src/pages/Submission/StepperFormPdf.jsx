// pages/StepperFormPdf.jsx
import React, { useEffect, useState } from "react";
import { Steps, message } from "antd";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import TeamPreview from "../../components/Subcomponents/TeamPreview";
import PdfUploadForm from "../../components/Subcomponents/PdfUploadForm";

const StepperFormPdf = () => {
  const { teamId } = useParams();
  const [current, setCurrent] = useState(0);
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await api.get(`/team/details/${teamId}`);
        setTeamData(res.data.team);
      } catch {
        message.error("Failed to fetch team data.");
      }
    };
    fetchTeam();
  }, [teamId]);

  const next = () => setCurrent((prev) => prev + 1);
  const prev = () => setCurrent((prev) => prev - 1);

  return (
    <div className="pt-[120px]" style={{ maxWidth: 700, margin: "40px auto" }}>
      <Steps current={current} style={{ marginBottom: 40 }}>
        <Steps.Step title="Team Preview" />
        <Steps.Step title="PDF Upload" />
      </Steps>

      {current === 0 && teamData && (
        <TeamPreview team={teamData} onNext={next} />
      )}
      {current === 1 && (
        <PdfUploadForm teamRegId={teamId} onPrev={prev} />
      )}
    </div>
  );
};

export default StepperFormPdf;
