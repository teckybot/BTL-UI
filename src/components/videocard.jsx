import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Plus from "../data/Plus.png";

const videos = [
  {
    title: "Journey Through the Stars",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Rocket Engineering Basics",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Night Sky Observation Tips",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FeaturedVideoSection() {
  const [videoList, setVideoList] = useState(videos);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) slideNext();
    }, 5000); 
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
    <div className="relative bg-[#f5faff] w-full px-4 sm:px-12 py-20 overflow-hidden">
      <img
        src={Plus}
        alt="plus"
        className="absolute w-8 sm:w-12 h-8 sm:h-12 left-8 bottom-8"
      />
      <img
        src={Plus}
        alt="plus"
        className="absolute w-8 sm:w-12 h-8 sm:h-12 right-8 top-8"
      />

      <div
        ref={containerRef}
        className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-8 items-center"
      >
        <motion.div
          className="flex gap-6 items-center w-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <motion.div
            key={videoList[0].title}
            className="relative flex-shrink-0 w-full md:w-[55%] rounded-3xl overflow-hidden shadow-xl"
            initial={{ opacity: 0.8, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={videoList[0].image}
              alt={videoList[0].title}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white/60 backdrop-blur-md rounded-full p-3">
                <svg width="48" height="48" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.6" />
                  <polygon points="10,8 16,12 10,16" fill="#222" />
                </svg>
              </span>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-base sm:text-lg font-medium bg-black/40 px-4 py-2 rounded-xl">
              {videoList[0].title}
            </div>
          </motion.div>

          <div className="flex flex-col justify-between w-full md:w-[45%] gap-6">

            <div className="text-[#0f172a] text-lg sm:text-xl font-medium leading-relaxed">
              Lorem Ipsum has been the industry's
              <br /> standard dummy text ever
            </div>

            <div className="flex gap-4 overflow-hidden">
              {videoList.slice(1).map((video, idx) => (
                <motion.div
                  key={video.title}
                  className="relative flex-1 rounded-2xl overflow-hidden shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 * (idx + 1) }}
                >
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-[160px] sm:h-[180px] object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/60 backdrop-blur-md rounded-full p-2">
                      <svg width="36" height="36" viewBox="0 0 24 24">
                        <circle
                          cx="12"
                          cy="12"
                          r="12"
                          fill="#fff"
                          fillOpacity="0.6"
                        />
                        <polygon points="10,8 16,12 10,16" fill="#222" />
                      </svg>
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white text-sm sm:text-base bg-black/40 px-3 py-1 rounded">
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
