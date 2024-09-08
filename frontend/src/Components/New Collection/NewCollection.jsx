import React from "react";
// import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../Pages/HelperURL";

const NewCollection = () => {
  const [new_collection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/newcollection`)
      .then((res) => res.json())
      .then(
        (data) => setNewCollection(data)
        // console.log(data)
      );
  }, []);

  return (
    <div className="flex flex-col items-center gap-[10px] sm:my-14 my-16 h-full">
      <h1 className="flex flex-col items-center text-center text-[#171717] sm:text-[50px] text-[35px] font-semibold uppercase">
        NEW Collections
        <hr className="sm:w-[200px] w-[280px] sm:h-[6px] h-[4px] rounded-[10px] bg-[#252525] " />
      </h1>
      <div className="h-full grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[30px] gap-[30px] ">
        {/* <div className="w-[90%] grid grid-cols-4 mt-[30px] gap-[40px]"> */}
        {new_collection.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.imageURL}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
