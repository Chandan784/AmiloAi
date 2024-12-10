import React from 'react';
import "../Css/HomeHeader.css";

const HomeHeader = () => {
  return (
    <>
      <div className="main flex flex-col md:flex-row justify-between px-6 md:px-20 items-center bg-blue-700 h-auto py-10 md:py-20">
        {/* Text Content */}
        <div className="content w-full md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold py-4">
            ARE YOU LOOKING FOR SUPERIOR TECH IT SUPPORT?
          </h2>
          <p className="py-2 text-sm md:text-base">
            We provide <strong>affordable</strong>, highly responsive <strong>IT Support</strong> and Services for small and medium businesses.
          </p>
          <button className="border-4 border-yellow-500 p-2 md:p-4 mt-4">GET STARTED NOW</button>
        </div>

        {/* Image */}
        <div className="img w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="./src/assets/generic-1.jpg"
            alt="main image"
            className="w-3/4 md:w-full max-w-sm md:max-w-none"
          />
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
