import { useRef } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoPage from "./components/VideoSection";
import EventsTimeline from "./components/Events";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import VideoGallery from "./components/videocard"

function App() {
  const videoPageRef = useRef(null);

  return (
    <>
      <Header />
      <Hero videoPageRef={videoPageRef} />
      <div ref={videoPageRef}>
        <VideoPage />
      </div>
      <VideoGallery />
      <EventsTimeline />
      <Partners />
      <Footer />
    </>
  );
}

export default App;