import { useState } from 'react';
import API from '../service/API';
const Register= () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    courses: '',
    training_mode: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const courses = [
    { id: 'web_development', name: 'Web Development' },
    { id: 'data_science', name: 'Data Science' },
    { id: 'digital_marketing', name: 'Digital Marketing' },
    { id: 'graphic_design', name: 'Graphic Design' },
    { id: 'business_analytics', name: 'Business Analytics' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res= await API.post("register/",formData)
      console.log(res)
    }
    catch(error){
      console.log(error)
    }  
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-6 bg-green-50 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
        <p className="text-gray-700">Your registration has been submitted successfully.</p>
        <p className="text-gray-600 mt-2">We'll contact you shortly with more details.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Online Course Registration</h1>
      
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
            Select Course <span className="text-red-500">*</span>
          </label>
          <select
            id="courses"
            name="courses"
            value={formData.courses}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Please choose a course --</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>{course.name}</option>
            ))}
          </select>
        </div>

        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Training Mode <span className="text-red-500">*</span>
          </span>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="training_mode"
                value="one_on_one"
                checked={formData.training_mode === 'one_on_one'}
                onChange={handleChange}
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">One-on-One Training</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="training_mode"
                value="live_training"
                checked={formData.training_mode === 'live_training'}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Live Group Training</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Comments
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default Register;