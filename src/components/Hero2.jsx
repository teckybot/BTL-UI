import spaceDesktop from '../data/All/BTL_Home.jpg';
import spaceMobile from '../data/All/galaxy-night-mobile.png';
import logo from '../data/All/BTL2025_logo.png';
import BTL_LOGO from "../data/All/BTL2025_logo.png";
import teckybotLogo from '../data/All/Teckybot TM_Inv.png';

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
          <div className="flex flex-col items-center lg:items-start mb-10 lg:mb-0 -mt-20 md:mt-16">
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
          <div className="hidden lg:block absolute bottom-80 right-[38%] text-left">
            <p className="text-white text-base font-light">Powered by</p>
            <div className="flex items-center gap-3 mt-2">
              <img
                src={teckybotLogo}
                alt="Teckybot Logo"
                className="w-[230px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Teckybot Section for Mobile  */}
          <div className="block lg:hidden absolute bottom-[34%] left-1/2 -translate-x-1/2 text-center z-10">
            <p className="text-white text-base font-light">Powered by</p>
            <div className="flex items-center justify-center gap-3 mt-2">
              <img
                src={teckybotLogo}
                alt="Teckybot Logo"
                className="w-[150px] h-auto object-contain"
              />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}