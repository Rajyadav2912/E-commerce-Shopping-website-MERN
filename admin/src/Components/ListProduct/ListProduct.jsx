import React, { useEffect, useState } from "react";
import cross_icon from "../Assets/Admin Panel Assets/cross_icon.png";
import "../ListProduct/ListProduct.css";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    let data = await fetch("http://localhost:4000/api/v1/allproducts");
    let res = await data.json();
    console.log(res);

    setAllProducts(res);

    // await fetch("http://localhost:4000/api/allproducts")
    //   .then((res) => {
    //     res.json();
    //   })
    //   .then((data) => {
    //     setAllProducts(data);
    //   });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remonve_Products = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <div className="list-product">
      <h1 className="text-[30px] font-semibold">All Product List</h1>
      <div className="listProduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listProduct-allProducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="listProduct-format-main listproduct-formate"
              >
                <img
                  src={product.image}
                  alt="img"
                  className="listProduct-icon"
                />
                {/* <p>{product.id}</p> */}
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  src={cross_icon}
                  alt="img"
                  className="listProduct-remove-icon"
                  onClick={() => remonve_Products(product.id)}
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
