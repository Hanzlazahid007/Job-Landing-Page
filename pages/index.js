import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Topcategories from "./components/Topcategories";
import Mostview from "./components/Mostview";
import Latest from "./components/Latest";
import Testemonial from "./components/Testemonial";
import News from "./components/News";
import Foot from "./components/Foot";
import Dream from "./components/Dream";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Topcategories />
      <Mostview />
      <Latest />
      <Testemonial />
      <News />
      {/* <Dream /> */}
      <div className="bg-white">
      <Foot  />
      </div>
    </>
  );
}
