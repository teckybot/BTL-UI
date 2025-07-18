import React from 'react';
import img from '../../data/BotExpo/botexpo_registration.png';
import RegistrationCard from '../Regcomponents/AIRegistrationCard';

const AIworkshopRegForm = () => {
    return (
        <section className="w-full min-h-screen flex flex-col md:flex-row relative mb-8 md:mb-0">
            {/* Left - Image with Overlays */}
            <div
                className="relative w-[125%] md:w-[140%] h-[450px] md:h-auto bg-cover bg-center"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* REGISTER NOW */}
                <div className="absolute inset-0">
                    {/* REGISTER NOW */}
                    <div className="absolute top-[10%] md:top-[15%] left-[42%] md:left-[40%] -translate-x-1/2 text-center text-white px-4">
                        <h2 className="text-[42px] md:text-[55px] font-bold tracking-wide">
                            REGISTER NOW
                        </h2>
                    </div>

                    {/* AI WORKSHOP & DATE*/}
                    <div className="absolute bottom-[7%] left-[38%] md:left-[38%] -translate-x-1/2 flex justify-between items-center w-[80vw] max-w-72 md:max-w-md bg-[rgba(172,197,172,0.25)] backdrop-blur-sm px-10 py-4 rounded-2xl text-white text-center">
                        {/* Left Column: AI & Workshop */}
                        <div className="flex flex-col items-center text-left">
                            <div className="text-3xl md:text-6xl font-bold">AI</div>
                            <div className="text-xl md:text-4xl font-semibold mt-1">WORKSHOP</div>
                        </div>

                        {/* Right Column: Date */}
                        <div className="flex flex-col items-center text-right leading-tight">
                            <div className="text-xl md:text-3xl font-semibold">2nd</div>
                            <div className="text-lg md:text-3xl font-semibold">Aug</div>
                            <div className="text-lg md:text-3xl font-medium">2025</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Registration Card - Desktop */}
            <div className="hidden md:block absolute top-[55%] -right-12 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] z-10">
                <RegistrationCard />
            </div>

            {/* Registration Card - Mobile */}
            <div className="block md:hidden mt-6 px-4 w-full">
                <RegistrationCard />
            </div>

            {/* Right - Form */}
            <div className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-[rgba(22,86,95,1)] px-6 py-12">
            </div>
        </section>
    );
};

export default AIworkshopRegForm;
