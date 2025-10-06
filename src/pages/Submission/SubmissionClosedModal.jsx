
import { IoCloseCircleOutline } from "react-icons/io5";

export default function SubmissionClosedModal({
  isOpen,
  onClose,
  title = 'Submissions Opening Soon! 🚀',
  message = 'Thank you for your interest. Video submissions for this competition will be opening shortly. Please check back later!',
}) {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4" onClick={onClose}>
      
      {/* Modal Container */}
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 sm:p-8 transform transition-all duration-300 scale-100 opacity-100 relative"
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
          aria-label="Close modal"
        >
          <IoCloseCircleOutline className="text-3xl" />
        </button>

        {/* Modal Content */}
        <div className="text-center">
          <div className="text-4xl text-[#2053CA] mb-4">
            <IoCloseCircleOutline className="mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">
            {title}
          </h2>
          <p className="text-gray-600 text-base mb-6">
            {message}
          </p>
          
          {/* Action Button */}
          <button
            onClick={onClose}
            className="bg-[#2053CA] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-[#173f9c] transition duration-200"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}