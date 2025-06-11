import React, { memo, useState } from "react";
import styling from "../Cart/cartItems.module.css";
import { v4 as uuidv4 } from "uuid";
const CartItems = ({
  name,
  itemIng,
  itemPrice,
  quantity,
  remove,
  id,
  img
}) => {
  return (
    <div className={styling.containerDiv}>
      <div>
        <img style={{width:"200px ",height:"150px"}} src={img ? img : "../src/assets/brgr-removebg-preview.png"} alt="" />
      </div>
      <div className={styling.contentDiv}>
        <h1 className={styling.lexend}>{name? name : "Your Customized sandwich"}</h1>
        <button onClick={() => remove(id)} className={styling.removeIcon}>
          <img
            style={{ width: "1000px"  }}
            src="../src/assets/closeIcon.png"
            alt=""
          />
        </button>

        <div className={styling.ingWrapper}>
          {itemIng.map((ing) => {
            return (
              <p key={uuidv4()} className={styling.ingParagraph}>
                {ing["name"]}
              </p>
            );
          })}
        </div>
        <div className={styling.quantityPriceWrapper}>
          <p
            className={styling.paragraph}
            style={{ color: "white", marginTop: "4.2px" }}
          >
            {quantity}x
          </p>
          <div>
            <p>price : {itemPrice} EGP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
