import React from 'react';
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.png';
import course4 from '../assets/course4.png';
import course5 from '../assets/course5.png';
import course6 from '../assets/course6.png';

function SpecialLearners() {
  const learnerCategories = [
    {
      name: 'Embedded System',
      image: course2,
      description: 'Experts in IoT, microcontrollers, and hardware-software integration'
    },
    {
      name: 'Full Stack',
      image: course4,
      description: 'Proficient in both frontend and backend development technologies'
    },
    {
      name: 'Cloud Computing',
      image: course6,
      description: 'Skilled in AWS, Azure, and GCP cloud infrastructure solutions'
    },
    {
      name: 'Data Analytics',
      image: course5,
      description: 'Experts in data visualization, SQL, and statistical analysis'
    },
    {
      name: 'Java Full Stack',
      image: 'https://www.mytaskpanel.com/wp-content/uploads/2023/04/consulting-blog-09.webp',
      description: 'Spring Boot, Hibernate, and modern JavaScript framework specialists'
    },
    {
      name: 'Python Developer',
      image: 'https://img.freepik.com/premium-photo/python-programming-language-programing-workflow-abstract-algorithm-concept-virtual-screen_161452-10951.jpg',
      description: 'Django, Flask, and data science ecosystem professionals'
    },
    {
      name: 'Software Testing',
      image: 'https://www.keenesystems.com/hs-fs/hubfs/software-testing.jpg',
      description: 'QA automation engineers with Selenium , CI/CD pipeline experience'
    },
    {
      name: 'Web Development',
      image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg',
      description: 'React, Angular, and Vue.js specialists with responsive design skills'
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0057D3] mb-3">
            Hire From Our Top-Level Specialized Learners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Skilled learners equipped with industry-relevant knowledge, ready to contribute to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learnerCategories.map((category, index) => (
            <article 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={`${category.name} specialization`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  width={400}
                  height={225}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/400x225?text=Course+Image';
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
                {/* <button 
                  className="mt-4 text-sm font-medium text-[#0057D3] hover:text-[#003d99] transition-colors"
                  aria-label={`Explore ${category.name} candidates`}
                >
                  View Candidates →
                </button> */}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <button className="bg-[#0057D3] hover:bg-[#0044b3] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
            Browse All Specializations
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default SpecialLearners;