import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <div className="xl:w-[280px] lg:w-[220px] md:w-[170px] sm:w-[160px] w-[220px] xl:text-[14px] lg:text-[13px] hover:scale-105 duration-300">
      <Link to={`/product/${id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          src={image}
          alt="img"
          className="xl:w-[270px] lg:w-[220px] md:w-[150px] sm:w-[120px] w-[160px] rounded-3xl hover:shadow-2xl"
        />
      </Link>
      <p className="my-[6px] mx-0 text-[15px] pl-2">{name}</p>
      <div className="flex gap-2 pl-2">
        <p className="text-[#4eff4e] xl:text-[18px] lg:text-[14px] font-semibold">
          ${new_price}
        </p>
        <p className="text-[#8c8c8c] xl:text-[18px] lg:text-[14px] font-medium line-through">
          ${old_price}
        </p>
      </div>
    </div>
  );
};

export default Item;
