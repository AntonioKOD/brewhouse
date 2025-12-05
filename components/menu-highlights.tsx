"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { UtensilsCrossed, Beer, ArrowRight } from "lucide-react"

const foodItems = [
  {
    name: "Bar Pizza",
    description: "Crispy thin crust with house-made sauce",
    price: "$14",
    image: "/bar-pizza-crispy-thin-crust.jpg",
  },
  {
    name: "Buffalo Wings",
    description: "Crispy wings tossed in your choice of sauce",
    price: "$13",
    image: "/buffalo-chicken-wings.png",
  },
  {
    name: "Loaded Nachos",
    description: "Piled high with cheese, jalapeños & salsa",
    price: "$12",
    image: "/loaded-nachos.png",
  },
  {
    name: "Crispy Tenders",
    description: "Hand-breaded chicken with honey mustard",
    price: "$11",
    image: "/crispy-chicken-tenders.png",
  },
  {
    name: "Brewhouse Burger",
    description: "Half-pound patty with bacon & cheddar",
    price: "$16",
    image: "/gourmet-burger-with-bacon.jpg",
  },
  {
    name: "Garden Salad",
    description: "Fresh greens with house vinaigrette",
    price: "$10",
    image: "/fresh-garden-salad.jpg",
  },
]

const drinkItems = [
  {
    name: "Draft List",
    description: "12 rotating taps of local & craft beers",
    price: "$6-9",
    image: "/craft-beer-tap-handles.jpg",
  },
  {
    name: "Signature Cocktails",
    description: "Handcrafted classics & house originals",
    price: "$12",
    image: "/craft-cocktails-bar.jpg",
  },
  {
    name: "Beer Buckets",
    description: "5 bottles of your choice on ice",
    price: "$22",
    image: "/beer-bucket-ice-bottles.jpg",
  },
  {
    name: "Shot Specials",
    description: "Premium spirits & party shots",
    price: "$5-10",
    image: "/shot-glasses-bar.jpg",
  },
  {
    name: "House Wine",
    description: "Red, white & rosé by the glass",
    price: "$8",
    image: "/wine-glass-pour.jpg",
  },
  {
    name: "Local IPAs",
    description: "New England style hoppy favorites",
    price: "$8",
    image: "/ipa-craft-beer-glass.jpg",
  },
]

export default function MenuHighlights() {
  const [activeTab, setActiveTab] = useState<"food" | "drinks">("food")
  const items = activeTab === "food" ? foodItems : drinkItems

  return (
    <section id="menu" className="py-16 md:py-24 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Menu Highlights</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From crispy bar bites to ice-cold craft brews, we&apos;ve got something for everyone.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-card rounded-full p-1.5 shadow-md">
            <button
              onClick={() => setActiveTab("food")}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === "food" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "food" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <UtensilsCrossed className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Food</span>
            </button>
            <button
              onClick={() => setActiveTab("drinks")}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === "drinks" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "drinks" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Beer className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Drinks</span>
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {item.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-full hover:bg-secondary/90 transition-colors shadow-lg group"
          >
            View Full Menu
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
