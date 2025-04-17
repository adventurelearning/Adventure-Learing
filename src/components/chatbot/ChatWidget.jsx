// ChatWidget.jsx
import { useState } from "react";
import ChatBox from "./ChatBox";
import vid from '../../assets/Anim.gif'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-2 right-6 z-50">
    {isOpen && (
      <div className="shadow-xl rounded-lg">
        <ChatBox onClose={toggleChat} />
      </div>
    )}
  
    {!isOpen && (
      <button onClick={toggleChat}>
        <img src={vid} alt="chatbot" />
      </button>
    )}
  </div>
  
  );
}
