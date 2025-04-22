
import React from 'react';

const FeatureCard = ({ number, title, description }) => {
  return (
    <div className="p-8 rounded-lg bg-blue-50 border-l-4 border-blue-600 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-800">
            {title}
          </h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Overview2 = () => {
  const features = [
    {
      number: '#1',
      title: 'Comprehensive Curriculum',
      description:
        "Master both data handling and real-time analytics.",
    },
    {
      number: '#2',
      title: 'Hands-On Projects',
      description:
        'Build real-world applications to strengthen your skills.',
    },
    {
      number: '#3',
      title: 'Expert Guidance',
      description:
        'Learn from experienced instructors with industry insights.',
    },
    {
      number: '#4',
      title: 'Career Support',
      description:
        'Get assistance with job placement and interview preparation.',
    },
    {
      number: '#5',
      title: 'Certification',
      description:
        'Receive an industry-recognized certification upon completion.',
    },
    {
      number: '#6',
      title: 'Lifetime Access',
      description:
        'Access course materials anytime, even after graduation.',
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl  font-semibold text-[#0057D3] lg:text-3xl">
          What You Will Get in the Data Analytics Course
          </h2>        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview2;
