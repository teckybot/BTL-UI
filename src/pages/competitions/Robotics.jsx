import React, { useState } from "react";           // 1
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import roboticsImg from "../../data/images/img2.png";
import robotDimensions from "../../data/pdfs/astrobot.png";
import astrobotPDF from "../../data/pdfs/Astrobot.pdf";
import astrobotmobile from "../../data/pdfs/AstrobotMobile.png";
import SubmissionStepper from "../../components/Subcomponents/SubmissionStepper";    // 2
import { useNavigate } from 'react-router-dom';
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function Robotics() {
  const navigate = useNavigate();
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);     //3

  const handleUploadClick = () => {
    setShowSubmissionForm(true); // Show the stepper form
  };

  const handleBackToCompetitions = () => {
    navigate('/competitions');
  };                                                              // 4

  const handleBackToDetails = () => {
    setShowSubmissionForm(false); // Hide the form, show details
  };

  return (
    <>
      <Navbar />
      <section className="pt-[80px] bg-[#f7faff] flex flex-col lg:flex-row min-h-screen">
        {/* Left Image (Desktop only) */}
        <div className="w-full lg:w-80 shrink-0 hidden lg:block">
          <img
            src={roboticsImg}
            alt="Robotics"
            className="w-full h-[90vh] object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="relative flex-1 px-4 sm:px-6 lg:px-6 overflow-hidden">
          {/* Mobile Hero Header Section (outside card)
          <div className="block md:hidden text-center px-6 mb-4">
            <h1 className="text-4xl font-bold uppercase bg-gradient-astrobot bg-clip-text text-transparent mb-4">
              Astrobot
            </h1>
            <div className="rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src={astrobotmobile}
                alt="Astrobot Mobile Hero"
                className="w-full object-cover"
              />
            </div>
            <a
              href={astrobotPDF}
              download="ASTROBOT PROBLEM STATEMENT.pdf"
              className="bg-[#2053CA] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
            >
              DOWNLOAD PDF
            </a>
            <button
              onClick={handleUploadClick}
              className="bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition ml-4"
            >
              UPLOAD VIDEO
            </button>
          </div> */}

          {/* Mobile Hero Header Section (outside card) */}
          <div className="block md:hidden text-center px-6 mb-4">
            <h1 className="text-4xl font-bold uppercase bg-gradient-astrobot bg-clip-text text-transparent mb-4">
              Astrobot
            </h1>
            <div className="rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src={astrobotmobile}
                alt="Astrobot Mobile Hero"
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={astrobotPDF}
                download="ASTROBOT PROBLEM STATEMENT.pdf"
                className="bg-[#2053CA] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
              >
                DOWNLOAD PDF
              </a>
              <button
                onClick={handleUploadClick}
                className="bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
              >
                UPLOAD VIDEO
              </button>
            </div>
          </div>


          {/* Tablet/Desktop Header */}
          {/* <div className="hidden md:flex justify-between items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold uppercase bg-gradient-astrobot bg-clip-text text-transparent">
              Astrobot
            </h1>
            <a href="/competitions"
              className="md:-mr-96 bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition">BACK</a>
            <a
              href={astrobotPDF}
              download="ASTROBOT PROBLEM STATEMENT.pdf"
              className="bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
            >
              DOWNLOAD PDF
            </a>
            <button
              onClick={handleUploadClick}
              className="bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition ml-4"
            >
              UPLOAD VIDEO
            </button>
          </div> */}

          {/* 5 */}
          {/* Tablet/Desktop Header */}           
          <div className="hidden md:block">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold uppercase bg-gradient-astrobot bg-clip-text text-transparent">
                Astrobot
              </h1>
              <div className="flex flex-wrap gap-4">
                {showSubmissionForm ? (
                  <>
                    <button
                      onClick={handleBackToDetails}
                      className="flex items-center gap-2 bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
                    >
                      <HiArrowNarrowLeft className="text-lg" />Back to Details                      
                    </button>
                    <a  
                      href={astrobotPDF}
                      download="ASTROBOT PROBLEM STATEMENT.pdf"
                      className="bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
                    >
                      DOWNLOAD PDF
                    </a>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleBackToCompetitions}
                      className="bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
                    >
                      BACK
                    </button>
                    <a
                      href={astrobotPDF}
                      download="ASTROBOT PROBLEM STATEMENT.pdf"
                      className="bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
                    >
                      DOWNLOAD PDF
                    </a>
                    <button
                      onClick={handleUploadClick}
                      className="bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
                    >
                      UPLOAD VIDEO
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* 6 */}
          {/* Conditional rendering of either the details or the form */}
          {showSubmissionForm ? (
            <SubmissionStepper
              onCancel={() => setShowSubmissionForm(false)}
              submissionType="VIDEO"
            />
          ) : (
            <div className="relative bg-white border border-gray-300 shadow-xl rounded-lg p-4 sm:p-6  md:p-[100px] sm:mb-[40px] md:mt-[-45px] max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#2053CA]/70 scrollbar-track-gray-200">
              <h2 className="text-base sm:text-lg font-bold text-blue-700  sm:mb-8">
                Qualifier Level (Online Submission)
              </h2>
              <p className="mb-4 text-sm sm:text-base text-justify">Mission: Your mission is to design, simulate, and operate a robot
                inspired by the Mars Rover navigating unknown terrain,
                performing tasks, and showcasing innovation, just like real space
                explorers on the Red Planet.</p>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700 text-justify">
                <li>Robot Dimensions (max 40 cm × 35 cm [L × W], excluding gripper size).</li>
                <li>Overall robot weight should be under 5 kg.</li>
                <li>Height of the robot is not considered in dimensions.</li>
                <li>Submit a video (max 2 minutes) showing:
                  <ul className="list-[circle] pl-5 mt-1 space-y-1">

                    <li>Robot movements: Forward, backward, left, right.</li>
                    <li>Gripper action: Pick and place a small object.</li>
                    <li>A short explanation of how your team has built the robot.</li>
                  </ul>
                </li>
                <li>Mention your name, school, and location in the video.</li>

                <li>Video file name should be the Team ID (Example ID: APASB001).</li>
                <li>Only MP4 videos under 30 MB will be accepted.</li>
                <li>
                  Upload the video at: {" "}
                  <a
                    href="https://www.bharatteckleague.com/competitions/robotics"
                    target="_blank"
                    className="text-blue-700 underline"
                    rel="noreferrer"
                  >
                    https://www.bharatteckleague.com/competitions/robotics
                  </a>
                </li>

              </ul>

              <p className="text-sm text-blue-700 font-semibold italic mb-6 text-justify">
                Note: Students who follow all the Guidelines in the Qualifier round will be selected for the Finale.
              </p>

              <hr className="my-6" />

              <h2 className="text-base sm:text-lg font-bold text-blue-700 mb-4">
                Finale Level (Offline Competition)
              </h2>

              <p className="mb-4 text-sm sm:text-base text-justify">Mission: Create a mini space station with robots that help
                astronauts in space. Use your ideas to build and control your own
                smart space hub.</p>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700 text-justify">
                <li>Navigate your robot through a lunar surface-themed arena.</li>
                <li>Pick and place space-module blocks by crossing different terrains/surfaces.</li>
                <li>Complete the laps (number of laps will be mentioned on the spot).</li>
                <li>Three teams compete simultaneously in parallel arenas.</li>
                <li>Judging: Accuracy, obstacle navigation, timing.</li>
              </ul>

              <div className="my-6 flex justify-center">
                <img
                  src={robotDimensions}
                  alt="Robot dimensions"
                  className="max-w-[800px] w-full rounded-md border"
                />
              </div>

              <p className="text-sm text-blue-700 font-semibold italic mb-6 text-justify">
                Disclaimer: The image shown is for reference purposes only. The dimensions mentioned in the image represent the maximum allowable size for the robot. Smaller dimensions are acceptable, but the robot must not exceed the specified limits.
              </p>
              <hr className="my-6" />
              <h2 className="text-base sm:text-lg font-bold text-blue-700 mb-4">
                Team Guidelines
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700 text-justify">
                <li>Each team must have a minimum of 2 and a maximum of 4 student members.</li>
                <li>All members of the team must be from the same school.</li>
                <li>A student can participate in only one category.</li>
                <li>Teams must be mentored by a teacher/coordinator/school representative.</li>
                <li>Once the team is registered, no modifications to team members are allowed at any level of the competition.</li>
                <li>Teams must arrange their own materials, tools, and laptops as required.</li>
              </ul>
              <p className="text-sm text-blue-700 font-semibold italic mb-6 text-justify">
                Note: For all competitions, follow size, weight, and software rules mentioned. Any violation may result in disqualification. Ensure all required items (laptop, model, materials) are carried by the participants. Power supply will be provided at the venue.
              </p>
            </div>
          )}
        </div>
      </section>
      {/* Footer only on mobile */}
      <div className="block md:hidden">
        <Footer />
      </div>
    </>
  );
}
