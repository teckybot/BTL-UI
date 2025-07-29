import React from 'react';
import Navbar from '../../components/Header';
import Footer from '../../components/Footer';
import inno from '../../data/images/img1.png';
import innoPDF from "../../data/pdfs/Innoverse.pdf";
import innoMobile from "../../data/pdfs/InnoverseMobile.png";

export default function Innoverse() {
  return (
    <>
      <Navbar />
      <section className="pt-[80px] bg-[#f7faff] flex flex-col lg:flex-row min-h-screen">
        {/* Left Image (Desktop only) */}
        <div className="w-full lg:w-80 shrink-0 hidden lg:block">
          <img
            src={inno}
            alt="Innoverse"
            className="w-full h-[90vh] object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="relative flex-1 px-4 sm:px-6 lg:px-6 overflow-hidden">
          {/* Mobile Hero Header Section (outside card) */}
          <div className="block md:hidden text-center px-6 mb-4">
            <h1 className="text-4xl font-bold uppercase bg-gradient-innoverse bg-clip-text text-transparent mb-4">
              Innoverse
            </h1>
            <div className="rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src={innoMobile}
                alt="Innoverse Mobile Hero"
                className="w-full object-cover"
              />
            </div>
            <a
              href={innoPDF}
              download="INNOVERSE PROBLEM STATEMENT.pdf"
              className="bg-[#2053CA] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
            >
              DOWNLOAD PDF
            </a>
          </div>

          {/* Tablet/Desktop Header */}
          <div className="hidden md:flex justify-between items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold uppercase bg-gradient-innoverse bg-clip-text text-transparent">
              Innoverse
            </h1>
            <a href="/competitions" 
            className="md:mr-[-360px] bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition">BACK</a>
            <a
              href={innoPDF}
              download="INNOVERSE PROBLEM STATEMENT.pdf"
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
              Mission: Propose a space-relevant electronics or embedded system project that can support astronauts, spacecraft, or space missions.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700 text-justify">
              <li>A 2-page PDF Document containing:</li>
              <ul className="list-[circle] pl-5 mt-1 space-y-1">
                <li>Project Name & Short Description</li>
                <li>List of Materials/Components Used</li>
                <li>Explanation of How the Project Works</li>
                <li>Benefits and Relevance to Space Missions</li>
                <li>Team Details: Student names, school name, grade, and Team ID</li>
              </ul>
              <li>Submission Guidelines:</li>
              <ul className="list-[circle] pl-5 mt-1 space-y-1">
                <li>PDF must be named using your Team ID (Example ID: APINV001)</li>
                <li>Maximum file size: 10 MB</li>
                <li>
                  Upload your PDF at: <a href="https://www.bharatteckleague.com" target="_blank" rel="noreferrer" className="text-blue-700 underline">https://www.bharatteckleague.com</a>
                </li>
                <li>Only shortlisted teams will be invited to the Finale Level</li>
              </ul>
            </ul>
            
            <p className="text-sm text-blue-700 font-semibold italic mb-6 text-justify">
              Note: Students who follow all the Guidelines in the Qualifier round will be selected for the Finale.
            </p>

            <hr className="my-6" />

            <h2 className="text-base sm:text-lg font-bold text-blue-700 mb-4">
              Finale Level (Offline Project Expo)
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700 text-justify">
              <li>Bring a fully working, upgraded version of your proposed model</li>
              <li>Prepare a presentation (PPT format) to explain your concept, design, and innovation</li>
              <li>The project must fit within a 50 cm x 50 cm table space</li>
              <li>Presentation Includes:</li>
              <ul className="list-[circle] pl-5 mt-1">
                <li>Problem your project addresses</li>
                <li>How it benefits space missions</li>
                <li>Demonstration of working model</li>
                <li>Teamwork and explanation clarity</li>
              </ul>
              <li>Judging Criteria:</li>
              <ul className="list-[circle] pl-5 mt-1">
                <li>Innovation & Uniqueness of the idea</li>
                <li>Functionality & Working Demonstration</li>
                <li>Relevance to Space Applications</li>
                <li>Clarity of Presentation & Communication</li>
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
