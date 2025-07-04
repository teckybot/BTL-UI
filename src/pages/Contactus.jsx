import React from 'react';
import bgImageLg from '../data/contactusbg.jpg'; // Your original background for large screens
import bgImageSm from '../data/contactmobile.png'; // Your mobile background image

export default function ContactUs() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background images with responsive switching */}
      <div 
        className="absolute inset-0 bg-cover bg-center lg:hidden"
        style={{ backgroundImage: `url(${bgImageSm})` }}
      />
      <div 
        className="absolute inset-0 bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${bgImageLg})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center lg:items-start justify-start pt-20 px-4 md:px-24 w-full min-h-screen">
        {/* Gradient Heading - Centered on all screens, left-aligned on large */}
        <h1
          className="text-center lg:text-left text-[40px] md:text-[70px] font-bold font-poppins leading-none mt-[65px] mb-10 rounded-xl px-4 py-2"
          style={{
            background: 'linear-gradient(270deg, #A8DCFF 0%, #FFFFFF 50%, #A8DCFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          CONTACT US
        </h1>

        {/* Cards Container - Centered on small screens */}
        <div className="flex flex-col gap-9 z-10 items-center lg:items-start w-full max-w-[400px] lg:max-w-none">
          {/* Contact Card 1 */}
          <div
            className="w-full sm:w-[400px] h-[180px] rounded-[20px] px-6 py-8 backdrop-blur-[8px] border text-white"
            style={{
              background: '#FFFFFF1A',
              border: '0.5px solid',
              borderImageSlice: 1,
            }}
          >
            <p className="text-sm font-poppins mt-[-10px] mb-4">coordinator</p>
            <h3
              className="font-poppins mb-4"
              style={{
                fontWeight: 600,
                fontSize: '30px',
                lineHeight: '100%',
              }}
            >
              M. SRIPOUSHYA
            </h3>
            <div
              className="inline-block px-4 py-2 rounded-md font-semibold text-black"
              style={{
                background: 'linear-gradient(270deg, #C5E8F5 0%, #E7EEFF 100%)',
                fontSize: '30px',
                fontWeight: 600,
                lineHeight: '100%',
              }}
            >
              +91 88861 22889
            </div>
          </div>

          {/* Contact Card 2 */}
          <div
            className="w-full sm:w-[400px] h-[180px] rounded-[20px] px-6 py-8 backdrop-blur-[8px] border text-white"
            style={{
              background: '#FFFFFF1A',
              border: '0.5px solid',
              borderImageSlice: 1,
            }}
          >
            <p className="text-sm font-poppins mt-[-10px] mb-4">coordinator</p>
            <h3
              className="font-poppins mb-4"
              style={{
                fontWeight: 600,
                fontSize: '30px',
                lineHeight: '100%',
              }}
            >
              CH. JOSHINI
            </h3>
            <div
              className="inline-block px-4 py-2 rounded-md font-semibold text-black"
              style={{
                background: 'linear-gradient(270deg, #C5E8F5 0%, #E7EEFF 100%)',
                fontSize: '30px',
                fontWeight: 600,
                lineHeight: '100%',
              }}
            >
              +91 90005 55885
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}