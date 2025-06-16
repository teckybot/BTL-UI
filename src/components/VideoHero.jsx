// src/components/VideoHero.jsx
export default function VideoHero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Video container - full width with increased height on mobile */}
      <div className="relative w-full h-[70vh] sm:h-0 sm:pb-[56.25%]"> {/* Full height on mobile, 16:9 on desktop */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            // On mobile: show only right 60% (crop left 40%)
            objectPosition: '100% ',
            // On desktop: show full video
            '@media (min-width: 640px)': {
              objectPosition: 'right right'
            }
          }}
        >
          <source src="/src/data/universe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Your Headline Here
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
          Your compelling subheading
        </p>
      </div>
    </div>
  );
}