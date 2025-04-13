import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from './loading.json'; 
// import './Loading.css'; 

const Loading = () => {
  return (
    <div className="loading-fullscreen flex justify-center items-center w-screen h-screen">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        autoplay={true}
        style={{ width: 200, height: 200 }} // Adjust size as needed
      />
    </div>
  );
}

export default Loading
