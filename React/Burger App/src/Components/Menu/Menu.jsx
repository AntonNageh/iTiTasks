import React from "react";
import toast from "react-hot-toast";
import style from "./Menu.module.css";
import fries from "../../assets/french-fries-750-removebg-preview.png";
import Combo from "../../assets/Combo_FINAL-removebg-preview.png";
import Combo2 from "../../assets/combo2-removebg-preview.png";
import bg from "../../assets/black-removebg-preview.png";

export default function Menu() {
  const handleOrder = (combo) => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = [...existingOrders, combo];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    toast.success(`${combo.name} added to orders!`);
  };

  return (
    <div className="flex relative h-screen">
      <div className="w-1/2 pt-10 bg-[#151515] relative">
       <div className=" absolute right-1 ">
          <h2
            className={`text-[#fbfada] text-center bungee text-4xl ${style.shadow}`}
          >
            Explore Our
          </h2>
        </div>
        {/* First Combo */}
        <div className="lg:w-[70%] top-20 relative knewave">
          <img className="w-100" src={Combo} alt="combo" />
          <div className="absolute left-0 md:left-0 md:bottom-0 bottom-[-20%]">
            <img className="w-50" src={bg} alt="combo" />
          </div>
          <h1 className="absolute md:left-20 md:bottom-12 text-[#fbfada] bottom-3 left-[30%]">
            500 EGY
          </h1>
          <div className="absolute w-[70%] text-[#fbfada] top-0 right-[-30%] z-10 lg:text-4xl text-2xl font-extrabold">
            <h1 className="ms-5">Early</h1>
            <h1 className="ms-10">Evening</h1>
            <h1 className="text-red-700">Burger</h1>
            <ul className="md:text-sm text-[10px] ms-10 bungee md:w-60 w-[150%]">
              <li>
                -Juicy grilled beef patty, cheddar ,pickles and Compo special
                sauce in a toasted bun
              </li>
              <li>-Crispy golden fries with optional ketchup or cheese dip</li>
              <li>
                -330ml chilled cola (options: Coca-Cola, Pepsi, or diet)
              </li>
            </ul>
            <div className={`${style.borders}`}>
              <button
                className={style.primary}
                onClick={() =>
                  handleOrder({
                    name: "Early Evening Burger",
                    totalPrice: 500,
                    ingredients:[],
                    image: Combo,
                    quantity:1
                  })
                }
              >
                Order
              </button>
            </div>
          </div>
        </div>

        {/* Second Combo */}
        <div className="w-[70%] z-50 sm:top-[20%] top-[30%] md:top-[25%] xl:top-0 left-[10%] xl:left-[100%] relative knewave">
          <img className="w-100" src={Combo2} alt="combo" />
          <div className="absolute left-0 md:left-0 md:bottom-0 bottom-[-20%]">
            <img className="w-50" src={bg} alt="combo" />
          </div>
          <h1 className="absolute md:left-20 md:bottom-12 text-[#fbfada] bottom-3 left-[30%]">
            550 EGY
          </h1>
          <div className="absolute w-[70%] text-[#fbfada] top-0 right-[-40%] z-10 lg:text-4xl text-2xl font-extrabold">
            <h1 className="ms-5">Dark</h1>
            <h1 className="ms-10">Dusk</h1>
            <h1 className={`${style.shadow2} text-red-700`}>Burger</h1>
            <ul className="md:text-sm text-[10px] ms-10 bungee md:w-60 w-[200%]">
              <li>
                -Compo Double Stack, cheddar ,pickles and Compo special sauce in
                a toasted bun.
              </li>
              <li>-Crispy golden fries with optional ketchup or cheese dip</li>
              <li>
                -330ml chilled cola (options: Coca-Cola, Pepsi, or diet)
              </li>
            </ul>
            <div className={`${style.borders}`}>
              <button
                className={style.primary}
                onClick={() =>
                  handleOrder({
         name: "Dark Dusk Burger",
                    totalPrice: 500,
                    ingredients:[],
                    image: Combo,
                    quantity:1
                  })
                }
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 relative z-0 pt-10 bg-red-700 rounded-bl-full">
        <div
          className={`${style.bg} h-[200px] absolute top-[0%] left-[1%] mb-4`}
        >
          <h2
            className={`${style.shadow2} text-red-700 relative top-[50%] translate-y-[-50%] text-center bungee text-4xl`}
          >
            Latest Items
          </h2>
        </div>
      </div>
    </div>
  );
}
