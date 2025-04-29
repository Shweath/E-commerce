import React from 'react';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';

const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] flex px-10">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center gap-5 pl-32">
        <h2 className="text-[#090909] text-2xl font-semibold uppercase">New Arrivals Only</h2>
        
        <div className="space-y-4">
          <div className="flex items-center gap-5">
            <p className="text-[#171717] text-[100px] font-bold leading-tight">new</p>
            <img src={hand_icon} className="w-[80px]" alt="hand icon" />
          </div>
          <p className="text-[#171717] text-6xl font-bold">collections</p>
          <p className="text-[#171717] text-6xl font-bold">for everyone</p>
        </div>

        {/* Button */}
        <div className="flex items-center gap-3 mt-8">
          <button className="flex items-center justify-center gap-3 w-[310px] h-[70px] rounded-full bg-[#ff4141] text-white text-[22px] font-medium shadow-lg hover:bg-[#e03838] transition">
            Latest Collection
            <img src={arrow_icon} className="w-[25px]" alt="arrow icon" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-end items-center">
        <img src={hero_image} className="max-w-[450px]" alt="hero model" />
      </div>
    </div>
  );
};

export default Hero;
