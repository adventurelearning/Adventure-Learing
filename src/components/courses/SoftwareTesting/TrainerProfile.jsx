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
    'Over 8 years of experience in Software Testing development.': BriefcaseIcon,
    'Expertise in various testing methodologies such as manual testing, automation testing, and performance testing.': CodeBracketIcon,
    'Proficient in tools like Selenium, JUnit, and TestNG for test automation.': PresentationChartLineIcon,
    'Strong understanding of test case design, debugging, and test-driven development (TDD).': AcademicCapIcon,
    'Passionate about teaching best practices in software testing and quality assurance.': LightBulbIcon,
    'Focus on hands-on learning with real-world software testing projects.': AcademicCapIcon,
    'Provides career guidance and interview preparation for aspiring software testers.': UserCircleIcon,
    'Keeps up-to-date with the latest software testing trends and technologies.': UserCircleIcon,
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
      'Over 8 years of experience in Software Testing and Quality Assurance.',
      'Expertise in manual and automated testing strategies, including test case creation, execution, and reporting.',
      'Proficient in testing frameworks such as Selenium, JUnit, TestNG, and Cypress.',
      'Strong understanding of continuous integration and delivery (CI/CD) practices in relation to testing.',
      'Passionate about teaching best practices in software testing and quality assurance.',
      'Focus on hands-on learning with real-world software testing projects.',
      'Provides career guidance and interview preparation for aspiring software testers and quality engineers.',
      'Keeps up-to-date with the latest software testing tools, trends, and methodologies.',
    ],
    
  };

  return (
    <div>
      <Trainer trainer={trainerData} />
    </div>
  );
};

export default TrainerProfile;