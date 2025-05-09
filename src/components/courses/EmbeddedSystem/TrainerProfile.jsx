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
    'Over 8 years of experience in Data Science development.': BriefcaseIcon,
    'Expertise in machine learning, data analysis, and statistical modeling.': CodeBracketIcon,
    'Proficient in programming languages like Python and R.': PresentationChartLineIcon,
    'Strong understanding of data visualization and data preprocessing.': AcademicCapIcon,
    'Passionate about teaching best practices in data science.': LightBulbIcon,
    'Focus on hands-on learning with real-world data science projects.': AcademicCapIcon,
    'Provides career guidance and interview preparation for aspiring data scientists.': UserCircleIcon,
    'Keeps up-to-date with the latest data science trends and technologies.': UserCircleIcon,
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
      'Over 8 years of experience in Embedded Systems development.',
      'Expertise in designing and programming microcontrollers (e.g., Arduino, Raspberry Pi).',
      'Proficient in low-level programming languages like C and Assembly.',
      'Strong understanding of hardware interfacing and peripheral management.',
      'Passionate about teaching best practices in embedded systems design.',
      'Focus on hands-on learning with real-world embedded projects.',
      'Provides career guidance and interview preparation for aspiring embedded systems engineers.',
      'Keeps up-to-date with the latest embedded systems trends and technologies.',
    ],
    
  };

  return (
    <div>
      <Trainer trainer={trainerData} />
    </div>
  );
};

export default TrainerProfile;