import React from 'react';
import Poster from '../data/BotExpo/BotExpo_Poster.jpg';
import Postermob from '../data/BotExpo/poster_mob.jpg';
import img1 from '../data/BotExpo/Tech_Projects.png';
import img2 from '../data/BotExpo/Ai_workshop.png';
import img3 from '../data/BotExpo/Robotics.png';
// import img4 from '../data/BotExpo/Certificates.png';
// import img5 from '../data/BotExpo/Network_oppurtunities.png';
import img6 from '../data/BotExpo/About_Bot_expo.png';
import Footer from '../components/BotExpo_footer';
import AIworkshopRegForm from '../components/Regcomponents/AIworkshopRegForm';


const highlights = [
     { image: img1, title: <>40+ Tech Projects <br /> Exhibit</> },
     { image: img2, title: <>AI Workshop for <br /> Teachers</> },
     { image: img3, title: 'Robotic Games & Live Demos' },
];

const BotExpoPage = () => {
     return (

          <div className="pt-[80px]">
               <section className="bg-[#16565F] text-white  md:py-1 md:pt-5  text-center text-[14px]  md:text-[26px] leading-relaxed">
                    <p className="font-normal">
                         <span className="font-bold">BotExpo</span> on <span className="font-bold">August 2nd</span> is free for everyone to attend...
                         <br />                         <span className="font-bold">AI Workshop</span> is exclusively for teachers with limited seats. Register below to join...

                    </p>

               </section>
               {/* Poster Section */}
               <div className="flex justify-center mb-8">
                    <img
                         src={Poster}
                         alt="Bot Expo 2025 Poster"
                         className="hidden md:block h-[700px] w-full max-w-[1250px] rounded-lg md:pt-8"
                    />
                    <img
                         src={Postermob}
                         alt="Bot Expo 2025 Poster Mobile"
                         className="block md:hidden w-full max-w-[600px] mt-[30px] rounded-lg"
                    />
               </div>


               {/* IMPORTANCE SECTION */}
               <section className="max-w-[1450px] mx-auto px-4">
                    <h2 className="text-[36px] md:text-[48px] font-bold mt-12  text-center text-cyan-800 mb-[-6px]">
                         About Bot Expo 2025
                    </h2>
                    <div className="bg-white md:p-12 rounded-lg text-center">
                         <p className="text-[18px] md:text-[24px] leading-relaxed md:mt-0 mt-6 px-6">
                             <span className="font-bold"> BotExpo </span> is an interactive technology event organized by <span className="font-bold">Teckybot</span> and <span className="font-bold">PEN Schools</span>  in <span className="font-bold">Visakhapatnam</span> , showcasing innovations in Robotics, Artificial Intelligence, Embedded Systems, 3D Printing, and more.
                         </p>
                         <p className="text-[20px] md:text-[24px] leading-relaxed px-6">
                              The event aims to empower students by providing exposure to futuristic technologies through various tech models designed and displayed for students, educators, and tech enthusiasts.
                         </p>
                    </div>
               </section>
              
               {/* Poster Section */}
               <div className="flex justify-center mb-8">
                    <img
                         src={img6}
                         alt="Bot Expo 2025 Poster"
                         className=" h-full w-full max-w-full rounded-lg"
                    />
               </div>





               {/* WHAT YOU WILL EXPLORE SECTION */}
               {/* <section className="max-w-[1450px] mx-auto mt-16 px-4">
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
               </section> */}

               {/* EVENT HIGHLIGHTS SECTION */}
               <section className="max-w-[1300px] mx-auto px-4 py-20 ">
                    <h2 className="text-center text-[26px] md:text-[32px] font-bold text-[#0B3B4D] mb-12 uppercase">
                         What You Will Explore at the BOT Expo 2025
                    </h2>

                    <div className="space-y-10">
                         {/* Card 1 (Already Perfect) */}
                         <div className="bg-white rounded-[20px] border border-gray-300 shadow-xl shadow-gray-400 flex flex-col md:flex-row overflow-hidden"
                              style={{ border: "1px solid #16565F" }}>
                              <img
                                   src={img1}
                                   alt="Tech Projects"
                                   className="w-full md:w-[26%] h-[220px] md:h-auto object-cover"
                              />
                              <div className="flex flex-col justify-between md:w-[80%] relative">
                                   <div className="p-6">
                                        <p className="font-poppins font-normal text-[20px] px-4 leading-[40px] tracking-normal text-gray-800  md:w-[95%]">
                                             We are showcasing <strong>40+ Innovative Projects</strong> built on a range of cutting-edge <strong>Industry 4.0 technologies</strong>, including Electric Vehicles (EVs), Drone Technology, Robotics, Artificial Intelligence (AI), Internet of Things (IoT), and 3D Printing. These projects highlight the future of tech and innovation across multiple domains.
                                        </p>
                                   </div>
                                   <div className="bg-gradient-to-r from-[#248B9A] to-[#0C2F34]  px-8 py-6 text-white font-semibold text-[16px] md:text-center  md:text-[30px] md:text-[18px] rounded-br-xl">
                                        40+ Tech Projects&nbsp;&nbsp;Exhibit
                                   </div>
                              </div>
                         </div>

                         {/* ✅ Card 2: AI Workshop */}
                         <div className="bg-white rounded-[20px] shadow-xl shadow-gray-400 border border-gray-300 flex flex-col md:flex-row-reverse overflow-hidden border-shadow-md"
                              style={{ border: "1px solid #16565F" }}>
                              <img
                                   src={img2}
                                   alt="AI Workshop"
                                   className="w-full md:w-[26%] h-[220px] md:h-auto object-cover"
                              />
                              <div className="flex flex-col justify-between md:w-[80%] relative">
                                   <div className="p-6">
                                        <p className="font-poppins font-normal text-[20px] px-4 leading-[40px] tracking-normal text-gray-800 md:w-[95%]   leading-relaxed">
                                             Join us for an exclusive hands-on workshop on <strong>Artificial Intelligence in Education</strong>. Explore AI tools like smart grading and AI-driven lesson planning to enhance your teaching and streamline your workflow. This specially curated <strong>2.5-hour session</strong> is for educators at just <strong>INR 299/-</strong>. Register now and step into the future of teaching.
                                        </p>
                                   </div>
                                   <div className="bg-gradient-to-r from-[#248B9A] to-[#0C2F34] px-8 py-6 text-white font-semibold text-[16px] md:text-center  md:text-[30px] rounded-bl-xl text-left">
                                        AI Workshop for Teachers
                                   </div>
                              </div>
                         </div>

                         {/* ✅ Card 3: Robotic Games */}
                         <div className="bg-white rounded-[20px] shadow-xl shadow-gray-400 flex flex-col md:flex-row overflow-hidden"
                              style={{ border: "1px solid #16565F" }}>
                              <img
                                   src={img3}
                                   alt="Robotic Demos"
                                   className="w-full md:w-[26%] h-[220px] md:h-auto object-cover"
                              />
                              <div className="flex flex-col justify-between md:w-[80%] relative">
                                   <div className="p-6">
                                        <p className="font-poppins font-normal text-[20px] px-4 leading-[40px] tracking-normal text-gray-800 md:w-[95%]">
                                             We are also organizing <strong>robotics games and live demonstrations</strong>, offering an exciting, hands-on experience for attendees. These activities aim to engage participants in real-time applications of robotics, making technology both fun and interactive.
                                        </p>
                                   </div>
                                   <div className="bg-gradient-to-r from-[#248B9A] to-[#0C2F34] px-8 py-6 text-white font-semibold text-[16px] md:text-center  md:text-[30px] rounded-br-xl">
                                        Robotic Games & Live Demos
                                   </div>
                              </div>
                         </div>
                    </div>
               </section >



                    <h2 className="text-[28px] text-center md:text-[48px] font-bold text-cyan-800 mb-8">
                         ARTIFICIAL INTELLIGENCE WORKSHOP FOR TEACHERS
                    </h2> 
                    {/* <p className="text-[18px] md:text-[22px] text-gray-800 leading-relaxed px-6 mb-6">
                         Join us at <strong>Bullayya College on August 2nd</strong> for an exclusive <strong>Artificial Intelligence Workshop</strong> for Educators/Teachers, where innovation meets the classroom. Dive into the latest AI tools designed to enhance teaching from smart grading systems to AI-driven lesson planning. Discover how to streamline your workflow, personalize learning experiences, and future-proof your teaching strategies.
                    </p>
                    <p className="text-[18px] md:text-[22px] text-gray-800 px-6 leading-relaxed">
                         This hands-on workshop of two and half hours, specially crafted for teachers ready to embrace the next wave of EdTech, is available for a registration fee of just INR 299/-. Don’t miss this opportunity <strong>register now</strong> and transform your approach to education.
                    </p>
               </section >  */}

               <AIworkshopRegForm />
               <Footer />
          </div >
     );
};

export default BotExpoPage;
