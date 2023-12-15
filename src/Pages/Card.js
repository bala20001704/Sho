import React from "react";
import "./Product.css";
import { useContext } from "react";
import { CartContext } from "../Context";

function Card({ id, productname, price, productImage }) {
  const { cartItem, addItem, removeItem } = useContext(CartContext);

  return (
    <div className="Card">
      <div>
        <img src={productImage} alt={productname}></img>
        <p>{productname}</p>
        <p>{price}</p>
        <button className="cardbutton" onClick={() => addItem(id)}>
          Add Cart {cartItem[id] !== 0 && <span>({cartItem[id]})</span>}
        </button>

        {console.log(cartItem)}
      </div>
    </div>
  );
}

export default Card;
