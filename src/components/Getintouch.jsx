import React from 'react';

function Getintouch() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white w-full  max-w-6xl p-5">
        <div className="flex justify-center  gap-5 w-full">
          <Card
            icon="📝" // Replace with actual icon or image
            title="Enquiry"
            subtitle="Questions? We're Listening"
            buttonText="Learn More"
          />
          <Card
            icon="🖥️" // Replace with actual icon or image
            title="Demo Class"
            subtitle="Simple Demo, Big Impact."
            buttonText="Learn More"
          />
          <Card
            icon="📈" // Replace with actual icon or image
            title="career consultant"
            subtitle="Action Your Future"
            buttonText="Learn More"
          />
        </div>
        <div className="bg-[#0057D3] h-24 w-full rounded-lg mt-[-50px] shadow-lg"></div>
      </div>
    </div>
  );
}

function Card({ icon, title, subtitle, buttonText }) {
  return (
    <div className="bg-white p-5 rounded-t-lg text-center w-80 shadow-md">
      <div className="text-4xl">{icon}</div>
      <h2 className="my-2 text-xl">{title}</h2>
      <p className="my-1 text-gray-500">{subtitle}</p>
      <button className="bg-transparent border-none text-blue-800 font-bold mt-3">
        {buttonText} →
      </button>
    </div>
  );
}

export default Getintouch;