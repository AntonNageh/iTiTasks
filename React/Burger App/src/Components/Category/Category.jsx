import React, { useState } from "react";
import style from "./Category.module.css";
import toast, { Toaster } from "react-hot-toast";
import burger1 from "../../assets/1-removebg-preview.png";
import burger2 from "../../assets/brgr-removebg-preview.png";
import burger3 from "../../assets/3-removebg-preview.png";
import burger4 from "../../assets/4-removebg-preview.png";
import burger5 from "../../assets/5-removebg-preview.png";
import Slider from "react-slick";

export default function Category() {
  const [selectedBurger, setselectedBurger] = useState(null);
  const [Qty, setQty] = useState(1);

  const data = [
    { id: 1, name: "Bacon burger", image: burger1, price: 250 },
    { id: 2, name: "Smoky BBQ Burger", image: burger2, price: 300 },
    { id: 3, name: "Spicy Jalapeño Burger", image: burger3, price: 370 },
    { id: 4, name: "Classic Burger", image: burger4, price: 349 },
    { id: 5, name: "Supreme Burger", image: burger5, price: 450 },
  ];

  function getBurger(burger) {
    setselectedBurger(burger);
  }

  function sendToCart(burger) {
    const existingCart = JSON.parse(localStorage.getItem("orders")) || [];

    const updatedBurger = {
      ...burger,
      quantity: Qty,
      totalPrice: Qty * burger.price,
      ingredients:[]
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingCart, updatedBurger])
    );

    toast.success("Burger added to your cart!", {
      duration: 2000,
      position: "top-right",
    });
    setQty(1);
    setselectedBurger(null);

    console.log(localStorage.getItem("orders"));
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div className={`pt-5 bg-[#151515] `}>
      <Toaster />
      <div className=" container mx-auto">
        <div>
          <h3 className={`${style.shadow} text-[#262626]  bungee text-2xl py-3`}>Our Top 5 Burgers</h3>

          <div className="relative">
            <Slider
              className=" inset-shadow-sm inset-shadow-black p-2 rounded-full overflow-hidden shadow-2xl shadow-black  bg-linear-to-b to-black from-transparent"
              {...settings}
            >
              {data.map((category) => (
                <div
                  onClick={() => getBurger(category)}
                  className="hover:scale-110 my-2 transition-all flex flex-col justify-between items-center"
                  key={category.id}
                >
                  <img
                    src={category.image}
                    className="w-full h-[100px]  md:h-[200px] object-contain rounded-4xl p-1.5 cursor-pointer"
                    alt=""
                  />
                  <h3 className="bungee text-sm md:text-md lexend text-amber-50 text-center">
                    {category.name}
                  </h3>
                </div>
              ))}
            </Slider>

            {selectedBurger && (
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[600px] h-[400px] rounded-4xl flex flex-row z-30 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl transition-all duration-500 animate-fadeIn">
                <div className="w-1/2 rounded-l-4xl flex justify-center items-center relative overflow-hidden">
                  <img
                    className="w-[100%] transition-transform duration-300 hover:scale-110"
                    src={selectedBurger.image}
                    alt={selectedBurger.name}
                  />
                </div>
                <div className="w-1/2 relative rounded-r-4xl bg-gradient-to-br from-white via-[pink] to-yellow-200 p-5 flex flex-col justify-center">
                  <button
                    className="absolute cursor-pointer top-3 right-3 bg-black text-white px-3 py-1 rounded-full shadow-md hover:bg-red-600 transition"
                    onClick={() => setselectedBurger(null)}
                  >
                    ✕
                  </button>
                  <h1 className="text-xl md:text-2xl font-extrabold font-bungee text-gray-800 mb-4">
                    {selectedBurger.name}
                  </h1>
                  <h2 className="text-md mb-4 font-medium text-gray-700">
                    Price:{" "}
                    <span className="font-bold">
                      {selectedBurger.price * Qty} EGP
                    </span>
                  </h2>
                  <div className="flex justify-center gap-3 text-md my-5 text-white font-bold">
                    <button
                      onClick={() => setQty(Qty === 1 ? 1 : Qty - 1)}
                      className="bg-red-500 px-3 rounded-4xl cursor-pointer hover:bg-red-600 transition"
                    >
                      -1
                    </button>
                    <h3>{Qty}</h3>
                    <button
                      onClick={() => setQty(Qty + 1)}
                      className="bg-amber-500 px-3 rounded-4xl cursor-pointer hover:bg-amber-400 transition"
                    >
                      +1
                    </button>
                  </div>
                  <button
                    onClick={() => sendToCart(selectedBurger)}
                    className={`py-2 ${style.comic} w-[80%] mx-auto text-md text-white font-bold cursor-pointer`}
                  >
                    make an order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
