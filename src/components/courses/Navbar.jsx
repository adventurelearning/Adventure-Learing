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

  const menuContainerRef = useRef(null);
  const menuItemRefs = useRef({});


  useEffect(() => {
    const options = {
      root: null,

      rootMargin: "0px 0px -60% 0px",

      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setSelectedMenu(id);          
          // Scroll the menu item into view
          if (menuItemRefs.current[id] && menuContainerRef.current) {
            const menuItem = menuItemRefs.current[id];
            const container = menuContainerRef.current;
            const containerWidth = container.offsetWidth;
            const itemLeft = menuItem.offsetLeft;
            const itemWidth = menuItem.offsetWidth;
            
            // Calculate scroll position to center the item
            const scrollTo = itemLeft - (containerWidth / 2) + (itemWidth / 2);
            
            container.scrollTo({
              left: scrollTo,
              behavior: 'smooth'
            });
          }

        }
      });
    }, options);

    // Observe each section
    menuItems.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });


    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="bg-[#0057D3] text-white shadow-lg font-sans sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4">
        <div 
          ref={menuContainerRef}
          className="flex items-center space-x-1 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none' }} // For Firefox
        >
          {menuItems.map((item) => {
            const isSelected = selectedMenu === item.id;
            return (
              <a
                key={item.id}
                ref={el => menuItemRefs.current[item.id] = el}
                href={item.href}
                className={`text-md font-semibold transition-colors py-2 px-4 rounded-full whitespace-nowrap flex-shrink-0 ${
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
