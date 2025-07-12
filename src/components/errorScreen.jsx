import React from 'react';
import stayinorbit from '../data/All/BTL2025_Teckybot.jpg';
import stayinradix from '../data/All/BTL_2025.png';


const ErrorScreen = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start relative pt-28 md:pt-28"
      style={{
        backgroundImage: `url(${isMobile ? stayinradix : stayinorbit})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-center z-10 px-4">
        <h1
          className="mb-4 md:mb-8 px-2 md:px-6 py-2 md:py-3 rounded-lg"
          style={{
            fontFamily: 'Orbitron',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: isMobile ? '24px' : '52px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            verticalAlign: 'middle',
            textTransform: 'uppercase',
            background: 'linear-gradient(180deg, #FFFFFF 36%, #E6B266 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          page is in zero-gravity maintenance
        </h1>
        <h2
          className={`px-2 md:px-6 py-2 md:py-3 rounded-lg ${isMobile ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' : ''
            }`}
          style={{
            display: 'inline-block',
            fontFamily: 'Orbitron',
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: isMobile ? '48px' : '128px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            verticalAlign: 'middle',
            textTransform: 'uppercase',
            background: 'linear-gradient(180deg, #FFFFFF 30%, #E6B266 70%, rgba(230, 178, 102, 0) 98.19%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          stay in orbit
        </h2>

      </div>
    </div>
  );
};

export default ErrorScreen;