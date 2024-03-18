import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <div>
      <div className="relative">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men" />} />
        <Route path="/womens" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":product" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
