import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex items-center gap-5">
        <img src={footer_logo} alt="img" />
        <p className="text-[#383838]  text-[46px] font-bold">SHOPPER</p>
      </div>

      <ul className="flex sm:flex-row flex-col sm:text-start text-center list-none gap-12 text-[#252525] text-[20px] cursor-pointer">
        <li>
          <Link to="/">Company</Link>
        </li>
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/">Offices</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>

      <div className="flex gap-5">
        <div className="p-3 pb-2 bg-[#fbfbfb] border border-[#c7c6c6]">
          <img src={instagram_icon} alt="icon" />
        </div>

        <div className="p-3 pb-2 bg-[#fbfbfb] border border-[#c7c6c6]">
          <img src={pintester_icon} alt="icon" />
        </div>

        <div className="p-3 pb-2 bg-[#fbfbfb] border border-[#c7c6c6]">
          <img src={whatsapp_icon} alt="icon" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-[100%] mb-[30px] text-[#1a1a1a] text-[20px]">
        <hr className="w-[80%] border-none rounded-xl h-[2px] bg-[#c7c7c7] " />
        <p>Copyright @ 2023 All - rights</p>
      </div>
    </div>
  );
};

export default Footer;
