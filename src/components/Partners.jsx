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
    google,
    intel,
    cisco,
    amazon,
    sony,
    samsung,
    tesla,
    verizon,
    oracle,
    pwc,
  ];

  return (
    <div className="bg-[#f5faff]  px-4 sm:px-10">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[#0f172a] mb-12">
        Esteemed Partners
      </h2>

      {/* Partner Logos */}
      <div className="flex flex-col items-center gap-10 md:gap-20">
        {/* First row (first 5 partners) */}
        <div className="flex justify-center items-center flex-wrap gap-6 sm:gap-10 md:gap-16">
          {partners.slice(0, 5).map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-white shadow-md px-4 sm:px-6 py-3 rounded-lg"
            >
              <img
                src={logo}
                alt={`partner-${i}`}
                className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Second row (remaining partners) */}
        <div className="flex justify-center items-center flex-wrap gap-6 sm:gap-10 md:gap-16">
          {partners.slice(5).map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-white shadow-md px-4 sm:px-6 py-3 rounded-lg"
            >
              <img
                src={logo}
                alt={`partner-${i + 5}`}
                className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>


      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10">
        <div className="flex items-center justify-start h-32 sm:h-40 md:h-[300px] overflow-hidden">
          {/* First scroll row */}
          <div className="flex animate-partner-scroll">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="w-[140px] sm:w-[180px] md:w-[300px] h-[80px] sm:h-[100px] md:h-[200px] bg-white rounded-2xl md:rounded-3xl shadow-md border border-gray-200 mx-6 sm:mx-10 flex items-center justify-center"
              >
                {/* Future logo/image here */}
              </div>
            ))}
          </div>
          <div className="flex animate-partner-scroll" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={`dupe-${index}`}
                className="w-[140px] sm:w-[180px] h-[80px] sm:h-[100px] bg-white rounded-2xl md:rounded-3xl shadow-md border border-gray-200 mx-6 sm:mx-10 flex items-center justify-center"
              >
                {/* Future logo/image here */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
