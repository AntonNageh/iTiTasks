import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { CustomizedOrderContext } from "../../Context/CustomizedOrderContext";
import plate from "../../assets/plate.png";
import tomato from "../../assets/tomato.png";
import lettuce from "../../assets/lettuce-removebg-preview (1).png";
import beef from "../../assets/beef.png";
import chicken from "../../assets/chicken-removebg-preview.png";
import fillet from "../../assets/fillet.png";
import shrimp from "../../assets/shrimp-removebg-preview.png";
import cucumber from "../../assets/cucumber-removebg-preview.png";
import onion from "../../assets/onion_rings-removebg-preview.png";
import turkey from "../../assets/turkey-removebg-preview.png";
import buttombun from "../../assets/bottom bun.png";
import upperbun from "../../assets/upper bun.png";
import Sticks from "../../assets/sticks.png";
import hand from "../../assets/hand-plate.png";
import Footer from "../Footer/Footer";


export default function CustomizedOrder() {

  const ingredientsList = [
  { name: "Upper Bun", img: upperbun },
  { name: "Bun", img: buttombun },
  { name: "Tomato", img: tomato },
  { name: "Cucumber", img: cucumber },
  { name: "Lettuce", img: lettuce },
  { name: "Cheese Sticks", img: Sticks },
  { name: "Beef", img: beef },
  { name: "Chicken", img: chicken },
  { name: "Fish Fillet", img: fillet },
  { name: "Fried Shrimp", img: shrimp },
  { name: "Turkey", img: turkey },
  { name: "Onion Rings", img: onion },
];

 const {
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
  } = useContext(CustomizedOrderContext);

  
  return (
  <>
    <div className="overflow-hidden p-6 mb-3 mt-10 lexend text-[#fbfada] font-sans">
      <Toaster />
      <div className="flex flex-col md:flex-row gap-6 h-screen">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 rounded-3xl bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg overflow-y-auto min-h-screen ingredients-scroll"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl knewave font-bold txt-shadow tracking-wide">
              Customize Your Burger
            </h2>
            <i className="fa-solid fa-kitchen-set text-2xl text-amber-500"></i>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredientsList.map((ingredient, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  y: { duration: 0.4, delay: idx * 0.1 },
                  opacity: { duration: 0.3, delay: idx * 0.1 + 0.3 },
                  ease: "easeOut",
                }}
                className="bg-white/10 backdrop-blur-md p-5 rounded-t-full border border-white/20 shadow-sm text-center relative hover:shadow-amber-300/30 transition-all duration-300 group"
              >
                <img
                  className="w-full h-24 object-contain mb-3 transition-transform duration-300 group-hover:-translate-y-2"
                  src={ingredient.img}
                  alt={ingredient.name}
                />
                <h3 className="text-md font-semibold text-amber-200 mb-2">
                  {ingredient.name}
                </h3>
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => handleAddIngredient(ingredient)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-xs"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => handleRemoveIngredient(ingredient)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-xs"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2 rounded-3xl bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg flex items-center justify-center relative">
          <div className="w-[200px] z-[200] py-3 px-7 absolute bottom-[2%] left-[2%] bg-white/10 backdrop-blur-md rounded-t-full border border-white/20 shadow-md text-center">
            <h2 className="font-semibold text-white/90 pt-2 text-sm">Summary</h2>
            <hr className="my-1 border-white/30" />
            <div className="flex justify-between text-xs mb-1">
              <span>Calories:</span>
              <span>
                {showCalories ? totalCalories * quantity : "•••"}{" "}
                <i
                  className={`fa-solid cursor-pointer ml-1 ${
                    showCalories ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => setShowCalories((prev) => !prev)}
                ></i>
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Price:</span>
              <span>${totalPrice * quantity}</span>
            </div>
            <div className="mt-2">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full text-center text-black rounded mb-2 py-1"
              />
              <button
                onClick={handleAddToCart}
                className="bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded w-full text-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[32%] rotate-12 z-[100] pointer-events-none">
            <img src={hand} alt="hand" />
          </div>

          <div className="w-full h-full flex flex-col items-center justify-end relative z-10">
            <div className="flex flex-col h-[70vh] relative bottom-[-5%] items-center justify-end z-50 overflow-hidden">
              {[...stack].reverse().map((item, idx) => {
                const originalIndex = stack.length - 1 - idx;
                const scale = Math.max(0.5, 1 - stack.length * 0.035);
                const width = `${26 * scale}vw`;
                const rotation = idx % 3 === 0 ? 0 : Math.random() * 3 - 1.5;

                return (
                  <motion.img
                    key={originalIndex}
                    src={item.img}
                    alt={item.name}
                    initial={
                      originalIndex === lastAddedIndex
                        ? { opacity: 0, y: 10 }
                        : false
                    }
                    animate={{ opacity: 1, y: 0, x: 0, rotate: rotation }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="max-w-[80px] -mt-5"
                    style={{ zIndex: -idx, width }}
                  />
                );
              })}
            </div>

            <div className="relative z-0 mt-[-32px]">
              <div className="absolute bottom-[50%] left-[50%] translate-x-[-50%]">
                <img
                  src={buttombun}
                  alt="bun"
                  className="w-[35%] mx-auto z-10"
                />
              </div>
              <img
                src={plate}
                alt="plate"
                className="w-[40%] mx-auto -mt-4 z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );
}
