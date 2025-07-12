import React, { useState } from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import img11 from "../data/images/img1.png";
import img12 from "../data/images/img2.png";
import img13 from "../data/images/img3.png";
import img14 from "../data/images/img4.png";
import img15 from "../data/images/img5.png";
import { Link } from 'react-router-dom';
import ComingSoon from '../components/comingsoon'

const competitions = [
  { title: "ASTROBOT", image: img12 },
  { title: "3D MAKER", image: img13 },
  { title: "SPACE PILOT", image: img14 },
  { title: "CODEX", image: img15 },
  { title: "INNOVERSE", image: img11 },
];


export default function Competitions() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <>
      <Navbar />

      {/* Make full page flex column */}
      <div className="pt-[110px] flex flex-col min-h-screen">
        {/* Main Content */}
        <div className="flex-1">
          {/* Desktop Title */}
          {/* Desktop Title with Background Text */}
          <div className="hidden md:flex relative  items-end justify-center">
            {/* Faded Background Text */}
            <div className="absolute bottom-[-25px] flex justify-center items-end w-full pointer-events-none">
              <h1 className="text-[200px] font-extrabold uppercase text-gray-300 opacity-30 select-none tracking-widest leading-none">
                {competitions[hoveredIndex]?.title}
              </h1>
            </div>
            <div className="text-[90px]">
              {/* Foreground Title */}
              <h1
                className={`text-[90px] font-[500] uppercase tracking-normal leading-none inline-block bg-clip-text text-transparent transition-all duration-300
                ${{
                    "3D MAKER": "bg-gradient-3dmaker",
                    "SPACE PILOT": "bg-gradient-spacepilot",
                    "CODEX": "bg-gradient-codex",
                    "INNOVERSE": "bg-gradient-innoverse",
                    "ASTROBOT": "bg-gradient-astrobot",
                  }[competitions[hoveredIndex]?.title]
                  }
                `}
              >
                {competitions[hoveredIndex]?.title}
              </h1>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex w-full h-[calc(100vh-180px)] overflow-hidden">
            {competitions.map((comp, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={`relative group transition-all duration-300 cursor-pointer w-1/5 ${hoveredIndex === idx ? "opacity-100" : "opacity-50"
                  }`}
              >
                {comp.title === "ASTROBOT" ? (
                  <Link to="/competitions/robotics">
                    <img
                      src={comp.image}
                      alt={comp.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </Link>
                ) : (
                  <Link to={`/competitions/${comp.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <img
                      src={comp.image}
                      alt={comp.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </Link>
                )}
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {comp.title === "ASTROBOT" ? (
                    <Link to="/competitions/robotics">
                      <button className="bg-white/80 hover:bg-white text-gray-800 font-semibold py-2 px-5 rounded-full text-sm shadow-lg">
                        Details →
                      </button>
                    </Link>
                  ) : (
                    <Link to={`/competitions/${comp.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <button className="bg-white/80 hover:bg-white text-gray-800 font-semibold py-2 px-5 rounded-full text-sm shadow-lg">
                        Details →
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden px-4 max-w-md mx-auto mb-6">
            <h2
              className="text-center mb-6 inline-block w-full"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                background: 'linear-gradient(180deg, #1D1D1D 40.38%, #FFFFFF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              COMPETITIONS
            </h2>

            <div className="space-y-6">
              {competitions.map((comp, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={comp.image}
                    alt={comp.title}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="absolute bottom-3 right-3 bg-gradient-to-r from-gray-700/70 to-gray-500/70 text-white text-sm font-semibold px-4 py-1 rounded-full backdrop-blur-sm">
                    {comp.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </>

  );
}
