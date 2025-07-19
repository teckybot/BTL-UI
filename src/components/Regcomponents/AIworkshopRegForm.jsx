import React from 'react';
import img from '../../data/BotExpo/botexpo_registration.png';
import mbimg from '../../data/BotExpo/botexpo_registration_mobile.png';
import RegistrationCard from '../Regcomponents/AIRegistrationCard';

const AIworkshopRegForm = () => {
    return (
        <section className="w-full min-h-screen flex flex-col md:flex-row relative mb-8 md:mb-0">
            {/*Image with Overlays */}
            {/* Desktop Image Section */}
            <div
                className="hidden md:block relative w-full md:w-[140%] h-[450px] md:h-auto bg-cover bg-center"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-[15%] left-[40%] -translate-x-1/2 text-center text-white px-4">
                        <h2 className="text-[55px] font-bold tracking-wide">REGISTER NOW</h2>
                    </div>
                    <div className="absolute bottom-[7%] left-[38%] -translate-x-1/2 flex justify-between items-center w-[80vw] max-w-md bg-[rgba(172,197,172,0.25)] backdrop-blur-sm px-10 py-4 rounded-2xl text-white text-center">
                        <div className="flex flex-col items-center text-left">
                            <div className="text-6xl font-bold">AI</div>
                            <div className="text-4xl font-semibold mt-1">WORKSHOP</div>
                        </div>
                        <div className="flex flex-col items-center text-right leading-tight">
                            <div className="text-3xl font-semibold">2nd</div>
                            <div className="text-3xl font-semibold">Aug</div>
                            <div className="text-3xl font-medium">2025</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Image Section */}
            <div
                className="block md:hidden relative w-full h-[450px] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${mbimg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-center text-white px-4">
                        <h2 className="text-[36px] font-bold tracking-wide">REGISTER NOW</h2>
                    </div>
                    <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 flex justify-between items-center w-[90vw] max-w-xs bg-[rgba(172,197,172,0.25)] backdrop-blur-sm px-6 py-3 rounded-2xl text-white text-center">
                        <div className="flex flex-col items-center text-left">
                            <div className="text-2xl font-bold">AI</div>
                            <div className="text-lg font-semibold mt-1">WORKSHOP</div>
                        </div>
                        <div className="flex flex-col items-center text-right leading-tight">
                            <div className="text-lg font-semibold">2nd</div>
                            <div className="text-md font-semibold">Aug</div>
                            <div className="text-md font-medium">2025</div>
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
