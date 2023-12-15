import "./Product.css";
import React from "react";
import product from "../data";
import Card from "./Card";

function Product() {
  return (
    <>
      <div className="shoptitle">Bala's Shops</div>
      <div className="outercard">
        {product.map(function (product) {
          return <Card key={product.id} {...product} />;
        })}
      </div>
    </>
  );
}

export default Product;
