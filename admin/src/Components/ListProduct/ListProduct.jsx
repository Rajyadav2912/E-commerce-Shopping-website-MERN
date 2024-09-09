import React, { useEffect, useState } from "react";
import cross_icon from "../Assets/Admin Panel Assets/cross_icon.png";
import "../ListProduct/ListProduct.css";
import { BASE_URL } from "../../Pages/HelperURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    let data = await fetch(`${BASE_URL}/allproducts`);
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

  const remove_Products = async (id) => {
    await fetch(`${BASE_URL}/removeproduct`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
    toast.success("Product removed successfully!");
  };

  return (
    <div className="list-product">
      <h1 className="text-[30px] font-semibold">All Product List</h1>
      <ToastContainer position="bottom-right" theme="dark" />
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
                key={product.id}
                className="listProduct-format-main listproduct-formate"
              >
                <img
                  src={product.imageURL}
                  alt="img"
                  className="listProduct-icon"
                  loading="lazy"
                />
                {/* <p>{product.id}</p> */}
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  src={cross_icon}
                  alt="img"
                  loading="lazy"
                  className="listProduct-remove-icon"
                  onClick={() => remove_Products(product.id)}
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
