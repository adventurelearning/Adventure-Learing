import { useState } from 'react';

const ArticlePage2= () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          A Growing Demand for Full-Stack Developers
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          In today's fast-paced digital world, companies are constantly on the lookout for professionals who can do it all—and that's exactly where Full-Stack Developers shine.
        </p>
      </div>

      {/* Intro Card */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-12">
        <p className="text-gray-700">
          With the ability to build both the front-end and back-end of applications, full-stack developers have become some of the most in-demand talents in the tech industry. And in 2025, that demand is only growing stronger.
        </p>
      </div>

      {/* What Is Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Is a Full-Stack Developer?</h2>
            <p className="text-gray-600 mb-6">
              A full-stack developer is skilled in both front-end development (what users see and interact with) and back-end development (the server, database, and logic powering the application).
            </p>
            <p className="text-gray-600">
              Think of them as the Swiss Army knife of software development—they can handle the complete development cycle, from user interface design to server-side scripting and database management.
            </p>
          </div>
          <div className="md:w-1/2 bg-gray-100 rounded-xl p-8">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">End-to-End Development</h3>
                <p className="text-gray-600">Client to server and everything in between</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Demand Is Growing */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why the Demand Is Growing in 2025</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Item 1 */}
          <div 
            className={`bg-white p-6 rounded-xl shadow-md cursor-pointer transition-all ${activeAccordion === 1 ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}`}
            onClick={() => toggleAccordion(1)}
          >
            <div className="flex items-start">
              <span className="text-2xl mr-4">🚀</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Startups and Small Teams Need Versatility</h3>
                {activeAccordion === 1 && (
                  <p className="text-gray-600">
                    Startups and small businesses often don't have the resources to hire separate front-end and back-end teams. 
                    A full-stack developer can wear multiple hats and build complete applications faster and more cost-effectively.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div 
            className={`bg-white p-6 rounded-xl shadow-md cursor-pointer transition-all ${activeAccordion === 2 ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}`}
            onClick={() => toggleAccordion(2)}
          >
            <div className="flex items-start">
              <span className="text-2xl mr-4">🌐</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Rise of Web and Mobile Apps</h3>
                {activeAccordion === 2 && (
                  <p className="text-gray-600">
                    As digital products continue to dominate, there's a growing need for professionals who can deliver seamless user experiences while also managing scalable back-end services. 
                    Full-stack devs fit perfectly into this evolving digital ecosystem.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div 
            className={`bg-white p-6 rounded-xl shadow-md cursor-pointer transition-all ${activeAccordion === 3 ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}`}
            onClick={() => toggleAccordion(3)}
          >
            <div className="flex items-start">
              <span className="text-2xl mr-4">💼</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Companies Want End-to-End Ownership</h3>
                {activeAccordion === 3 && (
                  <p className="text-gray-600">
                    Businesses increasingly value developers who can take full ownership of a feature—from planning and design to deployment and maintenance. 
                    Full-stack developers provide this autonomy and accountability.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div 
            className={`bg-white p-6 rounded-xl shadow-md cursor-pointer transition-all ${activeAccordion === 4 ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}`}
            onClick={() => toggleAccordion(4)}
          >
            <div className="flex items-start">
              <span className="text-2xl mr-4">🤖</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Integration with DevOps and Cloud</h3>
                {activeAccordion === 4 && (
                  <p className="text-gray-600">
                    In modern workflows, full-stack developers often work closely with cloud platforms and DevOps pipelines. 
                    Their broad understanding allows them to deploy applications, set up APIs, and even manage CI/CD pipelines, making them even more valuable.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Skills Employers Are Looking For</h2>
        
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Front-end */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800 mb-3 border-b pb-2">Front-end</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  HTML, CSS, JavaScript
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  React
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Angular or Vue.js
                </li>
              </ul>
            </div>

            {/* Back-end */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800 mb-3 border-b pb-2">Back-end</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Node.js
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Python (Django/Flask)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Java, Ruby on Rails, or PHP
                </li>
              </ul>
            </div>

            {/* Databases */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800 mb-3 border-b pb-2">Databases</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  MongoDB
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  MySQL
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  PostgreSQL
                </li>
              </ul>
            </div>

            {/* Tools & Soft Skills */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800 mb-3 border-b pb-2">Tools & Soft Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Git, Docker, Kubernetes
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  AWS, Azure, Google Cloud
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Problem-solving & collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Career Opportunities and Salary Potential</h2>
        
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8">
          <p className="mb-6 text-lg">
            The role of a full-stack developer is among the highest-paying in tech. According to industry reports:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-2">Entry-level</h3>
              <p>$60,000 to $90,000 annually</p>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-2">Experienced</h3>
              <p>$100,000 to $150,000+</p>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-2">Freelance</h3>
              <p>Premium project rates ($50-$150/hr)</p>
            </div>
          </div>
          
          <p className="mt-6">
            And it doesn't stop there—many full-stack devs go on to become tech leads, software architects, or startup founders.
          </p>
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How to Get Started in Full-Stack Development</h2>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Learn the Basics</h3>
              <p className="text-gray-600">Start with HTML, CSS, and JavaScript</p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Choose a Front-End Framework</h3>
              <p className="text-gray-600">React is a great place to start</p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pick a Back-End Language</h3>
              <p className="text-gray-600">Node.js is beginner-friendly and widely used</p>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Understand Databases</h3>
              <p className="text-gray-600">Learn both SQL and NoSQL options</p>
            </div>
          </div>
          
          {/* Step 5 */}
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
              5
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Build Projects</h3>
              <p className="text-gray-600">Hands-on experience is crucial. Build clones of apps like Twitter, Airbnb, or a simple e-commerce site</p>
            </div>
          </div>
          
          {/* Step 6 */}
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
              6
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Comfortable with Git and GitHub</h3>
              <p className="text-gray-600">Version control is a must</p>
            </div>
          </div>
          
          {/* Step 7 */}
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
              7
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Explore Deployment</h3>
              <p className="text-gray-600">Use platforms like Vercel, Netlify, or Heroku to push your apps live</p>
            </div>
          </div>
          
          {/* Step 8 */}
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
              8
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Practice Algorithms & System Design</h3>
              <p className="text-gray-600">Especially important for interviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="bg-gray-900 text-white rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
        <p className="text-lg mb-6">
          The role of the full-stack developer is no longer a niche—it's mainstream, essential, and rapidly evolving. 
          As businesses race to deliver digital solutions faster and more efficiently, full-stack developers are at the heart of innovation.
        </p>
        <p className="text-lg font-medium">
          Whether you're a beginner exploring coding or a professional looking to upskill, now is the perfect time to invest in full-stack development.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg transition transform hover:-translate-y-1">
          Start Learning Full-Stack Development Today
        </button>
      </div>
    </div>
  );
};

export default ArticlePage2;