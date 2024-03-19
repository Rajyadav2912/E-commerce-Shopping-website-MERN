import React from "react";
import data_Product from "../Assets/data";
import Item from "../Item/Item";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[85vh] my-14">
      <h1 className=" flex flex-col items-center text-[#171717] text-[50px] font-semibold uppercase">
        Popular in women
        <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525] " />
      </h1>
      <div className="flex mt-[30px] gap-[30px]">
        {data_Product.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
