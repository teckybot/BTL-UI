import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import api from "../../../utils/api";
import { TeamDraftContext } from "../../../context/TeamDraftContext";
import bgImg1 from '../../../data/All/Asset 2 1.png';
import { message } from 'antd';

// Toast Component
const Toast = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const bgColor = type === 'error' ? 'bg-red-500' : 'bg-green-500';
  const icon = type === 'error' ? <CloseCircleOutlined /> : <CheckCircleOutlined />;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className={`${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm`}>
        <span className="text-lg">{icon}</span>
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-white hover:text-gray-200"
        >
          ×
        </button>
      </div>
    </div>
  );
};

const CheckpointPage = () => {
  const [schoolRegId, setSchoolRegId] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [teamCount, setTeamCount] = useState(null);
  const [maxTeams, setMaxTeams] = useState(10);
  const [validated, setValidated] = useState(false);
  const [isSchoolIdValidated, setIsSchoolIdValidated] = useState(false);

  // Toast state
  const [toast, setToast] = useState({
    message: '',
    type: 'error',
    isVisible: false
  });

  const navigate = useNavigate();
  const { switchToSchool } = useContext(TeamDraftContext);

  // Define the gradient style for the buttons
  const buttonGradientStyle = {
    background: 'linear-gradient(93.58deg, #112481 0%, #2054CC 70%, #307DE3 100%)',
    color: '#ffffff'
  };

  // Show toast function
  const showToast = (message, type = 'error') => {
    setToast({ message, type, isVisible: true });
  };

  // Hide toast function
  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  // Function to validate only the School Registration ID
  const handleIdValidate = async () => {
    if (!schoolRegId.trim()) {
      showToast("Please enter a School Registration ID");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/team/validateSchool", { schoolRegId });

      if (res.data.valid && res.data.teamCount < (res.data.maxTeams || 10)) {
        setTeamCount(res.data.teamCount);
        setMaxTeams(res.data.maxTeams || 10);
        setIsSchoolIdValidated(true);
        setError("");
        showToast("School ID validated successfully!", "success");
      } else {
        showToast(res.data.message || "School ID validation failed or team limit reached.");
      }
    } catch (err) {
      showToast(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to validate both School ID and Email
  const handleValidateEmail = async () => {
    if (!isSchoolIdValidated || !email.trim()) {
      showToast("Please validate the School ID first and enter an email.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await api.post("/team/validateSchool", { schoolRegId, email });
      if (res.data.valid) {
        setTeamCount(res.data.teamCount);
        setMaxTeams(res.data.maxTeams || 10);
        // Instead of showing validated block, show message and redirect
        message.success(`Validation Successful! Total teams registered for your school: ${res.data.teamCount}/${res.data.maxTeams || 10}`);
        switchToSchool(schoolRegId);
        navigate("/modules", { state: { schoolRegId, email } });
      } else {
        showToast(res.data.message || "Email validation failed.");
      }
    } catch (err) {
      showToast(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = () => {
    switchToSchool(schoolRegId);
    navigate("/modules", { state: { schoolRegId, email } });
  };

  return (
    <div className="mt-[20px] bg-white flex flex-col items-center justify-center">
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      {/* Desktop & Tablet View (Hidden if validated) */}
      {!validated && (
        <div
          className="hidden md:flex rounded-3xl shadow-xl overflow-hidden w-[795px] h-[505px] flex-row"
          style={{
            backgroundImage: `url(${bgImg1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Right side content */}
          <div className="ml-auto flex flex-col justify-center items-center w-[60%] h-[85%]">

            {/* School Registration ID section */}
            <h3 className="text-lg md:text-[18px] font-bold text-gray-800 text-center mb-2">
              Enter your School Registration ID
            </h3>
            <p className="text-sm text-gray-500 text-center mb-4">
              This ID is provided after your school completes registration.
            </p>

            {/* ID Input with inline error and button below */}
            <form
              className="flex flex-col items-center mb-6 w-40
              "
              onSubmit={e => { e.preventDefault(); handleIdValidate(); }}
            >
              <div className="flex items-center space-x-3 w-full justify-center mb-2">
                <input
                  type="text"
                  value={schoolRegId}
                  onChange={(e) => {
                    setSchoolRegId(e.target.value.toUpperCase());
                    if (isSchoolIdValidated) {
                      setIsSchoolIdValidated(false);
                      setError("");
                    }
                  }}
                  maxLength={9}
                  placeholder="APGNT001"
                  className="text-center tracking-widest font-bold text-lg md:text-xl border border-gray-300 rounded-md px-6 py-3 w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading || isSchoolIdValidated}
                />
                {!isSchoolIdValidated && error && (
                  <div className="flex items-center p-2 bg-red-50 border border-red-200 rounded-lg">
                    <CloseCircleOutlined className="text-red-500 mr-1 text-sm" />
                    <span className="text-red-700 text-xs whitespace-nowrap">{error}</span>
                  </div>
                )}
              </div>

              {/* ✅ Wrap button and icon in flex-row */}
              <div className="flex items-center gap-2 mt-2 w-52 md:pl-3">
                <button
                  type="submit"
                  className={`flex-1 font-semibold text-sm px-8 py-2 rounded shadow transition duration-200
        ${(loading || !schoolRegId.trim() || isSchoolIdValidated)
                      ? 'cursor-not-allowed'
                      : 'hover:bg-[#1e39a6]'
                    }`}
                  style={
                    isSchoolIdValidated
                      ? { backgroundColor: '#10b981', color: '#ffffff' }
                      : (!loading && schoolRegId.trim()
                        ? buttonGradientStyle
                        : { backgroundColor: '#d1d5db' }
                      )
                  }
                  disabled={loading || !schoolRegId.trim() || isSchoolIdValidated}
                >
                  {isSchoolIdValidated ? 'ID Validated' : 'VERIFY'}
                </button>
                {isSchoolIdValidated && (
                  <CheckCircleOutlined className="text-green-600 text-xl" />
                )}
              </div>
            </form>

            {/* School Email ID section */}
            <h3 className="text-lg md:text-[18px] font-bold text-gray-800 text-center mb-2">
              Enter your School Email ID
            </h3>
            <p className="text-sm text-gray-500 text-center mb-3">
              Email ID submitted at the time of school registration.
            </p>

            {/* Email Input with inline error and button below */}
            <form
              className="flex flex-col items-center mb-6 w-40"
              onSubmit={(e) => {
                e.preventDefault();
                handleValidateEmail();
              }}
            >
              {/* Input + Error */}
              <div className="flex items-center space-x-3 w-full justify-center mb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (validated) {
                      setValidated(false);
                      setError('');
                    }
                  }}
                  placeholder="school@example.com"
                  className="text-center tracking-wide font-medium text-sm md:text-base border border-gray-300 rounded-md px-5 py-3 w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading || !isSchoolIdValidated || validated}
                />
                {isSchoolIdValidated && !validated && error && (
                  <div className="flex items-center p-2 bg-red-50 border border-red-200 rounded-lg">
                    <CloseCircleOutlined className="text-red-500 mr-1 text-sm" />
                    <span className="text-red-700 text-xs whitespace-nowrap">{error}</span>
                  </div>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className={`w-full font-semibold text-sm px-8 py-2 rounded shadow transition duration-200 mt-2
      ${(loading || !email.trim() || !isSchoolIdValidated || validated)
                    ? 'cursor-not-allowed'
                    : 'hover:bg-[#1e39a6]'
                  }`}
                style={
                  validated
                    ? { backgroundColor: '#10b981', color: '#ffffff' } // green if validated
                    : (!loading && email.trim() && isSchoolIdValidated
                      ? buttonGradientStyle
                      : { backgroundColor: '#d1d5db' }
                    )
                }
                disabled={loading || !email.trim() || !isSchoolIdValidated || validated}
              >
                {validated ? 'Email Verified' : (loading ? 'Verifying...' : 'VERIFY')}
              </button>

              {/* Success Icon */}
              {validated && (
                <CheckCircleOutlined className="ml-3 text-green-600 text-xl mt-2" />
              )}
            </form>

          </div>
        </div>
      )}

      {/* Mobile View (Hidden if validated) - Updated with same logic */}
      {!validated && (
        <div className="md:hidden lg:hidden relative w-full min-h-[470px] bg-[#ffffff] overflow-hidden flex flex-col items-center justify-start pt-10 px-4">

          <div className="relative flex flex-col items-center w-full max-w-sm">
            {/* School Registration ID section */}
            <h3 className="text-[16px] font-bold text-gray-800 text-center mb-1">
              Enter your School Registration ID
            </h3>
            <p className="text-xs text-gray-500 text-center mb-6">
              This ID is provided after your school completes registration.
            </p>

            {/* Mobile ID Input with inline error and button below */}
            <form className="flex flex-col items-center w-full mb-4" onSubmit={e => { e.preventDefault(); handleIdValidate(); }}>
              <input
                type="text"
                value={schoolRegId}
                onChange={(e) => {
                  setSchoolRegId(e.target.value.toUpperCase());
                  if (isSchoolIdValidated) {
                    setIsSchoolIdValidated(false);
                    setError("");
                  }
                }}
                maxLength={9}
                placeholder="APGNT001"
                className="text-center font-extrabold text-[28px] tracking-[0.5em] text-[#2C4EDC]
                  bg-transparent border-none outline-none w-[90vw] max-w-xs mb-2 placeholder:text-[#2C4EDC]/60"
                disabled={loading || isSchoolIdValidated}
              />
              <div className="w-[90vw] max-w-xs border-b-4 border-[#2C4EDC] mb-2" />
              {!isSchoolIdValidated && error && (
                <div className="flex items-center p-2 bg-red-50 border border-red-200 rounded-lg mt-2">
                  <CloseCircleOutlined className="text-red-500 mr-1 text-sm" />
                  <span className="text-red-700 text-xs">{error}</span>
                </div>
              )}
              <button
                type="submit"
                className={`w-full font-semibold text-base px-14 py-2 rounded shadow transition duration-200 mt-2
                  ${(loading || !schoolRegId.trim() || isSchoolIdValidated) ? 'cursor-not-allowed' : 'hover:bg-[#1e39a6]'}
                `}
                style={
                  isSchoolIdValidated
                    ? { backgroundColor: '#10b981', color: '#ffffff' }
                    : (!loading && schoolRegId.trim() ? buttonGradientStyle : { backgroundColor: '#d1d5db' })
                }
                disabled={loading || !schoolRegId.trim() || isSchoolIdValidated}
              >
                {isSchoolIdValidated ? 'ID Validated' : 'VERIFY'}
              </button>
              {isSchoolIdValidated && (
                <CheckCircleOutlined className="ml-3 text-green-600 text-xl mt-2" />
              )}
            </form>

            {/* School Email ID section */}
            <h3 className="text-[16px] font-bold text-gray-800 text-center mt-8">
              Enter your School Email ID
            </h3>
            <p className="text-xs text-gray-500 text-center mb-3">
              Email ID submitted at the time of school registration.
            </p>

            {/* Mobile Email Input with inline error and button below */}
            <form className="flex flex-col items-center w-full mb-4" onSubmit={e => { e.preventDefault(); handleValidateEmail(); }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="school@example.com"
                className="text-center text-base text-gray-700 border-b-2 border-[#2C4EDC] w-[90vw] max-w-xs py-2 mb-2 focus:outline-none"
                disabled={loading || !isSchoolIdValidated}
              />
              {isSchoolIdValidated && !validated && error && (
                <div className="flex items-center p-2 bg-red-50 border border-red-200 rounded-lg mt-2">
                  <CloseCircleOutlined className="text-red-500 mr-1 text-sm" />
                  <span className="text-red-700 text-xs">{error}</span>
                </div>
              )}
              <button
                type="submit"
                className={`w-full font-semibold text-base px-14 py-2 rounded shadow transition duration-200 mt-2
                  ${(loading || !email.trim() || !isSchoolIdValidated) ? 'cursor-not-allowed' : 'hover:bg-[#1e39a6]'}
                `}
                style={!loading && email.trim() && isSchoolIdValidated ? buttonGradientStyle : { backgroundColor: '#d1d5db' }}
                disabled={loading || !email.trim() || !isSchoolIdValidated}
              >
                {loading ? 'Verifying...' : 'VERIFY'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckpointPage;