import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import offerpopup from "../assets/offerpopup.png"; // Use your image here

const PopupOffers = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000); // Adjust delay if needed
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setShowPopup(false);
                if (onClose) onClose();
              }}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition-colors bg-white rounded-full p-1 shadow-sm z-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image Only */}
            <img
              src={offerpopup}
              alt="College students"
              className="w-full  h-auto opacity-90"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupOffers;
