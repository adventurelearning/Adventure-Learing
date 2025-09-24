import React, { useState } from 'react';
import axios from 'axios';

const VerifyCertificate = () => {
  const [formData, setFormData] = useState({
    certificateNumber: ''
  });
  const [certificate, setCertificate] = useState(null);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/certificates/verify-by-number`, {
        params: formData
      });
      
      if (response.data.verified) {
        setCertificate(response.data.certificate);
        setMessage(response.data.message);
        setIsError(false);
      } else {
        setCertificate(null);
        setMessage(response.data.message);
        setIsError(true);
      }
    } catch (error) {
      console.error('Verification error:', error);
      setCertificate(null);
      setMessage(error.response?.data?.message || 'Error verifying certificate');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with animation */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 animate-fade-in-down">
            Verify Certificate
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your certificate number to verify its authenticity 
          </p>
        </div>

        {/* Verification Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-10 transition-all duration-300 hover:shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {message && (
              <div className={`p-4 rounded-lg ${isError ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'} transition-all duration-300 animate-fade-in`}>
                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-6 w-6 ${isError ? 'text-red-400' : 'text-green-400'}`}>
                    {isError ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{message}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="certificateNumber">
                Certificate Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="certificateNumber"
                  name="certificateNumber"
                  value={formData.certificateNumber}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                  placeholder="e.g., CERT-1234-5678"
                  required
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Enter the unique certificate number provided to you
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-0.5 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </>
              ) : (
                <>
                  Verify Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Certificate Display */}
        {certificate && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 animate-fade-in-up">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Certificate Verified Successfully!</h2>
                  <p className="mt-1 opacity-90">This certificate has been verified and is authentic</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-700 bg-opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Certificate Number</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{certificate.certificateNumber}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Name</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{certificate.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Course</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{certificate.course}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Mobile Number</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{certificate.mobileNumber}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Duration</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{certificate.duration} days</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Issue Date</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{formatDate(certificate.issueDate)}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Course Duration</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-700">Start Date</p>
                    <p className="text-lg font-semibold">{formatDate(certificate.startDate)}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-700">End Date</p>
                    <p className="text-lg font-semibold">{formatDate(certificate.endDate)}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-700">Total Duration</p>
                    <p className="text-lg font-semibold">{certificate.duration} days</p>
                  </div>
                </div>
              </div>

              {/* <div className="flex justify-center mb-8">
                <div className="relative group">
                  <img 
                    src={certificate.imageUrl} 
                    alt={`Certificate of ${certificate.name}`} 
                    className="w-full max-w-md rounded-lg shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white font-medium">Preview</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = certificate.imageUrl;
                    link.download = `${certificate.name}_${certificate.certificateNumber}.jpg`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Certificate
                </button>
                
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" />
                  </svg>
                  Print Certificate
                </button>
                
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href + '?certificate=' + certificate.certificateNumber);
                    alert('Certificate link copied to clipboard!');
                  }}
                  className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Share
                </button>
              </div> */}
            </div>
          </div>
        )}
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default VerifyCertificate;