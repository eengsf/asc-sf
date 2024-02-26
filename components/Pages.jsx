import Card from "@/components/Card";
import Card1 from "@/components/Card1";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import { useSelector } from "react-redux";
import EndGame from "@/components/EndGame";
import Footer from "./Footer";

const gambar = {
  gambar1: "/gambar1.jpg",
  gambar2: "/gambar2.jpg",
  gambar3: "/gambar3.jpg",
  gambar4: "/gambar4.jpg",
  gambar5: "/gambar5.jpg",
  gambar6: "/gambar6.jpg",
  gambar7: "/gambar7.jpg",
};

const Pages = () => {
  const { showLayer } = useSelector((state) => state.counterSlice);
  return (
    <div className={`${showLayer ? "hidden" : ""}`}>
      <Hero img={gambar.gambar1} />
      <Contact />
      <Hero img={gambar.gambar2} />
      <Hero img={gambar.gambar3} name="Style Guide" />
      <Hero img={gambar.gambar4} name="Wireframe" />
      <Hero img={gambar.gambar5} name="Landing Page" />
      <Hero img={gambar.gambar6} name="Mobile Resposive" />
      <Hero img={gambar.gambar7} />
      <Card />
      <Card1 />
      <Gallery />
      <EndGame />
      <Footer />
    </div>
  );
};

export default Pages;
