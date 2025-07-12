
import spaceDesktop from '../data/All/BTL_Home.jpg';
import spaceMobile from '../data/All/galaxy-night-mobile.png';
import logo from '../data/All/BTL2025_logo.png';

export default function HeroWithLogoAndTagline() {
  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cover bg-center md:block hidden" style={{ backgroundImage: `url(${spaceDesktop})` }} />
      <div className="absolute inset-0 -z-10 bg-cover bg-center md:hidden block" style={{ backgroundImage: `url(${spaceMobile})` }} />

      <div className="flex flex-col items-center md:items-center lg:items-start justify-center h-full px-4 md:px-10 lg:pl-24 xl:pl-36 mt-[-40px]">

        <img
          src={logo}
          alt="Bharat Teck League Logo"
          className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[400px] h-auto select-none md:mt-8 md:ml-48"
          style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
        />

        <div
          className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[40px] xl:text-[40px] xl:ml-6 font-light text-white text-center md:text-center lg:text-left tracking-wide"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          The Future of Space Starts with You
        </div>
      </div>
    </div>
  );
}
