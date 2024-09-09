import React, { useState } from "react";
import upload_area from "../Assets/Admin Panel Assets/upload_area.svg";
import { BASE_URL } from "../../Pages/HelperURL";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const ChangeHanlder = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", productDetails.name);
    formData.append("category", productDetails.category);
    formData.append("new_price", productDetails.new_price);
    formData.append("old_price", productDetails.old_price);

    console.log(formData);

    try {
      const response = await fetch(`${BASE_URL}/addproduct`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Product added successfully");
      } else {
        alert("Product not added successfully");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product.");
    }

    // let formData = new FormData();

    // formData.append("product", image);
    // console.log(formData);

    // product.imageURL = image;

    // await fetch("http://localhost:7000/api/v1/addproduct", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //   },
    //   body: product,
    // }).then((res) => res.json())
    //     .then((data) =>
    //       data.success
    //         ? alert("Product added successfully")
    //         : alert("Product not added successfully")
    //     );
    // toast.success("Product added successfully");

    // await fetch("http://localhost:4000/upload", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //   },
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     responseData = data;
    //   });

    // if (responseData.success) {
    //   product.image = responseData.image;
    //   console.log(product);

    //   await fetch("http://localhost:4000/addproduct", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(product),
    //   })
    //     .then((res) => res.json())
    //     .then((data) =>
    //       data.success
    //         ? alert("Product added successfully")
    //         : alert("Product not added successfully")
    //     );
    // }
  };

  return (
    <div className="box-border w-full h-[75vh] lg:max-w-[800px] md:max-w-[760px] sm:max-w-[630px] max-w-[480px] py-8 lg:px-12 md:px-10 px-8 my-1 lg:rounded-md rounded-xl bg-[#dad7d7] lg:mx-8 mx-auto">
      <div className="w-full text-[#4a4a4a] text-[16px]">
        <p>Product title</p>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={ChangeHanlder}
          placeholder="Type here"
          className="box-border w-full h-12 rounded-md px-4 border border-[#c3c3c3] outline-none text-[#7b7b7b] text-[14px]"
        />
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-10 gap-4">
        <div className="w-full text-[#4a4a4a] text-[16px]">
          <p>Price</p>
          <input
            type="text"
            name="old_price"
            value={productDetails.old_price}
            onChange={ChangeHanlder}
            placeholder="Type here"
            className="box-border w-full h-12 rounded-md px-4 border border-[#c3c3c3] outline-none text-[#7b7b7b] text-[14px]"
          />
        </div>
        <div className="w-full text-[#4a4a4a] text-[16px]">
          <p>Offer Price</p>
          <input
            type="text"
            name="new_price"
            value={productDetails.new_price}
            onChange={ChangeHanlder}
            placeholder="Type here"
            className="box-border w-full h-12 rounded-md px-4 border border-[#c3c3c3] outline-none text-[#7b7b7b] text-[14px]"
          />
        </div>
      </div>
      <div className="w-full text-[#4a4a4a] text-[16px]">
        <p>Product Category</p>
        <select
          name="category"
          value={productDetails.category}
          onChange={ChangeHanlder}
          className="p-2 w-[100px] h-[50px] text-[14px] text-[#4a4a4a] border border-[#4a4a4a]"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kids</option>
        </select>
      </div>
      <div className="w-full text-[#4a4a4a] text-[16px]">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="img"
            loading="lazy"
            className="h-[120px] w-[90px] rounded-lg object-contain my-3 mx-0"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
        />
      </div>
      <button
        onClick={() => {
          Add_Product();
        }}
        className="mt-5 w-[160px] h-[50px] rounded-md bg-[#6079ff] text-white text-[16px] font-medium"
      >
        ADD Product
      </button>
    </div>
  );
};

export default AddProduct;
