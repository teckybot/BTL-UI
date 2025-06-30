import React from "react";
import Footer from "../components/Footer";
import bgImageDesktop from '../data/about2.png';
import bgImageMobile from '../data/about_mobile.png';
import { BsRocket, BsGlobe } from 'react-icons/bs';

export default function Aboutus() {
  return (
    <>
      {/* ---------- DESKTOP / TABLET VERSION (md & up) ---------- */}
      <div className="hidden md:block relative min-h-screen bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImageDesktop}
            alt="Earth from space"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center">
          <h1
            className="text-center mt-10 font-bold uppercase shadow-md"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '96px',
              lineHeight: '100%',
              letterSpacing: '0%',
              background: 'linear-gradient(270deg, #93AFC2 0%, #FFFFFF 50%, #93AFC2 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
            }}
          >
            BHARAT TECK LEAGUE 2025
          </h1>


          <div className="mt-[250px] bg-white/5 backdrop-blur-[10px] p-6 md:p-8 rounded-2xl border border-white/20 text-base md:text-lg text-gray-100 leading-relaxed shadow-xl">
            <p>
              Bharat Tech League (BTL) is a national initiative by Teckybot that fosters innovation, creativity, and technical skills among young minds across India. Through a series of engaging competitions conducted across various states, BTL provides a dynamic platform for students
              to explore emerging technologies, showcase their talents, and develop problem-solving abilities.
            </p>
            <br />
            <p>
              BTL is more than just a competition—it's a celebration of learning, collaboration, and the limitless potential of young innovators in the world of technology. This year, Bharat Tech League (BTL) has expanded its reach, hosting competitions in multiple regions across the country. By uniting students from diverse backgrounds and cultures, BTL continues to nurture a vibrant community of young tech enthusiasts and changemakers nationwide.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- MOBILE VERSION (sm only) ---------- */}
      <div className="block md:hidden relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImageMobile}
            alt="BTL Mobile Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 px-4 py-16 max-w-md mx-auto text-center">
          <h1 className="text-3xl mt-[130px] font-extrabold tracking-wider uppercase text-white">
            BTL 2025
          </h1>

          <div className="mt-[270px] bg-white/10 p-4 rounded-xl text-sm leading-relaxed text-gray-100 shadow-md border border-white/10">
            <p>
              Bharat Tech League (BTL) by Teckybot is a national initiative that nurtures innovation and technical skills among young minds through engaging competitions across India. It offers a platform to explore emerging technologies and solve real-world problems. This year, BTL expanded nationwide, uniting diverse students and celebrating the spirit of learning and collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- LEVELS OF PARTICIPATION SECTION ---------- */}
      <div
        className="relative text-center text-black py-[140px] px-4"
        style={{
          background: 'radial-gradient(97.27% 97.27% at 50% 0%, #F5F8FF 47.23%, #307DE3 67.54%, #2054CC 76.56%, #112481 100%)',
        }}
      >
        {/* Large background LEVEL text */}
        <h1
          className="
    absolute
    text-[#1369C1]/10
    select-none
    pointer-events-none
    font-bold
    uppercase
    leading-none
    text-[230px]
    md:text-[300px]
    lg:text-[500px]
    font-poppins
    mt-[80px]
    whitespace-pre
    sm:whitespace-normal
    text-left

    left-0
    sm:left-1/2
    sm:transform
    sm:-translate-x-1/2
    pl-4
  "
        >
          <span className="block sm:hidden">L{'\n'}E{'\n'}V{'\n'}E{'\n'}L</span>
          <span className="hidden sm:inline">LEVEL</span>
        </h1>



        <h2 className="relative z-10 mt-[-20px] md:text-[86px] font-extrabold text-[#112481] tracking-wide mb-16 uppercase">
          Levels of Participation
        </h2>

        <div className="relative z-10 mt-[140px] flex flex-col lg:flex-row items-center justify-center gap-[250px] max-w-6xl mx-auto">
          {/* Qualifier Card */}
          <div className="bg-white rounded-3xl p-[50px] w-[330px] md:w-[400px] shadow-xl text-left relative">
            <div className="flex justify-between items-start mb-4">
              <div className="text-3xl text-blue-500">
                <BsGlobe />
              </div>
              <span className="bg-[#1939A3] text-white text-sm px-3 py-1 rounded-full font-semibold">
                Online
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-1">Level</p>
            <h3 className="text-2xl font-bold mb-3">Qualifier</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Each team must submit a 1-minute video showcasing their tech model and the skills
              relevant to their chosen competition category, aligned with the given problem statement.
            </p>

            <div className="absolute bottom-[-20px] left-[-2px] w-10 h-10 rounded-full bg-[#1A3EAD] text-white font-bold flex items-center justify-center text-sm shadow-lg">
              1
            </div>
          </div>

          {/* Finale Card */}
          <div className="bg-white rounded-3xl p-[50px] w-[330px] md:w-[400px] shadow-xl text-left relative">
            <div className="flex justify-between items-start mb-4">
              <div className="text-3xl p-[-20px] text-blue-500">
                <BsRocket />
              </div>
              <span className="bg-[#1939A3] text-white text-sm px-3 py-1 rounded-full font-semibold">
                Offline
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-1">Level</p>
            <h3 className="text-2xl font-bold mb-3">Finale</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Selected teams from the Qualifier Round will participate in the on-site finale. They will compete or demonstrate their models in alignment with the given problem statement.
            </p>

            <div className="absolute bottom-[-20px] left-[-2px] w-10 h-10 rounded-full bg-[#1A3EAD] text-white font-bold flex items-center justify-center text-sm shadow-lg">
              2
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Footer ---------- */}
      <Footer />
    </>
  );
}
