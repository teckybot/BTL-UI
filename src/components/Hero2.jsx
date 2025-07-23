import spaceDesktop from '../data/All/BTL_Home.jpg';
import spaceMobile from '../data/All/galaxy-night-mobile.png';
import logo from '../data/All/BTL2025_logo.png';
import BTL_LOGO from "../data/All/BTL2025_logo.png";
import teckybotLogo from '../data/All/Teckybot TM_Inv.png';
import FunscholarLogo from '../data/All/funscholar.jpg';

export default function HeroWithLogoAndTagline() {
  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      {/* Background images (Responsive) */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center md:block hidden" style={{ backgroundImage: `url(${spaceDesktop})` }} />
      <div className="absolute inset-0 -z-10 bg-cover bg-center md:hidden block" style={{ backgroundImage: `url(${spaceMobile})` }} />

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center h-full px-4 md:px-10 lg:pl-24 xl:pl-36 mt-[-40px]">

        {/* Container for BTL and Teckybot sections. Flex column on mobile, flex row on large screens. 
            Ensures the layout matches the image and is responsive. */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between w-full max-w-[1200px]">

          {/* BTL Logo and Tagline Section */}
          <div className="flex flex-col items-center lg:items-start mb-10 md:ml-[-100px]  lg:mb-0 -mt-72 md:mt-16">
            {/* BTL Logo */}
            <img
              src={logo}
              alt="Bharat Teck League Logo"
              className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[400px] h-auto select-none"
              style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
            />
          </div>

          {/* Powered by Teckybot Section */}
          {/* Teckybot Section for Desktop */}
          <div className="hidden lg:block absolute bottom-[340px] right-[45%] text-left">
            <p className="text-white text-lg pl-14 font-light">Powered by</p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://teckybot.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={teckybotLogo}
                  alt="Teckybot Logo"
                  className="w-[250px] h-auto object-contain cursor-pointer"
                />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block absolute bottom-[355px] right-[26%] text-left">
            <p className="text-white text-lg pl-14 font-light">Proud Partner</p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://funscholar.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={FunscholarLogo}
                  alt="Teckybot Logo"
                  className="w-[250px] h-auto object-contain cursor-pointer"
                />
              </a>
            </div>
          </div>
         
          {/* Teckybot Section for Mobile  */}
          <div className="block lg:hidden absolute bottom-[48%] left-1/2 -translate-x-1/2 text-center z-10">
            <p className="text-white text-base font-light">Powered by</p>
            <div className="flex items-center justify-center gap-3 mt-2">
              <a href="https://teckybot.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={teckybotLogo}
                  alt="Teckybot Logo"
                  className="w-[150px] h-auto object-contain cursor-pointer"
                />
              </a>
            </div>
          </div>
          <div className="block lg:hidden absolute bottom-[36%] left-1/2 -translate-x-1/2 text-center z-10">
            <p className="text-white text-base font-light">Proud Partner</p>
            <div className="flex items-center justify-center gap-3 mt-2">
              <a href="https://funscholar.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={FunscholarLogo}
                  alt="Teckybot Logo"
                  className="w-[150px] h-auto object-contain cursor-pointer"
                />
              </a>
            </div>
          </div>

          {/* marque */}
          <div className="absolute top-[75%] md:top-[88%] left-0 w-screen overflow-hidden group">
            <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
              {Array.from({ length: 50 }).map((_, idx) => (
                <div
                  key={`1-${idx}`}
                  className="h-[50px] flex items-center justify-center px-6 text-black font-semibold text-sm sm:text-base flex-shrink-0"
                  style={{
                    backgroundColor: '#d1d1d1',
                    clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)',
                  }}
                >
                  Bharat Teck League 2025 - A National Wide Event  - Open to Students of Classes 6–10
                </div>
              ))}
              {Array.from({ length: 50 }).map((_, idx) => (
                <div
                  key={`2-${idx}`}
                  className="h-[50px] flex items-center justify-center px-6 text-black font-semibold text-sm sm:text-base flex-shrink-0 mx-2"
                  style={{
                    backgroundColor: '#d1d1d1',
                    clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)',
                  }}
                >
                  Bharat Teck League 2025 - A National Wide Event  - Open to Students of Classes 6–10
                </div>
              ))}
            </div>
          </div>

          <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 10s linear infinite;
              }
            `}</style>


        </div>
      </div>
    </div>
  );
}