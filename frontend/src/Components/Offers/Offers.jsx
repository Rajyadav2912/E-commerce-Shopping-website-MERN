import React from "react";
import exclusive_img from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="w-[85%] h-[60vh] flex m-auto py-0 px-[140px] my-14 bg-gradient-to-t bg-[#fde1ff] rounded-2xl">
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
        <button className="w-[200px] h-[50px] rounded-[35px] bg-[#ff4141] border-none text-white text-[20px] font-medium mt-[30px] hover:shadow">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <img src={exclusive_img} alt="img" className="w-[319px] object-cover" />
      </div>
    </div>
  );
};

export default Offers;
