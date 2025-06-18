
import { useRef } from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import VideoPage from "../components/VideoSection";
import EventsTimeline from "../components/Events";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import VideoGallery from "../components/videocard";

const Home = () => {
  const videoPageRef = useRef(null);

  return (
    <div className="flex flex-col">
      <Header />
      <Hero videoPageRef={videoPageRef} />
      <div ref={videoPageRef} className="w-full">
        <VideoPage />
      </div>
      <VideoGallery className="mt-0" />
      <EventsTimeline />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
