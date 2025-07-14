import { useEffect, useState } from 'react';
import spaceDesktop from '../data/All/Technical Competition.jpg';
import spaceMobile from '../data/All/Technical competiton.png';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";




export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const targetDate = new Date();
    targetDate.setHours(18, 0, 0, 0); // Set to today at 16:00:00.000 (4 PM)

    // If current time is past 4 PM, target next day's 4 PM
    if (now > targetDate) {
      targetDate.setDate(targetDate.getDate() + 1);
    }

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
    <>
      <Helmet>
        <title>Register Now – Bharat Teck League 2025 by Teckybot</title>
        <meta
          name="description"
          content="Secure your spot in Bharat Teck League 2025! Fill out the registration form and take the first step toward innovation. Limited slots available!"
        />
      </Helmet>
      <div className="relative w-full h-screen text-white overflow-hidden">
        {/* Background Images */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center md:block hidden"
          style={{ backgroundImage: `url(${spaceDesktop})` }}
        />
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center md:hidden block"
          style={{ backgroundImage: `url(${spaceMobile})` }}
        />
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Centered Content */}
        <div className="absolute top-[60%] md:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[90%]">
          {/* Heading */}
          <h1 className="text-white text-[30px] sm:text-[20px] md:text-[30px] lg:text-[44px] font-medium tracking-[0.25em] uppercase mb-8">
            REGISTRATIONS LAUNCH
          </h1>

          {/* Timer */}
          <div className="flex justify-center items-center gap-[10px] sm:gap-[14px] md:gap-[18px] font-orbitron">
            <TimeUnit value={timeLeft.days} label="DAYS" />
            <Colon />
            <TimeUnit value={timeLeft.hours} label="HOURS" />
            <Colon />
            <TimeUnit value={timeLeft.minutes} label="MINUTES" />
            <Colon />
            <TimeUnit value={timeLeft.seconds} label="SECONDS" />
          </div>
        </div>


        {/* Marquee Announcement */}
        {/* marque */}
          <div className="absolute top-[75%] md:top-[88%] left-0 w-screen overflow-hidden group">
            <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
              {Array.from({ length: 50 }).map((_, idx) => (
                <div
                  key={`1-${idx}`}
                  className="h-[50px] flex items-center justify-center px-6 text-black font-semibold text-sm sm:text-base flex-shrink-0"
                  style={{
                    backgroundColor: '#d1d1d1',
                    clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)',
                  }}
                >
                  Bharat Teck League is only for students of 6th to 10th standard.
                </div>
              ))}
              {Array.from({ length: 50 }).map((_, idx) => (
                <div
                  key={`2-${idx}`}
                  className="h-[50px] flex items-center justify-center px-6 text-black font-semibold text-sm sm:text-base flex-shrink-0 mx-2"
                  style={{
                    backgroundColor: '#d1d1d1',
                    clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)',
                  }}
                >
                  Bharat Teck League is only for students of 6th to 10th standard.
                </div>
              ))}
            </div>
          </div>

          <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 10s linear infinite;
              }
            `}</style>

      </div>
      <Footer />
    </>
  );
}

function TimeUnit({ value, label }) {
  return (
    <div className="text-center">
      <div
        className="text-[42px] sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[80px]  tracking-wider"
        style={{
          fontFamily: 'Orbitron, sans-serif',
        }}
      >
        {value}
      </div>
      <div
        className="text-[10px] sm:text-[12px] md:text-[13px] text-white tracking-[0.25em] mt-2"
        style={{ fontFamily: 'Orbitron, sans-serif' }}
      >
        {label}
      </div>
    </div>
  );
}

function Colon() {
  return (
    <div
      className="text-[42px] sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[80px] font-bold text-white"
      style={{ fontFamily: 'Orbitron, sans-serif' }}
    >
      :
    </div>
  );
}
