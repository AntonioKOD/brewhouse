
import Image from "next/image";
import Hero from "../components/hero";
import About from "@/components/about";
import MenuHighlights from "@/components/menu-highlights";
import Events from "@/components/events";
import Sports from "@/components/sports";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Events/>
      <Sports/>
      
    </div>
  );
}
