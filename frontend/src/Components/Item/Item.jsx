import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <div className="xl:w-[280px] lg:w-[270px] md:w-[250px] sm:w-[290px] w-[280px] xl:text-[14px] lg:text-[13px] hover:scale-105 duration-300">
      <Link to={`/product/${id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          src={image}
          alt="img"
          className="xl:w-[270px] lg:w-[270px] md:w-[250px] sm:w-[290px] w-[280px] rounded-3xl hover:shadow-2xl"
        />
      </Link>
      <p className="my-[6px] mx-0 xl:text-[15px] lg:text-[20px] md:text-[16px] sm:text-[22px] pl-2">
        {name}
      </p>
      <div className="flex gap-2 pl-2">
        <p className="text-[#4eff4e] xl:text-[18px] lg:text-[20px] md:text-[16px] sm:text-[22px] font-semibold">
          ${new_price}
        </p>
        <p className="text-[#8c8c8c] xl:text-[18px] lg:text-[20px] md:text-[16px] sm:text-[22px] font-medium line-through">
          ${old_price}
        </p>
      </div>
    </div>
  );
};

export default Item;
