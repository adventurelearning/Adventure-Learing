import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import "./whatsapp-styles.css"; // Import the CSS file

const WhatsAppFloatingButton = () => {
  const phoneNumber = "+919884445571";
  const message = "Hello! I'm interested in your services";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-button-container">
      {/* Wave background elements - Moved outside motion.a */}
      <div className="wave-background">
        {[0, 1, 2,3].map((i) => (
          <div
            key={i}
            className={`wave-circle wave-circle-${i}`}
          />
        ))}
      </div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          rotate: [0, -5, 5, 0],
          transition: {
            type: "tween",
            duration: 0.5,
            delay: 0.5
          }
        }}
        whileHover={{
          scale: 1.1,
          rotate: [0, 10, -10, 0],
          boxShadow: "0 15px 30px rgba(37, 211, 102, 0.5)",
          background: "linear-gradient(135deg, #2df075 0%, #25D366 100%)",
          transition: {
            type: "tween",
            duration: 0.3,
          },
        }}
        whileTap="tap"
        variants={{
          hover: {
            scale: 1.1,
            rotate: [0, 10, -10, 0],
            boxShadow: "0 15px 30px rgba(37, 211, 102, 0.5)",
            background: "linear-gradient(135deg, #2df075 0%, #25D366 100%)",
          },
          tap: { scale: 0.9 },
        }}
      >
        {/* Floating particles */}
        {/* {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`floating-particle floating-particle-${i}`}
          />
        ))} */}

        <FaWhatsapp
          size={40}
          color="white"
          className="whatsapp-icon"
        />

        {/* Animated notification dot */}
        {/* <div className="notification-dot" /> */}

        {/* Hover tooltip */}
        <div className="hover-tooltip">
          Need help? Chat with us!
          <div className="tooltip-arrow" />
        </div>
      </motion.a>
    </div>
  );
};

export default WhatsAppFloatingButton;