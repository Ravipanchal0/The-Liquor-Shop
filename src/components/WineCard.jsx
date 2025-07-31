import { PiShoppingCartFill } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";

const WineCard = ({ details }) => {
  const { img, name, discount, price, rating } = details;
  return (
    <div className="">
      <div className="relative backdrop-blur-md bg-white flex flex-col p-4 rounded-lg w-58">
        <div className="img flex justify-between items-center">
          <div className=" relative drop-shadow-2xl flex-1/2">
            <img
              src={img}
              alt=""
              width={250}
              className=" -rotate-12 self-start "
            />
            <div className="absolute top-8 right-8 size-10 bg-amber-600 rounded-full flex-center text-xs text-white">
              {discount}%
            </div>
          </div>
          <div className="addToCart bg-bg-primary p-3 rounded-full text-white shadow-xl">
            <PiShoppingCartFill size={20} />
          </div>
        </div>
        <div className=" my-6">
          <div className="rating  flex items-center gap-2 ">
            <PiStarFill className="text-orange-light" />
            <p className=" text-xs text-nowrap text-gray-600">3/5 (9.5K)</p>
          </div>

          <div className="name font-semibold text-lg">{name}</div>
        </div>

        <div className="price flex items-center gap-2 font-bold text-orange-light text-xl">
          <span>&#8377; {price}</span>
          <span className="text-gray-400 line-through">
            {Math.floor(parseInt(price) * (parseInt(discount) / 100))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WineCard;
