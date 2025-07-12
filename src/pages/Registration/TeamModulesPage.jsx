import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TeamDraftContext } from "../../context/TeamDraftContext";
import { message } from "antd";
import api from "../../utils/api";
import { CheckCircleFilled, ExclamationCircleFilled, CloseCircleFilled, PushpinOutlined } from '@ant-design/icons';

const TeamModulesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { draft, filledCount, switchToSchool, updateTeam, removeTeams } = useContext(TeamDraftContext);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [registeredTeams, setRegisteredTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popupStep, setPopupStep] = useState(0);

  // Handle school switch
  useEffect(() => {
    const schoolRegId = location.state?.schoolRegId;
    if (!schoolRegId) {
      navigate("/registration/team", { replace: true });
      return;
    }

    switchToSchool(schoolRegId);
  }, [location.state?.schoolRegId]);

  // Load teams after switching school
  useEffect(() => {
    console.log('Switching to school:', draft.schoolRegId);
    setRegisteredTeams([]); // Clear previous state immediately on school change
    if (!draft.schoolRegId) return;
    const fetchRegisteredTeams = async () => {
      try {
        const res = await api.get(`/team/list?schoolRegId=${draft.schoolRegId}`);
        console.log('Fetched teams for', draft.schoolRegId, res.data);
        if (Array.isArray(res.data)) {
          setRegisteredTeams(res.data.map(team => ({ teamNumber: team.teamNumber, teamRegId: team.teamRegId })));
          // Auto-cleanup: remove any draft teams that are now registered
          const registeredNumbers = new Set(res.data.map(team => team.teamNumber));
          removeTeams(Array.from(registeredNumbers));
        }
      } catch (err) {
        // Optionally handle error
      }
    };
    fetchRegisteredTeams();
  }, [draft.schoolRegId]);

  const handleBlockClick = (teamNumber) => {
    if (!submitted) navigate(`/team-form/${teamNumber}`);
  };

  // Always use string keys for draft.teams lookup to avoid type mismatch
  // Compute which blocks are registered and which are draft
  const registeredTeamNumbers = registeredTeams.map(t => t.teamNumber);

  // Only submit draft teams that are not already registered
  const newTeamsToSubmit = Object.entries(draft.teams)
    .filter(([teamNumber, data]) => !registeredTeamNumbers.includes(Number(teamNumber)));

  const newTeamsCount = newTeamsToSubmit.length;
  const registeredCount = registeredTeamNumbers.length;
  const totalAfterSubmit = registeredCount + newTeamsCount;

  const handleSubmit = async () => {
    setShowConfirm(false);
    setSubmitting(true);
    setError("");

    try {
      const teamsArr = newTeamsToSubmit.map(([teamNumber, teamData]) => ({
        ...teamData,
        teamNumber: Number(teamNumber)
      }));
      const res = await api.post("/team/registerBatch", {
        schoolRegId: draft.schoolRegId,
        teams: teamsArr,
      });

      if (res.data.success) {
        const submittedTeamNumbers = (res.data.teams || []).map(t => t.teamNumber);
        removeTeams(submittedTeamNumbers); // Remove only submitted teams from draft
        setSubmitted(true);
        navigate("/teamRegistration-success", {
          state: {
            registeredTeams: res.data.teams || [],
            pdfBase64: res.data.pdfBase64,      // <-- add this
            pdfFileName: res.data.pdfFileName,  // <-- and this
          },
        });
      } else {
        setError(res.data.message || "Submission failed.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Submission failed.");
    } finally {
      setSubmitting(false);
      setPopupStep(0);
    }
  };

  const canSubmit = newTeamsCount > 0 && !submitting && !submitted;

  // New: handle click for registered teams
  const handleRegisteredTeamClick = async (teamNumber) => {
    try {
      // Find the registered teamRegId for this teamNumber
      const team = registeredTeams.find(t => t.teamNumber === teamNumber);
      if (!team || !team.teamRegId) {
        message.error('Team details not found.');
        return;
      }
      // Fetch full team details from backend
      const res = await api.get(`/team/details/${team.teamRegId}`);
      if (res.data && res.data.team) {
        navigate(`/team-form/${teamNumber}`, {
          state: { readonly: true, teamData: res.data.team }
        });
      } else {
        message.error('Could not load team details.');
      }
    } catch (err) {
      message.error('Error loading team details.');
    }
  };

  // Map registered teamNumbers for fast lookup
  // const registeredTeamNumbers = registeredTeams.map(t => t.teamNumber); // This line is now redundant

  // Remove loading state and always render blocks
  // Add debug log before rendering
  console.log('Rendering blocks', registeredTeams, draft.teams);

  return (
    <div className="max-w-6xl mt-20 mx-auto p-6 bg-[#F8FAFF] min-h-screen flex flex-col rounded-2xl border border-[#E0E7EF]">
      {/* Instruction Box and Registered Count */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="bg-white border border-[#B6C6E3] rounded-xl p-5 mb-4 md:mb-0 w-full">
          <h2 className="text-[#2563EB] font-semibold text-lg mb-3 flex items-center gap-2">
            <PushpinOutlined  className="text-xl text-[#2563EB] md:pl-40" ></PushpinOutlined>
              Important Instructions
          </h2>
          <ul className="list-disc marker:text-[#2563EB] pl-5 text-[15px] text-[#222] space-y-3 md:pl-52 leading-relaxed  md:leading-normal">
            <li>Each team must have a minimum of 2 and a maximum of 4 participants to be eligible.</li>
            <li>Each participant is allowed to participate in only one competition throughout the event.</li>
            <li>Once the team registration is submitted, no changes or modifications will be allowed.</li>
            <li>After successful registration, participants must appear for the online level as mentioned.</li>
            <li>Teams must carefully follow the instructions given in their respective problem statements.</li>
            <li>The registration form must be filled only by authorized school staff or coordinators.</li>
          </ul>
        </div>
      </div>
      <div className="text-right md:w-[30%] flex items-center justify-end self-end mb-6">
        <span className="text-[#2563EB] font-semibold text-base md:text-lg">Registered Teams: {registeredCount}/10</span>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[...Array(10)].map((_, idx) => {
          const teamNum = idx + 1;
          const registered = registeredTeamNumbers.includes(teamNum);
          const filled = !!draft.teams[String(teamNum)] && !registered;
          let status = 'NO ACTION';
          let color = 'text-[#F43F5E]';
          let bg = 'bg-white';
          let border = 'border border-[#E5E7EB]';
          let icon = <CloseCircleFilled className="text-[#F43F5E] text-xl" />;
          if (registered) {
            status = 'REGISTERED';
            color = 'text-[#22C55E]';
            bg = 'bg-[#F6FEF9]';
            border = 'border border-[#22C55E]';
            icon = <CheckCircleFilled className="text-[#22C55E] text-xl" />;
          } else if (filled) {
            status = 'DRAFT SAVED';
            color = 'text-[#F59E42]';
            bg = 'bg-[#FFF7ED]';
            border = 'border border-[#F59E42]';
            icon = <ExclamationCircleFilled className="text-[#F59E42] text-xl" />;
          }
          return (
            <div
              key={teamNum}
              className={`flex flex-col items-center justify-center h-32 rounded-xl shadow-sm ${bg} ${border} transition cursor-pointer select-none`}
              onClick={() => {
                if (registered) {
                  handleRegisteredTeamClick(teamNum);
                } else if (!registered && !submitted) {
                  handleBlockClick(teamNum);
                }
              }}
              style={{ opacity: submitted ? 0.5 : 1, pointerEvents: submitted ? 'none' : 'auto' }}
            >
              <div className="font-bold text-[15px] mb-1 text-[#222]">TEAM {teamNum}</div>
              <div className={`flex items-center gap-2 font-semibold text-sm ${color}`}>{icon} {status}</div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-auto">
        <button
          className="px-8 py-2 rounded-lg border border-[#2563EB] text-[#2563EB] font-semibold bg-white hover:bg-[#F0F6FF] transition"
          onClick={() => navigate('/registration/team')}
        >
          BACK
        </button>
        <button
          className="px-8 py-2 rounded-lg bg-[#2563EB] text-white font-semibold shadow hover:bg-[#174EA6] transition"
          disabled={!canSubmit}
          onClick={() => {
            setShowConfirm(true);
            setPopupStep(0);
          }}
        >
          NEXT
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            {popupStep === 0 && (
              <>
                <div className="mb-4 text-lg font-semibold">
                  You have already registered {registeredCount} out of 10 teams.
                </div>
                <div className="flex gap-4 justify-end">
                  <button
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                    onClick={() => setShowConfirm(false)}
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() => setPopupStep(1)}
                    disabled={submitting}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
            {popupStep === 1 && (
              <>
                <div className="mb-4 text-lg font-semibold">
                  You are about to submit {newTeamsCount} more team{newTeamsCount !== 1 ? "s" : ""}.
                </div>
                <div className="flex gap-4 justify-end">
                  <button
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                    onClick={() => setShowConfirm(false)}
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() => setPopupStep(2)}
                    disabled={submitting}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
            {popupStep === 2 && (
              <>
                <div className="mb-4 text-lg font-semibold">
                  After submission, your school will have {totalAfterSubmit} out of 10 teams registered.
                </div>
                <div className="flex gap-4 justify-end">
                  <button
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                    onClick={() => setShowConfirm(false)}
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                    onClick={handleSubmit}
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Continue"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {error && (
        <div className="p-3 mt-4 bg-red-50 border border-red-200 rounded text-red-600 text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default TeamModulesPage;
