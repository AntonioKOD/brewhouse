"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Martini, Wine, Beer, Sparkles } from "lucide-react"

type DrinkItem = {
  name: string
  description?: string
}

type DrinkCategory = {
  name: string
  icon: React.ReactNode
  items: DrinkItem[]
}

const drinkData: DrinkCategory[] = [
  {
    name: "Signature Cocktails",
    icon: <Martini className="h-5 w-5" />,
    items: [
      {
        name: "Wamps Old Fashion",
        description: "Makers Mark Bourbon, Averna, Simple Syrup, Bitters",
      },
      {
        name: "Espresso-tini",
        description: "3 Olives Vodka, Stoli Vanilla, Baileys, Simple Syrup",
      },
      {
        name: "Spicy Margarita",
        description: "Ghost Tequila, Triple Sec, Fresh Juices, Jalapeño Syrup, Tajin Rim",
      },
      {
        name: "White/Red Sangria",
        description: "Wine, Juices, Flavor Liquors",
      },
    ],
  },
  {
    name: "Wine",
    icon: <Wine className="h-5 w-5" />,
    items: [
      { name: "La Crema Pinot Noir", description: "Premium red wine" },
      { name: "Josh Cabernet Sauvignon", description: "Full-bodied red wine" },
      { name: "Kim Crawford Sauvignon", description: "Crisp white wine" },
      { name: "Santa Margherita Pinot Grigio", description: "Light Italian white" },
      { name: "Josh Chardonnay", description: "Buttery white wine" },
      { name: "By the Glass", description: "Pinot Grigio, Chardonnay, Cabernet Sauvignon, Prosecco" },
    ],
  },
  {
    name: "Draft Beer",
    icon: <Beer className="h-5 w-5" />,
    items: [{ name: "Rotating Draft Lines", description: "Ask your server for today's selections" }],
  },
  {
    name: "Bottles & Cans",
    icon: <Sparkles className="h-5 w-5" />,
    items: [
      { name: "Amstel" },
      { name: "Bud Light" },
      { name: "Budweiser" },
      { name: "Coors Light" },
      { name: "Coors Banquet" },
      { name: "Corona" },
      { name: "Corona Light" },
      { name: "Heineken" },
      { name: "Miller Lite" },
      { name: "Michelob Ultra" },
      { name: "High Noon Watermelon", description: "Hard seltzer" },
      { name: "High Noon Pineapple", description: "Hard seltzer" },
      { name: "High Noon Black Cherry", description: "Hard seltzer" },
      { name: "High Noon Peach", description: "Hard seltzer" },
      { name: "Sun Cruiser", description: "Iced Tea / Lemonade" },
    ],
  },
]

export function DrinkMenu() {
  const [activeCategory, setActiveCategory] = useState<string>("Signature Cocktails")

  const activeItems = drinkData.find((cat) => cat.name === activeCategory)?.items || []

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-border pb-6">
        {drinkData.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.name
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-transparent text-foreground hover:text-primary border border-border"
            }`}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Drink Items - Traditional 2 column layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">{activeCategory}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
            {activeItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.03 }}
                className="py-3 border-b border-dashed border-border/50"
              >
                {/* Item name */}
                <div className="flex items-baseline gap-2">
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  {!item.description && (
                    <span className="flex-1 border-b border-dotted border-muted-foreground/30 min-w-[20px] translate-y-[-4px]"></span>
                  )}
                </div>

                {/* Description if available */}
                {item.description && (
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed italic">{item.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
