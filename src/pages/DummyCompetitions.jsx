import React, { useState } from "react";
import Navbar from "../components/Header";
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

            <div className="pt-[80px] md:pt-[70px] flex flex-col min-h-screen">
                <div className="flex-1">

                    {/* Desktop Title */}
                    <div className="hidden md:flex relative items-end justify-center">
                        {/* Faded Background Text */}
                        <div className="absolute bottom-[-125px] flex justify-center items-end w-full pointer-events-none z-0">
                            <h1 className="text-[200px]  font-extrabold uppercase text-gray-300 opacity-30 select-none tracking-widest leading-none">
                                {competitions[hoveredIndex]?.title}
                            </h1>
                        </div>

                        {/* Foreground Title */}
                        <div className="relative z-10">
                            <h1
                                className={`text-[90px] font-[500] uppercase tracking-normal leading-none inline-block bg-clip-text text-transparent transition-all duration-300
        ${{
                                        "3D MAKER": "bg-gradient-3dmaker",
                                        "SPACE PILOT": "bg-gradient-spacepilot",
                                        "CODEX": "bg-gradient-codex",
                                        "INNOVERSE": "bg-gradient-innoverse",
                                        "ASTROBOT": "bg-gradient-astrobot",
                                    }[competitions[hoveredIndex]?.title]}
      `}
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
                                <Link to="/coming-soon">
                                    <img
                                        src={comp.image}
                                        alt={comp.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </Link>
                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link to="/coming-soon">
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
                            className="text-center mb-6 inline-block w-full"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: '40px',
                                lineHeight: '100%',
                                textAlign: 'center',
                                background: 'linear-gradient(180deg, #1D1D1D 40.38%, #FFFFFF 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            COMPETITIONS
                        </h2>

                        <div className="flex flex-col gap-12">
                            {competitions.map((comp, idx) => (
                                <Link to="/coming-soon" key={idx}>
                                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src={comp.image}
                                            alt={comp.title}
                                            className="w-full h-[350px] object-cover"
                                        />
                                        <div
                                            className="absolute bottom-3 right-3 text-white text-lg font-bold px-4 py-1 rounded-full backdrop-blur-md border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(80,80,80,0.2), rgba(50,50,50,0.08))',
                                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                            }}
                                        >
                                            {comp.title}
                                        </div>

                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}