import React from 'react';
import Poster from '../data/BotExpo/BotExpo_Poster.png';
import Postermob from '../data/BotExpo/poster_mob.jpg';
import img1 from '../data/BotExpo/Tech_Projects.png';
import img2 from '../data/BotExpo/Ai_workshop.png';
import img3 from '../data/BotExpo/Robotics.png';
import img4 from '../data/BotExpo/Certificates.png';
import img5 from '../data/BotExpo/Network_oppurtunities.png';
import img6 from '../data/BotExpo/Student_lead.png';
import AIworkshopRegForm from '../components/Regcomponents/AIworkshopRegForm';

const highlights = [
     { image: img1, title: <>40+ Tech Projects <br /> Exhibit</> },
     { image: img2, title: <>AI Workshop for <br /> Teachers</> },
     { image: img3, title: 'Robotic Games & Live Demos' },
     { image: img4, title: 'Certificate Distribution Ceremony' },
     { image: img5, title: 'Networking Opportunities for Educators' },
     { image: img6, title: 'Student led Tech – Talks & Idea Showcase' }
];

const BotExpoPage = () => {
     return (
          <div className="pt-[60px]">
               {/* Poster Section */}
               <div className="flex justify-center mb-8">
                    <img
                         src={Poster}
                         alt="Bot Expo 2025 Poster"
                         className="hidden md:block w-full max-w-[1550px] rounded-lg"
                    />
                    <img
                         src={Postermob}
                         alt="Bot Expo 2025 Poster Mobile"
                         className="block md:hidden w-full max-w-[600px] mt-[30px] rounded-lg"
                    />
               </div>

               {/* ABOUT SECTION */}
               <section className="max-w-[1450px] mx-auto mb-12 px-4">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-center text-cyan-800 pt-4 mb-6">
                         ABOUT BOT EXPO 2025
                    </h2>
                    <div
                         className="text-white p-6 md:p-12 rounded-[30px] md:rounded-[50px] shadow-md text-center"
                         style={{
                              background: 'linear-gradient(280.87deg, #248B9A 0%, #0C2F34 100%)'
                         }}
                    >
                         <p className="text-[18px] md:text-[24px] leading-relaxed">
                              Bot Expo is an interactive and educational event dedicated to showcasing cutting-edge innovations in robotics,
                              automation, and artificial intelligence. This expo is proudly celebrated through a collaborative effort between
                              Teckybot and P.E.N Schools, aiming to empower students with futuristic technological exposure. It serves as a
                              dynamic platform for students, educators, technologists, and enthusiasts to explore real-world applications of
                              robotics through live demonstrations, technical exhibits, and engaging activities.
                         </p>
                    </div>
               </section>

               {/* IMPORTANCE SECTION */}
               <section className="max-w-[1450px] mx-auto mb-12 px-4">
                    <h2 className="text-[36px] md:text-[48px] font-bold mt-12 md:mt-[105px] text-center text-cyan-800 mb-[-6px]">
                         IMPORTANCE OF BOT EXPO 2025
                    </h2>
                    <div className="bg-white md:p-12 rounded-lg text-center">
                         <p className="text-[18px] md:text-[24px] leading-relaxed md:mt-0 mt-6 px-6">
                              In today's rapidly evolving technological landscape, it is essential to equip the younger generation with the
                              knowledge and exposure needed to thrive in a digital world. Bot Expo encourages hands-on learning,
                              problem-solving, and innovation, all of which are key drivers of 21st-century education and industry readiness.
                         </p>
                         <p className="text-[20px] md:text-[24px] leading-relaxed px-6">
                              This expo brings together a wide array of projects, from 3D printing and humanoid robots to AI-based systems
                              and autonomous machines—providing an opportunity for learners to understand the intersection of science,
                              engineering, and creativity.
                         </p>
                    </div>
               </section>

               {/* WHAT YOU WILL EXPLORE SECTION */}
               <section className="max-w-[1450px] mx-auto mt-16 px-4">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-cyan-800 mb-10 text-center">
                         WHAT YOU WILL EXPLORE AT THE BOT EXPO 2025
                    </h2>
                    <div className="space-y-6 md:px-[150px] px-[30px]">
                         {[
                              { id: '01', text: <>Fundamentals of <strong>Robot design</strong> and <strong>Functionality</strong></> },
                              { id: '02', text: <>Exposure to <strong>3D modeling</strong>, <strong>Drones</strong>, <strong>Robotic arm</strong>, and <strong>Smart Systems</strong></> },
                              { id: '03', text: <>Insights into <strong>IoT</strong>, <strong>Embedded Systems</strong>, and <strong>Automation technologies</strong></> },
                              { id: '04', text: <>Applications of <strong>Artificial Intelligence</strong> and <strong>OpenCV</strong> in real-world scenarios</> },
                              { id: '05', text: <>Career pathways and opportunities in the field of robotics and engineering</> },
                              { id: '06', text: <>Participatory sessions like <strong>Robotic games</strong>, <strong>AI Workshop</strong>, and <strong>Live demonstration</strong></> },
                         ].map(item => (
                              <div key={item.id} className="flex items-start border-b pb-4">
                                   <div className="text-cyan-800 font-bold text-[32px] mt-[8px] md:text-[48px] w-12 mb-4">{item.id}</div>
                                   <div className="md:ml-10 md:mt-5 text-[18px] md:text-[24px] mt-[-2] ml-[14px]">{item.text}</div>
                              </div>
                         ))}
                    </div>
               </section>

               {/* EVENT HIGHLIGHTS SECTION */}
               <section className="max-w-[1450px] mx-auto mt-20 px-4 pb-20">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-center text-cyan-800 mb-12">
                         EVENT HIGHLIGHTS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[80%] mx-auto gap-10">
                         {highlights.map((item, index) => (
                              <div
                                   key={index}
                                   className="rounded-[40px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                              >
                                   <img src={item.image} alt={item.title} className="w-full h-[300px] object-cover" />
                                   <div className=" pt-[30px] text-white text-center text-[20px] h-[120px] md:text-[22px] font-semibold p-4 " style={{
                                        background: "linear-gradient(279.15deg, #248B9A 2.43%, #0C2F34 100.9%)"
                                   }}>
                                        {item.title}
                                   </div>
                              </div>
                         ))}
                    </div>
               </section>
               {/* AI WORKSHOP FOR TEACHERS SECTION */}
               <section className="max-w-[1350px] mx-auto mt-20 px-4 pb-20 text-center ">
                    <h2 className="text-[28px] md:text-[40px] font-bold text-cyan-800 mb-8">
                         ARTIFICIAL INTELLIGENCE WORKSHOP FOR TEACHERS
                    </h2>
                    <p className="text-[18px] md:text-[22px] text-gray-800 leading-relaxed px-6 mb-6">
                         Join us at <strong>Bullayya College on August 2nd</strong> for an exclusive <strong>Artificial Intelligence Workshop</strong> for Educators/Teachers, where innovation meets the classroom. Dive into the latest AI tools designed to enhance teaching from smart grading systems to AI-driven lesson planning. Discover how to streamline your workflow, personalize learning experiences, and future-proof your teaching strategies.
                    </p>
                    <p className="text-[18px] md:text-[22px] text-gray-800 px-6 leading-relaxed">
                         This hands-on workshop of two and half hours, specially crafted for teachers ready to embrace the next wave of EdTech, is available for a registration fee of just INR 299/-. Don’t miss this opportunity <strong>register now</strong> and transform your approach to education.
                    </p>
               </section>

               <AIworkshopRegForm/>

          </div>
     );
};

export default BotExpoPage;
