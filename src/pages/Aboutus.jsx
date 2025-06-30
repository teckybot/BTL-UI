import React from "react";
import Footer from "../components/Footer";
import bgImageDesktop from '../data/about2.png'; // for md & lg
import bgImageMobile from '../data/about_mobile.png'; // use your mobile image

export default function Aboutus() {
  return (
    <>
      {/* ---------- DESKTOP / TABLET VERSION (md & up) ---------- */}
      <div className="hidden md:block relative min-h-screen bg-black text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImageDesktop}
            alt="Earth from space"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl mt-10 md:text-6xl font-extrabold tracking-wider text-white uppercase">
            BHARAT TECK LEAGUE 2025
          </h1>

          {/* Description Box */}
          <div className="mt-[250px] bg-white/5 backdrop-blur-[10px] p-6 md:p-8 rounded-2xl border border-white/20 text-base md:text-lg text-gray-100 leading-relaxed shadow-xl">
            <p>
              Bharat Tech League (BTL) is a national initiative by Teckybot that fosters innovation, creativity, and technical skills among young minds across India. Through a series of engaging competitions conducted across various states, BTL provides a dynamic platform for students
              to explore emerging technologies, showcase their talents, and develop problem-solving abilities.

            </p>
            <br />
            <p>
              BTL is more than just a competition—it's a celebration of learning, collaboration, and the limitless potential of young innovators in the world of technology.
            </p><br />
            <p>This year, Bharat Tech League (BTL) has expanded its reach, hosting competitions in multiple regions across the country. By uniting students from diverse backgrounds and cultures, BTL continues to nurture a vibrant community of young tech enthusiasts and changemakers nationwide.</p>
          </div>
        </div>
      </div>

      {/* ---------- MOBILE VERSION (sm only) ---------- */}
      <div className="block md:hidden relative bg-black text-white">
        {/* Mobile Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImageMobile}
            alt="BTL Mobile Banner"
            className="w-full h-full object-cover"
          />

        </div>

        {/* Mobile Foreground Content */}
        <div className="relative z-10 px-4 py-16 max-w-md mx-auto text-center">
          <h1 className="text-3xl mt-[150px] font-extrabold tracking-wider uppercase text-white">
            BTL 2025
          </h1>

          <div className="mt-[350px] bg-white/10 p-4 rounded-xl text-sm leading-relaxed text-gray-100 shadow-md border border-white/10">
            <p>
              Bharat Tech League (BTL) by Teckybot is a national initiative that nurtures innovation and technical skills among young minds through engaging competitions across India. It offers a platform to explore emerging technologies and solve real-world problems. This year, BTL expanded nationwide, uniting diverse students and celebrating the spirit of learning and collaboration.
            </p>
          </div>
        </div>
      </div>

      

      {/* ---------- Footer ---------- */}
      <Footer />
    </>
  );
}
