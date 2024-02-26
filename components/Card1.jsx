import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";

const Card1 = () => {
  return (
    <div className="w-full py-20">
      <div className="2md:w-5/6 w-full mx-auto px-6 py-0 flex flex-col gap-10 relative">
        <div className="2md:hidden flex gap-3 justify-center">
          <div className="rounded-full border border-slate-300 p-3 hover:border-slate-500 hover:cursor-pointer">
            <IoMdHeartEmpty size={15} />
          </div>
          <div className="rounded-full border border-slate-300 p-3 hover:border-slate-500 hover:cursor-pointer">
            <FiMessageCircle size={15} />
          </div>
          <div className="rounded-full border border-slate-300 p-3 hover:border-slate-500 hover:cursor-pointer">
            <FiUpload size={15} />
          </div>
          <div className="rounded-full border border-slate-300 p-3 hover:border-slate-500 hover:cursor-pointer">
            <FiInfo size={15} />
          </div>
          <div className="rounded-full border border-slate-300 p-3 hover:border-slate-500 hover:cursor-pointer">
            <FiInfo size={15} />
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-3">
          <div className="w-1/3 border border-slate-300"></div>
          <div className="flex flex-col gap-5 items-center">
            <Image src="/logo.png" width={75} height={75} />
            <p className="text-lg">EengSF</p>
            <button className="bg-black text-xs text-white font-bold py-3 px-5 rounded-full hover:bg-slate-700 ss:block hidden">
              Gey in touch
            </button>
          </div>
          <div className="w-1/3 border border-slate-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
