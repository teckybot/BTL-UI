// src/components/VideoPage.jsx
import VideoHero from './VideoHero';

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Increased height container */}
      <div className="h-[70vh] sm:h-[80vh]"> 
        <VideoHero />
      </div>
    </div>
  );
}