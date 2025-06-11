import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import ingredientData from "../data/ingredients.json";

export const CustomizedOrderContext = createContext();

export default function CustomizedOrderProvider ({ children })  {
  const [stack, setStack] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [lastAddedIndex, setLastAddedIndex] = useState(null);
  const [showCalories, setShowCalories] = useState(true);

 
  useEffect(() => {
    let price = 0;
    let calories = 0;

    stack.forEach((item) => {
      const data = ingredientData.find((i) => i.name === item.name);
      if (data) {
        price += data.price;
        calories += data.calories;
      }
    });

    setTotalPrice(price);
    setTotalCalories(calories);
  }, [stack]);

  // Add ingredient
  const handleAddIngredient = (ingredient) => {
    if (stack.length >= 10) {
      toast.error("Limit reached: Max 10 ingredients", {
        duration: 2000,
        position: "top-right",
      });
      return;
    }

    setStack((prev) => [...prev, ingredient]);
    setLastAddedIndex(stack.length);
  };

  // Remove ingredient
  const handleRemoveIngredient = (ingredient) => {
    const index = stack.findIndex((item) => item.name === ingredient.name);
    if (index !== -1) {
      const updated = [...stack];
      updated.splice(index, 1);
      setStack(updated);
    }
  };

  // Add burger to cart and reset state
  const handleAddToCart = () => {
    if (stack.length === 0) {
      toast.error("Please select ingredients first.");
      return;
    }

    const burger = {
      ingredients: stack,
      totalPrice: totalPrice * quantity,
      quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingCart, burger]));

    toast.success("Burger added to your cart!", {
      duration: 2000,
      position: "top-right",
    });

    // Reset
    setStack([]);
    setTotalPrice(0);
    setTotalCalories(0);
    setQuantity(1);
    setLastAddedIndex(null);

    console.log(localStorage.getItem("orders"));
    
  };

  return (
    <CustomizedOrderContext.Provider
      value={{
        stack,
        totalPrice,
        totalCalories,
        quantity,
        lastAddedIndex,
        showCalories,
        setQuantity,
        setShowCalories,
        handleAddIngredient,
        handleRemoveIngredient,
        handleAddToCart,
      }}
    >
      {children}
    </CustomizedOrderContext.Provider>
  );
};
