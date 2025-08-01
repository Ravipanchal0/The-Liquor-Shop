import { PiShoppingCartFill, PiStarFill } from "react-icons/pi";

const Card = ({ details }) => {
  const { img, name, discount, price, rating } = details;
  return (
    <div className="min-w-[220px] sm:min-w-[250px] h-58 sm:h-fit">
      <div className="relative backdrop-blur-md bg-card-bg flex flex-col p-4 rounded-md w-full h-full">
        <div className="flex items-center justify-between ">
          <div className="relative w-full sm:h-48">
            <div className="sm:absolute -top-12 -left-6 drop-shadow-2xl">
              <img src={img} alt={name} className="w-56 -rotate-12" />
              <div className="absolute sm:top-8 top-0 sm:right-8 right-16 sm:size-10 size-8 bg-amber-600 rounded-full flex items-center justify-center text-xs text-white">
                {discount}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start flex-1 ml-4">
            <div className="flex items-center gap-2">
              <PiStarFill className="text-orange-light" />
              <p className="text-xs text-gray-600">{rating}</p>
            </div>
            <div className="font-semibold text-lg mt-1">{name}</div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="font-semibold text-lg">₹ {price}</div>
          <div className="bg-bg-primary p-3 rounded-full text-white shadow-xl cursor-pointer">
            <PiShoppingCartFill size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
