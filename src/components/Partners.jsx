import "swiper/css";
import "swiper/css/autoplay";
import google from "../data/partners/Googlelogo.png";
import intel from "../data/partners/intellogo.png";
import cisco from "../data/partners/ciscologo.png";
import amazon from "../data/partners/amazonlogo.png";
import sony from "../data/partners/sonylogo.png";
import samsung from "../data/partners/samsunglogo.png";
import tesla from "../data/partners/teslalogo.png";
import verizon from "../data/partners/verizonlogo.png";
import oracle from "../data/partners/oraclelogo.png";
import pwc from "../data/partners/pwclogo.png";

export default function PartnersSection() {
  const partners = [
    { src: google, alt: "Google" },
    { src: intel, alt: "Intel" },
    { src: cisco, alt: "Cisco" },
    { src: amazon, alt: "Amazon" },
    { src: sony, alt: "Sony" },
    { src: samsung, alt: "Samsung" },
    { src: tesla, alt: "Tesla" },
    { src: verizon, alt: "Verizon" },
    { src: oracle, alt: "Oracle" },
    { src: pwc, alt: "PwC" },
  ];

  return (
    <div className="bg-white px-4 sm:px-10 py-12">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[#0f172a] mb-12">
        Esteemed Partners
      </h2>

      {/* Static Partner Logos Grid */}
      <div className="flex flex-col items-center gap-10 md:gap-20 mb-20">
        {/* First row (first 5 partners) */}
        <div className="flex justify-center items-center flex-wrap gap-6 sm:gap-10 md:gap-16">
          {partners.slice(0, 5).map((logo, i) => (
            <div
              key={`static-${i}`}
              className="flex items-center justify-center bg-white shadow-md px-4 sm:px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Second row (remaining partners) */}
        <div className="flex justify-center items-center flex-wrap gap-6 sm:gap-10 md:gap-16">
          {partners.slice(5).map((logo, i) => (
            <div
              key={`static-${i + 5}`}
              className="flex items-center justify-center bg-white shadow-md px-4 sm:px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animated Scrolling Marquee */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <div className="flex items-center justify-start h-32 sm:h-40 md:h-[300px] overflow-hidden bg-gray-50 py-8">
          {/* First scroll row */}
          <div className="flex animate-partner-scroll">
            {partners.map((logo, index) => (
              <div
                key={`scroll-${index}`}
                className="w-[140px] sm:w-[180px] md:w-[300px] h-[80px] sm:h-[100px] md:h-[200px] bg-white rounded-2xl md:rounded-3xl shadow-md border border-gray-200 mx-6 sm:mx-10 flex items-center justify-center p-4 hover:shadow-lg transition-all"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-[80%] max-w-[80%] object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicated row for seamless looping */}
          <div className="flex animate-partner-scroll" aria-hidden="true">
            {partners.map((logo, index) => (
              <div
                key={`scroll-dupe-${index}`}
                className="w-[140px] sm:w-[180px] md:w-[300px] h-[80px] sm:h-[100px] md:h-[200px] bg-white rounded-2xl md:rounded-3xl shadow-md border border-gray-200 mx-6 sm:mx-10 flex items-center justify-center p-4"
              >
                <img
                  src={logo.src}
                  alt=""
                  className="max-h-[80%] max-w-[80%] object-contain grayscale"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add this to your global CSS */}
      <style jsx global>{`
        @keyframes partner-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-partner-scroll {
          animation: partner-scroll 30s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-partner-scroll {
            animation: partner-scroll 40s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}