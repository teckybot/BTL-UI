// src/components/VideoPage.jsx
import VideoHero from '../components/VideoHero';

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Increased height container */}
      <div className="h-[70vh] sm:h-[80vh]"> 
        <VideoHero />
      </div>
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Page Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Your content sections */}
        </div>
      </section>
    </div>
  );
}