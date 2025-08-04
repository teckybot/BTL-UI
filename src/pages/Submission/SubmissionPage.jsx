

import React, { useState, useEffect } from "react";
import { Steps, message } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import CheckpointForm from "../../pages/Submission/CheckpointForm";
import TeamPreview from "../../components/Subcomponents/TeamPreview";
import PdfUploadForm from "../../components/Subcomponents/PdfUploadForm";
import VideoUploadForm from "../../components/Subcomponents/VideoUploadForm";
import CDXSubmissionPage from "../../pages/Submission/CDXSubmissionPage";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";

const { Step } = Steps;

const SubmissionPage = () => {
    const { teamId: initialTeamId } = useParams();
    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(initialTeamId ? 1 : 0);
    const [teamId, setTeamId] = useState(initialTeamId || "");
    const [teamData, setTeamData] = useState(null);
    const [submissionType, setSubmissionType] = useState(null);

    const steps = [
        { title: "Team " },
        { title: "Team Preview" },
        { title: "Submission" }
    ];

    useEffect(() => {
        if (initialTeamId) {
            handleVerify(initialTeamId, false);
        }
    }, [initialTeamId]);

    const next = () => setCurrentStep(currentStep + 1);
    const prev = () => setCurrentStep(currentStep - 1);

    const handleVerify = async (id, shouldNavigate = true) => {
        try {
            const teamRes = await api.get(`/team/details/${id}`);
            const submissionRes = await api.get(`/submission/check/${id}`);

            if (submissionRes.data.hasSubmitted) {
                message.warning(`A submission has already been made for team ${id}.`);
                return;
            }

            setTeamId(id);
            setTeamData(teamRes.data.team);

            const eventCode = id.substring(2, 5).toUpperCase();
            switch (eventCode) {
                case "INV":
                    setSubmissionType("PDF");
                    break;
                case "CDX":
                    setSubmissionType("CDX");
                    break;
                case "ASB":
                case "SPL":
                case "TDM":
                    setSubmissionType("VIDEO");
                    break;
                default:
                    message.error("Unknown competition code in Team ID.");
                    return;
            }
            if (shouldNavigate) {
                next();
            }
        } catch (err) {
            message.error(err.response?.data?.message || "An error occurred.");
        }
    };

    const renderSubmissionComponent = () => {
        switch (submissionType) {
            case "PDF":
                return <PdfUploadForm teamRegId={teamId} onPrev={prev} onSubmissionSuccess={() => navigate('/confirmation')} />;
            case "VIDEO":
                return <VideoUploadForm teamRegId={teamId} onPrev={prev} onSubmissionSuccess={() => navigate('/confirmation')} />;
            case "CDX":
                return <CDXSubmissionPage onPrev={prev} onNext={() => navigate('/confirmation')} />;
            default:
                return null;
        }
    };

    return (
        <div className="pt-[120px] min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-2xl px-4 py-8">
                    <div className="bg-white rounded-lg shadow-xl p-8">
                        <Steps current={currentStep} className="mb-8">
                            {steps.map((item) => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>

                        {currentStep === 0 && (
                            <CheckpointForm onVerify={handleVerify} />
                        )}

                        {currentStep === 1 && teamData && (
                            <TeamPreview team={teamData} onNext={next} onPrev={() => { setTeamData(null); setCurrentStep(0); }} />
                        )}

                        {currentStep === 2 && renderSubmissionComponent()}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SubmissionPage;