import robot from '../assets/robot.png'
import React, { useState } from 'react';
function SelectCourseContent() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        course: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <>
            <div className="flex flex-col lg:flex-row bg-[#ADD8E6] p-6 lg:p-10 mt-10">
                {/* Left Side - Text and Image */}
                <div className="flex flex-col items-start justify-center w-full lg:w-1/2 space-y-4 mb-6 lg:mb-0">
                    <p className="text-3xl font-bold text-gray-700" style={{ color: "#1E1976" }}>"Learn from us to upskill and advance your career."</p>

                    <div
                        className="image"
                        style={{
                            backgroundImage: `url(${robot})`,
                            backgroundSize: 'cover',
                            width: '300px',
                            height: '300px',
                        }}
                    ></div>

                    <p className="text-xl text-gray-700">"Any Where Any Time"</p>
                </div>
                <div className="w-full lg:w-[500px] max-w-lg bg-white p-4 rounded-2xl shadow-lg">
                    <h2 className="text-sm font-semibold text-center mb-4">Enroll in a Course</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="mb-3">
                            <label htmlFor="name" className="block text-xs font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full lg:w-1/2 px-3 py-1 text-xs mt-1 h-8 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Phone Number and Course Fields */}
                        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3 mb-3">
                            {/* Phone Number Field */}
                            <div className="flex-1">
                                <label htmlFor="phoneNumber" className="block text-xs font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full lg:w-full px-3 py-1 text-xs mt-1 h-8 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Course Selection Field */}
                            <div className="flex-1">
                                <label htmlFor="course" className="block text-xs font-medium text-gray-700">Which course are you interested in?</label>
                                <select
                                    id="course"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className="w-full lg:w-full h-8 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    required
                                >
                                    <option value="">Select a course</option>
                                    <option value="webDevelopment">Web Development</option>
                                    <option value="dataScience">Data Science</option>
                                    <option value="graphicDesign">Graphic Design</option>
                                    <option value="marketing">Marketing</option>
                                </select>
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="mb-3">
                            <label htmlFor="email" className="block text-xs font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full lg:w-1/2 px-3 py-1 text-xs mt-1 h-8 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Comments Field */}
                        <div className="mb-3">
                            <label htmlFor="comments" className="block text-xs font-medium text-gray-700">Comments</label>
                            <textarea
                                id="comments"
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                className="w-full lg:w-full px-3 py-1 text-xs mt-1 h-16 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                rows="3"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                            >Enroll
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}
export default SelectCourseContent;