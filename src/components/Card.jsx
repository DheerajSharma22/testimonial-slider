import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ review }) => {
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
          src={review.image}
          alt=""
        />
        <div className="w-[140px] h-[140px] rounded-full absolute top-[-6px] left-[10px] z-[-1] bg-violet-500"></div>
      </div>

      <div className="text-center mt-7">
        <p className="tracking-wider font-bold capitalize text-2xl">
          {review.name}
        </p>
        <p className="text-violet-300 uppercase text-sm "> {review.job}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 ">
        <p className="text-slate-500">{review.text}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
