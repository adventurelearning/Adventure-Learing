import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Predefined chat options
const options = [
  { id: "courseInfo", label: "📚 Course Information" },
  { id: "assistance", label: "🧠 Learning Assistance" },
];

const extraOptions = [
  {
    id: "register",
    label: "📝 Register",
    link: "https://www.adventurelearning.in/contact",
  },
  {
    id: "contact",
    label: "📞 Contact",
    link: "https://www.adventurelearning.in/contact",
  },
  {
    id: "support",
    label: "🛠️ Support",
    link: "https://www.adventurelearning.in/contact",
  },
];

// components/CourseList.jsx


const courses = [
  {
    name: 'Full Stack Development',
    url: '/course/full-stack',
  },
  {
    name: 'Embedded Systems',
    url: '/course/embedded-system',
  },
  {
    name: 'Data Science',
    url: '/course/data-science',
  },
  {
    name: 'Software Testing',
    url: '/course/software-testing',
  },
  {
    name: 'Data Analytics',
    url: '/course/data-analytics',
  },
  {
    name: 'Cloud Computing',
    url: '/course/cloud-computing',
  },
];

const CourseList = () => {
  return (
    <div className="p-6 rounded max-w-md mx-auto ">
      <ul className="space-y-3">
        {courses.map((course) => (
          <li key={course.name}>
            <a
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-blue-600  p-3 border border-blue-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
            >
              {course.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default function ChatBox( { onClose }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey buddy! How can I help you today?" },
  ]);
  
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };

    // Detect "bye" or "thank you" and respond with a thank you message
    if (input.toLowerCase().includes("bye") || input.toLowerCase().includes("thank you")) {
      const botMsg = {
        sender: "bot",
        text: "Thank you for chatting with me! Have a great day! 😊",
      };
      setMessages((prev) => [...prev, userMsg, botMsg]);
    } else {
      const botMsg = {
        sender: "bot",
        text: "Thanks for your message. I'll get back to you soon!",
      };
      const optionsMsg = { sender: "bot", type: "options" };
      setMessages((prev) => [...prev, userMsg]);

      setTimeout(() => {
        setMessages((prev) => [...prev, botMsg, optionsMsg]);
      }, 600);
    }

    setInput("");
  };

  const handleOptionClick = (opt) => {
    if (opt.id === "courseInfo") {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          type: "courses",
        },
      ]);
    } else if (opt.id === "assistance") {
      setShowModal(true); // Show modal for learning assistance
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Looking for study materials? I can help you find them! Check out interactive tutorials, practice exercises, and more. Let me know what topic you're studying, and I'll guide you!",
        },
      ]);
    } else if (opt.link) {
      window.open(opt.link, "_blank");
    } else {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `You selected: ${opt.label}`,
        },
      ]);
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <div className="flex flex-col w-[400px] mb-10 h-[420px] mx-auto font-bold bg-white shadow-lg rounded-lg">
    {/* Header */}
    <div className="flex justify-between bg-blue-500">
      <div className="bg-blue-500 text-white p-4 font-semibold text-lg">
        Adventure Chat
      </div>
      <button onClick={onClose} className="text-white mr-4">
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
  
    {/* Messages */}
    <div className="flex-1 p-4 bg-gray-50 space-y-2  overflow-y-auto">
      {messages.map((msg, idx) => (
        <div key={idx}>
          {msg.type === "options" ? (
            <div className="flex flex-wrap gap-2 mt-2">
              {[...options, ...extraOptions].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleOptionClick(opt)}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          ) : msg.type === "courses" ? (
            <div className="flex flex-wrap gap-2 mt-2 text-sm max-w-[70%]">
              <CourseList />
            </div>
          ) : (
            <div
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  
    {/* Input Box */}
    <div className="border-t p-3 flex items-center gap-2">
      <input
        type="text"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
     <button
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      onClick={handleSend}
    >
      <i className="bi bi-send-fill"></i>
    </button>
    </div>
  </div>
  
  );
}
