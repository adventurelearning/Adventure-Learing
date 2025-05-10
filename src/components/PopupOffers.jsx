import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import offer from "../assets/offer.svg";
import offermob from "../assets/offermob.svg";

const PopupOffers = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

useEffect(() => {
    const hasPopupShown = sessionStorage.getItem("popupShown");
  
    if (!hasPopupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("popupShown", "true");
      }, 5000);
  
      return () => clearTimeout(timer);
    }
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
          className="fixed inset-0  flex items-center justify-center p-4 bg-gray-700 bg-opacity-50 overflow-y-auto" style={{
            position: 'fixed', // Removed redundant fixed positioning
            right: '0px', // Adjusted to Tailwind classes
            zIndex: '1200', // Adjusted to Tailwind classes
          }}>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-[190%] max-w-xl md:w-[800px] max-h-screen overflow-auto bg-white rounded-xl shadow-2xl"
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

            {/* Offer Image */}
            {/* Offer Images for Desktop and Mobile */}
            <img
              src={offer}
              alt="Offer Banner Desktop"
              className="hidden md:block w-full h-auto object-cover opacity-90"
            />
            <img
              src={offermob}
              alt="Offer Banner Mobile"
              className="block md:hidden w-full h-auto object-cover opacity-90"
            />

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupOffers;
