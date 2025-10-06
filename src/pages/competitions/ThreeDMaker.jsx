
import React, { useState } from "react";
import Navbar from '../../components/Header';
import Footer from '../../components/Footer';
import Td from '../../data/images/img3.png';
import pdf3DMaker from "../../data/pdfs/3D Maker.pdf";
import mobileHero3D from "../../data/pdfs/3DMakerMobile.png";
import SubmissionStepper from "../../components/Subcomponents/SubmissionStepper";    // 2
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import SubmissionClosedModal from '../Submission/SubmissionClosedModal';


export default function Robotics() {
  const navigate = useNavigate();
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);     //3

  const [showClosedModal, setShowClosedModal] = useState(false);

  const handleUploadClick = () => {
    const submissionsOpen = false; // Set this to 'true' to show the Stepper, or 'false' to show the Modal.

    if (submissionsOpen) {
      setShowSubmissionForm(true); 
      setShowClosedModal(false); 
    } else {
      setShowClosedModal(true); 
      setShowSubmissionForm(false); 
    }
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
      <SubmissionClosedModal 
        isOpen={showClosedModal}
        onClose={() => setShowClosedModal(false)}
      />

      <section className="pt-[80px] bg-[#f7faff] flex flex-col lg:flex-row min-h-screen">
        {/* Left Image (Desktop only) */}
        <div className="w-full lg:w-80 shrink-0 hidden lg:block">
          <img
            src={Td}
            alt="3D Printing"
            className="w-full h-[90vh] object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="relative flex-1 px-4 sm:px-6 lg:px-6 overflow-hidden">
          {/* Mobile Hero Header Section (outside card) */}

          {/* <div className="block md:hidden text-center px-6 mb-4">
            <h1 className="text-4xl font-bold uppercase bg-gradient-3dmaker bg-clip-text text-transparent mb-4">
              3D Printing
            </h1>
            <div className="rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src={mobileHero3D}
                alt="3D Maker Mobile Hero"
                className="w-full object-cover"
              />
            </div>
            <a
              href={pdf3DMaker}
              download="3D MAKER PROBLEM STATEMENT.pdf"
              className="bg-[#2053CA] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
            >
              DOWNLOAD PDF
            </a>
          </div> */}

          {/* Mobile Hero Header Section (outside card) */}
          <div className="block md:hidden text-center px-6 mb-4">
            <h1 className="text-4xl font-bold uppercase bg-gradient-3dmaker bg-clip-text text-transparent mb-4">
              3D Printing
            </h1>
            <div className="rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src={mobileHero3D}
                alt="3D Maker Mobile Hero"
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={pdf3DMaker}
                download="3D MAKER PROBLEM STATEMENT.pdf"
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
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold uppercase bg-gradient-3dmaker bg-clip-text text-transparent">
              3D Printing
            </h1>
            <a href="/competitions"
              className="md:mr-[-300px] bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition">BACK</a>
            <a
              href={pdf3DMaker}
              download="3D MAKER PROBLEM STATEMENT.pdf"
              className="bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
            >
              DOWNLOAD PDF
            </a>
          </div> */}

          {/* Tablet/Desktop Header */}
          {/* <div className="hidden md:block">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold uppercase bg-gradient-3dmaker bg-clip-text text-transparent">
                3D Printing
              </h1>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/competitions"
                  className="bg-[#2053CA] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#173f9c] transition"
                >
                  BACK
                </a>
                <a
                  href={pdf3DMaker}
                  download="3D MAKER PROBLEM STATEMENT.pdf"
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
              </div>
            </div>
          </div> */}

          <div className="hidden md:block">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold uppercase bg-gradient-3dmaker bg-clip-text text-transparent">
                3D Printing
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
                      href={pdf3DMaker}
                      download="3D MAKER PROBLEM STATEMENT.pdf"
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
                      href={pdf3DMaker}
                      download="3D MAKER PROBLEM STATEMENT.pdf"
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

          {/* Scrollable Card */}
          {/* Conditional rendering of either the details or the form */}
          {showSubmissionForm ? (
            <SubmissionStepper
              onCancel={() => setShowSubmissionForm(false)}
              submissionType="VIDEO"
            />
          ) : (
          <div className="relative  bg-white border border-gray-300 shadow-xl rounded-lg p-4 sm:p-6 md:p-[100px] sm:mb-[40px] md:mt-[-45px] max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#2053CA]/70 scrollbar-track-gray-200">
            <h2 className="text-base sm:text-lg font-bold text-blue-700 sm:mb-8">
              Qualifier Level (Online Submission)
            </h2>
            <p className="mb-4 text-sm sm:text-base text-justify ">
              Mission: Design a useful space utility object
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700 text-justify  ">
              <li>
                Design any object/tool useful in space exploration (e.g., astronaut
                tool, satellite model, Mini Rocket etc.)
              </li>
              <li>
                Use Tinkercad Design software
                (<a href="https://www.tinkercad.com/" target="_blank" rel="noreferrer" className="text-blue-700 underline">Download link</a>)
              </li>
              <li>Record a 2-minute video explaining your design process</li>
              <li>Ensure you record your screen while designing or making your project and include it in the video</li>
              <li>Video file name should be the Team ID (Example ID: APTDM001)</li>
              <li>Only MP4 videos under 30 MB will be accepted.</li>
              <li>
                Upload the video in: <a href="https://www.bharatteckleague.com/competitions/3d-maker" target="_blank" rel="noreferrer" className="text-blue-700 underline">https://www.bharatteckleague.com/competitions/3d-maker</a>
              </li>
            </ul>

            <p className="text-sm text-blue-700 font-semibold italic mb-6 text-justify">
              Note: Students who follow all the Guidelines in the Qualifier round will be selected for the Finale.
            </p>

            <hr className="my-6" />

            <h2 className="text-base sm:text-lg font-bold text-blue-700 mb-4">
              Finale Level (Offline Competition)
            </h2>
            <p className="mb-4 text-sm sm:text-base text-justify ">
              Mission: Look at the space object you’re given and try to make the
              same thing using 3D design. Try to copy how it looks and works
              just like building your own version

            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700 text-justify">
              <li>A surprise space-themed design problem will be announced on the spot</li>
              <li>Participants will have 2 hours to complete the 3D model design</li>
              <li>No 3D printing is required in the final round</li>
              <li>
                Bring your own laptop along with a mouse and with Tinkercad design software installed (Atleast 1 laptop per team)
              </li>
              <li>Judging: Innovation, functionality, and quality of the 3D model design</li>
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
