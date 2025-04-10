import React, { useState } from 'react';
import { ChevronDownIcon, CodeBracketIcon, CpuChipIcon, GlobeAltIcon, CloudIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import img1 from '../../../assets/Course/Coding.gif';
const AccordionList = ({ items }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-md shadow-sm">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-center space-x-2">
              {item.icon}
              <span className="font-medium">{item.title}</span>
            </div>
            <ChevronDownIcon
              className={`h-5 w-5 transition-transform duration-200 ${openItem === index ? 'transform rotate-180' : ''}`}
            />
          </div>
          {openItem === index && (
            <div className="p-4 border-t text-gray-700">
              <ol className="list-decimal list-inside space-y-2">
                {item.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const AccordionComponent = () => {
  const accordionItems = [
    {
      title: 'Introduction to Software Testing',
      steps: [
        'Understand the role of a software tester.',
        'Learn about the different types of software testing: Manual and Automated.',
        'Overview of the software development lifecycle (SDLC).',
        'Set up your testing environment.',
        'Learn best practices for writing effective test cases.',
      ],
      icon: <GlobeAltIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Core Testing Concepts',
      steps: [
        'Learn about different types of testing: Unit, Integration, System, and Acceptance.',
        'Understand functional vs non-functional testing.',
        'Explore test levels: Smoke, Sanity, Regression, and User Acceptance Testing (UAT).',
        'Learn about test case design techniques.',
        'Handle bug tracking and defect management.',
      ],
      icon: <CpuChipIcon className="h-6 w-6 text-green-500" />,
    },
    {
      title: 'Advanced Testing Techniques',
      steps: [
        'Explore test automation tools (e.g., Selenium, Cypress).',
        'Learn about Continuous Integration and Continuous Testing.',
        'Understand performance testing, load testing, and stress testing.',
        'Learn about security testing and penetration testing.',
        'Explore API testing and mocking.',
      ],
      icon: <CodeBracketIcon className="h-6 w-6 text-purple-500" />,
    },
    {
      title: 'Front-End Testing',
      steps: [
        'Learn about testing HTML, CSS, and JavaScript for web applications.',
        'Understand cross-browser and cross-platform testing.',
        'Use tools for UI testing like Selenium or Cypress.',
        'Explore responsive design testing.',
        'Learn about visual regression testing.',
      ],
      icon: <GlobeAltIcon className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: 'Back-End Testing',
      steps: [
        'Test back-end APIs using tools like Postman or REST Assured.',
        'Understand database testing and SQL queries.',
        'Learn about testing services, microservices, and cloud applications.',
        'Implement authentication and authorization tests.',
        'Explore testing with Docker containers and virtual environments.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-pink-500" />,
    },
    {
      title: 'Test Automation Frameworks',
      steps: [
        'Understand the role of test automation frameworks.',
        'Learn to build test automation frameworks from scratch.',
        'Integrate automated tests with CI/CD pipelines.',
        'Learn about test reporting and logging.',
        'Explore popular frameworks like JUnit, TestNG, and Cucumber.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-pink-500" />,
    },
    {
      title: 'Version Control & Test Management',
      steps: [
        'Master version control with Git for test scripts.',
        'Learn Git workflows for managing test code.',
        'Understand test management tools (e.g., TestRail, Jira).',
        'Track test execution and manage test environments.',
        'Learn about test coverage and metrics.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-gray-500" />,
    },
    {
      title: 'Final Capstone Project & Test Reporting',
      steps: [
        'Plan and design a real-world test project.',
        'Automate test cases and integrate them into the CI/CD pipeline.',
        'Write detailed test reports and bug documentation.',
        'Test the application in various environments.',
        'Showcase your software testing skills with a final project presentation.',
      ],
      icon: <CloudIcon className="h-6 w-6 text-teal-500" />,
    },
  ];
  

  return (
    <div className="container-fluid mx-auto my-10">
       <div className={`grid grid-cols-1 md:grid-cols-0 gap-4  p-10 rounded-md `}>
         <div className='bg-white rounded-md '>
                <AccordionList items={accordionItems} />
         </div>
         {/* <div className=' bg-inherit   flex items-center justify-center'>
             <img src={img1} alt="" className='w-96 h-96' />
         </div> */}
     
       </div>
    </div>
  );
};

export default AccordionComponent;