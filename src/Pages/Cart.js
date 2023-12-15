import React from "react";
import "./Cart.css";
import product from "../data";
import Cartcard from "./Cartcard";
import { useContext } from "react";
import { CartContext } from "../Context";

function Cart() {
  const { total } = useContext(CartContext);

  return (
    <>
      <div className="carttitle">Cart List</div>
      <>
        {product.map(function (product) {
          return <Cartcard key={product.id} {...product} />;
        })}
      </>
      <div className="totalbill">The Total Cart bill is: {total}</div>
    </>
  );
}

export default Cart;
