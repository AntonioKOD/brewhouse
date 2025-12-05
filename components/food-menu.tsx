"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Salad, Sandwich, Beef, Pizza } from "lucide-react"

type MenuItem = {
  name: string
  price: string
  description: string
  addOns?: string[]
}

type MenuCategory = {
  name: string
  icon: React.ReactNode
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    name: "Salads & Sides",
    icon: <Salad className="h-5 w-5" />,
    items: [
      {
        name: "Garden Salad",
        price: "$7.50",
        description: "Iceberg lettuce, Cucumbers, Grape tomatoes, Onions & Bell peppers",
      },
      {
        name: "Greek Salad",
        price: "$8.50",
        description: "Iceberg lettuce, Cucumbers, Grape tomatoes, Onions, Kalamata olives & Feta cheese",
      },
      {
        name: "Caesar Salad",
        price: "$8.50",
        description: "Romaine lettuce, Croutons & parmesan cheese",
        addOns: ["Steak +$6.75", "Grilled Chicken +$5.25", "Tuna +$4.50"],
      },
      { name: "Pasta Salad", price: "$2.95", description: "Classic creamy pasta salad" },
      { name: "Potato Salad", price: "$2.95", description: "Homestyle potato salad" },
    ],
  },
  {
    name: "Handhelds",
    icon: <Sandwich className="h-5 w-5" />,
    items: [
      {
        name: "Steak Caesar Wrap",
        price: "$15.75",
        description: "Steak, Romaine lettuce, Croutons & Parmesan cheese. Tossed in Caesar dressing",
      },
      {
        name: "Chicken Caesar Wrap",
        price: "$12.75",
        description: "Grilled Chicken, Romaine lettuce, Croutons & parmesan cheese. Tossed in Caesar dressing",
      },
      {
        name: "Buffalo Chicken Wrap",
        price: "$12.75",
        description: "Grilled Buffalo Chicken, Tomatoes, Lettuce & Blue cheese drizzle",
      },
      {
        name: "Steak & Cheese Sub",
        price: "$13.75",
        description: "A classic shaved steak and melted American cheese sub",
      },
      {
        name: "Pastrami & Swiss Sandwich",
        price: "$12.25",
        description: "Freshly sliced pastrami & swiss. Served on a toasted onion roll",
      },
      { name: "Hot Dog", price: "$6.95", description: "Served on a toasted brioche bun" },
      {
        name: "Tuna Sandwich",
        price: "$9.50",
        description: "Topped with Lettuce & Tomato in between toasted sourdough bread",
      },
      {
        name: "B.L.T",
        price: "$9.00",
        description: "Freshly cooked bacon, Lettuce, Tomato & light spread of mayo. Served on toasted sourdough",
      },
      {
        name: "Grilled Cheese",
        price: "$7.50",
        description: "Choice of American, Cheddar, or Swiss. Served on sourdough bread",
      },
      {
        name: "Pesto Chicken Sandwich",
        price: "$14.75",
        description: "Grilled chicken. Topped with lettuce, Roasted red peppers & pesto",
      },
      { name: "Steak Quesadilla", price: "$13.50", description: "Served with sour cream & Salsa" },
      {
        name: "Chicken Quesadilla",
        price: "$11.75",
        description: "Choice of Seasoned, BBQ or Buffalo chicken. Served with sour cream & Salsa",
      },
    ],
  },
  {
    name: "Smash Burgers",
    icon: <Beef className="h-5 w-5" />,
    items: [
      {
        name: "Cheesy Smash Burger",
        price: "$9.95",
        description: "Topped with American cheese, Lettuce, Tomato, Onion",
      },
      {
        name: "BBQ Bacon Smash Burger",
        price: "$11.95",
        description: "Topped with BBQ sauce, American cheese, Lettuce, Tomato, Onion",
      },
      {
        name: "B.L.T Smash Burger",
        price: "$11.95",
        description: "Topped with Mayo, Bacon, Lettuce, Tomato",
        addOns: ["Extra patty +$2.75"],
      },
    ],
  },
  {
    name: "Pizza",
    icon: <Pizza className="h-5 w-5" />,
    items: [
      { name: "Classic Cheese", price: "$11.00", description: "Our fresh shredded blend of cheese" },
      { name: "The Hawaiian", price: "$13.50", description: "Choice of Bacon or Ham with Pineapple" },
      {
        name: "Triple Pepper 'Roni",
        price: "$14.75",
        description: "Pepperoni, Cherry Peppers, Banana Peppers & Roasted red peppers",
      },
      {
        name: "Chicken Bacon Chipotle",
        price: "$14.75",
        description: "Choice of Buffalo, BBQ, or Seasoned chicken with bacon & Chipotle ranch drizzle",
      },
      { name: "Brewhouse Hawaiian", price: "$14.75", description: "Pastrami, Bacon & Pineapple" },
      {
        name: "The Goodfella",
        price: "$14.75",
        description: "Basil, Roasted garlic, Prosciutto & Roasted red peppers",
      },
      { name: "Classic Italian", price: "$14.75", description: "Basil, Mozzarella, Tomatoes & Prosciutto" },
      { name: "Chicken Deluxe", price: "$13.75", description: "Choice of Seasoned, BBQ or Buffalo chicken" },
      { name: "The Number 9", price: "$16.25", description: "Peppers, onions, Mushrooms & our signature steak" },
    ],
  },
]

export function FoodMenu() {
  const [activeCategory, setActiveCategory] = useState<string>("Salads & Sides")

  const activeItems = menuData.find((cat) => cat.name === activeCategory)?.items || []

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-border pb-6">
        {menuData.map((category) => (
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

      {/* Menu Items - Traditional 2 column layout */}
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
                {/* Item name and price on same line with dots */}
                <div className="flex items-baseline gap-2">
                  <h3 className="font-semibold text-foreground whitespace-nowrap">{item.name}</h3>
                  <span className="flex-1 border-b border-dotted border-muted-foreground/30 min-w-[20px] translate-y-[-4px]"></span>
                  <span className="text-primary font-bold whitespace-nowrap">{item.price}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.description}</p>

                {/* Add-ons */}
                {item.addOns && item.addOns.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.addOns.map((addOn) => (
                      <span key={addOn} className="text-xs text-accent italic">
                        {addOn}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
