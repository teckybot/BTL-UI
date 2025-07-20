import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import api from '../utils/api';
import Confetti from 'react-confetti';

const AIWorkshopSuccess = () => {
  const [registrationId, setRegistrationId] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const regId = params.get('regId');
    if (regId) {
      setRegistrationId(regId);
    } else {
      navigate('/');
    }
    // Responsive confetti
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navigate, location.search]);

  useEffect(() => {
    if (showPrompt) {
      const timer = setTimeout(() => setShowPrompt(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showPrompt]);

  const handleDownloadPDF = async () => {
    if (!registrationId) return;
    setDownloading(true);
    try {
      const response = await api.get(`/ai-workshop/download-pdf/${registrationId}`, {
        responseType: 'blob'
      });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `AI_Workshop_Registration_${registrationId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Failed to download PDF. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  flex flex-col justify-between">
      <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={200} recycle={false} />
      <div className="container mx-auto px-2 sm:px-4 py-24 sm:py-16 flex-1 flex flex-col justify-center items-center">
        {showPrompt && (
          <div className="fixed top-28 right-32 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg text-center text-sm sm:text-base animate-bounce">
            🎉 Please download your registration details for your records!
          </div>
        )}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-4 sm:p-8 text-center relative">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 border-4 border-green-300">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-1 tracking-tight">
              Registration Successful!
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Thank you for registering for the <br /><span className="font-semibold text-blue-700">AI Workshop</span>
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-4 sm:p-6 mb-6 border border-blue-100">
            <h2 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">
              Registration Details
            </h2>
            <div className="text-left space-y-2 text-sm sm:text-base">
              <div className="flex justify-between flex-wrap">
                <span className="font-medium text-gray-700">Registration ID:</span>
                <span className="font-mono text-blue-600">{registrationId}</span>
              </div>
              <div className="flex justify-between flex-wrap">
                <span className="font-medium text-gray-700">Event:</span>
                <span className="text-gray-600">AI Workshop for Teachers</span>
              </div>
              <div className="flex justify-between flex-wrap">
                <span className="font-medium text-gray-700">Date:</span>
                <span className="text-gray-600">August 2nd, 2025</span>
              </div>
              <div className="flex justify-between flex-wrap">
                <span className="font-medium text-gray-700">Venue:</span>
                <span className="text-gray-600">Bullayya College</span>
              </div>
              <div className="flex justify-between flex-wrap">
                <span className="font-medium text-gray-700">Amount Paid:</span>
                <span className="text-green-600 font-semibold">₹299</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="w-full py-3 px-4 rounded-lg font-bold text-white bg-gradient-to-r from-green-500 to-blue-500 shadow-md hover:from-green-600 hover:to-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
            >
              {downloading ? 'Downloading...' : 'Download PDF'}
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full py-3 px-4 rounded-lg font-semibold text-gray-700 border border-gray-300 bg-white hover:bg-gray-50 transition text-base sm:text-lg"
            >
              Return to Home
            </button>
          </div>

          <div className="bg-cyan-50 rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">
              Next Steps
            </h3>
            <ul className="text-left space-y-2 text-blue-700 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Download your registration confirmation PDF for your records</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Keep your Registration ID safe for future reference</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Arrive 15 minutes before the workshop starts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Bring a printed copy of your registration confirmation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIWorkshopSuccess; 