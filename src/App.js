import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import Success from "./Pages/Success";
import "./App.css";
import { ShoppingCart } from "@phosphor-icons/react";
import Context from "./Context";

function App() {
  return (
    <Context>
      <div>
        <BrowserRouter>
          <nav className="navigation">
            <Link to="/">
              <b>Product</b>
            </Link>
            <Link to="/Cart">
              <b>Cart</b>
            </Link>
            <ShoppingCart className="shopping-cart" size={32} />
          </nav>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Context>
  );
}

export default App;
