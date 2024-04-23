import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Dancing_Script, Satisfy } from "next/font/google";
const satisfy = Dancing_Script({ subsets: ["latin"], weight: "400" });

const GallerySlide = () => {
  return (
    <div className="py-20 overflow-hidden">
      <div className="logos w-max flex gap-3 cursor-pointer">
        <div className="logos-slide flex gap-3">
          <div className="flex flex-col gap-2">
            <Image
              src="/img/animation.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Animation</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/branding.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Branding</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/illustration.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Illustration</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/mobile.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Mobile</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/print.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Print</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/product-design.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Product Design</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/typography.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Typography</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/web-design.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Web Design</h1>
          </div>
        </div>
        <div className="logos-slide1 flex gap-3">
          <div className="flex flex-col gap-2">
            <Image
              src="/img/animation.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Animation</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/branding.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Branding</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/illustration.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Illustration</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/mobile.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Mobile</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/print.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Print</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/product-design.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Product Design</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/typography.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Typography</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/img/web-design.png"
              alt="image"
              width={200}
              height={120}
              className=" border-2 border-slate-300 rounded-lg   p-1"
            />
            <h1 className="text-center">Web Design</h1>
          </div>
        </div>
      </div>
      <div className="flex 2md:flex-row flex-col justify-between w-full m-auto px-10 py-10 items-center gap-5">
        <div>
          <h1 className={`font-bold text-3xl ${satisfy.className}`}>EengSF</h1>
        </div>
        <div>
          <ul className="flex md:flex-nowrap flex-wrap gap-3 font-semibold justify-center">
            <li>
              <a href="">For Designers</a>
            </li>
            <li>
              <a href="">Hire Talent</a>
            </li>
            <li>
              <a href="">Inspiration</a>
            </li>
            <li>
              <a href="">Advertising</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <FaTwitter size={20} />
          <FaFacebookSquare size={20} />
          <FaInstagram size={20} />
          <FaPinterest size={20} />
        </div>
      </div>
    </div>
  );
};

export default GallerySlide;
