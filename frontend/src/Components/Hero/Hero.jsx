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
      <div className="flex-1 flex flex-col justify-center gap-5 xl:pl-[180px] lg:pl-[100px] md:pl-[70px] pl-[30px] leading-[1.1]">
        <h2 className="xl:text-[26px] sm:text-[22px] text-[28px] font-semibold">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          {/* hand icon */}
          <div className="hand-hand-icon flex items-center gap-5">
            <p className="xl:text-[80px] sm:text-[60px] text-[80px] font-bold">
              new
            </p>
            <img
              src={hand_icon}
              alt="icon"
              className="xl:w-[105px] w-[80px] "
              loading="lazy"
            />
          </div>
          <p className="xl:text-[80px] sm:text-[60px] text-[70px] font-bold">
            {/* text-70px */}
            collection
          </p>
          <p className="xl:text-[80px] sm:text-[60px] text-[54px] font-bold">
            for everyone
          </p>
          {/* text-54px */}
        </div>

        {/* hand lastest */}
        <div className="flex items-center xl:gap-4 gap-2 pl-7 xl:w-[255px] w-[250px] h-[60px] xl:mt-4 mt-5 rounded-[75px] bg-[#ff4141] text-[18px] text-white font-medium">
          <p>Latest Collection</p>
          <img src={arrow_icon} alt="icon" 
          loading="lazy"/>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src={hero_img}
          alt="hero-img"
          className="xl:w-[80%] lg:w-[90%] sm:w-[95%] w-0"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
