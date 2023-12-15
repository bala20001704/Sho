import React from "react";
import { useState } from "react";
import product from "./data";
import { createContext } from "react";
import { useEffect } from "react";

function getCart() {
  let cartItem = {};
  for (let i = 1; i < product.length + 1; i++) {
    cartItem[i] = 0;
  }
  return cartItem;
}

export let CartContext = createContext(null);

function Context({ children }) {
  const [cartItem, setCartItem] = useState(getCart());
  const [total, setTotal] = useState(0);

  function addItem(id) {
    setCartItem(function (prev) {
      return { ...prev, [id]: prev[id] + 1 };
    });

    totalamount(id);
  }

  function removeItem(id) {
    setCartItem(function (prev) {
      return { ...prev, [id]: prev[id] - 1 };
    });
  }

  function totalamount(id) {
    let amount = 0;
    for (let key in cartItem) {
      if (key === id) {
        amount = cartItem[key] * product[key - 1].price;
        setTotal(amount);
      }
    }
  }

  useEffect(() => {
    // Calculate total amount whenever cartItem changes
    let updatedTotal = 0;
    for (const id in cartItem) {
      updatedTotal += cartItem[id] * product[id - 1].price;
    }
    setTotal(updatedTotal);
  }, [cartItem]);

  const contextValue = {
    cartItem,
    addItem,
    removeItem,
    setCartItem,
    total,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default Context;
