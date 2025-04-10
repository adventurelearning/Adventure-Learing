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
    'Over 8 years of experience in Cloud Computing development.': BriefcaseIcon,
    'Expertise in cloud platforms like AWS, Azure, and Google Cloud.': CodeBracketIcon,
    'Proficient in cloud architecture, deployment, and infrastructure management.': PresentationChartLineIcon,
    'Strong understanding of containerization tools like Docker and Kubernetes.': AcademicCapIcon,
    'Passionate about teaching best practices in cloud computing and architecture.': LightBulbIcon,
    'Focus on hands-on learning with real-world cloud computing projects.': AcademicCapIcon,
    'Provides career guidance and interview preparation for aspiring cloud engineers.': UserCircleIcon,
    'Keeps up-to-date with the latest cloud computing trends and technologies.': UserCircleIcon,
  };
  
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">
        Trainer Profile: {trainer.name}
      </h2>
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
      'Over 8 years of experience in MERN stack development.',
      'Expertise in creating scalable RESTful APIs using Node.js and Express.',
      'Proficient in building dynamic front-end applications with React.',
      'Strong understanding of MongoDB schema design and database management.',
      'Passionate about teaching best practices in full stack development.',
      'Focus on hands-on learning with real-world MERN stack projects.',
      'Provides career guidance and interview preparation for aspiring MERN developers.',
      'Keeps up-to-date with the latest MERN stack trends and technologies.',
    ],
  };

  return (
    <div>
      <Trainer trainer={trainerData} />
    </div>
  );
};

export default TrainerProfile;