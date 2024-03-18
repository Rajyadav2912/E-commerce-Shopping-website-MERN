import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

const Hero = () => {
  return (
    // hero
    <div className="hero">
      {/* hero left*/}
      <div className="hero-left">
        <h2 className="text-[26px] font-semibold">NEW ARRIVALS ONLY</h2>
        <div>
          {/* hand icon */}
          <div className="hand-hand-icon">
            <p className="text-[80px] font-bold">new</p>
            <img src={hand_icon} alt="icon" className="w-[105px]" />
          </div>
          <p className="text-[80px] font-bold">collection</p>
          <p className="text-[80px] font-bold">for everyone</p>
        </div>

        {/* hand lastest */}
        <div className="hero-latest-btn">
          <p>Latest Collection</p>
          <img src={arrow_icon} alt="icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
