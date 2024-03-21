import React from "react";
import exclusive_img from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="xl:w-[75%] lg:w-[85%] sm:w-[60%] w-[80%] xl:h-[60vh] lg:h-[67vh] h-[60vh] flex m-auto py-0 xl:px-[150px] lg:px-[100px] md:px-[50px] md:pr-0 sm:pl-20 pl-10 xl:my-14 my-10 bg-gradient-to-t bg-[#fde1ff] rounded-2xl">
      <div className="flex-1 flex flex-col justify-center w-full">
        <h1 className="text-[#171717] font-semibold sm:text-[60px] text-[50px] uppercase">
          Exclusive
        </h1>
        <h1 className="text-[#171717] font-semibold sm:text-[60px] text-[40px] uppercase">
          Offers For You
        </h1>
        <p className="text-[#171717] text-[20px] font-semibold">
          Only On Best Sellers Products
        </p>
        <button className="w-[200px] h-[50px] rounded-[35px] bg-[#ff4141] border-none text-white text-[20px] font-medium mt-[30px] hover:shadow">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex items-center justify-end w-full h-full">
        <img
          src={exclusive_img}
          alt="img"
          className="xl:w-[320px] h-full lg:w-[370px] md:w-[400px] sm:w-0 w-0"
        />
      </div>
    </div>
  );
};

export default Offers;
