"use client";

import { useDispatch, useSelector } from "react-redux";
import { hamburger } from "../store/slice/counterSlice";

const TopNavbarHamburger = () => {
  const { showLayer } = useSelector((state) => state.counterSlice);
  const dispath = useDispatch();

  return (
    <label htmlFor="burger" className={`z-30 2md:hidden cursor-pointer`}>
      <input
        type="checkbox"
        checked={showLayer}
        onChange={() => dispath(hamburger())}
        id="burger"
        className="hidden"
      />
      <span
        className={`bg-black  w-6 h-[3px] block mb-[4px] rounded-sm ${
          showLayer
            ? "transform origin-top-left rotate-45 transition duration-1000 translate-x-px -translate-y-[3px]"
            : "transform origin-top-left transition duration-1000"
        }`}></span>
      <span
        className={`bg-black w-6 h-[3px] block mb-[4px] rounded-sm ${
          showLayer
            ? "transform scale-0 opacity-0 transition duration-1000"
            : "transform scale-100 opacity-100 transition duration-1000"
        }`}></span>
      <span
        className={`bg-black w-6 h-[3px] block mb-[4px] rounded-sm ${
          showLayer
            ? "transform origin-top-left -rotate-45 transition duration-1000 -translate-x-px translate-y-px"
            : "transform origin-top-left transition duration-1000"
        }`}></span>
    </label>
  );
};

export default TopNavbarHamburger;
