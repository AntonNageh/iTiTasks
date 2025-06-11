import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Navbar({onAuthClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    isActive ? "font-bold text-[#fbfada]" : "text-[#ffc400]";

  return (
    <div className="fixed shadow-md shadow-[#2e2e2e] top-0 left-0 right-0 z-[100] bungee p-5 bg-[#151515] ">
      <div className="container mx-auto  flex justify-between items-center">
        {/* Logo and Brand */}
        
          
          <NavLink to="/" className=" ">

            <h1 className=" text-xl md:text-2xl text-[#fbfada]">BURGER-STATION</h1>
          
          </NavLink>
      

        {/* Button */}
        <button
          onClick={toggleMenu}
          className="text-[#fbfada] bg-[#151515]  cursor-pointer mx-3 text-2xl md:hidden focus:outline-none"
        >
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute md:static top-full bg-[#151515]  left-0 w-full md:w-auto flex-col md:flex-row px-5 py-4  gap-4 md:gap-10 items-center md:flex rounded-b-xl md:rounded-none transition-all duration-500`}
        >
          <li>
            <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/customizedorder"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Customized Order
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={navLinkClass} onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
          <li>
             <div className="flex items-center space-x-4">
              <SignedOut>
                <button
                  onClick={() => onAuthClick('signin')}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onAuthClick('signup')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </button>
              </SignedOut>
              
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
