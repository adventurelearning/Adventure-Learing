import React from 'react';

const TrainingStepCard = ({ number, title, description }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
      <div className="absolute top-2 left-2 bg-[#0057D3] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description.substring(0, 80)}... <a href="#" className="text-blue-500 hover:underline">Read More</a></p>
    </div>
  );
};

const TrainingSteps = () => {
  const benefitsData = [
    {
      number: '01',
      title: 'More Affordable',
      description: 'When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are...'
    },
    {
      number: '02',
      title: 'Job Connector',
      description: 'With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning...'
    },
    {
      number: '03',
      title: 'Flexible and Short',
      description: 'Just like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different...'
    },
    {
      number: '04',
      title: 'Credible Certificate',
      description: 'With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning...'
    },
    {
      number: '05',
      title: 'Build a Portfolio',
      description: 'If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad...'
    },
    {
      number: '06',
      title: 'Group Learning',
      description: 'One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for...'
    },
    {
      number: '07',
      title: 'Live Mentoring',
      description: 'One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for...'
    },
    {
      number: '08',
      title: 'Lifelong Access',
      description: 'One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for...'
    },
  ];

  return (
    <div className="bg-blue-100 py-12">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0057D3] mb-4">The Benefits of Taking a Course at Adventure</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefitsData.map((benefit, index) => (
          <TrainingStepCard key={index} {...benefit} />
        ))}
      </div>
    </div>
  );
};

export default TrainingSteps;