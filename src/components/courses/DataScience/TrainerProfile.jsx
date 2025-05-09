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
    'Over 4 years of experience in Data Science and Machine Learning.': BriefcaseIcon,
    'Expert in Python, R, SQL, and working with large datasets.': CodeBracketIcon,
    'Experienced in building and deploying machine learning models.': PresentationChartLineIcon,
    'Strong foundation in statistics, probability, and data modeling.': AcademicCapIcon,
    'Passionate about teaching practical data science skills and real-world applications.': LightBulbIcon,
    'Focus on hands-on learning with end-to-end data science projects.': PresentationChartLineIcon,
    'Provides career mentorship and interview prep for aspiring data scientists.': UserCircleIcon,
    'Keeps current with the latest tools like TensorFlow, PyTorch, and cloud ML services.': CodeBracketIcon,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trainer.highlights.map((highlight, index) => {
          const Icon = iconMap[highlight] || null;
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
    highlights: [
      'Over 4 years of experience in Data Science and Machine Learning.',
      'Expert in Python, R, SQL, and working with large datasets.',
      'Experienced in building and deploying machine learning models.',
      'Strong foundation in statistics, probability, and data modeling.',
      'Passionate about teaching practical data science skills and real-world applications.',
      'Focus on hands-on learning with end-to-end data science projects.',
      'Provides career mentorship and interview prep for aspiring data scientists.',
      'Keeps current with the latest tools like TensorFlow, PyTorch, and cloud ML services.',
    ],
  };

  return (
    <div>
      <Trainer trainer={trainerData} />
    </div>
  );
};

export default TrainerProfile;
