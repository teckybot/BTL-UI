
import BTL_LOGO from "../data/btl_logo.png";
import Facebook from "../data/Facebook.png";
import Instagram from "../data/Instagram.png";
import Linkedin from "../data/Linkedin.png";
import Youtube from "../data/Youtube.png";

const Footer = () => {
  return (
    <footer className="relative text-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(113.74% 101.12% at 50% 0%, #040521 50%, #092267 70%, #2053CA 85%, #F5F8FF 100%)",
        }}
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-6">
        {/* Logo */}
        <div className="mb-8 md:-ml-5 flex justify-center sm:justify-start">
          <img
            src={BTL_LOGO}
            alt="BTL Logo"
            className="h-16 sm:h-14 md:h-24 object-contain"
          />
        </div>

        {/* Navigation & Address Sections */}
        <div className="flex flex-col sm:hidden w-full mb-10">
          <div className="grid grid-cols-2 gap-x-4 text-sm">
            {/* Left Column: Explore Links */}
            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:underline">About BTL</a>
              <a href="#" className="hover:underline">Events</a>
              <a href="#" className="hover:underline">Gallery</a>
              <a href="#" className="hover:underline">Contact us</a>
            </div>

            {/* Right Column: Address Items */}
            <div className="flex flex-col space-y-3 text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">Address - 1</h3>
              </div>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address - 2</h3>
              </div>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden sm:flex w-full justify-between flex-wrap gap-y-10 gap-x-12">
          {/* Explore */}
          <div className="flex flex-col space-y-2 text-sm min-w-[150px]">
            <h3 className="font-semibold mb-1">Explore</h3>
            <a href="#" className="hover:underline">About BTL</a>
            <a href="#" className="hover:underline">Events</a>
            <a href="#" className="hover:underline">Gallery</a>
            <a href="#" className="hover:underline">Contact us</a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2 text-sm min-w-[150px]">
            <h3 className="font-semibold mb-1">Quick Links</h3>
            <a href="#" className="hover:underline">About BTL</a>
            <a href="#" className="hover:underline">Events</a>
            <a href="#" className="hover:underline">Gallery</a>
            <a href="#" className="hover:underline">Contact us</a>
          </div>

          {/* Address 1 */}
          <div className="flex flex-col space-y-2 text-sm max-w-sm">
            <h3 className="font-semibold mb-1">Address - 1</h3>
            <p className="text-gray-300 leading-snug break-words">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Address 2 */}
          <div className="flex flex-col space-y-2 text-sm max-w-sm">
            <h3 className="font-semibold mb-1">Address - 2</h3>
            <p className="text-gray-300 leading-snug break-words">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="my-12 w-full flex flex-col items-center">
          {/* Divider with text */}
          <div className="w-full flex items-center justify-center my-6">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-white" />
            <span className="mx-4 text-sm sm:text-base text-white whitespace-nowrap">
              Follow us
            </span>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-white" />
          </div>

          {/* Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-32">
            <a href="#" aria-label="Facebook" className="hover:opacity-80 transition">
              <img src={Facebook} alt="Facebook" className="h-6 w-6 sm:h-5 sm:w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80 transition">
              <img src={Instagram} alt="Instagram" className="h-6 w-6 sm:h-5 sm:w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition">
              <img src={Linkedin} alt="LinkedIn" className="h-6 w-6 sm:h-5 sm:w-5" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80 transition">
              <img src={Youtube} alt="YouTube" className="h-6 w-6 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-10 text-center text-3xl sm:text-4xl md:text-8xl font-extrabold tracking-wide text-white leading-none px-2">
          BHARAT TECK LEAGUE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
