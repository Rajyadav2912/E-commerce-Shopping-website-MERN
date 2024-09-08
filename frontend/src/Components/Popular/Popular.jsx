import React, { useEffect, useState } from "react";
// import data_Product from "../Assets/data";
import Item from "../Item/Item";
import "./Popular.css";
import { BASE_URL } from "../../Pages/HelperURL";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/popularinwomen`)
      .then((res) => res.json())
      .then(
        (data) => setPopularProducts(data)
        // console.log(data);
      );
  }, []);

  return (
    <div className="flex flex-col items-center sm:mx-0 mx-auto gap-[10px] h-full my-14">
      <h1 className=" flex flex-col items-center text-center text-[#171717] xl:text-[50px] sm:text-[50px] text-[35px] font-semibold uppercase">
        Popular in women
        <hr className="sm:w-[200px] w-[280px] sm:h-[6px] h-[4px] rounded-[10px] bg-[#252525] " />
      </h1>
      <div className="w-full h-full flex lg:flex-row flex-wrap items-center justify-center my-[30px] lg:gap-[30px] gap-[20px]">
        {popularProducts.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.imageURL}
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
