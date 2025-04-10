import { useState } from 'react';

const ArticlePage3 = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Adaptability with Technology: A Key Skill for Remote Work in 2025
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          As remote work continues to rise, professionals need to be adaptable with technology to stay competitive. 
          This article explores how full-stack developers are in high demand and why their versatility makes them crucial in today’s digital landscape.
        </p>
      </div>

      {/* Intro Card */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-12">
        <p className="text-gray-700">
          The role of a full-stack developer is evolving rapidly, especially in a remote-first world. By mastering both front-end and back-end development, full-stack developers provide the flexibility and efficiency companies need to thrive in an increasingly digital economy.
        </p>
      </div>

      {/* What Is Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Is a Full-Stack Developer?</h2>
            <p className="text-gray-600 mb-6">
              A full-stack developer is someone who can work on both the front-end and back-end of a web application. This means they handle everything from what users interact with (the front-end) to the servers, databases, and logic that power the app (the back-end).
            </p>
            <p className="text-gray-600">
              Their ability to manage all aspects of a project makes them invaluable, especially in the context of remote work, where teams may be smaller and require individuals to wear multiple hats.
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
                <p className="text-gray-600">From client-side to server-side, full-stack developers can manage it all</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Demand Is Growing */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why the Demand for Full-Stack Developers Is Growing in 2025</h2>

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
                    Startups and small businesses often lack the resources to hire multiple specialized developers. Full-stack developers are able to handle both front-end and back-end tasks, making them an attractive choice for these teams.
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
                    With the growing need for web and mobile apps, companies are looking for developers who can seamlessly work across the entire tech stack. Full-stack developers fit perfectly into this growing digital ecosystem.
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
                    More companies are looking for developers who can handle the entire product lifecycle—from planning and design to deployment and maintenance. Full-stack developers can provide this kind of ownership.
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
                    Full-stack developers often work with cloud platforms and DevOps tools to manage deployments and continuous integration/continuous deployment (CI/CD) processes, making them essential in modern development workflows.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="bg-gray-900 text-white rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
        <p className="text-lg mb-6">
          As the demand for remote work continues to rise, adaptability with technology has become a key skill. Full-stack developers, with their ability to manage the entire software development process, are increasingly valuable. 
        </p>
        <p className="text-lg font-medium">
          Whether you're looking to start your career in tech or you're an experienced developer seeking to expand your skill set, now is the perfect time to embrace full-stack development.
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

export default ArticlePage3;
