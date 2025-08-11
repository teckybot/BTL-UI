
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";

export default function ComingSoonOverlay({ message, onClose }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white/90 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center max-w-md"
      >
        {/* Chain and Lock */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
        >
          <FaLock size={50} className="text-gray-800" />
        </motion.div>

        {/* Coming Soon Text */}
        <h2 className="mt-4 text-2xl font-bold text-gray-800">{message}</h2>
        <p className="text-gray-600 mt-2">Stay tuned for something exciting!</p>

        {/* Close Button */}
        {/* <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-800 text-white rounded-full shadow hover:scale-105 transition"
        >
          Got it
        </button> */}
      </motion.div>
    </div>
  );
}
