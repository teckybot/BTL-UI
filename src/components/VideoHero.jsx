export default function VideoHero() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Video container with explicit mobile height */}
      <div className="relative w-full h-[70vh] md:h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            // Mobile: show right 60% (crop left 40%)
            objectPosition: 'right center',
            // Desktop: show full video
            '@media (min-width: 640px)': {
              objectPosition: 'center center'
            }
          }}
        >
          <source src="videos/universe.mp4" type="video/mp4" />
          <source src="public/videos/universe.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Top dark gradient overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-[10%] z-10"
          style={{
            background: 'linear-gradient(to bottom, #F5F8FF 30%, transparent 100%)'
          }}
        />
        
        {/* Bottom white gradient overlay */}
        <div 
          className="absolute top bottom-0 left-0 w-full h-[10%] z-10"
          style={{
            background: 'linear-gradient(to top, #F5F8FF 30%, transparent 100%)'
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
        <h1
          className="font-normal text-3xl sm:text-4xl md:text-[46px] text-center mb-4 drop-shadow-lg"
          style={{
            background: "linear-gradient(50deg, rgba(255, 255, 255, 0) -5.78%, #FFFFFF 21.49%, #FFFFFF 79.19%, rgba(255, 255, 255, 0) 103.32%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          BTL is set to unite brilliant young minds <br />from across various states for an inspiring event.
        </h1>
      </div>

      {/* Mobile-specific video cropping */}
      <style jsx global>{`
        @media (max-width: 639px) {
          video {
            width: 166.67% !important;
            left: 0% !important;
          }
        }
      `}</style>
    </div>
  );
}