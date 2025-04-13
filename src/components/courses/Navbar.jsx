import React, { useState, useEffect, useRef } from "react";

const menuItems = [
  { id: "course", label: "Course Overview", href: "#course" },
  { id: "trainer", label: "Trainer Profile", href: "#trainer" },
  { id: "syllabus", label: "Syllabus", href: "#syllabus" },
  { id: "batches", label: "Upcoming Batch", href: "#batches" },
  { id: "certificate", label: "Certificate", href: "#certificate" },
  { id: "review", label: "Our Learners Thought", href: "#review" },
];

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState('course');
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -60% 0px", // Trigger earlier than full visibility
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setSelectedMenu(id);
        }
      });
    }, options);

    // Observe each section
    menuItems.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="bg-[#0057D3] text-white shadow-lg font-sans sticky top-0 z-50 overflow-x-auto">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center space-x-1 min-w-max">
          {menuItems.map((item) => {
            const isSelected = selectedMenu === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`text-md font-semibold transition-colors py-2 px-4 rounded-full whitespace-nowrap ${
                  isSelected
                    ? "border border-white bg-white text-blue-800 hover:text-blue-900"
                    : "text-white hover:text-gray-300"
                }`}
                onClick={() => setSelectedMenu(item.id)}
                aria-current={isSelected ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
