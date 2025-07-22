import React from "react";
import starBullet from "../data/Naso/Star 5.png";
import bgImage from "../data/Naso/Star 5.png";
import Nasoimg from "../data/Naso/tempImageE0obcq 1.png";
import Footer from "../components/Footer";
// Import your decorative icons (replace with your actual paths)
import icon1 from "../data/Naso/astronaut 1 (1).png";
import icon2 from "../data/Naso/constellation 2.png";
import icon3 from "../data/Naso/planet 1.png";
import icon4 from "../data/Naso/rocket 2.png";
import icon5 from "../data/Naso/satellite 1.png";
import icon6 from "../data/Naso/star 5 (1).png";


export default function NasoInfoCard() {
  return (
    <>
      <div className="relative"> {/* Added relative container for absolute positioning */}
        {/* Decorative Icons - Positioned absolutely */}
        <div className="hidden md:block">
          <img src={icon1} alt="" className="absolute w-30 h-[140px] bottom-10 right-0 opacity-100" />
          <img src={icon1} alt="" className="absolute w-30 h-[140px] top-[550px] left-[-20px] opacity-100" />
          <img src={icon2} alt="" className="absolute w-30 h-[140px] bottom-[-100px] left-0 opacity-100" />
          <img src={icon1} alt="" className="absolute w-30 h-[140px] top-[450px] left-[700px] opacity-100" />
          <img src={icon3} alt="" className="absolute w-30 h-[140px] bottom-[-40px] left-[500px] opacity-100" />
          <img src={icon3} alt="" className="absolute w-30 h-[140px] top-40 right-0 opacity-100" />
          <img src={icon4} alt="" className="absolute w-20 h-20 top-20 left-10 opacity-100" />
          <img src={icon5} alt="" className="absolute w-30 h-[100px] top-20 left-[700px] opacity-100" />
          <img src={icon6} alt="" className="absolute w-30 h-[60px] top-[500px] right-16 opacity-100" />
        </div>
        <div
          className="flex flex-col md:flex-row p-4 md:p-6 md:mb-12 bg-cover bg-no-repeat relative z-10"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 md:ml-[80px] md:mt-[80px] mt-[80px] shadow-lg">
            <img
              src={Nasoimg}
              alt="NASO Poster"
              className="w-full h-auto rounded-3xl md:rounded-[50px]"
            />
          </div>

          {/* Right Side - Content */}
          <div
            className="w-full md:w-1/2 text-white p-4 md:p-6 rounded-3xl md:rounded-[50px] shadow-lg  md:ml-14 md:mr-[80px] md:mt-[80px] mt-6 relative z-10"
            style={{
              background: "linear-gradient(180deg, #091134 0%, #2A6DC8 100%)",
            }}
          >
            <ul className="space-y-4 md:space-y-8">
              {[
                "NASO is conducted in two levels – a school-level round and a national-level round.",
                "Students from Grades 2 to 10 are eligible and the exam is based on their respective class-level science and astronomy syllabus.",
                "NASO offers various competitions and activities like coding challenges, celestial clock building, workshops, and quizzes.",
                "All participants receive certificates, while top performers win medals, telescopes, ISRO visits, and even a NASA trip.",
                "NASO is officially partnered with ISRO and accredited by STEM.ORG, making its certification globally recognized.",
              ].map((point, idx) => (
                <li key={idx} className="flex flex-col space-y-2 md:space-y-3">
                  <hr
                    className="border-0 h-[2px] bg-gradient-to-l from-white/50 via-white/30 to-transparent"
                  />
                  <div className="flex items-start pt-2 md:pt-6">
                    <img src={starBullet} alt="star" className="w-4 h-4 md:w-5 md:h-5 mt-1 mr-2" />
                    <p className="text-base md:text-[20px] leading-relaxed">{point}</p>
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