import { useRef } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoPage from "./components/VideoPage";
import Events from "./components/Events";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

function App() {
  const videoPageRef = useRef(null);

  return (
    <>
      <Header />
      <Hero videoPageRef={videoPageRef} />
      <div ref={videoPageRef}>
        <VideoPage />
      </div>
      <Events />
      <Partners />
      <Footer />
    </>
  );
}

export default App;