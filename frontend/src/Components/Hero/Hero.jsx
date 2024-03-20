import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

const Hero = () => {
  return (
    // hero
    <div className="h-screen bg-[#fde1ff] flex pt-24">
      {/* hero left*/}
      <div className="flex-1 flex flex-col justify-center gap-5 pl-[180px] leading-[1.1]">
        <h2 className="text-[26px] font-semibold">NEW ARRIVALS ONLY</h2>
        <div>
          {/* hand icon */}
          <div className="hand-hand-icon flex items-center gap-5">
            <p className="text-[80px] font-bold">new</p>
            <img src={hand_icon} alt="icon" className="w-[105px]" />
          </div>
          <p className="text-[80px] font-bold">collection</p>
          <p className="text-[80px] font-bold">for everyone</p>
        </div>

        {/* hand lastest */}
        <div className="flex items-center gap-4 pl-7 w-[255px] h-[60px] mt-4 rounded-[75px] bg-[#ff4141] text-[18px] text-white font-medium">
          <p>Latest Collection</p>
          <img src={arrow_icon} alt="icon" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src={hero_img} alt="hero-img" className="w-[80%]" />
      </div>
    </div>
  );
};

export default Hero;
