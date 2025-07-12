import React from "react";
import bgImageDesktop from '../data/All/home_hero.png';

import bgImageMobile from '../data/All/heromobile.png'; // Replace if mobile image differs

export default function Aboutus() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      
      {/* 🌌 Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <img
          src={bgImageDesktop}
          alt="Earth from space"
          className="hidden md:block w-full h-full  object-cover"
        />
        {/* Mobile Image */}
        <img
          src={bgImageMobile}
          alt="Earth from space"
          className="md:hidden w-full h-full object-cover"
        />

        {/* Optional: Gradient Overlay to improve text visibility on mobile */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10 md:hidden" /> */}
      </div>

      {/* 🚀 Content Section */}
      <div className="relative z-20 flex flex-col justify-center px-6 pt-20 pb-20 mt-16 sm:mt-16 
                      items-start text-left md:items-center md:text-center">

        {/* 📱 Mobile Heading - stacked + left aligned */}
        <div className="block md:hidden w-full">
          <h1
            className="flex flex-col space-y-3 pt-[45px] text-left"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '1.2',
              letterSpacing: '0%',
              background: 'linear-gradient(270deg, #A8DCFF 0%, #FFFFFF 50%, #A8DCFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            <span>BHARAT</span>
            <span>TECK</span>
            <span>LEAGUE</span>
            <span>2025</span>
          </h1>
        </div>

        {/* 💻 Desktop Heading - single line + centered */}
        <div className="hidden mt-[-70px] md:block">
          <h1
            className="uppercase font-bold"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              lineHeight: '1.5',
              color: 'white',
              textShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)',
            }}
          >
            BHARAT TECK LEAGUE 2025
          </h1>
        </div>

        {/* 🌠 Spacer */}
        <div className="h-20 sm:h-28 md:h-[300px] lg:h-[250px] xl:h-45" />

        {/* 📝 Sub Content */}
        <div className="max-w-3xl w-full text-center md:text-center ">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-4 font-poppins leading-tight mb-6">
            The Future of Space <br className="hidden sm:block" /> Starts with You
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 pr-4 sm:pr-0">
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
