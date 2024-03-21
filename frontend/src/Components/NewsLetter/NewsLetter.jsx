import React from "react";

const NewsLetter = () => {
  return (
    <div
      className="xl:w-[85%] lg:w-[85%] w-[85%] xl:h-[60vh] lg:h-[70vh] md:h-[55vh] sm:h-[65vh] h-[80vh] flex flex-col items-center justify-center m-auto py-0 md:px-[140px] sm:px-[100px] px-[60px] my-14 
    bg-gradient-to-t bg-[#fde1ff] gap-[30px] rounded-2xl"
    >
      <h1 className="text-[#454545] text-[55px] text-center font-semibold">
        Get Exclusive Offer On Your Email
      </h1>
      <p className="text-[#454545] text-[20px] text-center ">
        Subscribe to our newletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white lg:w-[730px] md:w-[650px] sm:w-[600px] w-[335px] h-[60px] rounded-[80px] border border-[#e3e3e3]">
        <input
          type="email"
          placeholder="Your Email id"
          className="w-[500px] ml-[25px] border-none outline-none text-[#616161] text-[16px]"
        />
        <button className="sm:w-[140px] w-[370px] h-[52px] mr-1 border border-[#5f5d5d] rounded-[90px] bg-black text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
