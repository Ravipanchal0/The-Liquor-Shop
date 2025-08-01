import React from "react";
import { products } from "../assets/assets";
import assets from "../assets/assets";
import { IoLocationSharp } from "react-icons/io5";
import Card from "./Card";
import WineCard from "./WineCard";
import Footer from "./Footer";
import ProductCarousel from "./ProductCarousel";

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="heading">
      <div className="bg-[url('/hero.png')] bg-cover bg-center w-full sm:h-screen py-22 sm:py-4 flex items-center justify-center">
        <div className="mx-screen mx-auto">
          <div className="text-center px-4 sm:px-6 md:px-0 flex flex-col items-center gap-2 sm:gap-5">
            <h1 className="w-full md:w-3/4 text-3xl sm:text-5xl md:text-7xl font-playfair font-extrabold text-shadow leading-snug">
              Wine, Liquor, and Beer. Straight to your{" "}
              <span className="text-orange-light">Door</span>.
            </h1>
            <div className="mt-6 sm:bg-white rounded-full flex flex-col sm:flex-row items-center w-11/12 sm:w-4/5 max-w-xl gap-3 p-3 sm:p-1.5">
              <IoLocationSharp className="text-orange-dark sm:px-2 text-4xl hidden sm:inline-block" />
              <input
                type="text"
                placeholder="Enter delivery address to shop"
                className="bg-white w-full text-sm rounded-full text-gray-800 flex-1 px-6 sm:px-2 py-3 sm:py-1 outline-none"
              />
              <button className="grediant-color font-medium px-6 sm:px-4 py-2 rounded-full text-white">
                Shop Now
              </button>
            </div>
            <p className="note text-xs sm:mt-4 pb-18">
              I'm 18+ year of age and agree to the{" "}
              <span className="text-orange-light underline font-medium cursor-pointer">
                Terms and Conditions
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Best Sellers */}
    <section className="best-explore container mx-auto mt-16 my-24 sm:my-32 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mx-screen mx-auto">
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Best <span className="text-orange-light">Sellers</span>
        </h2>
        <button className="mt-4 sm:mt-0 px-6 sm:px-8 py-2 sm:py-3 rounded-full grediant-color text-white font-rubik text-sm sm:text-base">
          Explore More
        </button>
      </div>
      <div className="mx-screen mx-auto">
        <ProductCarousel products={products} Card={Card} />
      </div>
    </section>

    {/* Wines Section */}
    <section className="wines bg-card-bg py-12 sm:py-16">
      <div className="container mx-auto px-4 ">
        <div className="mx-screen mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Unlock the World of{" "}
              <span className="text-orange-light">Wines</span>
            </h2>
            <button className="mt-4 sm:mt-0 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-orange-light border-2 border-amber-500 font-rubik text-sm sm:text-base">
              Explore More
            </button>
          </div>
          <div className="mx-screen mx-auto">
            <ProductCarousel products={products} Card={WineCard} />
          </div>
        </div>
      </div>
    </section>

    {/* Featured Brands */}
    <section className="brand py-16">
      <div className="container mx-auto px-4">
        <div className="mx-screen mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8">
            Featured <span className="text-orange-light">Brands</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
            {[
              "crown_royal",
              "new_belgium",
              "jim_beam",
              "captain_morgan",
              "sorel",
              "inf",
              "bulleit",
              "pacifico",
              "simply_spiked",
              "makers_mark",
            ].map((key) => (
              <img
                key={key}
                src={assets[key]}
                alt={key}
                className="mx-auto w-20 sm:w-32 md:w-36"
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;
