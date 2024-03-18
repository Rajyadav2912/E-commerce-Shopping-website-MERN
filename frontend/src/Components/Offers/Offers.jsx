import React from "react";
import exclusive_img from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="w-[85%] h-[65vh] flex m-auto py-0 px-[140px] mb-[50px] bg-gradient-to-t bg-[#fde1ff]">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] font-semibold text-[60px] uppercase">
          Exclusive
        </h1>
        <h1 className="text-[#171717] font-semibold text-[60px] uppercase">
          Offers For You
        </h1>
        <p className="text-[#171717] text-[20px] font-semibold">
          Only On Best Sellers Products
        </p>
        <button className="w-[190px] h-[60px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-medium mt-[30px]">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <img src={exclusive_img} alt="img" className="w-[346px]" />
      </div>
    </div>
  );
};

export default Offers;
