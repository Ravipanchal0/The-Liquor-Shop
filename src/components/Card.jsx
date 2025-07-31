import { PiShoppingCartFill } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";

const Card = ({ details }) => {
  const { img, name, discount, price, rating } = details;

  return (
    <div className="my-18">
      <div className="relative backdrop-blur-md bg-card-bg flex flex-col p-4 rounded-md w-58">
        <div className=" flex items-center justify-between mb-8">
          <div className="img relative w-11/12 h-25 ">
            <div className="absolute -top-16 -left-10 drop-shadow-2xl">
              <div className=" relative">
                <img src={img} alt="" width={250} className=" -rotate-12" />
                <div className="absolute top-8 right-8 size-10 bg-amber-600 rounded-full flex-center text-xs text-white">
                  {discount}%
                </div>
              </div>
            </div>
          </div>

          <div className="title flex items-center gap-3 flex-col flex-nowrap flex-1/2">
            <div className="rating  flex items-center gap-2 ">
              <PiStarFill className="text-orange-light" />
              <p className=" text-xs text-nowrap text-gray-600">3/5 (9.5K)</p>
            </div>

            <div className="name font-semibold text-lg">{name}</div>
          </div>
        </div>
        <div className="price flex items-center justify-between">
          <div className="price font-semibold text-lg"> &#8377; {price}</div>
          <div className="addToCart bg-bg-primary p-3 rounded-full text-white shadow-xl">
            <PiShoppingCartFill size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
