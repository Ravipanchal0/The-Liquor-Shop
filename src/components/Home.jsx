import React from "react";
import assets from "../assets/assets";
import { IoLocationSharp } from "react-icons/io5";
import Card from "./Card";
import WineCard from "./WineCard";

const Home = () => {
  const products = [
    {
      img: assets.absolute_vodka,
      name: "Absolute Vodka",
      price: 1050,
      rating: 4.5,
      discount: "12%",
    },
    {
      img: assets.antiquity_blue,
      name: "Antiquity Blue",
      price: 850,
      rating: 4.2,
      discount: "10%",
    },
    {
      img: assets.bacardi,
      name: "Bacardi",
      price: 920,
      rating: 4.3,
      discount: "15%",
    },
    {
      img: assets.budweiser,
      name: "Budweiser",
      price: 200,
      rating: 4.1,
      discount: "7%",
    },
    {
      img: assets.chenin_blanc,
      name: "Chenin Blanc",
      price: 890,
      rating: 4.3,
      discount: "10%",
    },
    {
      img: assets.corona,
      name: "Corona",
      price: 210,
      rating: 4.2,
      discount: "5%",
    },
    {
      img: assets.fratelli,
      name: "Fratelli",
      price: 780,
      rating: 4.0,
      discount: "8%",
    },
    {
      img: assets.havana,
      name: "Havana",
      price: 860,
      rating: 4.1,
      discount: "10%",
    },
    {
      img: assets.imperial_blue,
      name: "Imperial Blue",
      price: 320,
      rating: 3.9,
      discount: "7%",
    },
    {
      img: assets.jacob_creek,
      name: "Jacob's Creek",
      price: 1100,
      rating: 4.4,
      discount: "10%",
    },
    {
      img: assets.jameson,
      name: "Jameson",
      price: 1950,
      rating: 4.6,
      discount: "12%",
    },
    {
      img: assets.johnnie_walker,
      name: "Johnnie Walker",
      price: 2400,
      rating: 4.7,
      discount: "15%",
    },
    {
      img: assets.kingfisher,
      name: "Kingfisher",
      price: 150,
      rating: 4.0,
      discount: "5%",
    },
    {
      img: assets.la_reserve,
      name: "La Reserve",
      price: 990,
      rating: 4.1,
      discount: "9%",
    },
    {
      img: assets.magic_moment,
      name: "Magic Moments",
      price: 640,
      rating: 4.1,
      discount: "10%",
    },
    {
      img: assets.mcDowells,
      name: "McDowell's",
      price: 580,
      rating: 3.8,
      discount: "6%",
    },
    {
      img: assets.oban,
      name: "Oban",
      price: 2600,
      rating: 4.8,
      discount: "18%",
    },
    {
      img: assets.oldmonk,
      name: "Old Monk",
      price: 450,
      rating: 4.5,
      discount: "10%",
    },
    {
      img: assets.pinot_noir,
      name: "Pinot Noir",
      price: 1350,
      rating: 4.6,
      discount: "11%",
    },
    {
      img: assets.royal_stag,
      name: "Royal Stag",
      price: 390,
      rating: 4.0,
      discount: "9%",
    },
    {
      img: assets.shiraz,
      name: "Shiraz",
      price: 890,
      rating: 4.3,
      discount: "10%",
    },
    {
      img: assets.tuborg,
      name: "Tuborg",
      price: 180,
      rating: 4.0,
      discount: "5%",
    },
    {
      img: assets.white_mischief,
      name: "White Mischief",
      price: 460,
      rating: 4.0,
      discount: "8%",
    },
    {
      img: assets.white_wine,
      name: "White Wine",
      price: 990,
      rating: 4.2,
      discount: "10%",
    },
    {
      img: assets.yellow_tail,
      name: "Yellow Tail",
      price: 930,
      rating: 4.4,
      discount: "11%",
    },
  ];

  return (
    <div>
      <section className="heading">
        <div className="main-img bg-[url('/hero.png')] bg-cover bg-center w-full h-screen flex-center mb-12">
          <div className=" z-40 flex flex-col justify-center items-center gap-5 mb-12">
            <h1 className="w-3xl text-center text-7xl font-playfair font-bold text-shadow">
              Wine, Liquor, and Beer. Straight to your
              <span className="text-orange-light"> Door</span>.
            </h1>
            <div className="location mt-6 bg-white rounded-full flex items-center gap-1 w-4/5 p-1.5">
              <div className="icon px-3">
                <IoLocationSharp size={22} className="text-orange-dark" />
              </div>
              <input
                type="text"
                className="bg-white text-sm rounded-full text-gray-800 flex-1 py-2 outline-none"
                placeholder="Enter delivery address to shop"
              />
              <button className="grediant-color font-medium px-4 py-2 rounded-full text-white cursor-pointer">
                Shop Now
              </button>
            </div>
            <p className="note text-xs mb-8">
              I'm 18+ year of age and agree to the{" "}
              <span className="text-orange-light underline font-medium cursor-pointer">
                Terms and Conditions
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="best-explore container mx-auto mt-32 h-screen flex-center">
        <div className="mx-screen mx-auto">
          <div className="flex justify-between items-center ">
            <h2 className="font-playfair text-5xl font-extrabold">
              Best <span className="text-orange-light">Sellers</span>
            </h2>
            <button className="px-8 py-3 rounded-full grediant-color text-white font-rubik cursor-pointer">
              Explore More
            </button>
          </div>
          <div className="flex gap-12 items-center w-full overflow-x-hidden my-14 mt-22">
            {products.map((item, index) => (
              <Card key={index} details={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="wines w-full h-screen bg-card-bg my-18">
        <div className="container mx-auto">
          <div className="mx-screen mx-auto">
            <div className="flex justify-between items-center pt-32">
              <h2 className="font-playfair text-5xl font-extrabold">
                Unlock the World of{"  "}
                <span className="text-orange-light"> Wines</span>
              </h2>
              <button className="px-8 py-3 rounded-full  text-orange-light border-2 border-e-amber-500 font-me font-rubik cursor-pointer">
                Explore More
              </button>
            </div>
            <div className="flex gap-12 items-center w-full overflow-x-hidden my-14 mt-22">
              {products.map((item, index) => (
                <WineCard key={index} details={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="brand my-18">
        <div className="container mx-auto">
          <div className="mx-screen mx-auto pt-14">
            <h2 className="font-playfair text-5xl font-extrabold text-center">
              Featured <span className="text-orange-light">Brands</span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
