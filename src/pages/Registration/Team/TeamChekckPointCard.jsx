import React, { useState } from "react";
import bgImg1 from '../../../data/Asset 2 1.png'; 
import bgImg2 from '../../../data/Asset 2 2.png';// adjust path as needed

export default function TeamRegistrationForm() {
    const [regId, setRegId] = useState("");

    return (
        <div className="mt-[20px] bg-[#f4f7ff] flex flex-col items-center justify-center">
            {/* 🖥️ Desktop & Tablet View */}
            <div
                className="hidden md:flex rounded-3xl shadow-xl overflow-hidden w-[850px] h-[505px] flex-row"
                style={{
                    backgroundImage: `url(${bgImg1})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                {/* Right side content */}
                <div className="ml-auto flex flex-col justify-center items-center w-[60%] h-[90%]">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 text-center mb-2">
                        Enter your School Registration ID
                    </h3>
                    <p className="text-sm text-gray-500 text-center mb-6">
                        This ID is provided after your school completes registration.
                    </p>

                    <input
                        type="text"
                        value={regId}
                        onChange={(e) => setRegId(e.target.value.toUpperCase())}
                        maxLength={9}
                        placeholder="APGNT001"
                        className="text-center tracking-widest font-bold text-lg md:text-xl border border-gray-300 rounded-md px-6 py-3 w-60 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="button"
                        className="bg-[#2C4EDC] hover:bg-[#1e39a6] text-white font-semibold text-sm px-8 py-2 rounded shadow transition duration-200"
                    >
                        VERIFY
                    </button>
                </div>
            </div>

            <div className=" md:hidden lg:hidden relative w-full min-h-[570px] bg-[#ffffff] overflow-hidden flex flex-col items-center justify-start pt-10 px-4">

                {/* ✅ Background Image absolutely placed */}
                <img
                    src={bgImg2}
                    alt="rocket"
                    className="absolute bottom-0 left-0 w-full h-[400px] object-contain pointer-events-none select-none"
                    style={{ zIndex: 0 }}
                />

                {/* ✅ Foreground Form Content */}
                <div className="relative flex flex-col items-center w-full max-w-sm">
                    <h3 className="text-[18px] font-bold text-gray-800 text-center mb-1">
                        Enter your School Registration ID
                    </h3>
                    <p className="text-xs text-gray-500 text-center mb-6">
                        This ID is provided after your school completes registration.
                    </p>

                    <input
                        type="text"
                        value={regId}
                        onChange={(e) => setRegId(e.target.value.toUpperCase())}
                        maxLength={9}
                        placeholder="APGNT001"
                        className="
        text-center font-extrabold text-[28px] tracking-[0.5em] text-[#2C4EDC]
        bg-transparent border-none outline-none
        w-[90vw] max-w-xs mb-2
        placeholder:text-[#2C4EDC]/60
      "
                    />
                    <div className="w-[90vw] max-w-xs border-b-4 border-[#2C4EDC] mb-4" />

                    <button
                        type="button"
                        className="bg-[#2C4EDC] hover:bg-[#1e39a6] text-white font-semibold text-base px-14 py-2 rounded shadow transition duration-200"
                    >
                        VERIFY
                    </button>
                </div>
            </div>



        </div>
    );
}
