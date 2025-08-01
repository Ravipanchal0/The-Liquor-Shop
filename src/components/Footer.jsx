import React from "react";
import Wave from "../assets/waves_1.svg";
import assets from "../assets/assets";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";

const Footer = () => (
  <div className="relative bg-bg-primary text-white mt-12 sm:mt-24">
    <div className="container mx-auto px-4">
      <div className="absolute top-0 inset-x-0 border-none outline-none">
        <img src={Wave} alt="" className="w-full" />
      </div>
      <div className="relative pt-56 sm:pt-80 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_2fr] gap-8 sm:gap-12 mx-auto max-w-7xl text-center sm:text-start">
          <div className="logo flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
            <img src={assets.logo} alt="" className="w-36 invert" />
            <p className="text-sm sm:text-base text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="social flex items-center gap-3 mt-2">
              <span className="p-2 rounded-full bg-gray-800">
                <FaFacebookF size={22} />
              </span>
              <span className="p-2 rounded-full bg-gray-800">
                <FaInstagram size={22} />
              </span>
              <span className="p-2 rounded-full bg-gray-800">
                <FaXTwitter size={22} />
              </span>
            </div>
          </div>

          <div>
            <span className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-dark to-orange-light">
              Partnership
            </span>
            <div className="mt-4 text-sm sm:text-base text-slate-600 font-medium flex flex-col gap-3 items-center sm:items-start text-center sm:text-left">
              <p>Corporate Accounts</p>
              <p>Retail Partners</p>
              <p>Become an Affiliate</p>
              <p>Become a Brand Partner</p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-dark to-orange-light">
              Company
            </span>
            <div className="mt-4 text-sm sm:text-base text-slate-600 font-medium flex flex-col gap-3 items-center sm:items-start text-center sm:text-left">
              <p>About Us</p>
              <p>Contact Us</p>
              <p>User FAQ</p>
              <p>Driver FAQ</p>
              <p>Blog</p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-dark to-orange-light">
              Contact
            </span>
            <div className="mt-4 text-sm sm:text-base text-slate-600 font-medium flex flex-col gap-3 items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-2">
                <IoMailOutline size={20} className="text-orange-light" />
                <span>help@theliquorshop.com</span>
              </div>
              <div className="flex items-center gap-2">
                <IoCallOutline size={20} className="text-orange-light" />
                <span>982-785-6542</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationOutline size={20} className="text-orange-light" />
                <span>Mumbai</span>
              </div>
            </div>
          </div>

          <div>
            <span className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-dark to-orange-light">
              Join Newsletter
            </span>
            <div className="mt-4 text-sm sm:text-base text-slate-600 font-medium flex flex-col gap-3 items-center sm:items-start text-center sm:text-left">
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="subscribe rounded-full py-1 px-4 w-full bg-slate-800 flex items-center justify-between gap-1">
                <input
                  type="text"
                  name=""
                  id=""
                  className=" py-2 rounded-full text-xs outline-none flex-1/2 px-2 text-slate-200"
                  placeholder="Your email address..."
                />
                <button className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-orange-dark to-orange-light font-semibold  py-2 rounded-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
