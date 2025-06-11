import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-l inset-shadow-sm inset-shadow-black from-[#151515] via-[#2d2d2d] to-[#151515] text-[#fbfada] pt-10 pb-5 px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-extrabold bungee bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 bg-clip-text text-transparent drop-shadow-md">
            BURGER-STATION
          </h1>
          <p className="text-sm italic text-[#d9b86a]/80 mt-1">Made your way. Always fresh.</p>
        </div>

        {/* Navigation Links */}
        {/* <nav className="flex flex-wrap justify-center gap-6 font-medium text-[#fbfada] knewave">
          <NavLink to="/" className="hover:text-yellow-400 transition duration-300">Home</NavLink>
          <NavLink to="/menu" className="hover:text-yellow-400 transition duration-300">Menu</NavLink>
          <NavLink to="/about" className="hover:text-yellow-400 transition duration-300">About</NavLink>
        </nav> */}

        
        <div className="mt-4 md:mt-0 flex flex-wrap gap-4 justify-center">
          <NavLink
            to="/customizedorder"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-red-600 to-yellow-400 text-[#151515] font-semibold shadow-lg hover:brightness-110 transition duration-300 ease-in-out"
          >
            Order Now
          </NavLink>
          <NavLink
            to="/contact"
            className="px-6 py-2 rounded-full border border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-[#151515] transition duration-300"
          >
            Feedback
          </NavLink>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-[#b7864a]/70">
        © 2025 BURGER-STATION. All rights reserved.
      </div>
    </footer>
  );
}
