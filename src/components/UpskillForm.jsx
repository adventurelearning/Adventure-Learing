import React, { useState } from 'react';
import form2 from '../assets/form2.gif';
import API from '../service/API';

function UpskillForm() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone_number: '',
    company_name: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: null
      }));
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await API.post("corporate-training/", formData)
      console.log(res)
    } catch (error) {
      console.log(error)
    }



  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden md:flex">
        <div className="hidden md:block md:w-1/3 bg-[#0057D3] p-8 flex items-center">
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Transform Your Workforce</h2>
            <p className="text-blue-100 mb-6">Let us help you build the skills your team needs to succeed in today's competitive landscape.</p>
            {/* <img 
                  src={form2} 
                  alt="Upskilling illustration" 
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                /> */}
          </div>
        </div>

        <div className="w-full md:w-2/3 p-8">
          <div className="md:hidden mb-6 text-center">
            <h1 className="text-2xl font-bold text-[#0057D3] mb-2">Transform Your Workforce</h1>
            <p className="text-gray-600">Write to us for your upskilling needs</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="HR Manager"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="contactNumber" className="block text-gray-700 text-sm font-medium mb-1">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="companyName" className="block text-gray-700 text-sm font-medium mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company_name"
                value={formData.company_name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Acme Inc."
              />
              {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
            </div>

            <div>
              <label htmlFor="requestMessage" className="block text-gray-700 text-sm font-medium mb-1">
                Request Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.requestMessage ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Tell us about your upskilling needs..."
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                onClick={handleSubmit}
                className={`w-full bg-[#0057D3] hover:bg-[#0044b3] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>

  );
}

export default UpskillForm;