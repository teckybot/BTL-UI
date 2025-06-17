import React from "react";
import circle1 from "../data/circle1.png";
import circle2 from "../data/circle2.png";

export default function EventsTimeline() {
  const events = [
    {
      date: "22 June 2025",
      title: "Releasing problem statement",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      side: "right",
    },
    {
      date: "23 June 2025",
      title: "Registrations open",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      side: "left",
    },
    {
      date: "02 Aug 2025",
      title: "Registration close",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      side: "right",
    },
    {
      date: "24 Aug 2025",
      title: "Qualifier level close",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      side: "left",
    },
    {
      date: "31 Aug 2025",
      title: "Results of Qualifier level",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      side: "right",
    },
    {
      date: "14 sep 2025",
      title: "Finale",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      side: "left",
    },

  ];

  return (
    <div className="relative bg-[#f5faff] min-h-screen py-24 px-4 sm:px-10 overflow-hidden">
      <img
        src={circle1}
        alt="decorative"
        className="absolute top-6 right-6 w-[230px] h-[230px] object-contain rotate-12 pointer-events-none select-none"
      />
      <img
        src={circle2}
        alt="decorative"
        className="absolute bottom-6 left-6 w-[260px] h-[260px] object-contain -rotate-12 pointer-events-none select-none"
      />

      <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-20 text-[#0f172a]">
        Events Timeline
      </h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-gradient-to-b from-blue-500 to-blue-300 z-0 rounded-full" />

        <div className="flex flex-col gap-16 relative z-10">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center w-full">
              {event.side === "left" && (
                <>
                  <div className="hidden sm:block sm:w-1/2 text-right pr-6">
                    <div className="inline-block text-sm font-semibold bg-white px-4 py-1 rounded-full shadow mb-2">
                      {event.date}
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-md text-gray-700 inline-block text-left">
                      <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                      <p className="text-sm">{event.desc}</p>
                    </div>
                  </div>
                  <div className="w-[12px] h-[12px] bg-white border-4 border-blue-500 rounded-full z-10 sm:mx-4 my-4 sm:my-0" />
                  <div className="sm:hidden text-center">
                    <div className="text-sm font-semibold bg-white px-4 py-1 rounded-full shadow mb-2 inline-block">
                      {event.date}
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-md text-gray-700 inline-block text-left max-w-xs">
                      <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                      <p className="text-sm">{event.desc}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:w-1/2" />
                </>
              )}

              {event.side === "right" && (
                <>
                  <div className="hidden sm:block sm:w-1/2" />
                  <div className="w-[12px] h-[12px] bg-white border-4 border-blue-500 rounded-full z-10 sm:mx-4 my-4 sm:my-0" />
                  <div className="text-center sm:text-left sm:w-1/2 pl-6">
                    <div className="text-sm font-semibold bg-white px-4 py-1 rounded-full shadow mb-2 inline-block">
                      {event.date}
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-md text-gray-700">
                      <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                      <p className="text-sm">{event.desc}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
