import React from 'react';
import teckybotLogo from '../data/BotExpo/tempImageZpIuDh 1.png';
import linkedinIcon from '../data/BotExpo/linkedin 1.png';
import youtubeIcon from '../data/BotExpo/youtube 1.png';
import facebookIcon from '../data/BotExpo/facebook-2 1.png';
import instagramIcon from '../data/BotExpo/instagram.png';

const Bot_Expo_Footer = () => {
     return (
          <footer className="bg-[#F4E5CC] py-12 px-6">
               <div className="max-w-[900px] mx-auto flex flex-col md:flex-row justify-between gap-10">
                    {/* Left - Logo and Contact */}
                    <div className="flex flex-col gap-5">
                         <img src={teckybotLogo} alt="Teckybot Logo" className="w-[180px] mt-[60px]" />
                         <p className="text-lg font-semibold">Contact no : <span className="font-normal">8886122885</span><br />
                         Email : <span className="font-normal">info@teckybot.com</span></p>
                    </div>

                    {/* Right - Address */}
                    <div className='mb-[60px]'>
                         <p className="text-[20px] font-semibold mb-4">Address</p>
                         <p className="text-[18px] leading-relaxed">
                              Dr No 1, 20/1,<br />
                              Juttada Rd,<br />
                              Pulaganipalem,<br />
                              Pendurthi,<br />
                              Visakhapatnam,<br />
                              Andhra Pradesh - 531143
                         </p>
                    </div>
               </div>

               {/* Social Icons */}
               <div className="mt-12 flex justify-center gap-[140px]">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
                    <img src={youtubeIcon} alt="YouTube" className="w-11 h-11" />
                    <img src={facebookIcon} alt="Facebook" className="w-10 h-10" />
                    <img src={instagramIcon} alt="Instagram" className="w-10 h-10" />
               </div>
          </footer>
     );
};

export default Bot_Expo_Footer;
