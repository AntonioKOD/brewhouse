"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Facebook,
  Instagram,
  Linkedin,
  Moon,
  Sun,
  Twitter,
  Clock,
  UtensilsCrossed,
  Beer,
  LinkIcon,
  MapPin,
  Users,
} from "lucide-react"
import logo from "../../public/logo_brewhouse.png"
import Image from "next/image"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-5">
          <div className="relative col-span-2 flex justify-center lg:col-span-1 lg:justify-start">
            <Image src={logo || "/placeholder.svg"} alt="Company Logo" width={140} height={80} className="mb-2" />
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold flex items-center gap-1.5 md:text-base md:mb-3">
              <LinkIcon className="h-4 w-4 text-primary" />
              Quick Links
            </h3>
            <nav className="space-y-1 text-xs md:text-sm">
              <Link href="/" className="block text-muted-foreground transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/gallery" className="block text-muted-foreground transition-colors hover:text-primary">
                Gallery
              </Link>
              <Link href="/event-planning" className="block text-muted-foreground transition-colors hover:text-primary">
                Event Planning
              </Link>
              <Link href="/food-menu" className="block text-muted-foreground transition-colors hover:text-primary">
                Food Menu
              </Link>
              <Link href="/drink-menu" className="block text-muted-foreground transition-colors hover:text-primary">
                Drink Menu
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold flex items-center gap-1.5 md:text-base md:mb-3">
              <Clock className="h-4 w-4 text-primary" />
              Hours
            </h3>
            <div className="space-y-2 text-xs md:text-sm">
              <div>
                <div className="flex items-center gap-1.5 font-medium text-primary mb-0.5">
                  <Beer className="h-3 w-3 md:h-4 md:w-4" />
                  Bar
                </div>
                <p className="text-muted-foreground">Daily: 11am - 1am</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-medium text-primary mb-0.5">
                  <UtensilsCrossed className="h-3 w-3 md:h-4 md:w-4" />
                  Kitchen
                </div>
                <p className="text-muted-foreground">Sun-Wed: 11am-10pm</p>
                <p className="text-muted-foreground">Thu-Sat: 11am-11pm</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold flex items-center gap-1.5 md:text-base md:mb-3">
              <MapPin className="h-4 w-4 text-primary" />
              Contact Us
            </h3>
            <address className="space-y-0.5 text-xs md:text-sm not-italic text-muted-foreground">
              <p>703 Granite Street</p>
              <p>Braintree, MA 02184</p>
              <p>(781) 356-4500</p>
            </address>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold flex items-center gap-1.5 md:text-base md:mb-3">
              <Users className="h-4 w-4 text-primary" />
              Follow Us
            </h3>
            <div className="mb-3 flex space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      <Facebook className="h-3.5 w-3.5" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      <Twitter className="h-3.5 w-3.5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      <Instagram className="h-3.5 w-3.5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-3.5 w-3.5 text-muted-foreground" />
              <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
              <Moon className="h-3.5 w-3.5 text-muted-foreground" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t pt-4 text-center md:flex-row">
          <p className="text-xs text-muted-foreground">© 2025 Braintree Brewhouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
