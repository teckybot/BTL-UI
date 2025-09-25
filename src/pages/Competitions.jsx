import React, { useState } from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import img11 from "../data/images/img1.png";
import img12 from "../data/images/img2.png";
import img13 from "../data/images/img3.png";
import img14 from "../data/images/img4.png";
import img15 from "../data/images/img5.png";
import mob11 from "../data/pdfs/AstrobotMobile.png";
import mob12 from "../data/pdfs/3DMakerMobile.png";
import mob13 from "../data/pdfs/DroneMobile.png";
import mob14 from "../data/pdfs/CodexMobile.png";
import mob15 from "../data/pdfs/InnoverseMobile.png";
import tdp from "../data/Tech zones/threeDPrinting.png";
import spl from "../data/Tech zones/spacelab.png";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import ComingSoonOverlay from "../components/ComingSoonOverlay";

const competitions = [
  { title: "ASTROBOT", image: img12, mobileImage: mob11 },
  { title: "3D MAKER", image: img13, mobileImage: mob12 },
  { title: "SPACE PILOT", image: img14, mobileImage: mob13 },
  { title: "CODEX", image: img15, mobileImage: mob14 },
  { title: "INNOVERSE", image: img11, mobileImage: mob15 },
];

// ✅ TECK ZONES component only
const TechZonesSection = () => {
  const [showOverlay, setShowOverlay] = React.useState(true);

  return (
    <section className="relative max-w-[1300px] mx-auto px-4 py-20 ">
      {/* Coming soon overlay */}
      {showOverlay && (
        <ComingSoonOverlay
          message="TECK ZONES COMING SOON"
          onClose={() => setShowOverlay(true)}
        />
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[rgba(0,4,78,1)] my-12">
        TECK ZONES
      </h2>

      <div className="space-y-10">
        {/* Card 1: Tecky Zone */}
        <div
          className="bg-white rounded-[20px] border border-gray-300 shadow-xl shadow-gray-400 flex flex-col md:flex-row overflow-hidden"
          style={{ border: "1px solid #16565F" }}
        >
          <img
            src={spl}
            alt="Tech Projects"
            className="w-full md:w-[26%] h-[220px] md:h-auto object-cover"
          />
          <div className="flex flex-col justify-between md:w-[80%] relative">
            <div className="p-6">
              <p className="font-poppins font-normal text-[20px] px-4 leading-[40px] tracking-normal text-gray-800 md:w-[95%]">
                Discover the vision of Teckybot in the Teckybot Zone, where
                innovation meets creativity. Showcasing cutting-edge Industry
                4.0 technologies like Robotics, IoT, and AI, this space offers
                a glimpse into the future with impactful, accessible solutions
                for all.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#0E265F] to-[#307DE3] px-8 py-6 text-white font-semibold text-[16px] md:text-center md:text-[30px] rounded-br-xl">
              Tecky Zone
            </div>
          </div>
        </div>

        {/* Card 2: 3D Printing */}
        <div
          className="bg-white rounded-[20px] shadow-xl shadow-gray-400 border border-gray-300 flex flex-col md:flex-row-reverse overflow-hidden border-shadow-md"
          style={{ border: "1px solid #16565F" }}
        >
          <img
            src={tdp}
            alt="AI Workshop"
            className="w-full md:w-[26%] h-[220px] md:h-auto object-cover"
          />
          <div className="flex flex-col justify-between md:w-[80%] relative">
            <div className="p-6">
              <p className="font-poppins font-normal text-[20px] px-4 leading-[40px] tracking-normal text-gray-800 md:w-[95%]">
                Discover the fascinating world of 3D printing at the 3D Zone.
                Here, you'll find 3D printers and a variety of 3D printed
                objects that showcase applications across different domains. See
                how 3D printing is transforming industries and sparking new
                possibilities.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#0E265F] to-[#307DE3] px-8 py-6 text-white font-semibold text-[16px] md:text-center md:text-[30px] rounded-bl-xl text-left">
              3D Printing Zone
            </div>
          </div>
        </div>

        {/* Card 3: Space Lab */}
        <div
          className="bg-white rounded-[20px] shadow-xl shadow-gray-400 flex flex-col md:flex-row overflow-hidden"
          style={{ border: "1px solid #16565F" }}
        >
          <img
            src={spl}
            alt="Robotic Demos"
            className="w-full md:w-[26%] h-[220px] md:h-auto object-cover"
          />
          <div className="flex flex-col justify-between md:w-[80%] relative">
            <div className="p-6">
              <p className="font-poppins font-normal text-[20px] px-4 leading-[40px] tracking-normal text-gray-800 md:w-[95%]">
                Space Lab is an immersive showcase of space exploration,
                featuring detailed displays of satellites, rocket mockups, and
                other space-related innovations. It offers a hands-on glimpse
                into the wonders of aerospace technology and discovery.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#0E265F] to-[#307DE3] px-8 py-6 text-white font-semibold text-[16px] md:text-center md:text-[30px] rounded-br-xl">
              Space Lab
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function DummyCompetitions() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <>
      <Helmet>
        <title>
          Student Competitions – Robotics, AI, Drone & More | BTL India
        </title>
        <meta
          name="description"
          content="Explore exciting student competitions at Bharat Teck League 2025! Compete in Robotics, AI, Drone & more. Organized by Teckybot. Register now!"
        />
      </Helmet>

      <Navbar />

      <div className="pt-[60px] flex flex-col min-h-screen">
        <div className="flex-1">
          {/* Desktop Title */}
          <div className="relative">
            {/* Faded Background Text */}
            <div className="hidden md:flex relative items-end justify-center">
              <div className="absolute bottom-[-150px] md:bottom-[-200px] lg:bottom-[-265px] flex justify-center items-end w-full pointer-events-none z-0">
                <h1 className="text-[80px] md:text-[120px] lg:text-[200px] font-extrabold uppercase text-gray-300 opacity-30 select-none tracking-widest leading-none">
                  {competitions[hoveredIndex]?.title}
                </h1>
              </div>
            </div>

            {/* Foreground Title */}
            <div className="relative z-10 text-center">
              <h1
                className={`hidden sm:block text-[40px] md:mb-[-10px] md:mt-[60px] sm:text-[60px] md:text-[70px] lg:text-[90px] 
                  font-[500] uppercase tracking-normal leading-none 
                  bg-clip-text text-transparent 
                  transition-all duration-300
                  ${
                    {
                      "3D MAKER": "bg-gradient-3dmaker",
                      "SPACE PILOT": "bg-gradient-spacepilot",
                      CODEX: "bg-gradient-codex",
                      INNOVERSE: `bg-gradient-innoverse ${
                        window.innerWidth < 640 ? "hidden" : ""
                      }`,
                      ASTROBOT: "bg-gradient-astrobot",
                    }[competitions[hoveredIndex]?.title]
                  }`}
              >
                {competitions[hoveredIndex]?.title}
              </h1>
            </div>
          </div>

          {/* Desktop Cards */}
          <div className="hidden md:flex w-full h-[calc(100vh-180px)] overflow-hidden">
            {competitions.map((comp, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={`relative group transition-all duration-300 cursor-pointer w-1/5 ${
                  hoveredIndex === idx ? "opacity-100" : "opacity-50"
                }`}
              >
                <Link
                  to={`/competitions/${
                    comp.title === "ASTROBOT"
                      ? "robotics"
                      : comp.title.toLowerCase().replace(/\s+/g, "-")
                  }`}
                >
                  <img
                    src={comp.image}
                    alt={comp.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </Link>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to={`/competitions/${
                      comp.title === "ASTROBOT"
                        ? "robotics"
                        : comp.title.toLowerCase().replace(/\s+/g, "-")
                    }`}
                  >
                    <button className="bg-white/80 hover:bg-white text-gray-800 font-semibold py-2 px-5 rounded-full text-sm shadow-lg">
                      Details →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="block md:hidden px-4 max-w-md mx-auto mb-10">
            <h2 className="text-center mb-6 mt-6 text-[32px] font-bold uppercase tracking-wide bg-gradient-to-b from-black to-white bg-clip-text text-transparent">
              Competitions
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {competitions.map((comp, idx) => (
                <Link
                  key={idx}
                  to={`/competitions/${
                    comp.title === "ASTROBOT"
                      ? "robotics"
                      : comp.title.toLowerCase().replace(/\s+/g, "-")
                  }`}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={comp.mobileImage}
                      alt={comp.title}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#000000b0] to-[#00000020] p-3 rounded-br-2xl rounded-tl-xl">
                      <span className="text-white text-[15px] font-semibold tracking-wide">
                        {comp.title}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Only TECK ZONES */}
        <TechZonesSection />
      </div>

      <Footer />
    </>
  );
}
