import React from "react";
import {
  FaLaptopCode,
 
  FaUserTie,
  FaChalkboardTeacher,
  FaGlobe,
  FaProjectDiagram,
  FaBriefcase,
  FaUserGraduate
} from "react-icons/fa";

const CourseFeatures = () => {
  const details = [ 
    { icon: <FaChalkboardTeacher className="text-xl" />, title: "Online & Offline Classes" },
  { icon: <FaLaptopCode className="text-xl" />, title: "Hands-on Projects" },

    { icon: <FaUserGraduate className="text-xl" />, title: "100% Placement Support" },
    { icon: <FaGlobe className="text-xl" />, title: "Career Opportunities" },
  ];

  return (
    <div className="flex items-center justify-center px-2">
        
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 w-full ">
        {details.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-xl p-3 "
          >
            <span className="bg-blue-600 rounded-full p-2 text-white flex items-center justify-center">
              {feature.icon}
            </span>
            <h3 className="text-base font-semibold text-gray-800">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFeatures;
