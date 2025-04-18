import React, { useState } from 'react';
import { 
  ChevronDownIcon, 
  CodeBracketIcon, 
  CpuChipIcon, 
  GlobeAltIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CommandLineIcon,
  ServerIcon,
  CodeBracketSquareIcon
} from '@heroicons/react/24/outline';
import img1 from '../../../assets/Course/Coding.gif';

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden transition-all duration-200">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-md bg-opacity-20" style={{ backgroundColor: `${item.color}20` }}>
            {item.icon}
          </div>
          <span className="font-medium text-gray-800">{item.title}</span>
        </div>
        <ChevronDownIcon
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-50 border-t">
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {item.steps.map((step, stepIndex) => (
              <li key={stepIndex} className="pb-1">
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

const AccordionList = ({ items }) => {
  const [openItem, setOpenItem] = useState(0); // Default to first item open

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openItem === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

const AccordionComponent = () => {
  const accordionItems = [
    {
      title: 'Introduction to Full Stack Development',
      steps: [
        'Understand the role of a Full Stack Developer',
        'Learn about the layers of a web application: Front-end, Back-end, Database',
        'Overview of technologies used in the course',
        'Set up your development environment',
        'Learn best practices for clean and maintainable code'
      ],
      icon: <GlobeAltIcon className="h-5 w-5 text-blue-600" />,
      color: '#3B82F6'
    },
    {
      title: 'Core Java Fundamentals',
      steps: [
        'Learn data types, variables, and operators',
        'Understand control flow statements',
        'Explore Object-Oriented Programming (OOP) concepts',
        'Learn about classes, objects, inheritance, and polymorphism',
        'Handle exceptions in Java'
      ],
      icon: <CpuChipIcon className="h-5 w-5 text-green-600" />,
      color: '#10B981'
    },
    {
      title: 'Advanced Java Concepts',
      steps: [
        'Explore multithreading and concurrency',
        'Learn about the Collections Framework',
        'Understand I/O operations',
        'Learn network programming in Java',
        'Explore design patterns and best practices'
      ],
      icon: <CodeBracketIcon className="h-5 w-5 text-purple-600" />,
      color: '#8B5CF6'
    },
    {
      title: 'Front-End Development',
      steps: [
        'Learn HTML for structuring web content',
        'Style web pages with CSS',
        'Add interactivity with JavaScript',
        'Learn responsive web design',
        'Explore modern JavaScript frameworks like React'
      ],
      icon: <CommandLineIcon className="h-5 w-5 text-yellow-600" />,
      color: '#F59E0B'
    },
    {
      title: 'Back-End Development with Java',
      steps: [
        'Build back-end applications using Java and Spring Boot',
        'Create RESTful APIs',
        'Handle database interactions',
        'Implement authentication and authorization',
        'Deploy applications to production environments'
      ],
      icon: <ServerIcon className="h-5 w-5 text-pink-600" />,
      color: '#EC4899'
    },
    {
      title: 'Full-Stack Integration',
      steps: [
        'Connect React front-end to Java back-end using RESTful APIs',
        'Understand data flow and state management',
        'Handle asynchronous operations',
        'Build complete full stack web applications'
      ],
      icon: <CodeBracketSquareIcon className="h-5 w-5 text-indigo-600" />,
      color: '#6366F1'
    },
    {
      title: 'Version Control & DevOps Basics',
      steps: [
        'Master version control with Git',
        'Learn Git workflows, branching, and merging',
        'Understand DevOps practices',
        'Automate build, test, and deployment with Jenkins and Docker',
        'Prepare for professional development environments'
      ],
      icon: <CloudIcon className="h-5 w-5 text-gray-600" />,
      color: '#6B7280'
    },
    {
      title: 'Final Capstone Project & Deployment',
      steps: [
        'Plan and design a real-world capstone project',
        'Develop a complete web application',
        'Apply best practices for production-ready applications',
        'Deploy the application to cloud platforms like AWS or Heroku',
        'Showcase your full stack capabilities'
      ],
      icon: <RocketLaunchIcon className="h-5 w-5 text-teal-600" />,
      color: '#14B8A6'
    }
  ];

  return (
    <div className="w-full mx-auto px-4 sm:px-6  py-12">
      <div className="grid grid-cols-1 lg:grid-cols-0 gap-8 items-center">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Curriculum</h2>
          <AccordionList items={accordionItems}  />
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;