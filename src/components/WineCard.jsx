import { PiShoppingCartFill, PiStarFill } from "react-icons/pi";

const WineCard = ({ details }) => {
  const { img, name, discount, price, rating } = details;
  const original = Math.floor(parseInt(price) * (1 + parseInt(discount) / 100));
  return (
    <div className="min-w-[220px] sm:min-w-[250px]">
      <div className="relative backdrop-blur-md bg-white flex flex-col p-4 rounded-lg w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="relative drop-shadow-2xl w-full">
            <img src={img} alt={name} className="w-56 -rotate-12" />
            <div className="absolute top-8 right-8 size-10 bg-amber-600 rounded-full flex-center text-xs text-white">
              {discount}%
            </div>
          </div>
          <div className="bg-bg-primary p-3 rounded-full text-white shadow-xl cursor-pointer">
            <PiShoppingCartFill size={20} />
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-center gap-2">
            <PiStarFill className="text-orange-light" />
            <p className="text-xs text-gray-600">{rating}</p>
          </div>
          <div className="font-semibold text-lg mt-1">{name}</div>
        </div>
        <div className="flex items-center gap-2 font-bold text-orange-light text-xl">
          <span>₹ {price}</span>
          <span className="text-gray-400 line-through">₹ {original}</span>
        </div>
      </div>
    </div>
  );
};

export default WineCard;
