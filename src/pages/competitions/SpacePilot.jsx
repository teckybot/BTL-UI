import React from 'react';
import Navbar from '../../components/Header';
import Footer from '../../components/Footer';
import drone from '../../data/images/img4.png';
import dronePDF from "../../data/pdfs/Space Pilot.pdf";
import droneMobile from "../../data/pdfs/DroneMobile.png";

export default function SpacePilot() {
  return (
    <>
      <Navbar />
      <section className="pt-[80px] bg-[#f7faff] flex flex-col lg:flex-row min-h-screen">
        {/* Left Image (Desktop only) */}
        <div className="w-full lg:w-80 shrink-0 hidden lg:block">
          <img
            src={drone}
            alt="Drone"
            className="w-full h-[90vh] object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="relative flex-1 px-4 sm:px-6 lg:px-6 overflow-hidden">
          {/* Mobile Hero Header Section (outside card) */}
          <div className="block md:hidden text-center px-6 mb-4">
            <h1 className="text-4xl font-bold uppercase bg-gradient-spacepilot bg-clip-text text-transparent mb-4">
              Space Pilot
            </h1>
            <div className="rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src={droneMobile}
                alt="Drone Mobile Hero"
                className="w-full object-cover"
              />
            </div>
            <a
              href={dronePDF}
              download="SPACE PILOT PROBLEM STATEMENT.pdf"
              className="bg-[#2053CA] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
            >
              DOWNLOAD PDF
            </a>
          </div>

          {/* Tablet/Desktop Header */}
          <div className="hidden md:flex justify-between items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold uppercase bg-gradient-spacepilot bg-clip-text text-transparent">
              Space Pilot
            </h1>
            <a href="/competitions" 
            className="md:mr-[-300px] bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition">BACK</a>
            <a
              href={dronePDF}
              download="SPACE PILOT PROBLEM STATEMENT.pdf"
              className="bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
            >
              DOWNLOAD PDF
            </a>
          </div>

          {/* Scrollable Card */}
          <div className="relative bg-white border border-gray-300 shadow-xl rounded-lg p-4 sm:p-6  md:p-[100px] sm:mb-[40px] md:mt-[-45px] max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#2053CA]/70 scrollbar-track-gray-200">
            <h2 className="text-base sm:text-lg font-bold text-blue-700 sm:mb-8">
              Qualifier Level (Online Submission)
            </h2>
            <p className="mb-4 text-sm sm:text-base text-justify">
              Mission: Become a space drone pilot.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700 text-justify">
              <li>Submit a video (max 2 minutes) showing:</li>
              <ul className="list-[circle] pl-5 mt-1 space-y-1">
                <li>Drone take-off, landing, left/right/forward/backward movement, 360° turn (if possible)</li>
                <li>A short explanation of drone specs</li>
              </ul>
              <li>Mention your name, school, and location in the video</li>
              <li>Include a short clip of your drone assembling</li>
              <li>Drone Size: Max 25 cm x 25 cm (including propellers)</li>
              <li>Video file name should be the Team ID (Example ID: APTDM001)</li>
              <li>Video file size should not be more than 30 MB</li>
              <li>
                Upload the video in: <a href="https://www.bharatteckleague.com/" target="_blank" rel="noreferrer" className="text-blue-700 underline">https://www.bharatteckleague.com/</a>
              </li>
            </ul>
            
            <p className="text-sm text-blue-700 font-semibold italic mb-6 text-justify">
              Note: Students who follow all the Guidelines in the Qualifier round will be selected for the Finale.
            </p>

            <hr className="my-6" />

            <h2 className="text-base sm:text-lg font-bold text-blue-700 mb-4">
              Finale Level (Offline Competition)
            </h2>
            <p className="mb-4 text-sm sm:text-base text-justify">Mission: Rescue Lost Space Problem Challenge.</p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700 text-justify">
              
              <li>Fly your drone through a challenging arena designed to resemble an interplanetary environment</li>
              <li>Navigate through multiple space-themed obstacles including tunnels, hoops, and turns</li>
              <li>Complete 2 laps, switching pilot/co-pilot if in 4-member team</li>
              <li>Judging: Precision, speed, obstacle avoidance, timing</li>
            </ul>

            <hr className="my-6" />

            <h2 className="text-base sm:text-lg font-bold text-blue-700 mb-4">
              Allowed Drone Models
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700 text-justify">
              <li><a href="https://amzn.to/3U5M1Ks" className="text-blue-700 underline" target="_blank" rel="noreferrer">Drone - 1</a></li>
              <li><a href="https://amzn.to/3IEWyK0" className="text-blue-700 underline" target="_blank" rel="noreferrer">Drone - 2</a></li>
              <li><a href="https://amzn.to/40HSbEi" className="text-blue-700 underline" target="_blank" rel="noreferrer">Drone - 3</a></li>
              <li><a href="https://amzn.to/40FafyU" className="text-blue-700 underline" target="_blank" rel="noreferrer">Drone - 4</a></li>
            </ul>

            <hr className="my-6" />

            <h2 className="text-base sm:text-lg font-bold text-blue-700 mb-4">
              Team Guidelines
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700 text-justify">
              <li>Each team must have a minimum of 2 and a maximum of 4 student members</li>
              <li>All members of the team must be from the same school</li>
              <li>A student can participate in only one category</li>
              <li>Teams must be mentored by a teacher/coordinator/school representative</li>
              <li>Once the team is registered, no modifications to team members are allowed at any level of the competition</li>
              <li>Teams must arrange their own materials, tools, and laptops as required</li>
            </ul>
            <p className="text-sm text-blue-700 font-semibold italic mt-4 text-justify">
              Note: For all competitions, follow size, weight, and software rules mentioned. Any violation may result in disqualification. Ensure all required items (laptop, model, materials) are carried by the participants. Power supply will be provided at the venue.
            </p>
          </div>
        </div>
      </section>

      {/* Footer only on mobile */}
      <div className="block md:hidden">
        <Footer />
      </div>
    </>
  );
}
