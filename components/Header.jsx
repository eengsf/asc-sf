"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuDatabase } from "react-icons/lu";
import { useSelector } from "react-redux";
import { IoBookmarkOutline } from "react-icons/io5";

const Navbar = () => {
  const [scroll, setScroll] = useState();
  const { showLayer } = useSelector((state) => state.counterSlice);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 245) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full ${showLayer ? "hidden" : ""}`}>
      <div className="2md:w-5/6 w-full mx-auto px-6">
        <div className=" 2md:pt-20 pt-10 2md:py-5 py-0">
          <h1 className="2md:text-2xl text-xl font-semibold">
            Real Estate Landing Page
          </h1>
        </div>
        <div
          className={` bg-white py-5 flex justify-between
         ${
           scroll
             ? "fixed top-0 left-0 w-full z-30 transition-all duration-1000 md:px-[10vw] px-[5vw]"
             : "transition-all duration-1000"
         }
        `}>
          <div className="flex gap-2">
            <div className="cursor-pointer">
              <Image src="/logo.png" alt="logo" width={40} height={40} />
            </div>
            <div>
              <h1 className="text-sm font-bold">Eeng Sf</h1>
              <p className="text-xs text-green-400">
                Available for work{" "}
                <span className="font-bold text-slate-400 cursor-pointer">
                  Follow
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="border hover:border-black border-slate-500 rounded-full p-2 w-8 h-8 flex justify-center items-center cursor-pointer">
              <IoMdHeartEmpty size={15} />
            </div>
            <div className="border hover:border-black border-slate-500 rounded-full p-2 w-8 h-8 flex justify-center items-center cursor-pointer">
              <IoBookmarkOutline size={15} />
            </div>
            <div className=" ss:block hidden">
              <button className="bg-black text-xs text-white font-bold py-3 px-5 rounded-full hover:bg-slate-700 ">
                Gey in touch
              </button>
            </div>
            <div className="ss:hidden bg-black rounded-full w-8 h-8 flex justify-center items-center cursor-pointer">
              <LuDatabase size={15} className=" text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
