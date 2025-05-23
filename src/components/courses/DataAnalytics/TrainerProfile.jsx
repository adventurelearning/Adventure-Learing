import React from 'react';
import {
  BriefcaseIcon,
  CodeBracketIcon,
  PresentationChartLineIcon,
  LightBulbIcon,
  AcademicCapIcon,
  UserCircleIcon,
  
} from '@heroicons/react/24/outline';

const Trainer = ({ trainer }) => {
  const iconMap = {
    'Over 8 years of experience in MERN stack development.': BriefcaseIcon,
    'Expertise in creating scalable RESTful APIs using Node.js and Express.': CodeBracketIcon,
    'Proficient in building dynamic front-end applications with React.': PresentationChartLineIcon,
    'Strong understanding of MongoDB schema design and database management.':AcademicCapIcon,
    'Passionate about teaching best practices in full stack development.': LightBulbIcon,
    'Focus on hands-on learning with real-world MERN stack projects.': AcademicCapIcon,
    'Provides career guidance and interview preparation for aspiring MERN developers.': UserCircleIcon,
    'Keeps up-to-date with the latest MERN stack trends and technologies.': UserCircleIcon,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">
        Trainer Profile: {trainer.name}
      </h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trainer.highlights.map((highlight, index) => {
          const Icon = iconMap[highlight] || null; // Use mapped icon, or null if not found
          return (
            <div
              key={index}
              className="flex items-start bg-gray-50 p-4 rounded-lg"
            >
              {Icon && (
                <Icon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
              )}
              <span className="text-gray-700">{highlight}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TrainerProfile = () => {
  const trainerData = {
    name: 'Alex Johnson',
    highlights: [
      'Over 8 years of experience in Data Analytics development.',
      'Expertise in data wrangling, statistical analysis, and business intelligence.',
      'Proficient in programming languages like Python, SQL, and Excel.',
      'Strong understanding of data visualization tools like Tableau and Power BI.',
      'Passionate about teaching best practices in data analytics and data visualization.',
      'Focus on hands-on learning with real-world data analytics projects.',
      'Provides career guidance and interview preparation for aspiring data analysts.',
      'Keeps up-to-date with the latest data analytics trends, tools, and technologies.',
    ],
    
    
  };

  return (
    <div>
      <Trainer trainer={trainerData} />
    </div>
  );
};

export default TrainerProfile;