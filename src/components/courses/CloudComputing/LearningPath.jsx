import React from 'react';

const data = [
  {
    title: 'Beginners',
    description: "We'll guide you step by step – no coding experience required.",
  },
  {
    title: 'Aspiring Developers',
    description: 'Want to specialize in embedded systems? This is for you.',
  },
  {
    title: 'Career Changers',
    description: 'Thinking of switching careers? This path is tailored for you.',
  },
  {
    title: 'Students/Graduates',
    description: 'Boost your resume and job prospects with in-demand skills.',
  },
  {
    title: 'Tech Enthusiasts/Entrepreneurs',
    description: 'Build your own prototypes and launch embedded products.',
  },
];

const LearningPath = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-4">
              Cloud Computing Training Learning Path
            </h3>
            <p className="text-gray-600 text-justify text-lg mb-6 max-w-3xl mx-auto">
              This course is perfect for anyone interested in Cloud Computing, whether you're a beginner or looking to advance your skills.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="overflow-x-auto hidden sm:block">
            <div className="min-w-[640px] px-4 sm:px-6 lg:px-8 pb-8">
              <table className="w-full rounded-lg overflow-hidden border-collapse">
                <thead className="bg-gradient-to-r from-[#0057D3] to-[#00A3FF] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-b-2 border-blue-700">
                      Who is it for?
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-b-2 border-blue-700">
                      Why it's great for you
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-start">
                  {data.map((item, idx) => (
                    <tr key={idx} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-5 whitespace-nowrap border-r border-gray-100">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                            <svg className="h-5 w-5 text-blue-600" viewBox="0 0 35 32">
                              <path fill="currentColor" d="M0 12l5-5 10 10L30 2l5 5L15 32z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-base font-semibold text-gray-800">{item.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="sm:hidden px-6 pb-8 space-y-4">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-0.5">
                    <svg className="h-4 w-4 text-blue-600" viewBox="0 0 35 32">
                      <path fill="currentColor" d="M0 12l5-5 10 10L30 2l5 5L15 32z" />
                    </svg>
                  </div>
                  <div>
                  <h4 className="text-lg text-start font-semibold text-gray-800 mb-1.5">{item.title}</h4>
                  <p className="text-sm text-start text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default LearningPath;
