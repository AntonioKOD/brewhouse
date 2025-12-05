"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import logo from '../public/logo_brewhouse.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/event-planning", label: "Event Planning" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-2"
        >
          <Image
            src={logo}
            alt="Braintree Brewhouse Logo"
            width={70}
            height={70}
            className="rounded-full"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 mx-auto items-center text-lg font-bold">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link href={link.href} className="relative group text-foreground hover:text-primary transition-colors">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:flex items-center space-x-4"
        >
          <Link
            href="https://www.instagram.com/braintreebrewhouse/?igsh=eDBhMXdiZTEzNnhu&utm_source=qr"
            className="text-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </Link>
          <Link
            href="https://www.facebook.com/braintree.brewhouse/"
            className="text-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: 0.05 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="flex space-x-6 pt-4 border-t border-border w-full justify-center"
              >
                <Link
                  href="https://www.instagram.com/braintreebrewhouse/?igsh=eDBhMXdiZTEzNnhu&utm_source=qr"
                  className="text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={24} />
                </Link>
                <Link
                  href="https://www.facebook.com/braintree.brewhouse/"
                  className="text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={24} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
