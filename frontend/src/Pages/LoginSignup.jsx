import React from "react";

const LoginSignup = () => {
  return (
    <div className="w-[100%] h-[80vh] bg-[#fce3fe] pt-[100px]">
      <div className="w-[580px] h-[600px] bg-white m-auto py-[40px] px-[60px]">
        <h1 className="my-[20px] mx-0">Sign Up</h1>
        <div>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="<PASSWORD>" />
        </div>
        <button>Sign Up</button>
        <p>
          Already have an account? <span>Log in</span>
        </p>
        <div>
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
