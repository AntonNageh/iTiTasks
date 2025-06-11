import React, { use, useEffect, useState } from "react";
import styling from "../Cart/Cart.module.css";
import { v4 as uuidv4 } from "uuid";
import CartItems from "../Cart/CartItems";
import Total from "../Cart/Total";
const Cart = ({setShowAuthModal }) => {
  const [cart, setCart] = useState([]);
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((i) => i["id"] != id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedOrders = localStorage.getItem("orders");
    if (storedCart) {
      if (storedOrders) {
        const parsedOrder = JSON.parse(storedOrders);
        parsedOrder[0]["id"] = uuidv4();
        const newCart = [...JSON.parse(storedCart), ...parsedOrder];
        setCart(newCart);
        localStorage.removeItem("cart");
        localStorage.removeItem("orders");
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        setCart([...JSON.parse(storedCart)]);
      }
    } else {
      if (storedOrders) {
        const parsedOrder = JSON.parse(storedOrders);
        parsedOrder[0]["id"] = uuidv4();
        const cart = [...parsedOrder];
        setCart([...cart]);
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.removeItem("orders");
      }
    }
  }, []);
  const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  return (
    <div className={styling.fluid}>
      <div className={styling.fluidWrapper}>
        <h1 className={styling.header}>YOUR CART</h1>
        {cart.map((i) => {
          return (
            <CartItems
              id={i["id"]}
              key={i["id"]}
              remove={removeFromCart}
              itemIng={i["ingredients"]}
              quantity={i["quantity"]}
              itemPrice={i["totalPrice"]}
              name={i["name"]}
              img={i["image"]}
            ></CartItems>
          );
        })}
      </div>
      <Total finalPrice={total} setShowAuthModal={setShowAuthModal} ></Total>
    </div>
  );
};

export default Cart;
