import React from "react";
import "../data/stars.css"; // CSS for star animation
import astronaut from "../data/astrounut.svg"; // Astronaut SVG

export default function ComingSoon() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-poppins">
      {/* Animated stars background */}
      <div className="stars" />
      <div className="twinkling" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg tracking-wide">
          BHARAT TECK LEAGUE 2025
        </h1>

        <h2 className="text-xl md:text-3xl font-semibold mb-4 text-blue-300 tracking-wider">
          🚀 Coming Soon
        </h2>

        <p className="text-base md:text-lg text-white/90 max-w-xl mb-6">
          Registrations open on <span className="text-yellow-400 font-bold">15/06/2025</span>
        </p>

        <p className="text-sm md:text-base text-gray-300 max-w-xl mb-10">
          Get ready for an interstellar competition blending science, tech & imagination. Prepare to launch!
        </p>

        {/* Optional Astronaut SVG */}
        <img src={astronaut} alt="Astronaut" className="w-32 mt-12 animate-bounce" />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
    </div>
  );
}
