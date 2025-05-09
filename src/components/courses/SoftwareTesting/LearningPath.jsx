import React from 'react'

const data = [
  {
    title: 'Beginners',
    benefit: 'No coding or testing background? We start from scratch.',
  },
  {
    title: 'Aspiring Testers',
    benefit: 'Looking to build a career in QA or automation testing? This course is your foundation.',
  },
  {
    title: 'Career Switchers',
    benefit: 'Coming from non-tech? Software testing is a great entry point into IT.',
  },
  {
    title: 'Students/Graduates',
    benefit: 'Want to boost your resume with practical QA skills? This course is for you.',
  },
  {
    title: 'Developers',
    benefit: 'Want to improve your testing knowledge? Learn how to write test cases and automate them.',
  },
]

const LearningPath = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-4">
            Software Testing Learning Path
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">
            This course is perfect for anyone interested in Software Testing, whether you're a beginner or looking to advance your skills.
            </p>
          </div>

          {/* Desktop table view */}
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
                      <td className="px-6 py-5 text-sm text-gray-600">{item.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile stacked card view */}
          <div className="sm:hidden px-6 pb-8 space-y-4">
            {data.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-0.5">
                    <svg className="h-4 w-4 text-blue-600" viewBox="0 0 35 32">
                      <path fill="currentColor" d="M0 12l5-5 10 10L30 2l5 5L15 32z" />
                    </svg>
                  </div>
                  <div>
                  <h4 className="text-lg text-start font-semibold text-gray-800 mb-1.5">{item.title}</h4>
                  <p className="text-sm text-start text-gray-600 leading-relaxed">{item.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default LearningPath