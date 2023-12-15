import React from "react";
import "./Cartcard.css";
import { useContext } from "react";
import { CartContext } from "../Context";
import { useNavigate } from "react-router-dom";

function Cartcard({ id, price, productname, productImage }) {
  const { cartItem, addItem, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  function paymentpage() {
    navigate("/Payment", {
      state: {
        productid: id,
        productprice: price,
        productname: productname,
        productImage: productImage,
        quantity: cartItem[id],
      },
    });
  }

  return (
    cartItem[id] >= 1 && (
      <div className="Cartcardlist">
        <div className="innerCartcardlist">
          <div>
            <img src={productImage} alt={productname} />
          </div>
          <div className="productdes">
            <p>{productname}</p>
            <p>{price}</p>
            <p>{cartItem[id]}</p>
            <button className="bt" onClick={() => addItem(id)}>
              Add item {console.log(cartItem)}
            </button>
            <button className="bt" onClick={() => removeItem(id)}>
              reomve item
            </button>
          </div>
          <button className="buttonstyle" onClick={paymentpage}>
            pay to purchase the product
          </button>
        </div>
      </div>
    )
  );
}

export default Cartcard;
