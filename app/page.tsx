import type { Metadata } from "next";
import Image from "next/image";
import Hero from "../components/hero";
import About from "@/components/about";
import MenuHighlights from "@/components/menu-highlights";
import Events from "@/components/events";
import Sports from "@/components/sports";

export const metadata: Metadata = {
  title: "Home",
  description: "Braintree Brewhouse - Your local destination for craft beer, authentic New England bar pizza, and live sports. Open daily at 703 Granite Street, Braintree, MA. Catch today's games, enjoy happy hour specials, and experience the best bar pizza in Braintree.",
  keywords: [
    "Braintree Brewhouse",
    "Braintree bar",
    "Braintree restaurant",
    "craft beer Braintree",
    "bar pizza Braintree",
    "sports bar Braintree",
    "today's games Braintree",
    "happy hour Braintree",
    "Braintree MA restaurant",
  ],
};

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
