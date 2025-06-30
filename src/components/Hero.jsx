import Plus from '../data/Plus.png';
import space1 from '../data/space1.jpg';
import space2 from '../data/space2.jpg';
import space3 from '../data/space3.jpg';
import space4 from '../data/space4.jpg';

export default function Hero() {
  const slides = [
    {
      title: "Space Camp 2025",
      image: space1
    },
    {
      title: "Rocket Building Workshop",
      image: space2
    },
    {
      title: "Stargazing Night Event",
      image: space3
    },
    {
      title: "Space Exploration",
      image: space4
    },
  ];

  // Duplicate slides 3x for ultra-wide screens (adjust as needed)
  const repeatedSlides = [...slides, ...slides, ...slides];

  return (
    <section
      className="flex flex-col     items-center text-center px-0 pt-20 pb-0 sm:pb-8 sm:p-10 lg:p-16 min-h-[70vh] sm:min-h-[500px] lg:min-h-[400px] justify-start sm:justify-center relative"
      style={{
        background: 'radial-gradient(97.27% 97.27% at 50% 0%, #F5F8FF 47.23%, #307DE3 67.54%, #2054CC 76.56%, #112481 87.85%, #040521 100%)',
        // background: 'radial-gradient(97.27% 97.27% at 50% 0%, #F5F8FF 45%, #AAAAAA 60%, #909090 75%, #525252 85%, #000000 100%)'
      }}
    >
      {/* Heading */}
      <h1 className="text-4xl pt-[50px] sm:text-5xl lg:text-6xl lg:mt-[-15px] sm:mt-[-0px] md:mt-10 mb-3 sm:mb-5 text-[#050728] font-poppins leading-tight">
        The Future of <span className="text-[#112481]">Space</span> <br className="hidden sm:block" /> Starts with You
      </h1>

      <img
        src={Plus}
        alt="plus"
        className="absolute w-8 sm:w-12 md:w-12 h-8 sm:h-12 md:h-12 z-10 right-4 sm:right-6 md:right-24 top-24 md:top-36"
      />

      <img
        src={Plus}
        alt="plus"
        className="absolute  w-8 sm:w-12 md:w-12 h-8 sm:h-12 md:h-12 z-5 left-12 sm:left-6 md:left-24 top-10 md:top-96"
      />

      <p className="mb-4 sm:mb-6 font-poppins text-sm sm:text-base sm:whitespace-normal text-ellipsis max-w-[90vw] sm:max-w-md text-[#050728] px-2">
        Fun, hands-on projects for young minds passionate about space, science, and engineering.
      </p>

      <a
        href="#event"
        className="px-5 py-3 lg:mb-[-2px] sm:mb-4 mt-[10px] font-poppins text-white font-medium text-sm sm:text-xs rounded-full shadow-md hover:opacity-80 transition"
        style={{
          background: 'radial-gradient(60.83% 66.41% at 51.25% 105.71%, #185FFF 0%, #5989FF 100%)'
        }}
      >
        Register now
      </a>

      {/* INFINITE LOOPING CAROUSEL */}
      <div className="w-screen    sm:mb-10 overflow-hidden mt-10 ">
        <div 
          className="flex items-center gap-6 sm:gap-8  md:gap-10 lg:gap-12 marquee-track"
          style={{
            width: 'max-content',
            animation: 'marquee 30s linear infinite'
          }}
        >
          {repeatedSlides.map((slide, idx) => (
            <div
              key={idx}
              className="
                relative bg-white rounded-3xl shadow-lg border border-gray-200 mx-2
                overflow-hidden
                w-[300px] h-[240px]
                md:w-[400px] md:h-[320px]
                lg:w-[1400px] lg:h-[440px]
                flex-shrink-0
              "
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              {/* Optional: Overlay Title */}
              <div className="absolute bottom-0  left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-4">
                <span className="text-white text-xs sm:text-base md:text-lg font-semibold">{slide.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for infinite loop and pause on hover */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}