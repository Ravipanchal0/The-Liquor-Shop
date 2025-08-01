import React, { useState } from "react";
import assets from "../assets/assets.js";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full py-3 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/50">
      <div className="sm:container mx-auto">
        <div className="px-4 flex items-center justify-between mx-screen mx-auto">
          {/* Logo */}
          <div className="logo">
            <img src={assets.logo} alt="The Liquor Shop" width={100} />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:items-center gap-6 p-6 md:p-0 shadow md:shadow-none transition-all duration-300 ease-in-out z-40`}
          >
            <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 text-sm font-medium text-gray-700">
              {[
                { label: "Wine", icon: assets.wine },
                { label: "Liquor", icon: assets.liquor },
                { label: "Beer", icon: assets.beer_glass },
                { label: "Snacks", icon: assets.snacks },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-end gap-1 cursor-pointer hover:text-orange-light hover:underline decoration-1 decoration-orange-light underline-offset-4 transition-all duration-150"
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    width={22}
                    className="drop-shadow-2xl"
                  />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>

            {/* Mobile Search */}
            <div className="flex md:hidden items-center bg-gray-100 rounded-full px-2">
              <IoMdSearch className="text-orange-dark" size={20} />
              <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded-full border-none text-gray-600 text-xs outline-none w-full bg-transparent"
              />
            </div>

            {/* Mobile Login Button */}
            <button className="md:hidden px-4 py-2 mt-2 text-sm font-medium rounded grediant-color text-white">
              Login
            </button>
          </div>

          {/* Right section - hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            {/* Search */}
            <div className="search hidden md:flex items-center bg-gray-100 rounded-full p-1">
              <IoMdSearch size={22} className="text-orange-dark pl-2" />
              <input
                type="text"
                placeholder="search product..."
                className="p-2 rounded-full border-none text-gray-600 text-xs outline-none"
              />
            </div>
            {/* Profile/Login */}
            <div className="profile">
              <button className="px-6 py-1.5 text-sm font-medium rounded grediant-color text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
