import HeroRespon from "./HeroRespon";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = ({ img, name }) => {
  return (
    <div className="w-full relative">
      {name && (
        <div className="2md:w-5/6 w-full mx-auto py-16">
          <motion.h1
            initial={{ x: 225, opacity: 0 }}
            whileInView={{ x: [225, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="text-center text-3xl font-bold">
            {name}
          </motion.h1>
        </div>
      )}

      {name === "Landing Page" ? (
        <div className="2md:w-5/6 w-full mx-auto py-3">
          <Image
            src={img}
            alt="image"
            width={1920}
            height={1080}
            className="object-cover rounded-xl hover:scale-[102%] transition-all duration-500"
          />
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: [0.5, 1], opacity: [0, 1] }}
          transition={{ duration: 1.2 }}
          className="2md:w-5/6 w-full mx-auto py-3">
          <Image
            src={img}
            alt="image"
            width={1920}
            height={1080}
            className="object-cover rounded-xl hover:scale-[102%] transition-all duration-500"
          />
        </motion.div>
      )}

      {img === "/gambar1.jpg" && <HeroRespon />}
    </div>
  );
};

export default Hero;
