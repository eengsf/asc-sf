import HeroRespon from "./HeroRespon";
import Image from "next/image";

const Hero = ({ img, name }) => {
  return (
    <div className="w-full relative">
      {name && (
        <div className="2md:w-5/6 w-full mx-auto py-16">
          <h1 className="text-center text-3xl font-bold">{name}</h1>
        </div>
      )}

      <div className="2md:w-5/6 w-full mx-auto py-3 ">
        <Image
          src={img}
          width={1920}
          height={1080}
          className="object-cover rounded-xl"
        />
      </div>
      {img === "/gambar1.jpg" && <HeroRespon />}
    </div>
  );
};

export default Hero;
