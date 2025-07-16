import React from 'react';

const VideoScroller = () => {
  // Array of YouTube video IDs
  const youtubeVideos = [
    'dQw4w9WgXcQ',  // Replace with your video IDs
    '9bZkp7q19f0',
    'JGwWNGJdvx8',
    'kJQP7kiw5Fk',
    'RgKAFK5djSk',
    'OPf0YbXqDm0',
    'KYniUCGPGLs',
    'pRpeEdMmmQ0'
  ];

  return (
    <div className="py-10 px- overflow-hidden">
      <div className=" mx-auto">
        {/* Scrolling container wrapper */}
        <div className="relative h-[240px] sm:h-[280px] md:h-[306px] overflow-hidden">
          {/* Scrolling track - duplicated content for seamless looping */}
          <div className="absolute top-0 left-0 h-full flex items-center animate-scroll-awards hover:[animation-play-state:paused]">
            {/* First set of videos */}
            <div className="flex items-center h-full">
              {youtubeVideos.map((videoId, index) => (
                <VideoCard key={`video-${index}`} videoId={videoId} />
              ))}
            </div>
            
            {/* Second set (duplicate) for seamless looping */}
            <div className="flex items-center h-full" aria-hidden="true">
              {youtubeVideos.map((videoId, index) => (
                <VideoCard key={`video-clone-${index}`} videoId={videoId} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-awards {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

// Separate component for video card for better readability
const VideoCard = ({ videoId }) => (
  <div className="w-[280px] sm:w-[320px] md:w-[400px] h-[158px] sm:h-[180px] md:h-[225px] mx-4 rounded-2xl overflow-hidden flex-shrink-0"
       style={{ boxShadow: "0px 0px 20px rgba(0,0,0,0.2)" }}>
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
      loading="lazy"
    ></iframe>
  </div>
);

export default VideoScroller;