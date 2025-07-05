import { useEffect, useState } from 'react';
import spaceDesktop from '../data/galaxy-night-landscape 1.jpg';
import spaceMobile from '../data/galaxy-night-mobile.png';
import Footer from '../components/Footer'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date('2025-07-13T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    let time = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      time = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return time;
  }

  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center md:block hidden" style={{ backgroundImage: `url(${spaceDesktop})` }} />
      <div className="absolute inset-0 -z-10 bg-cover bg-center md:hidden block" style={{ backgroundImage: `url(${spaceMobile})` }} />

      {/* Main Content */}
      <div className="flex flex-col items-center md:items-center lg:items-start justify-center h-full px-2 md:ml-0 lg:ml-16 xl:ml-36">
        {/* Title */}
        <h1
          className="text-[38px] sm:text-[36px] md:text-[38px] lg:text-[40px] xl:text-[48px] font-poppins font-medium tracking-[0.15em] blur-[1.5px] mb-6 md:mb-8 lg:mb-10 xl:ml-6 bg-gradient-to-r from-reg-gradient-from to-reg-gradient-to text-center md:text-center lg:text-left"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          REGISTRATIONS
          <span className="hidden md:inline"> </span>
          <br className="block md:hidden" />
          LAUNCH
        </h1>

        {/* Timer */}
        <div className="flex flex-row flex-nowrap w-full justify-center md:justify-center lg:justify-start space-x-1 md:space-x-2 lg:space-x-3 items-center font-orbitron">
          <TimeUnit value={timeLeft.days} label="DAYS" />
          <Colon />
          <TimeUnit value={timeLeft.hours} label="HOURS" />
          <Colon />
          <TimeUnit value={timeLeft.minutes} label="MINUTES" />
          <Colon />
          <TimeUnit value={timeLeft.seconds} label="SECONDS" />
        </div>
      </div>
      {/* Add Footer at the bottom */}
      <Footer />
    </div>
  );
}

function TimeUnit({ value, label }) {
  return (
    <div className="text-center font-orbitron">
      <div
        className="text-[38px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[75px] leading-[36px] sm:leading-[48px] md:leading-[64px] lg:leading-[80px] xl:leading-[100px] xl:ml-3 font-normal px-1 sm:px-2 md:px-3 lg:px-4 bg-gradient-to-r from-countdown-gradient-from to-countdown-gradient-to"
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Orbitron, sans-serif',
        }}
      >
        {value}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm mt-1 md:mt-2 tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>{label}</div>
    </div>
  );
}

function Colon() {
  return (
    <div className="flex flex-col items-center font-orbitron">
      <div
        className="text-[38px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[75px] leading-[100px] font-normal bg-gradient-to-r from-countdown-gradient-from to-countdown-gradient-to"
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Orbitron, sans-serif',
        }}
      >
        :
      </div>
      {/* Empty div to match label spacing */}
      <div className="text-sm mt-2 opacity-0 select-none">LABEL</div>
    </div>
  );
}

