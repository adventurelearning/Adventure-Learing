import React from 'react';

function LearnerToExpert() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="lg:text-3xl text-2xl font-semibold text-[#0057D3] mb-4">
          From Learner to Industry Expert
        </h1>
        <p className="text-lg font-normal text-gray-700 mb-8">
          At Adventure Learning, we mentor, train, and launch successful careers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Industry-Level Training Card */}
          <div className="bg-white rounded-lg shadow-lg  p-8 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <h3 className="text-xl font-semibold text-[#0057D3] mb-4">
              Industry-Level Training
            </h3>
            <p className="text-gray-600 text-sm">
              Real-world projects, industry tools, used by Google, Infosys, TCS
            </p>
          </div>

          {/* Mentorship & Mock Interviews Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <h3 className="text-xl font-semibold text-[#0057D3] mb-4">
              Mentorship & Mock Interviews
            </h3>
            <p className="text-gray-600 text-sm">
              1:1 mentorship, mock interviews, feedback to boost communication, problem-solving.
            </p>
          </div>

          {/* Placement & Career Launch Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <h3 className="text-xl font-semibold text-[#0057D3] mb-4">
              Placement & Career Launch
            </h3>
            <p className="text-gray-600 text-sm">
              Partnering with MNCs for placements, guaranteed interviews, career support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnerToExpert;
