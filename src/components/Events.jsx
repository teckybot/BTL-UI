
import circle1 from "../data/Ellipse 53.png";
import circle2 from "../data/Ellipse 54.png";
import circle3 from "../data/Ellipse 52.png";

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
    <div className="relative bg-white min-h-screen py-12 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background circles - positioned behind content with opacity */}
      <img
        src={circle1}
        alt="decorative"
        className="absolute top-6 md:-top-0 right-6 md:right-10 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] object-contain rotate-12 pointer-events-none select-none opacity-40 md:opacity-60 z-0"
      />
      <img
        src={circle2}
        alt="decorative"
        className="absolute bottom-6 md:bottom-[45%] left-6 w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] md:w-[220px] md:h-[220px] object-contain -rotate-12 pointer-events-none select-none opacity-40 md:opacity-60 z-0"
      />
      <img
        src={circle3}
        alt="decorative"
        className="absolute bottom-6 md:-bottom-16 right-6 md:-right-8 w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] md:w-[450px] md:h-[450px] object-contain -rotate-12 pointer-events-none select-none opacity-40 md:opacity-60 z-0"
      />

      <h2 className="relative z-10 text-center text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 md:mb-16 text-[#0f172a]">
        Events Timeline
      </h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[3px] sm:w-[4px] bg-gradient-to-b from-blue-500 to-blue-300 z-0 rounded-full" />

        <div className="flex flex-col gap-12 sm:gap-14 md:gap-16 relative z-10">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center w-full">
              {event.side === "left" && (
                <>
                  {/* Desktop/tablet left-aligned content */}
                  <div className="hidden sm:block sm:w-1/2  text-right pr-4 md:pr-6">
                    <div className="inline-block text-xs sm:text-smfont-semibold bg-white px-3 sm:px-4 py-1 rounded-full shadow mb-2">
                      {event.date}
                    </div>
                    <div className="bg-white p-4 sm:p-5 rounded-xl shadow-md text-gray-700 inline-block text-left max-w-xs sm:max-w-none">
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{event.title}</h3>
                      <p className="text-xs sm:text-sm">{event.desc}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] bg-white border-3 sm:border-4 border-blue-500 rounded-full z-10 sm:mx-2 md:mx-4 my-3 sm:my-0" />
                  
                  {/* Mobile content */}
                  <div className="sm:hidden w-full text-center">
                    <div className="text-xs sm:text-smfont-semibold bg-white px-3 py-1 rounded-full shadow mb-2 inline-block">
                      {event.date}
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md text-gray-700 w-full max-w-xs mx-auto">
                      <h3 className="text-base font-semibold mb-1">{event.title}</h3>
                      <p className="text-xs">{event.desc}</p>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block sm:w-1/2" />
                </>
              )}

              {event.side === "right" && (
                <>
                  <div className="hidden sm:block sm:w-1/2" />
                  
                  {/* Timeline dot */}
                  <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] bg-white border-3 sm:border-4 border-blue-500 rounded-full z-10 sm:mx-2 md:mx-4 my-3 sm:my-0" />
                  
                  {/* Desktop/tablet right-aligned content */}
                  <div className="text-center sm:text-left sm:w-1/2 pl-4 md:pl-6">
                    <div className="text-xs sm:text-sm font-semibold bg-white px-3 sm:px-4 py-1 rounded-full shadow mb-2 inline-block">
                      {event.date}
                    </div>
                    <div className="bg-white p-4 sm:p-5 rounded-xl shadow-md text-gray-700 max-w-xs sm:max-w-none mx-auto sm:mx-0">
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{event.title}</h3>
                      <p className="text-xs sm:text-sm">{event.desc}</p>
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