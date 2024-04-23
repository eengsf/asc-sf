"use client";
import { CiSearch } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import TopNavbarList from "./TopNavbarList";
import TopNavbarHamburger from "./TopNavbarHamburger";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setShowLayer } from "../store/slice/counterSlice";
import { Dancing_Script } from "next/font/google";

const satisfy = Dancing_Script({ subsets: ["latin"], weight: "400" });

const TopNavbar = () => {
  const { showLayer } = useSelector((state) => state.counterSlice);
  const dispath = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 925) {
        dispath(setShowLayer(false));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispath]);

  return (
    <div>
      <div className={`navbar px-6 py-6 gap-0 2md:shadow-none shadow-lg `}>
        <div className={`flex-1 2md:gap-8 gap-0 flex items-center`}>
          <TopNavbarHamburger />
          <div>
            <a
              className={`btn btn-ghost text-3xl font-black ${satisfy.className}`}>
              EengSF
            </a>
          </div>
          <ul className={`text-sm font-bold gap-8 2md:flex hidden`}>
            <TopNavbarList />
          </ul>
          <ul
            className={`absolute text-sm font-bold gap-8 2md:hidden flex flex-col w-60 top-36 left-6 z-10 -translate-x-72 opacity-0 transition-all duration-1000 ${
              showLayer ? "translate-x-0 opacity-100" : ""
            }`}>
            <TopNavbarList />
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <div className="form-control">
            <label className="input lg:input-bordered flex items-center gap-2 lg:bg-slate-100 bg-transparent rounded-full ">
              <CiSearch size={21} className="lg:block hidden" />
              <FiSearch size={21} className="lg:hidden block cursor-pointer" />
              <input
                type="text"
                className="grow bg-white w-40 h-12 lg:block hidden"
                placeholder="Search..."
              />
            </label>
          </div>
          <div className="2md:block hidden">
            <button className="text-sm font-bold hover:text-slate-400 ">
              Log in
            </button>
          </div>
          <div>
            <button className="bg-black text-sm text-white font-bold py-4 px-6 rounded-full hover:bg-slate-400 hover:text-black ">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
