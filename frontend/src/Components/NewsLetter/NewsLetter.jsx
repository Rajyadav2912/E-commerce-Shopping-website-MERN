import React from "react";

const NewsLetter = () => {
  return (
    <div
      className="w-[85%] h-[60vh] flex flex-col items-center justify-center m-auto py-0 px-[140px] my-14 
    bg-gradient-to-t bg-[#fde1ff] gap-[30px] rounded-2xl"
    >
      <h1 className="text-[#454545] text-[55px] font-semibold">
        Get Exclusive Offer On Your Email
      </h1>
      <p className="text-[#454545] text-[20px]">
        Subscribe to our newletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-[730px] h-[60px] rounded-[80px] border border-[#e3e3e3]">
        <input
          type="email"
          placeholder="Your Email id"
          className="w-[500px] ml-[25px] border-none outline-none text-[#616161] text-[16px]"
        />
        <button className="w-[140px] h-[52px] mr-1 border border-[#5f5d5d] rounded-[90px] bg-black text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
