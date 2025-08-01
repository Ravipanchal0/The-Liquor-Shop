import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function ProductCarousel({ products, Card }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "next" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full mt-8 sm:my-18">
      <button
        onClick={() => scroll("prev")}
        className="hidden sm:flex absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full text-orange-dark"
      >
        <FaAngleLeft size={18} />
      </button>
      <div
        ref={scrollRef}
        className="flex gap-6 sm:gap-12 overflow-x-auto no-scrollbar px-4 sm:px-12 pt-10 pb-4 scroll-smooth"
      >
        {products.map((item, idx) => (
          <Card key={idx} details={item} />
        ))}
      </div>
      <button
        onClick={() => scroll("next")}
        className="hidden sm:flex absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full text-orange-dark"
      >
        <FaAngleRight size={18} />
      </button>
    </div>
  );
}
