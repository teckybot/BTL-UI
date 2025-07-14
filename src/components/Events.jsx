import React, { useMemo } from "react";
import globe from "../data/All/globe.png";
import rocket from "../data/All/rockettime.png";
import star from "../data/All/star2.png";
import starAlt from "../data/All/star3.png";

export default function EventsTimeline() {
  const events = [
    { date: "13 July 2025", title: "Releasing problem statement", desc: "Exciting tech challenges will be unveiled. Participants can begin brainstorming their tech solutions." },
    { date: "15 July 2025", title: "Registrations open", desc: "Schools will be invited to nominate their teams. Participants can start enrolling for the competitions." },
    { date: "11 Aug 2025", title: "Registration close", desc: "Enrollment will end after the registration deadline. No entries will be accepted beyond the cut-off." },
    { date: "17 Aug 2025", title: "Qualifier level close", desc: "All team submissions will be finalized and reviewed. No edits or uploads will be allowed post deadline." },
    { date: "24 Aug 2025", title: "Results of Qualifier level", desc: "Selected teams will move forward to the grand stage. Results will be officially published after evaluation." },
    { date: "14 Sep 2025", title: "Finale", desc: "Finalists will compete for the BTL championship title, showcasing creativity and teamwork on the grand stage." },
  ];

  const stars = useMemo(() =>
    Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 15 + 10}px`,
      opacity: Math.random() * 0.5 + 0.5,
      image: Math.random() > 0.5 ? star : starAlt, // ✅ alternate between star2 and star3
    })), []);

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden sm:block relative min-h-screen overflow-hidden bg-white">
        {/* Gradient Background Circle */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[110vw] h-[2500px] md:h-[3759px] rounded-full bg-gradient-to-b from-[#2053CA] to-[#092267] z-0" />

        {/* Stars Layer */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {stars.map(starItem => (
            <img
              key={`desktop-star-${starItem.id}`}
              src={starItem.image}
              alt="star"
              className="absolute animate-pulse"
              style={{
                top: starItem.top,
                left: starItem.left,
                width: starItem.size,
                height: starItem.size,
                opacity: starItem.opacity,
              }}
            />
          ))}
        </div>

        {/* Timeline Content */}
        <div className="relative z-20">
          <h2 className="text-center text-blue-800 font-bold md:text-[55px] sm:text-4xl mt-6 mb-8">EVENT TIMELINE</h2>
          <div className="flex justify-center ml-[-28px]">
            <img src={rocket} alt="rocket" className="w-20 md:w-[180px]" />
          </div>

          <div
            className="absolute left-1/2 top-[240px] bottom-[90px] z-10"
            style={{
              transform: "translateX(-50%)",
              width: "20px",
              background: "linear-gradient(180deg, rgb(255, 255, 255) 50%, rgba(255,255,255,0) 100%)",
              borderRadius: "999px",
              filter: "blur(5px)",
              opacity: 0.9,
            }}
          />

          <div className="relative z-20 max-w-4xl mx-auto flex flex-col gap-24 mt-12 pb-[200px]">
            {events.map((event, idx) => (
              <div
                key={`desktop-event-${idx}`}
                className={`relative flex flex-col sm:flex-row items-center w-full ${idx % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
              >
                <div className="w-full sm:w-1/2 flex justify-end sm:justify-start px-5">
                  <div className="relative bg-white rounded-xl p-6 max-w-[600px] w-full shadow-md">
                    <div className="absolute -top-[40px] ml-[-20px] sm:left-6 bg-white px-4 py-1 rounded-full text-sm font-semibold shadow z-10 italic">
                      {event.date}
                    </div>
                    <h3 className="md:text-[18px] sm:text-lg font-bold text-black mb-1">{event.title}</h3>
                    <p className="md:text-[14px] sm:text-base text-gray-800 italic">{event.desc}</p>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 sm:w-60 md:w-72 z-10">
            <img src={globe} alt="globe" className="w-full" />
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="sm:hidden relative min-h-screen overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#2053CA] to-[#092267]" />

        {/* Timeline Content */}
        <div className="relative z-20 pt-12 pb-64 px-5">
          <div className="flex flex-row items-center mb-12 gap-x-4">
            <img src={rocket} alt="rocket" className="w-[110px] ml-[-27px]" />
            <h2 className="text-white text-[30px] font-semibold">EVENT TIMELINE</h2>
          </div>


          <div
            className="absolute left-14  top-[150px] bottom-[90px] z-10"
            style={{
              transform: "translateX(-50%)",
              width: "20px",
              background: "linear-gradient(180deg, rgb(255, 255, 255) 50%, rgba(255,255,255,0) 100%)",
              borderRadius: "999px",
              filter: "blur(5px)",
              opacity: 0.9,
            }}
          />

          <div className="relative z-20 flex flex-col gap-10">
            {events.map((event, idx) => (
              <div key={`mobile-event-${idx}`} className="relative pl-14 py-7">
                <div className="absolute top-[-15px] bg-white px-3 py-1 rounded-full text-xs font-bold italic shadow-md z-20">
                  {event.date}
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <h3 className="text-sm font-bold text-black mb-1">{event.title}</h3>
                  <p className="text-xs text-gray-700 italic">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0  transform -translate-x-1/2 z-20 w-[350px]">
            <img src={globe} alt="globe" className="w-full" />
          </div>
        </div>

      </div>
    </>
  );
}
