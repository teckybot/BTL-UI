import { useEffect, useState } from "react";
import postponedposter from '../data/posters/BTL2025_Postponed.png';

export default function PopupPoster() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] animate-fadeIn px-4">
      <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full sm:w-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute -top-4 -right-4 text-3xl bg-white/80 text-red-600 hover:text-white hover:bg-red-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors duration-200 ease-in-out"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Poster Image */}
        <img
          src={postponedposter}
          alt="Popup Poster"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
