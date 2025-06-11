import React from "react";
import style from "./About.module.css";
import bg from "../../assets/red-removebg-preview.png";
import man from "../../assets/image-from-rawpixel-id-15238122-png.png";
import must from "../../assets/must-removebg-preview.png";
import custom from "../../assets/custom-removebg-preview.png";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="p-5 flex flex-col lg:flex-row justify-between gap-6 bg-[#151515] knewave">
      {/* Left Section */}
      <div className="lg:w-[60%] inset-shadow-sm inset-shadow-black w-full relative bg-black/10 backdrop-blur-md p-5 rounded-3xl overflow-hidden">
        <div className="absolute bottom-0 left-5 w-40 md:w-56">
          <img className="w-full" src={custom} alt="custom" />
        </div>

        <div className="text-center mt-12 md:mt-16 lg:mt-20">
          <h2 className="text-2xl md:text-4xl font-extrabold text-red-700 uppercase leading-tight bungee">
            CUSTOM YOUR OWN BURGER!
            <br />
            <span className="text-[#fbfada]">Make it</span>{" "}
            <span className="text-yellow-400">NOW!</span>
          </h2>
        </div>

        <div className="mt-10 text-center lg:text-right lg:absolute lg:bottom-[15%] lg:right-[10%]">
          <button
            onClick={() => navigate("/customizedorder")}
            className={style.cta}
          >
            <span className={style.span}>ORDER!</span>
            <span className={style.second}>
              <svg
                width="50px"
                height="20px"
                viewBox="0 0 66 43"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none">
                  <path
                    className={style.one}
                    d="M40.15,3.89 L43.97,0.14 C44.17,-0.05 44.48,-0.05 44.68,0.14 L65.69,20.78 C66.08,21.17 66.09,21.80 65.70,22.19 L44.67,42.86 C44.48,43.05 44.17,43.05 43.97,42.86 L40.15,39.10 C39.95,38.91 39.95,38.59 40.15,38.39 L56.99,21.85 C57.19,21.66 57.19,21.34 57.00,21.14 L40.15,4.60 C39.95,4.41 39.95,4.09 40.15,3.89 Z"
                    fill="#FFFFFF"
                  />
                  <path
                    className={style.two}
                    d="M20.15,3.89 L23.97,0.14 C24.17,-0.05 24.48,-0.05 24.68,0.14 L45.69,20.78 C46.08,21.17 46.09,21.80 45.70,22.19 L24.67,42.86 C24.48,43.05 24.17,43.05 23.97,42.86 L20.15,39.10 C19.95,38.91 19.95,38.59 20.15,38.39 L36.99,21.85 C37.19,21.66 37.19,21.34 37.00,21.14 L20.15,4.60 C19.95,4.41 19.95,4.09 20.15,3.89 Z"
                    fill="#FFFFFF"
                  />
                  <path
                    className={style.three}
                    d="M0.15,3.89 L3.97,0.14 C4.17,-0.05 4.48,-0.05 4.68,0.14 L25.69,20.78 C26.08,21.17 26.09,21.80 25.70,22.19 L4.67,42.86 C4.48,43.05 4.17,43.05 3.97,42.86 L0.15,39.10 C-0.04,38.91 -0.04,38.59 0.15,38.39 L16.99,21.85 C17.19,21.66 17.19,21.34 17.00,21.14 L0.15,4.60 C-0.04,4.41 -0.04,4.09 0.15,3.89 Z"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
            </span>
          </button>
        </div>

        <div className="absolute top-2 right-0 w-28 md:w-40">
          <img className="w-full" src={must} alt="mustard" />
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[40%] inset-shadow-sm inset-shadow-black w-full p-5 rounded-3xl bg-gradient-to-br from-transparent via-red-700 to-[#151515]">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <img className="w-40 md:w-56" src={man} alt="man" />
          <div className="text-center sm:text-left sm:ml-4 mt-4 sm:mt-0">
            <h1 className="text-lg text-[#fbfada]">FREE SHIPPING</h1>
            <div className="bungee text-2xl md:text-3xl text-amber-500">
              <h1>FAST</h1>
              <h1>DELIVERY</h1>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[220px] mx-auto mt-8">
          <img className="w-full" src={bg} alt="background" />
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-center text-[#fbfada]">
            <h1 className="text-sm text-amber-500">HOTLINE:</h1>
            <h1 className="text-2xl font-bold">332003</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
