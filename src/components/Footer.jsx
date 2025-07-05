import BTL_LOGO from "../data/BTL2025_Theme PNG 1.png";
import Facebook from "../data/Facebook.png";
import Instagram from "../data/Instagram.png";
import Linkedin from "../data/Linkedin.png";
import Youtube from "../data/Youtube.png";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(113.74% 101.12% at 50% 0%, #040521 50%, #092267 70%, #2053CA 85%,rgb(94, 143, 255) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* Logo */}
        <div className="block sm:hidden mb-8 lg:h-24 lg:pl-[-25px] w-full flex-col justify-center md:justify-start">
          <img
            src={BTL_LOGO}
            alt="BTL Logo"
            className="h-48 pl-28 w-auto object-contain"
          />
        </div>

        {/* MOBILE LAYOUT */}
        <div className="sm:hidden w-full mb-10">
          <div className="grid grid-cols-2  gap-6 text-sm">
            {/* Left Column: Explore Links */}
            <div className="flex flex-col space-y-3 pl-10">
              <h3 className="font-semibold text-white">Explore</h3>
              <a href="/Aboutus" className="hover:underline text-gray-300">About BTL</a>
              <a href="/Competitions" className="hover:underline text-gray-300">Events</a>
              <a href="#" className="hover:underline text-gray-300">Gallery</a>
              <a href="#" className="hover:underline text-gray-300">Contact us</a>
            </div>

            {/* Right Column: Address Items */}
            <div className="flex flex-col space-y-3">
              <div>
                <h3 className="font-semibold text-white">Address - 1</h3>
                <p className="text-gray-300 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:mt-[100px] sm:flex w-full justify-between flex-wrap gap-y-10">
          {/* Explore */}
          <div className="flex flex-col space-y-3 text-sm w-full sm:w-auto sm:min-w-[150px]">
            <img
            src={BTL_LOGO}
            alt="BTL Logo"
            className="h-22 sm:h-20 md:h-32 lg:h-40 lg:pl-16 w-auto object-contain"
          />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3 text-sm w-full sm:w-auto sm:min-w-[150px]">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <a href="/Aboutus" className="hover:underline text-gray-300">About BTL</a>
            <a href="/Competitions" className="hover:underline text-gray-300">Events</a>
            <a href="#" className="hover:underline text-gray-300">Gallery</a>
            <a href="#" className="hover:underline text-gray-300">Contact us</a>
          </div>

          {/* Address 1 */}
          <div className="flex flex-col space-y-3 text-sm w-full sm:w-auto sm:max-w-xs">
            <h3 className="font-semibold text-white">Address - 1</h3>
            <p className="text-gray-300 leading-snug">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

        </div>

        {/* Social Icons Section */}
        <div className="mt-12  w-full flex flex-col items-center">
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
            <a href="#" aria-label="Facebook" className="hover:opacity-80 transition">
              <img src={Facebook} alt="Facebook" className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80 transition">
              <img src={Instagram} alt="Instagram" className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition">
              <img src={Linkedin} alt="LinkedIn" className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80 transition">
              <img src={Youtube} alt="YouTube" className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
          </div>
        </div>

        {/* Footer Text */}
        
      </div>
      <div className="mt-5 w-full text-center">
          <h2 className="text-white font-extrabold tracking-wide leading-tight
                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                        px-2 ">
            BHARAT TECK LEAGUE 2025
          </h2>
        </div>
    </footer>
  );
};

export default Footer;