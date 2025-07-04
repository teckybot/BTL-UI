import React from "react";
import bgImageDesktop from '../data/home_hero.png';
import bgImageMobile from '../data/home_hero.png';

export default function Aboutus() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImageDesktop}
          alt="Earth from space"
          className="hidden md:block w-full h-top object-cover"
        />
        <img
          src={bgImageMobile}
          alt="Earth from space"
          className="md:hidden w-full h-top object-cover"
        />
        {/* <div
  className="absolute inset-0 z-10"
  style={{
    background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.53) 60%, rgba(0, 0, 0, 0.62) 100%)',
    pointerEvents: 'none', // So clicks go through if needed
  }}
></div> */}

      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-16 pb-20 mt-16 sm:mt-16">
        {/* Main Heading */}
        <h1
          className="uppercase font-bold"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            lineHeight: '1.1',
            color: 'white',
            textShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)',
          }}
        >
          BHARAT TECK LEAGUE 2025
        </h1>

        {/* 🌌 Spacer like in your image */}
        <div className=" md:h-32 lg:h-[170px] xl:h-45 h-[350px]"></div>

        {/* Sub Content */}
        <div className="max-w-3xl w-full">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-12 font-poppins leading-tight mb-6">
            The Future of Space <br className="hidden sm:block" /> Starts with You
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 px-4">
            Fun, hands-on competition for young minds, passionate about space, science, and engineering.
          </p>

          <a
            href="#event"
            className="inline-block px-5 py-2 md:px-3 md:py-2 font-poppins text-white font-medium lg:text-[13px] md:text-base rounded-full shadow-md hover:opacity-80 transition duration-300"
            style={{
              background: 'radial-gradient(60.83% 66.41% at 51.25% 105.71%, #185FFF 0%, #5989FF 100%)'
            }}
          >
            Explore more
          </a>
        </div>
      </div>
    </div>
  );
}
