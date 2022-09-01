import React, { useState } from "react";
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setAddToCart] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Category />} />
          <Route
            path='/category/:category_type'
            element={<Product cart={cart} setAddToCart={setAddToCart} />}
          />
          <Route
            path='/cart'
            element={<Cart cart={cart} setAddToCart={setAddToCart} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
