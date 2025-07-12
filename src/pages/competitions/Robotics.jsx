import React from "react";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import roboticsImg from "../../data/images/img2.png";
import robotDimensions from "../../data/pdfs/astrobot.png"; 
import astrobotPDF from "../../data/pdfs/Astrobot.pdf";

export default function Robotics() {
  return (
    <>
      <Navbar />
      <section className="pt-[80px] bg-[#f7faff] flex flex-col lg:flex-row min-h-screen">
        {/* Left Image */}
        <div className="w-full lg:w-80 shrink-0">
          <img
            src={roboticsImg}
            alt="Robotics"
            className="w-full h-[90vh] object-cover shadow-lg"
          />
        </div>
        {/* Right Content */}
        <div className="relative flex-1 px-6  overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center ">
            <h1 className="text-5xl lg:text-8xl font-bold uppercase bg-gradient-astrobot bg-clip-text text-transparent z-10">
              Astrobot
            </h1>
            <a
              href={astrobotPDF}
              download="ASTROBOT PROBLEM STATEMENT.pdf"
              className="bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
            >
              Download PDF
            </a>
          </div>

          {/* Scrollable Card */}
          <div className="relative mt-[-30px] bg-white border border-gray-250 shadow-xl rounded-lg p-6 max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#2053CA]/70 scrollbar-track-gray-200 pr-4  pl-[100px]">
            <h2 className="text-lg font-bold text-blue-700 mb-8">
              Qualifier Level (Online Submission)
            </h2>
            <p className="mb-4">Mission: Simulate how a robot works like a Mars Rover.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>
                Submit a video (max 2 minutes) showing:
                <ul className="list-[circle] pl-5 mt-1 space-y-1">
                  <li>Robot movements: Forward, backward, left, right.</li>
                  <li>Gripper action: Pick and place a small object.</li>
                  <li>A short explanation of how your team has built the robot.</li>
                </ul>
              </li>
              <li>Mention your name, school, and location in the video.</li>
              <li>Robot Dimensions (max 40 cm × 35 cm [L × W], excluding gripper size).</li>
              <li>Overall robot weight should be under 5 kg.</li>
              <li>Height of the robot is not considered in dimensions.</li>
              <li>Video file name should be the Team ID (Ex: TeamX).</li>
              <li>Video file size should not exceed 30 MB.</li>
              <li>
                Upload the video at:{" "}
                <a
                  href="https://www.bharatteckleague.com/"
                  target="_blank"
                  className="text-blue-600 underline"
                  rel="noreferrer"
                >
                  https://www.bharatteckleague.com/
                </a>
              </li>
            </ul>

            <hr className="my-6" />

            <h2 className="text-lg font-bold text-blue-700 mb-4">
              Finale Level (Offline Competition)
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Mission: Mini Space Station Build Challenge.</li>
              <li>Navigate your robot through a lunar surface-themed arena.</li>
              <li>Pick and place space-module blocks by crossing different terrains/surfaces.</li>
              <li>Complete the laps (number of laps will be mentioned on the spot).</li>
              <li>Three teams compete simultaneously in parallel arenas.</li>
              <li>Judging: Accuracy, obstacle navigation, timing.</li>
            </ul>

            {/* Robot Image with Dimensions */}
            <div className="my-6 flex justify-center">
              <img
                src={robotDimensions}
                alt="Robot dimensions"
                className="max-w-[800px] w-full rounded-md border"
              />
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 italic">
              Disclaimer: The image shown is for reference purposes only. The dimensions mentioned in the image represent the maximum allowable size for the robot. Smaller dimensions are acceptable, but the robot must not exceed the specified limits.
            </p>
          </div>

          {/* Background */}
        </div>
      </section>

    </>
  );
}
