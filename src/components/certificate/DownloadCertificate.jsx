// In DownloadCertificate.jsx
import React, { useState, useRef } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import certificateTemplate from '../../assets/certificate.jpeg'; // Import the template

const DownloadCertificate = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [fileName, setFileName] = useState('');
  const certificateRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/certificates/student-login`, loginData);
      setIsLoggedIn(true);
      setCertificate(response.data.certificate);
      // Set default filename with student's name
      setFileName(`${response.data.certificate.name}_Certificate`);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const downloadCertificate = async () => {
    try {
      // Create a temporary preview element
      const previewContainer = document.createElement('div');
      previewContainer.style.position = 'fixed';
      previewContainer.style.left = '-9999px';
      previewContainer.style.top = '-9999px';
      previewContainer.style.width = '842px';
      previewContainer.style.height = '595px';
      previewContainer.style.background = 'white';
      document.body.appendChild(previewContainer);

      // Render the certificate in the temporary container (same as in Certificates.jsx)
      previewContainer.innerHTML = `
        <div style="position: relative; width: 100%; height: 100%;">
          <img src="${certificateTemplate}" alt="Certificate Template" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain;" />
          <div style="position: relative; z-index: 10;  display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div style="text-align: center; width: 100%; padding: 0 60px;">
              <p style="font-size: 36px; font-weight: bold; padding: 10px; margin-top: 250px ; font-family: serif;">
                ${certificate.name}
              </p>
            </div>
            <div style="text-align: center; margin-bottom: 10px;  width: 100%; padding: 0 60px;">
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div style='display: flex; gap: 4px;'>
                  <p style="margin: 0;">for successfully completing the</p>
                  <p style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 0; font-family: serif;">
                    ${certificate.course}
                  </p>
                  <p style="margin: 0;">Course at </p>
                </div>
                <div style='display: flex; gap: 8px;'>
                  <p style="margin: 0;">Adventure Learning</p>
                  <p style="margin: 0;">
                    During
                  </p>
                  <p style="font-weight: 600; margin: 0;">
                    ${new Date(certificate.startDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })} to ${new Date(certificate.endDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
            <div style="display: flex; text-align: center; margin-bottom: 32px; gap: 4px;">
              <p style="font-size: 18px; font-weight: 600; margin: 0;">Certificate NO:</p>
              <p style="font-size: 18px; margin: 0;">${certificate.certificateNumber}</p>
            </div>
          </div>
        </div>
      `;

      // Wait for the image to load
      await new Promise(resolve => setTimeout(resolve, 500));

      // Convert to canvas then to PDF
      const canvas = await html2canvas(previewContainer, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: null
      });

      // Remove the temporary container
      document.body.removeChild(previewContainer);

      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      const imgWidth = 297; // A4 width in mm (landscape)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      // Generate PDF and download
      const pdfFileName = `${fileName || certificate.name}_${certificate.certificateNumber}.pdf`;
      pdf.save(pdfFileName);
    } catch (err) {
      console.error('Error downloading certificate:', err);
      setError('Failed to download certificate');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCertificate(null);
    setLoginData({ username: '', password: '' });
    setShowLogin(true);
    setFileName('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Download Your E-Certificate</h1>
              <p className="text-blue-100 mt-1">Your achievement is ready for download</p>
            </div>
            {isLoggedIn && (
              <button 
                onClick={handleLogout}
                className="mt-4 md:mt-0 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                Sign Out
              </button>
            )}
          </div>
        </div>
        
        {!isLoggedIn ? (
          <div className="p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Student Login</h1>
              <p className="text-gray-600">Sign in to download your certificate</p>
            </div>
            
            {error && (
              <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4 flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={loginData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Enter your username"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium focus:ring-4 focus:ring-blue-100 disabled:opacity-50 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : 'Sign In'}
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Having trouble? Contact support@example.com</p>
            </div>
          </div>
        ) : (
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Student Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium text-gray-800">{certificate.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Certificate Number</p>
                    <p className="font-medium text-gray-800">{certificate.certificateNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Mobile Number</p>
                    <p className="font-medium text-gray-800">{certificate.mobileNumber}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  Course Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Course Name</p>
                    <p className="font-medium text-gray-800">{certificate.course}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium text-gray-800">{certificate.duration} days</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Start Date</p>
                    <p className="font-medium text-gray-800">
                      {new Date(certificate.startDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">End Date</p>
                    <p className="font-medium text-gray-800">
                      {new Date(certificate.endDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button 
                onClick={downloadCertificate}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Certificate (PDF)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadCertificate;