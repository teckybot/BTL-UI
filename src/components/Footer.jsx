import BTL_LOGO from "../data/All/BTL2025_logo.png";
import Facebook from "../data/All/Facebook.png";
import Instagram from "../data/All/Instagram.png";
import Linkedin from "../data/All/Linkedin.png";
import Youtube from "../data/All/Youtube.png";
import Teckybotlogo from '../data/All/Teckybot TM_Inv.png'
const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(95% 130% at 50% 0%, #040521 50%, #092267 70%, #2053CA 85%,rgb(94, 143, 255) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* Logo (Mobile) and "Where innovation Meets Space" text */}
        <div className="block sm:hidden mb-8 lg:h-24 lg:pl-[-25px] w-full flex-col justify-center md:justify-start">
          <img
            src={BTL_LOGO}
            alt="BTL Logo"
            className="h-48 pl-[75px] w-auto object-contain"
          />
        </div>

        {/* MOBILE LAYOUT */}
        <div className="sm:hidden w-full mb-6">
          <div className="grid grid-cols-2 gap-6 text-sm">
            {/* Left Column: Explore Links */}
            <div className="flex flex-col space-y-3 pl-10">
              <h3 className="font-semibold text-white">Explore</h3>
              <a href="/" className="hover:underline text-gray-300">Home</a>
              <a href="/Aboutus" className="hover:underline text-gray-300">About BTL</a>
              <a href="/Competitions" className="hover:underline text-gray-300">Competitions</a>
              <a href="/registration/school" className="hover:underline text-gray-300">Registration</a>
              <a href="/gallery" className="hover:underline text-gray-300">Gallery</a>
              <a href="/contactus" className="hover:underline text-gray-300">Contact us</a>
            </div>

            {/* Right Column: Address Items */}
            <div className="flex flex-col space-y-3">
              <div>
                <h3 className="font-semibold text-white">Address</h3>
                <p className="text-gray-300 mt-1">
                  Dr.NO:1,20/1, Juttada Rd, Pulaganipalem, Visakapatanam, Andhra Pradesh, 531143.
                </p>
                <h4 className="font-semibold text-white pt-3">Any Queries </h4>
                <p> Email: <a href="btl@teckybot.com" className="text-gray-300 hover:underline">btl@teckybot.com</a></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 pt-6 text-sm pl-[75px] w-full sm:w-auto sm:min-w-[150px] lg:mt-10">
            <h3 className="font-normal text-white pl-12">Powered by</h3>
            <img src={Teckybotlogo} alt="Teckybot Logo" className="w-48 h-auto" />
          </div>

        </div>

        {/* DESKTOP LAYOUT */}
        <div className="relative hidden lg:mt-[60px] sm:flex w-full justify-between flex-wrap gap-y-10">
          
          {/* BTL Logo Section and "Where innovation Meets Space" */}
          <div className="flex flex-col space-y-3 text-sm w-full sm:w-auto sm:min-w-[150px]">
            <img
              src={BTL_LOGO}
              alt="BTL Logo"
              className="h-22 sm:h-20 md:h-32 lg:h-80 lg:-mt-12 lg:pl-14 w-auto object-contain"
            />
          </div>

          {/* Powered by Section (Teckybot Logo and text) */}
          <div className="flex flex-col space-y-3 text-sm w-full sm:w-auto sm:min-w-[150px] lg:mt-10">
            <h3 className="font-normal text-white md:pl-12">Powered by</h3>
            <img src={Teckybotlogo} alt="Teckybot Logo" className="w-48 h-auto" />
          </div>
          
          {/* Quick Links Section */}
          <div className="flex flex-col space-y-3 text-sm w-full sm:w-auto sm:min-w-[150px]">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <a href="/" className="hover:underline text-gray-300">Home</a>
            <a href="/Aboutus" className="hover:underline text-gray-300">About BTL</a>
            <a href="/Competitions" className="hover:underline text-gray-300">Competitions</a>
            <a href="/registration/school" className="hover:underline text-gray-300">Registration</a>
            <a href="/gallery" className="hover:underline text-gray-300">Gallery</a>
            <a href="/contactus" className="hover:underline text-gray-300">Contact us</a>
          </div>

          {/* Address 1 Section */}
          <div className="flex flex-col space-y-3 text-sm w-full sm:w-auto sm:min-w-[150px] lg:pr-14">
            <h3 className="font-semibold text-white">Address - 1</h3>
            <p className="text-gray-300 text-[13px] ">
              Dr.NO:1,20/1, Juttada Rd, <br />Pulaganipalem,<br /> Visakapatanam, <br />Andhra Pradesh, 531143.
            </p>
            <h4 className="font-semibold text-white md:pt-10">Any Queries </h4>
            <p className="text-gray-300 text-[13px]">Email: <a href="btl@teckybot.com" className="text-gray-300 hover:underline">btl@teckybot.com</a></p>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="mt-6 w-full flex flex-col items-center">
          {/* Divider with text */}
          <div className="w-full flex items-center justify-center my-6">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-white" />
            <span className="mx-4 text-sm sm:text-base text-white whitespace-nowrap">
              Follow us
            </span>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-white" />
          </div>

          {/* Icons */}
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            <a href="https://www.facebook.com/teckybot" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <img src={Facebook} alt="Facebook" className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a href="https://www.instagram.com/bharatteckleague/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <img src={Instagram} alt="Instagram" className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a href="https://www.linkedin.com/company/teckybot" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition">
              <img src={Linkedin} alt="LinkedIn" className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a href="https://www.youtube.com/@teckybot23" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-80 transition">
              <img src={Youtube} alt="YouTube" className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
          </div>
        </div>
        {/* BTL 2025 - SEASON S2 banner (Full width, added based on image) */}
      <div className="w-full text-center py-8 font-bold text-white text-3xl">
        BTL 2025 - <span className="font-normal">SEASON S2</span>
      </div>

      </div>

      
      {/* Copyright text (Bottom left, added based on image) */}
      <div className="absolute pl-6 md:pl-0 bottom-4 left-4 text-xs text-white font-normal">
        © 2025 Bharat Teck League. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;