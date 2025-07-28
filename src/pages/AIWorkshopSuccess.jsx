import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Confetti from 'react-confetti';

const AIWorkshopSuccess = () => {
  const [registrationId, setRegistrationId] = useState('');
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
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navigate, location.search]);

  return (
    <div className="min-h-screen bg-gradient-to-br flex flex-col justify-between">
      {/* <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={200} recycle={false} /> */}
      <div className="container mx-auto px-2 sm:px-4 py-24 sm:py-16 flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-4 sm:p-8 text-center relative">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mb-4 border-4 border-red-300">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
            </div>


            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-1 tracking-tight">
              Registration In Pending
            </h1>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-4 sm:p-6 mb-6 border border-blue-100">
            <p className="text-lg md:text-3xl font-semibold text-blue-800 mb-4">
              The registration fee for the workshop is <span className="font-semibold text-gray-900">₹299.</span><br /></p>
            <p className="text-gray-700 text-base sm:text-lg">
              Our coordinators will be in touch with you shortly and<br />
              will share the payment link along with detailed instructions.<br />
              <span className="font-semibold text-black">You’re almost registered just complete the payment to confirm your spot.</span>
            </p>
          </div>
          <button
            onClick={() => navigate('/contactus')}
            className="w-full py-3 px-4 rounded-lg font-bold text-white bg-gradient-to-r from-blue-500 to-green-500 shadow-md hover:from-blue-600 hover:to-green-600 transition text-base sm:text-lg mb-3"
          >
            Go to Contact Us Page
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full py-3 px-4 rounded-lg font-semibold text-gray-700 border border-gray-300 bg-white hover:bg-gray-50 transition text-base sm:text-lg"
          >
            Return to Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIWorkshopSuccess; 