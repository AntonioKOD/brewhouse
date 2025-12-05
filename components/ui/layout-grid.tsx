"use client"
import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import type { JSX } from "react/jsx-runtime"

type Card = {
  id: number
  content?: JSX.Element | React.ReactNode | string
  className: string
  thumbnail: string
}

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null)

  const handleClick = (card: Card) => {
    setSelected(card)
  }

  const handleClose = () => {
    setSelected(null)
  }

  return (
    <>
      <div className="w-full p-4 md:p-10 grid grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-3 md:gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            className={cn(
              "relative overflow-hidden rounded-xl cursor-pointer group",
              card.className,
              // Better height based on span
              card.className.includes("col-span-2") ? "aspect-[16/9]" : "aspect-square",
            )}
            onClick={() => handleClick(card)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <img
              src={card.thumbnail || "/placeholder.svg"}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              alt={`Gallery image ${card.id}`}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            onClick={handleClose}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-[60] p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-[55] max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.thumbnail || "/placeholder.svg"}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                alt={`Gallery image ${selected.id}`}
              />
              {selected.content && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg"
                >
                  <div className="text-white">{selected.content}</div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
