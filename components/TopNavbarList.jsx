import { IoIosArrowDown } from "react-icons/io";
import NavbarListDown from "./NavbarListDown";
import { useSelector } from "react-redux";

const TopNavbarList = () => {
  const { showLayer } = useSelector((state) => state.counterSlice);

  return (
    <>
      <li
        className={`flex group/pertama relative cursor-pointer ${
          showLayer ? "flex-col" : ""
        }`}>
        <div className="flex items-center gap-1 hover:bg-white group-hover/pertama:border-b group-hover/pertama:border-slate-400 ">
          <a href="">Find designers</a>
          <IoIosArrowDown size={15} />
        </div>
        {!showLayer && (
          <div className="w-[120px] h-32 absolute p-7 top-0 right-0">
            <NavbarListDown value={"pertama"} />
          </div>
        )}
        {showLayer && (
          <>
            <NavbarListDown value={"pertama"} />
            <div className="w-2 h-40 hidden group-hover/pertama:block"></div>
          </>
        )}
      </li>
      <li>
        <a href="">Inspiration</a>
      </li>
      <li
        className={`flex  group/kedua relative cursor-pointer ${
          showLayer ? "flex-col" : ""
        }`}>
        <div className="flex items-center gap-1 group-hover/kedua:border-b group-hover/kedua:border-slate-400 ">
          <a href="">Courses</a>
          <IoIosArrowDown size={15} />
        </div>
        {!showLayer && (
          <div className="w-20 h-32 absolute p-7 top-0 right-0">
            <NavbarListDown value={"kedua"} />
          </div>
        )}
        {showLayer && (
          <>
            <NavbarListDown value={"kedua"} />
            <div className="w-2 h-40 hidden group-hover/kedua:block"></div>
          </>
        )}
      </li>
      <li>
        <a href="">Jobs</a>
      </li>
      <li>
        <a href="">Go Pro</a>
      </li>
    </>
  );
};

export default TopNavbarList;
