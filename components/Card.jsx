import Image from "next/image";

const Card = () => {
  return (
    <div className="w-full py-3">
      <div className="2md:w-5/6 w-full mx-auto py-16 flex flex-col items-center gap-3 bg-[#0d0c1e] text-white rounded-lg">
        <p className="text-lg">Thank you for your attention!</p>
        <Image
          src="/logo.png"
          alt="logo"
          width={90}
          height={90}
          className="border rounded-full p-2"
        />
        <p className="text-sm">Available for new projects! Lets chat</p>
        <p className="text-lg">eengsf@gmail.com</p>
      </div>
    </div>
  );
};

export default Card;
