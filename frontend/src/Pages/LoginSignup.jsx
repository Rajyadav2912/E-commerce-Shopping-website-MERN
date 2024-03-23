import React from "react";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  return (
    <div className="w-full h-screen bg-[#fce3fe] xl:pt-[150px] pt-[160px]">
      <div className="lg:w-[580px] md:w-[520px] sm:w-[450px] w-[350px] h-[500px] bg-white m-auto py-[40px] lg:px-[60px] md:px-[50px] sm:px-[40px] px-[30px] rounded-3xl">
        <h1 className="text-center text-[30px] font-semibold">Sign Up</h1>
        <div className="flex flex-col gap-[29px] mt-[30px]">
          <input
            type="text"
            placeholder="Name"
            className="h-[40px] shadow-inner shadow-neutral-400 rounded-xl w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
          />
          <input
            type="text"
            placeholder="Email"
            className="h-[40px] w-full pl-5 shadow-inner shadow-neutral-400 rounded-xl border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-[40px] w-full pl-5 shadow-inner shadow-neutral-400 rounded-xl border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
          />
          {/* <input type="password" placeholder="<PASSWORD>" /> */}
        </div>
        <button className="w-full h-[40px] rounded-3xl bg-[#ff4141] mt-[30px] border-none uppercase text-[18px] text-white font-medium cursor-pointer">
          Continue
        </button>
        <p className="mt-[15px] text-[#5c5c5c] text-[16px] font-medium">
          Already have an account?{" "}
          <span className="text-[#4147ff] ">
            <Link>Login</Link>
          </span>
        </p>
        <div className="flex items-center mt-[10px] gap-[5px] text-[#5c5c5c] text-[14px] font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
