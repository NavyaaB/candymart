import React, { useState } from "react";
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import AboutAndContact from "./components/AboutAndContact";

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
          <Route path='/about_contact' element={<AboutAndContact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
