import { FiMessageCircle } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { RxTriangleRight } from "react-icons/rx";

const HeroRespon = () => {
  return (
    <div className="absolute right-6 top-16 2md:flex hidden flex-col gap-4">
      <div className="relative group/pertama">
        <span className="absolute flex items-center justify-center -top-1 -right-1 text-[10px] font-bold border border-slate-300 rounded-full w-5 h-5 bg-white">
          16
        </span>
        <div className="rounded-full border border-slate-300 p-3 hover:border-slate-500 hover:cursor-pointer">
          <FiMessageCircle size={16} />
        </div>
        <div className="absolute top-1 -left-[100px] transition-all duration-500 opacity-0 group-hover/pertama:opacity-100 group-hover/pertama:-translate-x-5">
          <div className="flex bg-black relative py-2 px-4 rounded-md">
            <h1 className="text-sm text-white">Feedback</h1>
            <div className="segitiga absolute -right-2"></div>
          </div>
        </div>
      </div>
      <div className="rounded-full border border-slate-300 p-3 hover:border-slate-500 hover:cursor-pointer relative group/kedua">
        <FiUpload size={16} />
        <div className="absolute top-1 -left-[73px] transition-all duration-500 opacity-0 group-hover/kedua:opacity-100 group-hover/kedua:-translate-x-5">
          <div className="flex bg-black relative py-2 px-4 rounded-md">
            <h1 className="text-sm text-white">Share</h1>
            <div className="segitiga absolute -right-2"></div>
          </div>
        </div>
      </div>
      <div className="rounded-full border border-slate-300 p-3 hover:border-slate-500 hover:cursor-pointer relative group/ketiga">
        <FiInfo size={16} />
        <div className="absolute top-1 -left-[114px] transition-all duration-500 opacity-0 group-hover/ketiga:opacity-100 group-hover/ketiga:-translate-x-5">
          <div className="flex bg-black relative py-2 px-4 rounded-md">
            <h1 className="text-sm text-white">Shot details</h1>
            <div className="segitiga absolute -right-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRespon;
