import React from 'react';
import Navbar from '../../components/Header';
import Footer from '../../components/Footer';
import code from '../../data/images/img5.png';
import codexPDF from "../../data/pdfs/CodeX.pdf";
import codexMobile from "../../data/pdfs/CodexMobile.png";

export default function Codex() {
  return (
    <>
      <Navbar />
      <section className="pt-[80px] bg-[#f7faff] flex flex-col lg:flex-row min-h-screen">
        {/* Left Image (Desktop only) */}
        <div className="w-full lg:w-80 shrink-0 hidden lg:block">
          <img
            src={code}
            alt="Codex"
            className="w-full h-[90vh] object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="relative flex-1 px-4 sm:px-6 lg:px-6 overflow-hidden">
          {/* Mobile Hero Header Section (outside card) */}
          <div className="block md:hidden text-center px-6 mb-4">
            <h1 className="text-4xl font-bold uppercase bg-gradient-codex bg-clip-text text-transparent mb-4">
              CodeX
            </h1>
            <div className="rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src={codexMobile}
                alt="Codex Mobile Hero"
                className="w-full object-cover"
              />
            </div>
            <a
              href={codexPDF}
              download="CODEX PROBLEM STATEMENT.pdf"
              className="bg-[#2053CA] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
            >
              DOWNLOAD PDF
            </a>
          </div>

          {/* Tablet/Desktop Header */}
          <div className="hidden md:flex justify-between items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold uppercase bg-gradient-codex bg-clip-text text-transparent">
              CodeX
            </h1>
            <a
              href={codexPDF}
              download="CODEX PROBLEM STATEMENT.pdf"
              className="bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
            >
              DOWNLOAD PDF
            </a>
          </div>

          {/* Scrollable Card */}
          <div className="relative bg-white border border-gray-300 shadow-xl rounded-lg p-4 sm:p-6 sm:mb-5 md:p-[100px] sm:mb-[40px] md:mt-[-45px] max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#2053CA]/70 scrollbar-track-gray-200">
            <h2 className="text-base sm:text-lg font-bold text-blue-700 sm:mb-8">
              Qualifier Level (Online Quiz)
            </h2>
            <p className="mb-4 text-sm sm:text-base text-justify">
              Mission: Put your logical thinking, programming knowledge, and space science awareness to the test.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700 text-justify">
              <li>Eligibility:</li>
              <ul className="list-[circle] pl-5 mt-1 space-y-1">
                <li>Grades 6 & 7: Scratch + Space Basics</li>
                <li>Grades 8 & 9: Python + Space Science</li>
              </ul>
              <li>Format:</li>
              <ul className="list-[circle] pl-5 mt-1 space-y-1">
                <li>Online Multiple-Choice Quiz</li>
                <li>Covers basics of coding (as per grade level) and general space-related science</li>
                <li>Timed and monitored quiz to ensure fair play</li>
                <li>Conducted via secure online platform</li>
              </ul>
              <li>Selection Criteria:</li>
              <ul className="list-[circle] pl-5 mt-1 space-y-1">
                <li>Top-performing teams with good score will qualify for the Finale Level</li>
                <li>Results will be announced on the Bharat Teck League website</li>
              </ul>
            </ul>

            <hr className="my-6" />

            <h2 className="text-base sm:text-lg font-bold text-blue-700 mb-4">
              Finale Level (Offline Coding Challenge)
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700 text-justify">
              <li>Mission: Solve a Space Problem through Code for a space-themed task, announced on the spot.</li>
              <li>Eligibility: Teams who qualify from the online round</li>
              <li>Challenge Format:</li>
              <ul className="list-[circle] pl-5 mt-1 space-y-1">
                <li>Grades 6 & 7:
                  <ul className="list-[circle] pl-5 mt-1">
                    <li>Create a Scratch game or story</li>
                    <li>The exact theme/story will be revealed at the venue</li>
                    <li>Time-bound challenge (1.5–2 hours)</li>
                  </ul>
                </li>
                <li>Grades 8 & 9:
                  <ul className="list-[circle] pl-5 mt-1">
                    <li>Solve a Python-based problem on the spot</li>
                    <li>Focus on logic, clean coding, and efficiency</li>
                    <li>The exact task/problem statement will be revealed at the venue</li>
                    <li>Time-bound challenge (1.5–2 hours)</li>
                  </ul>
                </li>
              </ul>
              <li>Requirements:</li>
              <ul className="list-[circle] pl-5 mt-1">
                <li>Each team must bring at least one laptop with relevant tools installed</li>
                <li>Scratch (offline version or browser-compatible)</li>
                <li>Python (IDLE / VS Code / Thonny or any other IDE)</li>
              </ul>
              <li>Judging Criteria:</li>
              <ul className="list-[circle] pl-5 mt-1">
                <li>Creativity & Innovation</li>
                <li>Logic & Problem-Solving</li>
                <li>Completion & Functionality</li>
                <li>Relevance to the given task</li>
              </ul>
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
