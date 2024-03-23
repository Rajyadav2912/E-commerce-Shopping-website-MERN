import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../Components/SideBar/SideBar";
import AddProduct from "../Components/AddProduct/AddProduct";
import ListProduct from "../Components/ListProduct/ListProduct";

const Admin = () => {
  return (
    <div className="pt-[100px] flex">
      <SideBar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
