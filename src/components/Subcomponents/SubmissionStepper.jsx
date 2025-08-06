import React, { useState } from "react";
import { Steps, message } from "antd";
import api from "../../utils/api";
import CheckpointForm from "../../pages/Submission/CheckpointForm";
import TeamPreview from "./TeamPreview";
import PdfUploadForm from "./PdfUploadForm";
import VideoUploadForm from "./VideoUploadForm";
import CDXSubmissionPage from "../../pages/Submission/CDXSubmissionPage";

const { Step } = Steps;

const SubmissionStepper = ({ onCancel }) => {
  const [submissionType, setSubmissionType] = useState("VIDEO");
  const [currentStep, setCurrentStep] = useState(0);
  const [teamId, setTeamId] = useState("");
  const [teamData, setTeamData] = useState(null);

  const steps = [
    { title: "Team Registration ID" },
    { title: "Team Preview" },
    { title: "Upload" }
  ];

  const next = () => setCurrentStep((prev) => prev + 1);
  const prev = () => setCurrentStep((prev) => prev - 1);

  const handleVerify = async (id) => {
    try {
      const teamRes = await api.get(`/team/details/${id}`);
      const submissionRes = await api.get(`/submission/check/${id}`);

      if (submissionRes.data.hasSubmitted) {
        message.warning(`A submission has already been made for team ${id}.`);
        return;
      }

      const eventCode = id.substring(2, 5).toUpperCase();
      let type = "VIDEO";

      switch (eventCode) {
        case "INV":
          type = "PDF";
          break;
        case "CDX":
          type = "CDX";
          break;
        case "ASB":
        case "SPL":
        case "TDM":
          type = "VIDEO";
          break;
        default:
          message.error("Unknown competition code in Team ID.");
          return;
      }

      setTeamId(id);
      setTeamData(teamRes.data.team);
      setSubmissionType(type);
      next();
    } catch (err) {
      message.error(err.response?.data?.message || "An error occurred.");
    }
  };

  const handleSubmissionSuccess = () => {
    message.success("Submission successful!");
    onCancel();
  };

  const handleBackFromPreview = () => {
    setTeamData(null);
    setCurrentStep(0);
  };

  const renderSubmissionComponent = () => {
    switch (submissionType) {
      case "PDF":
        return (
          <PdfUploadForm
            teamRegId={teamId}
            onPrev={prev}
            onSubmissionSuccess={handleSubmissionSuccess}
          />
        );
      case "VIDEO":
        return (
          <VideoUploadForm
            teamRegId={teamId}
            onPrev={prev}
            onSubmissionSuccess={handleSubmissionSuccess}
          />
        );
      case "CDX":
        return (
          <CDXSubmissionPage
            teamRegId={teamId}
            onPrev={prev}
            onNext={handleSubmissionSuccess}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl p-4 sm:p-8 mx-auto transition-opacity duration-500 ease-in-out">
      {/* Desktop Stepper */}
      <div className="hidden md:block">
        <Steps current={currentStep} className="mb-10">
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </div>

      {/* Mobile Stepper */}
      <div className="md:hidden mb-6">
        <div className="flex items-center justify-center space-x-2">
          {steps.map((item, idx) => (
            <div key={item.title} className="flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-medium ${
                  currentStep === idx
                    ? "bg-[#112481] text-white border-[#112481]"
                    : "bg-white border-[#b6c6e3] text-[#b6c6e3]"
                }`}
              >
                {idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`w-8 h-0.5 mx-1 ${
                    currentStep > idx ? "bg-[#112481]" : "bg-[#b6c6e3]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-2">
          <span className="text-sm font-medium text-[#112481]">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
          </span>
        </div>
      </div>

      {/* Step Content */}
      {currentStep === 0 && (
        <CheckpointForm onVerify={handleVerify} onCancel={onCancel} />
      )}

      {currentStep === 1 && teamData && (
        <TeamPreview
          team={teamData}
          onNext={next}
          onPrev={handleBackFromPreview}
        />
      )}

      {currentStep === 2 && renderSubmissionComponent()}
    </div>
  );
};

export default SubmissionStepper;