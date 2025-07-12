import { useNavigate } from 'react-router-dom';
import cmgsoon from '../data/All/cmgsoon.jpg';
import { ArrowLeft } from 'lucide-react';
import cmgsoonmobile from '../data/All/space-travel-mobile.png';

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen relative overflow-hidden flex flex-col items-center justify-start">
      {/* Responsive Background Image */}
      <img
        src={cmgsoon}
        alt="Coming Soon"
        className="hidden sm:block absolute inset-0 w-full h-full object-cover z-0"
      />
      <img
        src={cmgsoonmobile}
        alt="Coming Soon Mobile"
        className="block sm:hidden absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Mobile Content */}
      <div className="relative z-10 w-full flex flex-col items-center pt-36 sm:pt-24 sm:hidden">
        <div
          className="text-[3.2rem] xs:text-4xl font-extrabold tracking-wide mb-8 text-center"
          style={{
            color: '#FFE3C5',
            textShadow: '0 8px 25px rgba(0,0,0,1)',
            letterSpacing: '0.04em',
            fontFamily: 'Poppins, Orbitron, sans-serif',
            textTransform: 'uppercase',
          }}
        >
          COMING<br />SOON
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-6 py-2 bg-white/90 hover:bg-white text-black rounded-full shadow-lg transition-all border text-lg font-medium"
          style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.18)' }}
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      {/* Desktop Content */}
      <div className="relative z-10 w-full h-full flex-col items-center justify-center hidden sm:flex">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-32 right-6 flex items-center gap-2 px-6 py-2 bg-white/90 hover:bg-white text-black rounded-full shadow-lg transition-all border text-sm font-medium"
          style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.18)' }}
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>
    </div>
  );
}
