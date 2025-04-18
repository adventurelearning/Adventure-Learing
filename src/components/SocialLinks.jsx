import React from 'react';
import { FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const phoneNumber = "+919884445571";
const message = "Hello! I'm interested in your services";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const socialicons = [
  {
    name: 'Instagram',
    color: 'hover:bg-[#d62976]',
    icon: <FaInstagram className="w-[18px] h-[18px] text-white" />,
    defaultBg: '#E1306C',
    link: "https://www.instagram.com/adventure_learning_kovai/",
  },
  {
    name: 'FaceBook',
    color: 'hover:bg-[#1877F2]', // Updated Facebook color
    icon: <FaFacebook className="w-[18px] h-[18px] text-white" />,
    defaultBg: '#1877F2',
    link: 'https://www.facebook.com/profile.php?id=61570475203188&mibextid=ZbWKwL', // Replace with your Facebook link
  },
  {
    name: 'YouTube',
    color: 'hover:bg-[#FF0000]',
    icon: <FaYoutube className="w-[18px] h-[18px] text-white" />,
    defaultBg: '#FF0000',
    link: "https://www.youtube.com/@Adventure_Learning",
  },
  {
    name: 'WhatsApp',
    color: 'hover:bg-[#25D366]',
    icon: <FaWhatsapp className="w-[20px] h-[20px] text-white" />,
    defaultBg: '#25D366',
    link: whatsappUrl, // Using the generated WhatsApp URL
  },
];

const SocialLinks = () => {
  return (
    <div
      className="fixed bottom-1/3 lg:bottom-1/3 p-1 right-4  flex flex-col gap-2 items-end md:bottom-8 md:right-8" // Added responsive positioning
      style={{
        position: 'fixed', // Removed redundant fixed positioning
        right: '0px', // Adjusted to Tailwind classes
        zIndex: '500', // Adjusted to Tailwind classes
      }}
    >
      {socialicons.map((social, idx) => (
        <a
          key={idx}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group w-[45px] h-[45px] flex items-center justify-start rounded-full shadow-md overflow-hidden transition-all duration-300 cursor-pointer relative ${social.color} hover:w-[120px] hover:rounded-[40px] active:translate-x-[2px] active:translate-y-[2px]`}
          style={{ backgroundColor: social.defaultBg }}
        >
          <div className="flex items-center justify-center w-full group-hover:w-[30%] transition-all duration-300 group-hover:pr-2 group-hover:pl-2">
            {social.icon}
          </div>
          <div className="absolute right-0 opacity-0 w-0 text-white text-[1em] font-semibold transition-all duration-300 group-hover:opacity-100 group-hover:w-[70%] group-hover:pr-3">
            {social.name}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;