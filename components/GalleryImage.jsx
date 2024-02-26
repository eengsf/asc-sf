import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
const GalleryImage = ({ img, name }) => {
  return (
    <div className=" w-full md:w-1/2 lg:px-0 lg:py-0 px-5 py-5 group/img1 rounded-lg">
      <div className="relative ">
        <Image
          src={img}
          alt="image"
          width={1920}
          height={1080}
          className="object-cover rounded-lg"
        />
        <div className="absolute hidden w-full group-hover/img1:flex items-center justify-center gap-3 bottom-0 bg-gradient-to-t from-black/50 to-black/5 rounded-lg px-4 py-[5%]">
          <div className="lg:w-1/2 md:w-2/3 flex">
            <h1 className="text-white font-bold w-full overflow-hidden">
              {name}
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-1/3 flex md:gap-0 gap-3 justify-around">
            <div className="rounded-full border p-3 bg-white hover:text-slate-500 hover:cursor-pointer">
              <IoMdHeartEmpty size={15} />
            </div>
            <div className="rounded-full border p-3 bg-white hover:text-slate-500 hover:cursor-pointer">
              <CiBookmark size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
