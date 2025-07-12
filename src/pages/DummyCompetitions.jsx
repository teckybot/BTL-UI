import React, { useState } from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import img11 from "../data/images/img1.png";
import img12 from "../data/images/img2.png";
import img13 from "../data/images/img3.png";
import img14 from "../data/images/img4.png";
import img15 from "../data/images/img5.png";
import { Link } from 'react-router-dom';

const competitions = [
    { title: "ASTROBOT", image: img12 },
    { title: "3D MAKER", image: img13 },
    { title: "SPACE PILOT", image: img14 },
    { title: "CODEX", image: img15 },
    { title: "INNOVERSE", image: img11 },
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
                    <div className="block md:hidden px-4 max-w-md mx-auto mb-6">
                        <h2
                            className="text-center mb-6 mt-6 inline-block w-full"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '36px',
                                lineHeight: '100%',
                                textAlign: 'center',
                                background: 'linear-gradient(180deg, #1D1D1D 40.38%, #FFFFFF 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            COMPETITIONS
                        </h2>

                        <div className="flex flex-col gap-8">
                            {competitions.map((comp, idx) => (
                                <Link key={idx} to={`/competitions/${comp.title === "ASTROBOT" ? "robotics" : comp.title.toLowerCase().replace(/\s+/g, '-')}`} className="group">
                                    <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.01]">
                                        <img
                                            src={comp.image}
                                            alt={comp.title}
                                            className="w-full h-52 object-cover"
                                        />
                                    </div>
                                    <div className="mt-3 text-center">
                                        <button className="bg-[#2053CA] hover:bg-[#173f9c] text-white font-semibold py-2 px-8 rounded-full text-sm shadow-md">
                                            {comp.title} →
                                        </button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <Footer />
            </div >
        </>
    );
}
