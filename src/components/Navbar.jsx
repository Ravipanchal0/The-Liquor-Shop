import React from "react";
import assets from "../assets/assets.js";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="container mx-auto py-3 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/50">
      <div className="mx-screen mx-auto flex items-center justify-between">
        <div className="logo">
          <img src={assets.logo} alt="The Liquor shop" width={100} />
        </div>
        <div className="navmenu">
          <ul className="flex-center gap-8 text-sm font-medium text-gray-700">
            <li className="flex items-end gap-1 cursor-pointer hover:text-orange-light hover:underline decoration-1 decoration-orange-light underline-offset-4 transition-all duration-150">
              <img
                src={assets.wine}
                alt=""
                width={22}
                className="drop-shadow-2xl"
              />
              <span>Wine</span>
            </li>
            <li className="flex items-end gap-1 cursor-pointer hover:text-orange-light hover:underline decoration-1 decoration-orange-light underline-offset-4 transition-all duration-150">
              <img
                src={assets.liquor}
                alt=""
                width={22}
                className="drop-shadow-2xl"
              />
              <span>Liquor</span>
            </li>
            <li className="flex items-end gap-1 cursor-pointer hover:text-orange-light hover:underline decoration-1 decoration-orange-light underline-offset-4 transition-all duration-150">
              <img
                src={assets.beer_glass}
                alt=""
                width={22}
                className="drop-shadow-2xl"
              />
              <span>Beer</span>
            </li>
            <li className="flex items-end gap-1 cursor-pointer hover:text-orange-light hover:underline decoration-1 decoration-orange-light underline-offset-4 transition-all duration-150">
              <img
                src={assets.snacks}
                alt=""
                width={22}
                className="drop-shadow-2xl"
              />
              <span>Snacks</span>
            </li>
          </ul>
        </div>
        <div className="right flex-center gap-8">
          <div className="search flex-center bg-gray-100 rounded-full p-1">
            <div className="search-icon text-orange-dark pl-2">
              <IoMdSearch size={22} />
            </div>
            <input
              type="text"
              placeholder="search product..."
              className="p-2 rounded-full border-none text-gray-600 text-xs outline-none"
            />
          </div>
          <div className="profile">
            <button className="px-6 py-1.5 text-sm font-medium rounded outline-none border-none grediant-color text-white cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
