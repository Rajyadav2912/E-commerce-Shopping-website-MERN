import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const ChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Login = async () => {
    console.log("Login Page", formData);

    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const SignUp = async () => {
    // console.log("Sign Up Page", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="w-full h-screen bg-[#fce3fe] xl:pt-[150px] pt-[160px]">
      <div className="lg:w-[580px] md:w-[520px] sm:w-[450px] w-[350px] max-h-[550px] bg-white m-auto py-[40px] lg:px-[60px] md:px-[50px] sm:px-[40px] px-[30px] rounded-3xl">
        <h1 className="text-center text-[30px] font-semibold">{state}</h1>
        <div className="flex flex-col gap-[29px] mt-[30px]">
          {state === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={ChangeHandler}
              placeholder="Name"
              className="h-[40px] shadow-inner shadow-neutral-400 rounded-xl w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
            />
          )}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={ChangeHandler}
            placeholder="Email"
            className="h-[40px] w-full pl-5 shadow-inner shadow-neutral-400 rounded-xl border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={ChangeHandler}
            placeholder="Password"
            className="h-[40px] w-full pl-5 shadow-inner shadow-neutral-400 rounded-xl border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
          />
          {/* <input type="password" placeholder="<PASSWORD>" /> */}
        </div>
        {state === "Login" ? (
          <button
            onClick={() => Login()}
            className="w-full h-[40px] rounded-3xl bg-[#ff4141] mt-[30px] border-none uppercase text-[18px] text-white font-medium cursor-pointer"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => SignUp()}
            className="w-full h-[40px] rounded-3xl bg-[#ff4141] mt-[30px] border-none uppercase text-[18px] text-white font-medium cursor-pointer"
          >
            Continue
          </button>
        )}

        {state === "Sign up" ? (
          <p className="mt-[15px] text-[#5c5c5c] text-[16px] font-medium">
            Already have an account?
            <span
              onClick={() => {
                setState("Login");
              }}
              className="text-[#4147ff] "
            >
              <Link>Login</Link>
            </span>
          </p>
        ) : (
          <p className="mt-[15px] text-[#5c5c5c] text-[16px] font-medium">
            Create an account?
            <span
              onClick={() => {
                setState("Sign up");
              }}
              className="text-[#4147ff] "
            >
              <Link>Sign Up</Link>
            </span>
          </p>
        )}
        {state === "Sign up" ? (
          <div className="flex items-center mt-[10px] gap-[5px] text-[#5c5c5c] text-[14px] font-medium">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
