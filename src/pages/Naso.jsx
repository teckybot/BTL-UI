import React from "react";
import starBullet from "../data/Naso/Star 11.png";
import Nasodesktop from "../data/Naso/tempImageQM2NtT 1 (1).png";
import Nasomobile from "../data/Naso/naso_poster(1).jpg";
import Footer from "../components/Footer";

import icon1 from "../data/Naso/astronaut 1 (1).png";
import icon2 from "../data/Naso/constellation 2.png";
import icon3 from "../data/Naso/planet 1.png";
import icon4 from "../data/Naso/rocket 2.png";
import icon5 from "../data/Naso/satellite 1.png";
import icon6 from "../data/Naso/star 5 (1).png";

export default function NasoInfoCard() {
  return (
    <>
      <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
        {/* Decorative Icons (only visible on desktop) */}
        <div className="hidden md:block">
          <img
            src={icon1}
            className="absolute w-24 h-28 top-20 left-10"
            alt=""
          />
          <img
            src={icon1}
            className="absolute w-24 h-28 top-[1300px] right-10"
            alt=""
          />
          <img
            src={icon2}
            className="absolute w-20 h-20 bottom-10 left-10"
            alt=""
          />
          <img
            src={icon4}
            className="absolute w-16 h-16 bottom-[1300px] left-10"
            alt=""
          />
          <img
            src={icon3}
            className="absolute w-24 h-24 top-1/3 right-10"
            alt=""
          />
          <img
            src={icon3}
            className="absolute w-24 h-24 top-[1500px] left-10"
            alt=""
          />
          <img
            src={icon4}
            className="absolute w-16 h-16 top-24 left-1/2"
            alt=""
          />
          <img
            src={icon5}
            className="absolute w-20 h-20 bottom-20 right-8"
            alt=""
          />
          <img
            src={icon5}
            className="absolute w-20 h-20 top-[1100px] left-8"
            alt=""
          />
          <img
            src={icon6}
            className="absolute w-12 h-12 top-[500px] right-16"
            alt=""
          />
        </div>

        {/* Main Column Layout - always column */}
        <div className="flex flex-col mt-16 p-4 md:p-10 gap-8 items-center relative z-10">
          {/* Poster Image (responsive) */}
          <div className="w-full max-w-7xl flex flex-col items-center">
            <img
              src={Nasodesktop}
              alt="NASO Poster"
              className="hidden md:block w-full h-auto rounded-[30px] shadow-lg"
            />
            <img
              src={Nasomobile}
              alt="NASO Poster Mobile"
              className="md:hidden w-full h-auto rounded-xl shadow-lg"
            />
            <a
              href={Nasodesktop}
              download="NASO_Poster.jpg"
              className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 
              text-white text-sm md:text-base font-semibold rounded-lg 
              shadow-md hover:scale-105 hover:shadow-lg transition"
            >
              Download Poster
            </a>
          </div>

          {/* Info Content (stacked below image) */}
          <div
            className="w-full max-w-7xl text-white md:p-20 p-6 pt-12 rounded-3xl shadow-lg"
            style={{
              background: "linear-gradient(180deg, #091134 0%, #2A6DC8 100%)",
            }}
          >
            <ul className="space-y-4">
              {[
                {
                  title: "Dates",
                  desc: "Level I will be conducted online on September 6 & 7, based on the slot assigned to each participant.",
                },
                {
                  title: "Format",
                  desc: "The test comprises 50 multiple-choice questions to be completed in 60 minutes.",
                },
                {
                  title: "Syllabus",
                  desc: "Questions will be based on core concepts of Science and Astronomy.",
                },
                {
                  title: "Results",
                  desc: "Level I results will be announced at the prestigious Bharat Tech League 2025 event.",
                },
                {
                  title: "Level II",
                  desc: "Qualified students will move on to Level II, scheduled for February 2026.",
                },
                {
                  title: "Recognition",
                  desc: "All participants will receive a Participation Certificate, with exciting prizes and awards for top performers.",
                },
                {
                  title: "Accreditation",
                  desc: "NASO is the official space tutor partner of ISRO and is accredited by STEM.ORG, making its certification globally recognised.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <img
                    src={starBullet}
                    alt="star"
                    className="w-5 h-5 mt-1 mr-2 flex-shrink-0"
                  />
                  <div>
                    <p className="text-base md:text-[20px] font-semibold">
                      {item.title} :
                    </p>
                    <p className="text-base md:text-[18px] font-light  -mt-4 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
