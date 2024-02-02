import React, { useState } from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonial = ({ reviews }) => {
  const [currReview, setCurrReview] = useState(0);

  const leftShiftHandler = () => {
    if (currReview - 1 < 0) {
      setCurrReview(reviews.length - 1);
    } else {
      setCurrReview(currReview - 1);
    }
  };

  const rightShiftHandler = () => {
    if (currReview < reviews.length - 1) {
      setCurrReview(currReview + 1);
    } else {
      setCurrReview(0);
    }
  };

  const surpriseHandler = () => {
    const random = parseInt(Math.random() * reviews.length);
    setCurrReview(random);
  };

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col items-center justify-center m-10 p-10 transition-all duration-700 hover:shadow-lg rounded-md">
      <Card review={reviews[currReview]} />
      <div className="flex text-3xl mt-10 gap-3 font-bold text-violet-400 justify-center">
        <button
          className="hover:text-violet-500 cursor-pointer"
          onClick={leftShiftHandler}
        >
          <FaChevronLeft />
        </button>

        <button
          className="hover:text-violet-500 cursor-pointer"
          onClick={rightShiftHandler}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          className="bg-violet-400 cursor-pointer hover:bg-violet-600 transition-all duration-200 font-bold px-10 py-2 rounded-md text-white text-lg"
          onClick={surpriseHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
