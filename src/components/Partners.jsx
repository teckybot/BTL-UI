import navaras from "../data/partners/Navars.png";
import radius from "../data/partners/Radius.png";
import cretile from "../data/partners/cretile.jpg";
import Vignan from "../data/partners/Vignan.png";
import brainfeed from "../data/partners/Brainfeed.png";
export default function PartnersSection() {
  const partners = [
    { src: navaras, alt: "navaras" },
    { src: radius, alt: "radius" },
    { src: cretile, alt: "cretile" },
    { src: Vignan, alt: "Vignan" },
    { src: brainfeed, alt: "brainfeed" },
  ];

  return (
    <div id="partners-section" className="bg-[#ffffff] px-4 sm:px-10 py-20">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[#0f172a] mb-4">
        Esteemed Partners
      </h2>



      {/* Logos */}
      <div className="flex justify-center items-center flex-wrap gap-8 sm:gap-8">
        {partners.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-6 sm:px-8 py-4 bg-white shadow-md rounded-xl"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-[95px] sm:h-[70px] md:h-[160px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
