import React, { useState } from 'react';
import { ChevronDownIcon, CodeBracketIcon, CpuChipIcon, GlobeAltIcon, CloudIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
const AccordionList = ({ items }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-md shadow-sm ">
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
      title: 'Introduction to Cloud Computing',
      steps: [
        'Understand the role of cloud computing and its benefits.',
        'Learn about the different types of cloud models: Public, Private, and Hybrid.',
        'Overview of cloud service providers (AWS, Azure, Google Cloud).',
        'Set up your cloud development environment.',
        'Learn best practices for cloud infrastructure management.',
      ],
      icon: <GlobeAltIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Core Cloud Concepts',
      steps: [
        'Learn about cloud storage, virtual machines, and networking.',
        'Understand cloud service models: IaaS, PaaS, SaaS.',
        'Explore cloud security basics: encryption, firewalls, and identity management.',
        'Learn about scalability, availability, and fault tolerance.',
        'Introduction to cloud computing monitoring and management.',
      ],
      icon: <CpuChipIcon className="h-6 w-6 text-green-500" />,
    },
    {
      title: 'Advanced Cloud Computing Concepts',
      steps: [
        'Explore cloud automation and orchestration tools (e.g., Terraform, Ansible).',
        'Learn about containerization and Docker.',
        'Understand microservices and serverless architecture.',
        'Explore the use of Kubernetes for container orchestration.',
        'Learn cloud security best practices and compliance.',
      ],
      icon: <CodeBracketIcon className="h-6 w-6 text-purple-500" />,
    },
    {
      title: 'Cloud Storage & Databases',
      steps: [
        'Learn about cloud storage options (e.g., AWS S3, Azure Blob Storage).',
        'Understand cloud databases (SQL and NoSQL options).',
        'Explore data backup, replication, and disaster recovery strategies.',
        'Learn to configure and scale cloud databases.',
        'Implement data encryption and security for cloud storage.',
      ],
      icon: <GlobeAltIcon className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: 'Cloud Networking & Security',
      steps: [
        'Understand cloud networking fundamentals (VPCs, Subnets, Routing).',
        'Learn to set up load balancing and auto-scaling.',
        'Explore cloud security groups and access control lists (ACLs).',
        'Implement secure API gateway and access management.',
        'Learn cloud monitoring tools for performance and security.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-pink-500" />,
    },
    {
      title: 'Cloud Infrastructure as Code (IaC)',
      steps: [
        'Learn to automate cloud infrastructure using Infrastructure as Code (IaC).',
        'Explore tools like Terraform, AWS CloudFormation, and Azure Resource Manager.',
        'Understand how to manage cloud resources programmatically.',
        'Learn to deploy and manage scalable cloud infrastructure.',
        'Integrate IaC with CI/CD pipelines for continuous delivery.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-pink-500" />,
    },
    {
      title: 'Version Control & Cloud DevOps Practices',
      steps: [
        'Master version control with Git and GitHub for cloud projects.',
        'Learn Git workflows, branching, and merging for cloud-based development.',
        'Understand DevOps principles and their application in cloud environments.',
        'Automate cloud infrastructure management with CI/CD pipelines.',
        'Integrate cloud deployment with Jenkins, Docker, and Kubernetes.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-gray-500" />,
    },
    {
      title: 'Final Capstone Project & Cloud Deployment',
      steps: [
        'Design and implement a real-world cloud-based application.',
        'Deploy cloud infrastructure using automation tools.',
        'Implement cloud security and monitoring for production environments.',
        'Scale and optimize cloud applications for performance and cost.',
        'Showcase your cloud computing capabilities with a final project deployment.',
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
       </div>
    </div>
  );
};

export default AccordionComponent;