import React from "react";
import Footer from "../components/Footer";
import bgImageDesktop from '../data/about1.png';
import bgImageMobile from '../data/about1.png';
import level from '../data/levelbg.jpg'
import globe from '../data/world-globe.png'
import rocket from '../data/rocket.png'
import space from '../data/space.png'
import orbit from '../data/orbit.png'
import blob from '../data/blob.png';

export default function Aboutus() {
  return (
    <>
      {/* ---------- DESKTOP / TABLET VERSION (md & up) ---------- */}
      <div className="hidden md:block relative min-h-screen bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImageDesktop}
            alt="Earth from space"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center">
          <h1
            className="text-center mt-10 font-bold uppercase"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '90px',
              lineHeight: '100%',
              letterSpacing: '0%',
              background: 'linear-gradient(270deg, #93AFC2 10%,#FFFFFF 70%, #93AFC2 100%)',

              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
            }}
          >
            THE JOURNEY
          </h1>


          <div className="mt-[350px] bg-white/5 backdrop-blur-[10px] p-6 md:p-6 rounded-2xl border border-white/20 text-base md:text-lg text-gray-100 leading-relaxed shadow-xl">
            <p>
              Bharat Tech League (BTL) is a national initiative by Teckybot that fosters innovation, creativity, and technical skills among young minds across India. Through a series of engaging competitions conducted across various states, BTL provides a dynamic platform for students
              to explore emerging technologies, showcase their talents, and develop problem-solving abilities.
            </p>
            <br />
            <p>
              BTL is more than just a competition—it's a celebration of learning, collaboration, and the limitless potential of young innovators in the world of technology. This year, Bharat Tech League (BTL) has expanded its reach, hosting competitions in multiple regions across the country. By uniting students from diverse backgrounds and cultures, BTL continues to nurture a vibrant community of young tech enthusiasts and changemakers nationwide.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- MOBILE VERSION (sm only) ---------- */}
      <div className="block md:hidden relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImageMobile}
            alt="BTL Mobile Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 px-4 py-16 max-w-md mx-auto text-center">
          <h1 className="text-3xl mt-[130px] font-extrabold tracking-wider uppercase text-white"
            style={{
              background: 'linear - gradient(270deg, #93AFC2 0 %, #FFFFFF 50 %, #93AFC2 100 %)',

            }}
          >
            THE JOURNEY
          </h1>

          <div className="mt-[270px] bg-white/10 p-4 rounded-xl text-sm leading-relaxed text-gray-100 shadow-md border border-white/10">
            <p>
              Bharat Tech League (BTL) by Teckybot is a national initiative that nurtures innovation and technical skills among young minds through engaging competitions across India. It offers a platform to explore emerging technologies and solve real-world problems. This year, BTL expanded nationwide, uniting diverse students and celebrating the spirit of learning and collaboration.
            </p>
          </div>
        </div>
      </div>


      {/* ANDHRA TECK LEAGUE  */}
      <div className="bg-[#F7F9FF] px-6 md:px-16 py-20 relative overflow-hidden">

        {/* Section Title */}
        <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#111111] mb-4">
          ANDHRA TECK LEAGUE 2023
        </h2>

        {/* Blue underline */}
        <div
          className="w-[350px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[6px] rounded-full mb-12"
          style={{
            background:
              'linear-gradient(to right, #1657C1 0%, rgba(22,87,193,0.4) 70%, transparent 100%)',
          }}
        ></div>


        {/* Main Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-20 mb-16">
          {/* Left Card */}
          <div className="md:col-span-6 bg-white rounded-3xl shadow-md p-6 py-20 text-[#333] leading-relaxed text-sm md:text-base"
            style={{
              boxShadow: '0px 0px 40px 0px rgba(194, 210, 242, 0.6)',
            }}
          >
            <p>
              Andhra Teck League 2023 (ATL) was a showcase of Andhra Pradesh’s technological talent and spirit of innovation.
              More than just a competition, it celebrated creativity and entrepreneurship, drawing over 1,500 participants.
            </p>
            <br />
            <p>
              The grand finale, with 600+ finalists, highlighted the region’s growing tech potential and inspired future innovators.
              Setting a strong precedent, the event marked a significant step in empowering students to pursue their tech aspirations.
            </p>
          </div>

          {/* Right Card  */}
          <div className="md:col-span-4 bg-white rounded-3xl shadow-md p-6 min-h-[200px]"
            style={{
              boxShadow: '0px 0px 40px 0px rgba(194, 210, 242, 0.6)',
            }}
          ></div>
        </div>

        {/* Blue Bottom Bar */}
        <div
          className="text-white rounded-2xl px-6 md:px-12 py-10 text-sm md:text-base relative"
          style={{
            background: 'radial-gradient(100% 100% at 50% 0%, #307DE3 0%, #2053CA 50%, #092267 100%)',
          }}
        >
          <p className="mb-4 my-4 text-center text-sm md:text-base leading-[1.5] md:leading-[1.75] lg:leading-[2]">
            The success of Andhra Tech League 2023 was made possible by the strong support of key leaders and partners.
            Notable contributors included Shri Dr. Prasad Reddy, Vice Chancellor of Andhra University, and Shri Ravi Eswarapu,
            CEO of AHUB, along with strategic partnerships with Alcove Partners and TiE Vizag.
          </p>
          <p className="mb-4 my-4 text-center text-sm md:text-base leading-[1.5] md:leading-[1.75] lg:leading-[2]">
            The league unfolded across multiple stages—starting with online registrations, followed by zonal competitions
            held in Visakhapatnam, Kakinada, Vijayawada, and Nellore. The grand finale, hosted at A-HUB on the Andhra University campus,
            marked the culmination of an inspiring and impactful tech journey.
          </p>

          {/* Blob image */}
          <img
            src={blob}
            alt="Decorative blob"
            className="absolute bottom-[-20px] right-[-20px] w-[60px] md:w-[95px] pointer-events-none select-none"
          />
        </div>
      </div>

      {/* BHARAT TECK LEAGUE  */}
      <div className="bg-[#F7F9FF] px-6 md:px-16 py-20 relative overflow-hidden">

        {/* Section Title */}
        <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#111111] mb-4">
          BHARAT TECK LEAGUE 2024
        </h2>

        {/* Blue underline */}
        <div
          className="w-[350px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[6px] rounded-full mb-12"
          style={{
            background:
              'linear-gradient(to right, #1657C1 0%, rgba(22,87,193,0.4) 70%, transparent 100%)',
          }}
        ></div>


        {/* Main Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-20 mb-16">
          {/* Left Card */}
          <div className="md:col-span-6 bg-white rounded-3xl shadow-md p-6 py-20 text-[#333] leading-relaxed text-sm md:text-base"
            style={{
              boxShadow: '0px 0px 40px 0px rgba(194, 210, 242, 0.6)',
            }}
          >
            <p>
              Bharat Teck League 2024 (BTL) was built on the remarkable success of the Andhra Teck League,  expanding its impact across Telangana and Andhra Pradesh. With over 1500+  participants, the event served as a platform for innovation, collaboration, and future ready learning.
            </p>
            <br />
            <p>
              Four major competitions as 3D Printing, Robotics, Drone Technology, and  the Internet of Things, captured the essence of Industry 4.0 technologies, challenging  participants to push the boundaries of creativity and problem-solving. BTL 2024  celebrated the spirit of technological exploration and set a new benchmark for youth driven innovation in the region
            </p>
          </div>

          {/* Right Card  */}
          <div className="md:col-span-4 bg-white rounded-3xl shadow-md p-6 min-h-[200px]"
            style={{
              boxShadow: '0px 0px 40px 0px rgba(194, 210, 242, 0.6)',
            }}
          ></div>
        </div>

        {/* Blue Bottom Bar */}
        <div
          className="text-white rounded-2xl px-6 md:px-12 py-10 text-sm md:text-base relative"
          style={{
            background: 'radial-gradient(100% 100% at 50% 0%, #307DE3 0%, #2053CA 50%, #092267 100%)',
          }}
        >
          <p className="mb-4 my-4 text-center text-sm md:text-base leading-[1.5] md:leading-[1.75] lg:leading-[2]">
            The success of Bharat Tech League 2024 was made possible through the invaluable  support of our esteemed partners and key contributors. Event partners such as A-Hub,  AIC T-Hub, TiE Vizag, and ACIC-ASIIC played a pivotal role, alongside our Andhra Pradesh  zonal partners - Cretile, Readily.IO, AECC, and ThirdApple. Telangana zonal  partners - EES, Radius, FUTURE, and Brainfeed.
          </p>
          <p className="mb-4 my-4 text-center text-sm md:text-base leading-[1.5] md:leading-[1.75] lg:leading-[2]">
            We also extend our sincere gratitude to  distinguished individuals whose contributions greatly elevated the event: Mr. Tata Teja  (GMR-Innovation), Mr. Siddhartha Malempati (Directing Council-General, Common  Collective), Mr. Ravi Eswarapu (CEO, A-Hub AUIC), Mr. Parag Gulhane (Co-founder &  Director, Cretile), and Mr. Anil Kumar Tentu (CEO-APIS). Their collective presence and  commitment were instrumental in making BTL 2024 a resounding success.
          </p>

          {/* Blob image */}
          <img
            src={blob}
            alt="Decorative blob"
            className="absolute bottom-[-20px] right-[-20px] w-[60px] md:w-[95px] pointer-events-none select-none"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
