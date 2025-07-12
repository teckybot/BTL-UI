import { useNavigate } from 'react-router-dom';
import level from '../data/All/bharat_teck_league_2025.jpg';
import orbit from '../data/All/orbit 1.png';   // for Finale
import space from '../data/All/space 1.png';   // for Qualifier
import arrow from '../data/All/arrow.svg';

export default function Levels() {
  const navigate = useNavigate();

  // Reusable Card Component
  const Card = ({ title, description, badgeText, icon, onExplore, disabled }) => (
    <div
      className="rounded-3xl p-6 md:p-10 w-[330px] md:w-[400px] text-left relative backdrop-blur-[10px] bg-white/10 shadow-xl border border-white/20 flex flex-col justify-between h-[380px]"
      style={{
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.06))',
      }}
    >
      {/* Badge */}
      <span className="absolute top-5 right-5 bg-gradient-to-r from-slate-300 to-slate-100 text-gray-800 text-xs px-4 py-1 rounded-full font-semibold shadow-sm">
        {badgeText}
      </span>

      {/* Content */}
      <div className="relative z-10 mt-6">
        <p className="text-sm text-gray-300 mb-1">Level</p>
        <h3 className="text-3xl font-extrabold text-white mb-4">{title}</h3>
        <p className="text-[15px] text-white leading-relaxed text-justify">{description}</p>
      </div>

      {/* Explore Button */}

      <button
        className={`mt-6 px-6 py-[10px] rounded-[10px] text-sm font-semibold transition-all flex items-center gap-2 w-fit
    ${disabled ? ' cursor-not-allowed' : 'hover:brightness-110 active:scale-[0.97]'}`}
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #93AFC2 100%)',
          color: '#000',
          boxShadow: disabled ? 'none' : '0 0 10px rgba(147, 175, 194, 0.4)',
        }}
        onClick={onExplore}
        disabled={disabled}
      >
        Explore
        <img src={arrow} alt="arrow" className="w-5 h-5" />
      </button>

      {/* Icon */}
      <img
        src={icon}
        alt="icon"
        className="absolute bottom-2 right-2 w-16 opacity-40 pointer-events-none select-none"
      />
    </div>
  );

  return (
    <div
      className="relative text-center text-black py-[140px] px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${level})` }}
    >
      {/* Big LEVEL text */}


        {/* h1 goes here */}

        <h1
          className="absolute select-none pointer-events-none font-poppins font-extrabold text-left leading-none tracking-tight uppercase text-[#A8C8F4]/10
    text-[120px] sm:text-[200px] md:text-[300px] lg:text-[400px]
    left-0 sm:left-1/2 sm:-translate-x-1/2 pl-4
    filter blur-[7px] mt-0 sm:mt-10
    whitespace-nowrap sm:whitespace-normal overflow-hidden">
          <span className="block sm:hidden leading-none">
            L<br />E<br />V<br />E<br />L
          </span>
          <span className="hidden sm:inline">LEVEL</span>
        </h1>


      {/* Title */}
      <h2
        className="relative z-10 mt-[-20px] text-[40px] md:text-[86px] font-extrabold tracking-wide mb-6 uppercase text-center"
        style={{
          background: 'linear-gradient(180deg, #93AFC2 18.27%, #FFFFFF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Levels of Participation
      </h2>
      <div
        className="relative w-full max-w-[1000px] h-[2px] mx-auto my-2"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, #ffffff 50%, rgba(255,255,255,0) 100%)',
        }}
      >
        <div
          className="absolute left-1/2 top-1/2 w-[60px] h-[16px] rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0) 100%)',
            filter: 'blur(3px)',
          }}
        />
      </div>


      {/* Cards */}
      <div className="relative text-justify z-10 mt-[80px] flex flex-col lg:flex-row items-center justify-center gap-[100px] md:gap-[250px] flex-wrap max-w-7xl mx-auto">
        {/* Qualifier - Active Button */}
        <Card
          title="Qualifier"
          badgeText="Online"
          description="Each team must submit a 1 minute video showcasing their tech model and the skills relevant to their chosen competition category, aligned with the given problem statement."
          icon={space}
          onExplore={() => navigate('/competitions')}
          disabled={false}
        />

        {/* Finale - Button Disabled */}
        <Card
          title="Finale"
          badgeText="Offline"
          description="Selected teams from the Qualifier Round will participate in the on site finale. They will compete or demonstrate their models relevant to their chosen competition category, in alignment with the given problem statement."
          icon={orbit}
          onExplore={() => { }}
          disabled={true}
        />
      </div>
    </div>
  );
}