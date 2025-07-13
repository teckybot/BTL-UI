import React, { useState } from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import img11 from "../data/images/img1.png";
import img12 from "../data/images/img2.png";
import img13 from "../data/images/img3.png";
import img14 from "../data/images/img4.png";
import img15 from "../data/images/img5.png";
import mob11 from "../data/pdfs/AstrobotMobile.png";
import mob12 from "../data/pdfs/3DMakerMobile.png";
import mob13 from "../data/pdfs/DroneMobile.png";
import mob14 from "../data/pdfs/CodexMobile.png";
import mob15 from "../data/pdfs/InnoverseMobile.png";
import { Link } from 'react-router-dom';

const competitions = [
    { title: "ASTROBOT", image: img12, mobileImage: mob11 },
    { title: "3D MAKER", image: img13, mobileImage: mob12 },
    { title: "SPACE PILOT", image: img14, mobileImage: mob13 },
    { title: "CODEX", image: img15, mobileImage: mob14 },
    { title: "INNOVERSE", image: img11, mobileImage: mob15 },
];

export default function DummyCompetitions() {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    return (
        <>
            <Navbar />

            <div className="pt-[60px] flex flex-col min-h-screen">
                <div className="flex-1">
                    {/* Desktop Title */}
                    <div className="relative">
                        {/* Faded Background Text - Hidden on mobile, shown on md and up */}
                        <div className="hidden md:flex relative items-end justify-center">
                            <div className="absolute bottom-[-150px] md:bottom-[-200px] lg:bottom-[-265px] flex justify-center items-end w-full pointer-events-none z-0">
                                <h1 className="text-[80px] md:text-[120px] lg:text-[200px] font-extrabold uppercase text-gray-300 opacity-30 select-none tracking-widest leading-none">
                                    {competitions[hoveredIndex]?.title}
                                </h1>
                            </div>
                        </div>

                        {/* Foreground Title - Centered on all screens */}
                        <div className="relative z-10 text-center">
                            <h1
                                className={`hidden sm:block text-[40px] md:mb-[-10px] md:mt-[60px] sm:text-[60px] md:text-[70px] lg:text-[90px] 
               font-[500] uppercase tracking-normal leading-none 
               inline-block bg-clip-text text-transparent 
               transition-all duration-300
               ${{
                                        "3D MAKER": "bg-gradient-3dmaker",
                                        "SPACE PILOT": "bg-gradient-spacepilot",
                                        "CODEX": "bg-gradient-codex",
                                        "INNOVERSE": `bg-gradient-innoverse ${window.innerWidth < 640 ? 'hidden' : ''}`,
                                        "ASTROBOT": "bg-gradient-astrobot",
                                    }[competitions[hoveredIndex]?.title]
                                    }`}
                            >
                                {competitions[hoveredIndex]?.title}
                            </h1>
                        </div>
                    </div>

                    {/* Desktop Cards */}
                    <div className="hidden md:flex w-full h-[calc(100vh-180px)] overflow-hidden">
                        {competitions.map((comp, idx) => (
                            <div
                                key={idx}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                className={`relative group transition-all duration-300 cursor-pointer w-1/5 ${hoveredIndex === idx ? "opacity-100" : "opacity-50"}`}
                            >
                                <Link to={`/competitions/${comp.title === "ASTROBOT" ? "robotics" : comp.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                    <img
                                        src={comp.image}
                                        alt={comp.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </Link>
                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link to={`/competitions/${comp.title === "ASTROBOT" ? "robotics" : comp.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                        <button className="bg-white/80 hover:bg-white text-gray-800 font-semibold py-2 px-5 rounded-full text-sm shadow-lg">
                                            Details →
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Cards */}
                    {/* Mobile Cards - Updated Design */}
                    <div className="block md:hidden px-4 max-w-md mx-auto mb-10">
                        <h2 className="text-center mb-6 mt-6 text-[32px] font-bold uppercase tracking-wide bg-gradient-to-b from-black to-white bg-clip-text text-transparent">
                            Competitions
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            {competitions.map((comp, idx) => (
                                <Link
                                    key={idx}
                                    to={`/competitions/${comp.title === "ASTROBOT" ? "robotics" : comp.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="group"
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                                        <img
                                            src={comp.mobileImage}
                                            alt={comp.title}
                                            className="w-full h-[300px] object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#000000b0] to-[#00000020] p-3 rounded-br-2xl rounded-tl-xl">
                                            <span className="text-white text-[15px] font-semibold tracking-wide">
                                                {comp.title}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div >
        </>
    );
}
