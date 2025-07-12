import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Plus from "../data/All/Plus.png";

const videos = [
  {
    title: "Bharat Teck League 2024",
    url: "https://www.youtube.com/watch?v=zR3Igc3Rhfg",
    image: "https://img.youtube.com/vi/zR3Igc3Rhfg/maxresdefault.jpg",
  },
  {
    title: "Andhra Teck League 2023",
    url: "https://www.youtube.com/watch?v=MukwVizWaSw",
    image: "https://img.youtube.com/vi/MukwVizWaSw/maxresdefault.jpg",
  },
];



export default function FeaturedVideoSection() {
  const [videoList, setVideoList] = useState(videos);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) slideNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [videoList, animating]);

  const slideNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setVideoList((prev) => {
        const newList = [...prev];
        newList.push(newList.shift());
        return newList;
      });
      setAnimating(false);
    }, 1000);
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -50) {
      slideNext();
    }
  };

  return (
    <div className="relative bg-white w-full px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-20 overflow-hidden">
      {/* Plus icons - smaller and pushed back */}
      <img
        src={Plus}
        alt="plus"
        className="absolute w-6 h-6 sm:w-8 sm:h-8 left-4 bottom-4 opacity-40"
      />
      <img
        src={Plus}
        alt="plus"
        className="absolute w-6 h-6 sm:w-8 sm:h-8 right-4 top-4 opacity-40"
      />

      <div
        ref={containerRef}
        className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center"
      >
        <motion.div
          className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 items-center w-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          {/* Main video card */}
          <motion.div
            key={videoList[0].title}
            className="relative flex-shrink-0 w-full md:w-[55%] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl"
            initial={{ opacity: 0.8, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <a href={videoList[0].url} target="_blank" rel="noopener noreferrer">
              <img
                src={videoList[0].image}
                alt={videoList[0].title}
                className="w-full h-[200px] sm:h-[260px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/60 backdrop-blur-md rounded-full p-2 md:p-3">
                  <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.6" />
                    <polygon points="10,8 16,12 10,16" fill="#222" />
                  </svg>
                </span>
              </div>
            </a>

            <div className="absolute bottom-3 left-3 text-white text-sm sm:text-base md:text-lg font-medium bg-black/40 px-3 py-1 rounded-lg">
              {videoList[0].title}
            </div>
          </motion.div>

          {/* Side content - made more compact on mobile */}
          <div className="flex flex-col justify-between w-full md:w-[45%] gap-3 sm:gap-4 md:gap-6">
            <div className="text-[#0f172a] text-sm sm:text-base md:text-lg font-medium px-2 sm:px-0">
              Lorem Ipsum has been the industry's
              <br className="hidden sm:block" /> standard dummy text ever
            </div>

            <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-hidden">
              {videoList.slice(1).map((video, idx) => (
                <motion.div
                  key={video.title}
                  className="relative flex-1 rounded-xl md:rounded-2xl overflow-hidden shadow-sm md:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 * (idx + 1) }}
                >
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-[100px] sm:h-[140px] md:h-[160px] object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white/60 backdrop-blur-md rounded-full p-1.5">
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.6" />
                          <polygon points="10,8 16,12 10,16" fill="#222" />
                        </svg>
                      </span>
                    </div>
                  </a>

                  <div className="absolute bottom-2 left-2 text-white text-xs sm:text-sm bg-black/40 px-2 py-1 rounded">
                    {video.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}