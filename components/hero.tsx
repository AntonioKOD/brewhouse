"use client"

import { motion } from "framer-motion"
import heroImage from '../public/brewhouse_hero_image.png'
import Link from "next/link"
import { UtensilsCrossed, Beer } from "lucide-react"
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 mb-32">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Made Fresh. Poured Cold.
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl font-semibold text-white mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
           Craft beers, great food, and unforgettable moments
        </motion.p>

       <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="/food-menu"
            className="group flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-primary/30 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <UtensilsCrossed className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            Eat
          </motion.a>
          <motion.a
            href="/drink-menu"
            className="group flex items-center justify-center gap-3 px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-background transition-all duration-300 shadow-xl hover:shadow-white/20 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Beer className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
            Drink
          </motion.a>
        </motion.div>

       
      </div>
    
      <div className="absolute -bottom-1 left-0 w-full z-20">
        <svg
          className="relative block w-full h-[80px] md:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" className="fill-background" />
        </svg>
      </div>
      {/* <motion.div
          className=" absolute bottom-40 left-1/2 -translate-x-1/2 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { delay: 1, duration: 1.5, repeat: Number.POSITIVE_INFINITY },
          }}
        >
          <svg className="w-6 h-10 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 36">
            <rect x="1" y="1" width="22" height="34" rx="11" strokeWidth="2" />
            <circle cx="12" cy="10" r="3" fill="currentColor" />
          </svg>
        </motion.div> */}
    </section>
  )
}
