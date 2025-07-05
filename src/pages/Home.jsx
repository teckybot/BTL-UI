import { useRef } from 'react';
import Hero from "../components/Hero";
import VideoPage from "../components/VideoSection";
import EventsTimeline from "../components/Events";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import VideoGallery from "../components/videocard";
import Leveles from '../components/levels';
import ComingSoon from '../components/commingsoonpage';

const Home = () => {
  const videoPageRef = useRef(null);

  return (
    <div className="flex flex-col">
    
      

      <Hero videoPageRef={videoPageRef} />
      {/* <ComingSoon /> */}
      <Leveles />
      <EventsTimeline />
      <VideoGallery className="mt-0" />
      {/* <div ref={videoPageRef} className="w-full">
        <VideoPage />
      </div> */}
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
