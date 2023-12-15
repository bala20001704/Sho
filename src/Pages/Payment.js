import React from "react";
import { useLocation } from "react-router-dom";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context";

function Payment() {
  const { setCartItem } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { productid, productprice, productname, productImage, quantity } =
    location.state;

  function successmsg() {
    setCartItem(function (prev) {
      let updatecart = { ...prev, [productid]: 0 };
      return updatecart;
    });
    navigate("/Success");
  }

  return (
    <>
      <div className="title">Payment</div>
      <div className="card">
        <img src={productImage} alt={productname} />
        <div className="productdes">
          <p>{productname}</p>
          <p>Price is {quantity * productprice}</p>
          <p>{quantity}</p>
        </div>
        <button className="bt" onClick={successmsg}>
          confirm to pay
        </button>
      </div>
    </>
  );
}

export default Payment;
