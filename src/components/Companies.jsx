import React from 'react';
import company1 from '../assets/company1.webp';
import company2 from '../assets/company2.webp';
import company3 from '../assets/company3.webp';
import company4 from '../assets/company4.webp';
import company5 from '../assets/company5.webp';
import company6 from '../assets/company6.webp';
import company7 from '../assets/company7.webp';
import company8 from '../assets/company8.webp';

function Companies() {
  const companies = [
    { name: "Microsoft", logo: company1 },
    { name: "Accenture", logo: company2 },
    { name: "Google", logo: company3 },
    { name: "Amazon", logo: company4 },
    { name: "IBM", logo: company5 },
    { name: "Salesforce", logo: company6 },
    { name: "Oracle", logo: company7 },
    { name: "SAP", logo: company8 },
  ];

  const stats = [
    { icon: "bi-person-circle", value: "67.1k", label: "Students", color: "text-purple-600" },
    { icon: "bi-book", value: "26k", label: "Certified Instructor", color: "text-blue-600" },
    { icon: "bi-globe2", value: "72", label: "Country Language", color: "text-red-600" },
    { icon: "bi-check2-circle", value: "99.9%", label: "Success Rate", color: "text-green-600" },
    { icon: "bi-building-gear", value: "57", label: "Trusted Companies", color: "text-yellow-600" },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl  font-semibold text-[#0057D3] mb-2">
            Top companies use Adventure Learning for their enterprises
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl  font-bold text-gray-800 mb-4">
              We're Growing Strong with <span className='block'>Thousands of Partners</span>
            </h3>
            <p className="text-gray-600">
              Our rapidly expanding network connects more partners, creating greater opportunities 
              for collaboration, innovation, and success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-3/4">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center items-center p-4">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="max-h-12 object-contain" 
                  loading="lazy"
                  width={120}
                  height={48}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`rounded-full ${stat.color} p-3`}>
                    <i className={`bi ${stat.icon} text-2xl`} aria-hidden="true"></i>
                  </div>
                  <strong className="text-2xl font-bold text-gray-800">{stat.value}</strong>
                  <span className="text-gray-500 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;