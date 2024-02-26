import GalleryImage from "./GalleryImage";

const image = {
  img1: "/img1.jpg",
  img2: "/img2.jpg",
  img3: "/img3.jpg",
  img4: "/img4.jpg",
};

const Gallery = () => {
  return (
    <div className="w-full 2md:w-5/6 mx-auto flex flex-col 2md:px-0 px-5 py-20 gap-5 ">
      <div className="flex justify-between">
        <h1 className="font-bold">More by Uix EengSF</h1>
        <h1 className="cursor-pointer">View profile</h1>
      </div>
      <div className="flex lg:flex-nowrap flex-wrap lg:gap-5 lg:-mx-0 -mx-5">
        <GalleryImage img={image.img1} name="Web Design: Landing Page..." />
        <GalleryImage img={image.img2} name="Real Estate Landing Page..." />
        <GalleryImage img={image.img3} name="Web Design: Landing Page..." />
        <GalleryImage img={image.img4} name="Property Landing Page..." />
      </div>
    </div>
  );
};

export default Gallery;
