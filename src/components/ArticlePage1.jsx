import { useState } from 'react';

const ArticlePage1 = () => {
    const [activeCourse, setActiveCourse] = useState(null);

    const toggleCourse = (id) => {
        setActiveCourse(activeCourse === id ? null : id);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Article Header */}
            <header className="mb-12 text-center">
                <h1 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-4">
                    6 Trending Courses Online in 2025: Top Benefits and How To Pick One!
                </h1>
                <p className="text-xl text-gray-600">
                    In the fast-evolving tech landscape of 2025, staying ahead means constantly learning new skills.
                    Online courses are booming, offering flexibility and global access to quality education.
                </p>
            </header>

            {/* Introduction Paragraph */}
            <section className="mb-12 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700">
                    But with so many options, which ones are worth your time? Let's dive into six trending online courses this year,
                    explore their benefits, and help you choose the right path.
                </p>
            </section>

            {/* Courses Section */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Trending Courses in 2025</h2>

                {/* Course 1 */}
                <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                        onClick={() => toggleCourse(1)}
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">1. Full Stack Development</h3>
                        <svg
                            className={`w-6 h-6 text-gray-500 transform transition-transform ${activeCourse === 1 ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {activeCourse === 1 && (
                        <div className="px-6 pb-6">
                            <h4 className="text-lg font-medium text-gray-700 mb-2">Why It's Hot:</h4>
                            <p className="text-gray-600 mb-4">
                                In 2025, the demand for versatile developers who can work across the entire tech stack is higher than ever.
                                Full Stack Developers can build both front-end and back-end systems, making them indispensable in startups and tech giants alike.
                            </p>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">Top Benefits:</h4>
                            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-600">
                                <li>High-paying job opportunities globally</li>
                                <li>Work flexibility: freelance, remote, or in-office</li>
                                <li>Rapid project deployment skills</li>
                                <li>Great foundation for entrepreneurship or product building</li>
                            </ul>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">Recommended For:</h4>
                            <p className="text-gray-600">
                                Aspiring developers, career changers, or anyone who enjoys both design and logic.
                            </p>
                        </div>
                    )}
                </div>

                {/* Course 2 */}
                <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                        onClick={() => toggleCourse(2)}
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">2. Embedded Systems</h3>
                        <svg
                            className={`w-6 h-6 text-gray-500 transform transition-transform ${activeCourse === 2 ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {activeCourse === 2 && (
                        <div className="px-6 pb-6">
                            <h4 className="text-lg font-medium text-gray-700 mb-2">Why It's Hot:</h4>
                            <p className="text-gray-600 mb-4">
                                With the rise of IoT, autonomous vehicles, and smart devices, embedded systems are everywhere.
                                These systems blend hardware and software, making them crucial for future tech innovations.
                            </p>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">Top Benefits:</h4>
                            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-600">
                                <li>Work in cutting-edge industries (automotive, robotics, healthcare)</li>
                                <li>High demand in hardware-software integration roles</li>
                                <li>Ideal for electronics or electrical engineering backgrounds</li>
                                <li>Encourages problem-solving and low-level programming skills</li>
                            </ul>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">Recommended For:</h4>
                            <p className="text-gray-600">
                                Engineering students, hardware enthusiasts, or techies looking to move into smart technology sectors.
                            </p>
                        </div>
                    )}
                </div>

                {/* Course 3 */}
                <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                        onClick={() => toggleCourse(3)}
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">3. Data Science</h3>
                        <svg
                            className={`w-6 h-6 text-gray-500 transform transition-transform ${activeCourse === 3 ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {activeCourse === 3 && (
                        <div className="px-6 pb-6">
                            <h4 className="text-lg font-medium text-gray-700 mb-2">Why It's Hot:</h4>
                            <p className="text-gray-600 mb-4">
                                Data is the new oil. Every company, from finance to healthcare, needs Data Scientists to interpret complex data and make strategic decisions.
                            </p>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">Top Benefits:</h4>
                            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-600">
                                <li>Lucrative salaries and leadership roles</li>
                                <li>Widely applicable across industries</li>
                                <li>Strong community and learning resources</li>
                                <li>Power to drive real business change</li>
                            </ul>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">Recommended For:</h4>
                            <p className="text-gray-600">
                                Math lovers, analytical thinkers, or professionals in business, finance, or IT.
                            </p>
                        </div>
                    )}
                </div>

                {/* Course 4 */}
                <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                        onClick={() => toggleCourse(4)}
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">4. Data Analytics</h3>
                        <svg
                            className={`w-6 h-6 text-gray-500 transform transition-transform ${activeCourse === 4 ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {activeCourse === 4 && (
                        <div className="px-6 pb-6">
                            <h4 className="text-lg font-medium text-gray-700 mb-2">Why It's Hot:</h4>
                            <p className="text-gray-600 mb-4">
                                Not every company needs a full-blown data scientist—but every business needs analysts to turn raw data into insights.
                                Data Analytics is booming due to its accessible learning curve and massive career opportunities.
                            </p>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">Top Benefits:</h4>
                            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-600">
                                <li>Easier entry point compared to Data Science</li>
                                <li>Used in marketing, sales, operations, and finance</li>
                                <li>Business-driven problem solving</li>
                                <li>Excellent stepping stone into more advanced fields</li>
                            </ul>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">Recommended For:</h4>
                            <p className="text-gray-600">
                                Business professionals, marketing experts, Excel pros, and beginners to the data world.
                            </p>
                        </div>
                    )}
                </div>

                {/* Course 5 */}
                <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                        onClick={() => toggleCourse(5)}
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">5. Cloud Computing</h3>
                        <svg
                            className={`w-6 h-6 text-gray-500 transform transition-transform ${activeCourse === 5 ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {activeCourse === 5 && (
                        <div className="px-6 pb-6">
                            <h4 className="text-lg font-medium text-gray-700 mb-2">Why It's Hot:</h4>
                            <p className="text-gray-600 mb-4">
                                Cloud has become the backbone of modern IT infrastructure. AWS, Azure, and Google Cloud skills are critical for nearly every tech job in 2025.
                            </p>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">Top Benefits:</h4>
                            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-600">
                                <li>High-paying roles in DevOps, cloud architecture, and security</li>
                                <li>Remote-friendly and global demand</li>
                                <li>Scales easily with career growth</li>
                                <li>Foundation for emerging tech like AI, IoT, and Big Data</li>
                            </ul>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">Recommended For:</h4>
                            <p className="text-gray-600">
                                IT professionals, sysadmins, software engineers, or anyone aiming to future-proof their tech skills.
                            </p>
                        </div>
                    )}
                </div>

                {/* Course 6 */}
                <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                        onClick={() => toggleCourse(6)}
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">6. Software Testing & QA</h3>
                        <svg
                            className={`w-6 h-6 text-gray-500 transform transition-transform ${activeCourse === 6 ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {activeCourse === 6 && (
                        <div className="px-6 pb-6">
                            <h4 className="text-lg font-medium text-gray-700 mb-2">Why It's Hot:</h4>
                            <p className="text-gray-600 mb-4">
                                As software products scale, so does the need for quality assurance. Testing has transformed with automation,
                                performance tools, and AI integration, making QA more technical and respected than ever.
                            </p>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">Top Benefits:</h4>
                            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-600">
                                <li>Gateway to tech for non-coders</li>
                                <li>Crucial for product quality and customer satisfaction</li>
                                <li>Automation testing skills are highly valued</li>
                                <li>Opportunities in manual, performance, and security testing</li>
                            </ul>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">Recommended For:</h4>
                            <p className="text-gray-600">
                                Detail-oriented individuals, career switchers, and those who enjoy breaking things to improve them.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* How to Choose Section */}
            <section className="mb-16 bg-indigo-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">How To Pick the Right Course for You</h2>
                <p className="text-gray-700 mb-6">
                    Choosing the best course depends on your background, goals, and interests. Here's a simple framework:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">🔍 1. Assess Your Current Skills</h3>
                        <p className="text-gray-600">
                            Are you starting from scratch or building on existing experience?
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">🎯 2. Define Your Goals</h3>
                        <p className="text-gray-600">
                            Looking for a new job, a promotion, or freelance work?
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 3. Know Your Learning Style</h3>
                        <p className="text-gray-600">
                            Do you prefer hands-on labs, theory, or a mix of both?
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">⏰ 4. Time Commitment</h3>
                        <p className="text-gray-600">
                            Some courses require full-time effort, others just a few hours a week.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">💼 5. Industry Demand</h3>
                        <p className="text-gray-600">
                            Check job boards like LinkedIn or Indeed to see what's hot in your region.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final Thoughts */}
            <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                <p className="mb-6">
                    Whether you're diving into Full Stack Development or exploring Cloud Computing, 2025 offers more accessible learning paths than ever before.
                    Online courses can transform your career—if you choose wisely.
                </p>
                <p className="font-medium">
                    So, which one are you going for?
                </p>
            </section>

            {/* Call to Action */}
            <div className="mt-12 text-center">
                <button
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="bg-[#0057D3] hover:bg-white text-white hover:text-[#0057D3] border hover:border-[#0057D3] font-semibold py-2 px-6 md:py-3 md:px-8 rounded-md text-sm transition-all duration-300 transform hover:scale-105"
                >
                    EXPLORE ALL COURSE
                </button>
            </div>
        </div>
    );
};

export default ArticlePage1;