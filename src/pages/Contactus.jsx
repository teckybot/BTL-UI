
import bgImageLg from '../data/All/BTL_contact_us.jpg';
import bgImageSm from '../data/All/contact us_BTL.png';
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <>
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

        {/* Content (Heading and Contact Cards) */}
        <div className="relative z-10 flex flex-col items-center lg:items-start justify-start pt-20 px-4 md:px-24 md:pl-40 w-full min-h-screen">
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
              <p className="text-sm font-poppins mt-[-10px] mb-4">Coordinator</p>
              <h3
                // Applied responsive font size classes: text-2xl for mobile, md:text-[30px] for larger screens
                className="font-poppins mb-4 font-semibold text-2xl md:text-[30px] lg:text-[30px]"
                style={{
                  lineHeight: '100%',
                }}
              >
                M. SRIPOUSHYA
              </h3>
              {/* Added <a> tag with tel: URI to make the phone number clickable */}
              <a href="tel:+918886122889" className="inline-block">
                <div
                  // Applied responsive font size classes: text-2xl for mobile, md:text-[30px] for larger screens
                  className="inline-block px-4 py-2 rounded-md font-semibold text-black text-2xl md:text-[30px] lg:text-[30px]"
                  style={{
                    background: 'linear-gradient(270deg, #C5E8F5 0%, #E7EEFF 100%)',
                    fontWeight: 600,
                    lineHeight: '100%',
                  }}
                >
                  +91 88861 22889
                </div>
              </a>
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
              <p className="text-sm font-poppins mt-[-10px] mb-4">Coordinator</p>
              <h3
                // Applied responsive font size classes: text-2xl for mobile, md:text-[30px] for larger screens
                className="font-poppins mb-4 font-semibold text-2xl md:text-[30px] lg:text-[30px]"
                style={{
                  lineHeight: '100%',
                }}
              >
                CH. JOSHINI
              </h3>
              {/* Added <a> tag with tel: URI to make the phone number clickable */}
              <a href="tel:+919000555885" className="inline-block">
                <div
                  // Applied responsive font size classes: text-2xl for mobile, md:text-[30px] for larger screens
                  className="inline-block px-4 py-2 rounded-md font-semibold text-black text-2xl md:text-[30px] lg:text-[30px]"
                  style={{
                    background: 'linear-gradient(270deg, #C5E8F5 0%, #E7EEFF 100%)',
                    fontWeight: 600,
                    lineHeight: '100%',
                  }}
                >
                  +91 90005 55885
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}