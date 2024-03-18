import React from "react";
import data_Product from "../Assets/data";
import Item from "../Item/Item";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="popular flex flex-col items-center gap-[10px] h-[90vh] mt-4">
      <h1 className="text-[#171717] text-[50px] font-semibold uppercase">
        Popular in women
      </h1>
      {/* <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525] " /> */}
      <div className="flex mt-[30px] gap-[30px]">
        {data_Product.map((item, index) => {
          return (
            <Item
              index={index}
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
