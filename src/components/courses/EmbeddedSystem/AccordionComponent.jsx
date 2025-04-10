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
      title: 'Introduction to Embedded Systems',
      steps: [
        'Understand the role of an Embedded System Developer.',
        'Learn about the key components of embedded systems: microcontrollers, sensors, actuators.',
        'Overview of embedded system architectures.',
        'Set up your embedded system development environment.',
        'Learn best practices for designing efficient embedded systems.',
      ],
      icon: <GlobeAltIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Core Embedded Systems Concepts',
      steps: [
        'Learn about data types, variables, and operators in Embedded C.',
        'Understand control flow statements for real-time systems.',
        'Explore the fundamentals of real-time operating systems (RTOS).',
        'Learn about memory management in embedded systems.',
        'Understand GPIO (General Purpose Input/Output) and its applications.',
      ],
      icon: <CpuChipIcon className="h-6 w-6 text-green-500" />,
    },
    {
      title: 'Advanced Embedded Systems Design',
      steps: [
        'Learn about embedded system power management techniques.',
        'Explore interrupt handling and event-driven programming.',
        'Understand multithreading and concurrency in embedded systems.',
        'Learn I/O interfacing with sensors, motors, and other peripherals.',
        'Explore debugging techniques and tools for embedded systems.',
      ],
      icon: <CodeBracketIcon className="h-6 w-6 text-purple-500" />,
    },
    {
      title: 'Embedded C Programming',
      steps: [
        'Learn the syntax and structure of Embedded C.',
        'Write low-level code to control hardware peripherals.',
        'Implement communication protocols like UART, SPI, I2C.',
        'Use timers, counters, and PWM in embedded applications.',
        'Learn how to optimize C code for embedded systems.',
      ],
      icon: <GlobeAltIcon className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: 'Microcontroller Programming & Interfacing',
      steps: [
        'Learn to program microcontrollers using Embedded C.',
        'Understand the architecture of popular microcontrollers (e.g., ARM, AVR).',
        'Interface sensors, displays, and motors with microcontrollers.',
        'Use real-time clocks and ADCs (Analog to Digital Converters).',
        'Implement communication protocols such as UART, SPI, and I2C.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-pink-500" />,
    },
    {
      title: 'Embedded Systems Integration',
      steps: [
        'Integrate sensors, actuators, and microcontrollers into a system.',
        'Understand system-level design and integration of embedded hardware and software.',
        'Develop communication between microcontrollers using serial protocols.',
        'Debug embedded systems and optimize system performance.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-pink-500" />,
    },
    {
      title: 'Version Control & Embedded Systems Debugging',
      steps: [
        'Master version control using Git for embedded systems projects.',
        'Learn debugging techniques specific to embedded systems.',
        'Understand hardware debugging using JTAG and logic analyzers.',
        'Use debugging tools to troubleshoot embedded applications.',
        'Explore best practices for embedded software testing and debugging.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-gray-500" />,
    },
    {
      title: 'Final Capstone Project & Deployment',
      steps: [
        'Plan and design a real-world embedded systems project.',
        'Develop a complete embedded solution integrating hardware and software.',
        'Test your embedded system for real-world performance.',
        'Deploy your embedded system on actual hardware.',
        'Showcase your embedded systems development skills.',
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