import React, { useState } from 'react';
import Contact from '../assets/Contact.gif';
import API from '../service/API';

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    sub: '',
    message: '',
  });
  console.log(formData);

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

      const res = await API.post("contacts/", formData)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-6 lg:mt-10 px-4 lg:px-0">
      {/* Form Section */}
      <div className="bg-white py-8 lg:py-10 px-4 sm:px-6 rounded-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-sm lg:shadow-none">
        <div className="mb-6 w-full">
          {/* <p data-aos="fade-down" className='text-base lg:text-lg text-gray-600 font-bold'>CONTACT</p> */}
          <h2 data-aos="fade-down" className="text-2xl sm:text-3xl font-semibold text-[#0057D3] mb-2">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-semibold">
            Have a question about your course? Reach out, and our team will be
            happy to assist you every step of the way!
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full outline-none px-4 py-2 border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
                placeholder="John Doe"/>
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none px-4 py-2 border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
                placeholder="john@company.com"/>
               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
               </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
            <input
                  type="tel"
                  id="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                className="w-full outline-none px-4 py-2 border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
                placeholder="+91 Phone-Number"/>
              {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
              </div>           
            <div>
            <input
                type="text"
                id="sub"
                value={formData.sub}
                onChange={handleChange}
                className="w-full outline-none px-4 py-2 border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
               placeholder='Subject'/>
              {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
            </div>
          </div>

          <div>
          <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              className="w-full outline-none px-4 py-2 border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
              placeholder="Tell us about your upskilling needs..."></textarea>                
          </div>
          <div>
            <button
             type="submit"
             onClick={handleSubmit}
              className="bg-[#0057D3] hover:bg-white text-white hover:text-[#0057D3] border hover:border-[#0057D3] font-semibold py-2 px-6 rounded-md text-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-full md:w-1/2 lg:w-1/3 mt-8 lg:mt-0 px-4">
        <img
          className="w-full h-auto object-cover"
          src={Contact}
          alt="Contact Illustration"
          data-aos="fade-left"
          data-aos-delay="50"
        />
      </div>
    </div>
  );
};

export default ContactForm;
