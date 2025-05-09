import React from 'react';

const CourseCard = ({ iconClass, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
    <div className="rounded-md p-3 mb-4">
      <i className={`bi ${iconClass} h-6 w-6 text-blue-500`}></i>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{title}</h3>
    <p className="text-sm text-gray-600 text-center">{description}</p>
  </div>
);

const Sample = () => {
  const courses = [
    {
      iconClass: 'bi-currency-dollar bg-green-100 text-green-600 text-base p-3 mb-4', // Bootstrap Pencil Icon class
      title: 'More Affordable',
      description: 'When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are...'},
    {
      iconClass: 'bi-briefcase bg-orange-100 text-orange-600 text-base p-3 mb-4', // Bootstrap Laptop Icon class
      title: 'Job Connector',
      description: 'With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning...'
    },
    {
      iconClass: 'bi-calendar-check bg-blue-100 text-blue-600 text-base p-3 mb-4', // Bootstrap Box Seam Icon class (similar to Cube)
      title: 'Flexible and Short',
      description: 'Just like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different...'
    },
    {
      iconClass: 'bi-award bg-indigo-100 text-indigo-600 text-base p-3 mb-4', // Bootstrap Briefcase Fill Icon class
      title: 'Credible Certificate',
      description: 'With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning...'
    },
    {
      iconClass: 'bi-layers bg-red-100 text-red-600 text-base p-3 mb-4', // Bootstrap Bar Chart Line Icon class
      title: 'Build a Portfolio',
      description: 'If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad...'
    },
    {
      iconClass: 'bi-people-fill bg-yellow-100 text-yellow-600 text-base p-3 mb-4', // Bootstrap Camera Fill Icon class
      title: 'Group Learning',
      description: 'One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for...'
    },
    {
      iconClass: 'bi-chat-dots-fill bg-pink-100 text-pink-600 text-base p-3 mb-4', // Bootstrap Film Icon class
      title: 'Live Mentoring',
      description: 'One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for...'
    },
    {
      iconClass: 'bi-infinity bg-gray-100 text-gray-600 text-base p-3 mb-4', // Bootstrap Briefcase Icon class
      title: 'Lifelong Access',
      description: 'One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for...'
    },
  ];

  return (
    <section data-aos="fade-down" className="bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl  font-semibold text-[#0057D3] mb-4">
            The Benefits of Learning With Us
          </h2>
          <p className="text-lg font-normal text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of students choose Adventure Learning for their education journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sample;