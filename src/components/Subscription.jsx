import React, { useState } from "react";
import subscribe from '../assets/subscribe.png';
import confetti from 'canvas-confetti';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Email validation regex
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handleSubscribe = () => {
    if (!isValidEmail) return;
    
    // Trigger confetti effect
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#00b4d8', '#0057D3'],
    });

    // Here you would typically send the email to your backend
    console.log('Subscribed with email:', email);
    
    // Reset the form
    setEmail('');
    setIsValidEmail(false);
  };

  return (
    <div 
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"  
      className="flex justify-center items-center mt-10 px-4"
    >
      <div className="bg-[#0057D3] text-white py-5 px-6 flex flex-col w-[85%] md:flex-row items-center justify-center gap-6 rounded-lg shadow-lg">
        <img
          src={subscribe}
          alt="Newsletter"
          className="w-52 h-auto"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold py-2">
            Exciting New Updates from Adventure Learning!
          </h2>
          <p className="text-gray-300 font-semibold text-base">
            Stay updated with the latest tech courses and exclusive free workshops!
          </p>
          <div className="mt-4 flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your mail id"
              className="p-3 rounded-md text-black w-full h-10 md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={handleEmailChange}
            />
            <button 
              onClick={handleSubscribe}
              disabled={!isValidEmail}
              className={`border px-5 py-2 rounded-md font-semibold transition duration-300 ${
                isValidEmail 
                  ? 'bg-white text-[#0057D3] hover:bg-blue-50 hover:scale-105 border-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-400'
              }`}
            >
              Subscribe Now
            </button>
          </div>
          {!isValidEmail && email.length > 0 && (
            <p className="text-red-300 text-sm mt-1">Please enter a valid email address</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscription;