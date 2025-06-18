
import { useState, useEffect } from 'react';
import Plus from '../data/Plus.png';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Space Camp 2025",
      image: "https://images.unsplash.com/photo-1612285127145-5c4b9f1d7d5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Rocket Building Workshop",
      image: "https://images.unsplash.com/photo-1612285127145-5c4b9f1d7d5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Stargazing Night Event",
      image: "https://images.unsplash.com/photo-1598312889421-9d60a4927b53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    },
  ];

  // Auto-scroll slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      className="flex flex-col items-center text-center px-4 pt-20 pb-0 sm:pb-8 sm:p-10 lg:p-16 min-h-[70vh] sm:min-h-[500px] lg:min-h-[400px] justify-start sm:justify-center relative"
      style={{
        background: 'radial-gradient(97.27% 97.27% at 50% 0%, #F5F8FF 47.23%, #307DE3 67.54%, #2054CC 76.56%, #112481 87.85%, #040521 100%)'
      }}
    >
      {/* Heading with responsive sizing and spacing */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl lg:mt-[-15px] sm:mt-[-0px] md:mt-10 mb-3 sm:mb-5 text-[#050728] font-poppins leading-tight">
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
        className="absolute w-8 sm:w-12 md:w-12 h-8 sm:h-12 md:h-12 z-10 left-5 sm:left-6 md:left-24 top-[20rem] md:top-96"
      />

      {/* Paragraph - single line on mobile, multi-line on desktop */}
      <p className="mb-4 sm:mb-6 font-poppins text-sm sm:text-base sm:whitespace-normal text-ellipsis max-w-[90vw] sm:max-w-md text-[#050728] px-2">
        Fun, hands-on projects for young minds passionate about space, science, and engineering.
      </p>

      {/* Register Button */}
      <a
        href="#event"
        className="px-5 py-3 lg:mb-[-2px] sm:mb-4 mt-[10px] font-poppins text-white font-medium text-sm sm:text-xs rounded-full shadow-md hover:opacity-80 transition"
        style={{
          background: 'radial-gradient(60.83% 66.41% at 51.25% 105.71%, #185FFF 0%, #5989FF 100%)'
        }}
      >
        Register now
      </a>

      {/* Carousel - adjusted margins */}
      <div className="w-full max-w-8xl overflow-hidden rounded-xl sm:rounded-3xl mt-[45px] sm:mt-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-48 sm:h-96 relative"
              style={{
                background: `url(${slide.image}) no-repeat center center / cover`,
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0, 0, 0, 0.4)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl sm:text-3xl lg:text-4xl text-white font-poppins font-semibold px-4 text-center">
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots - centered */}
      <div className="flex justify-center space-x-2 mt-4 sm:mt-6 mb-2 sm:mb-0">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-2 sm:h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-[#050728]' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}