import { useRef } from 'react';
import Hero from "../components/Hero2";
import VideoPage from "../components/VideoSection";
import EventsTimeline from "../components/Events";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import VideoGallery from "../components/videocard";
import Leveles from '../components/levels';
import logo from "../data/All/BTL2025_logo.png";
import { Helmet } from 'react-helmet';


const Home = () => {
  const videoPageRef = useRef(null);

  return (
  <>
    <Helmet>
        <title>Bharat Teck League 2024 – National Innovation Challenge</title>
        <meta
          name="description"
          content="Join Bharat Teck League 2024 by Teckybot – India’s leading tech competition platform for students to showcase innovation in robotics, AI, drones & more!"
        />
      </Helmet>
    <div className="flex flex-col">
    
      

      <Hero videoPageRef={videoPageRef} />
      {/* <ComingSoon /> */}
      <Leveles />
      <EventsTimeline />
      {/* <VideoGallery className="mt-0" /> */}
      {/* <div ref={videoPageRef} className="w-full">
        <VideoPage />
      </div> */}
      <Partners />
      <Footer />
    </div>
    </>
  );
};

export default Home;