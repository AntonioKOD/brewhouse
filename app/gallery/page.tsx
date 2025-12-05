"use client"
import { LayoutGrid } from "@/components/ui/layout-grid"

const cards = [
  { id: 1, className: "md:col-span-2", thumbnail: "/BREWHOUSEMENU-2.png" },
  { id: 2, className: "md:col-span-1", thumbnail: "/BREWHOUSEMENU-4.png" },
  { id: 3, className: "md:col-span-1", thumbnail: "/BREWHOUSEMENU-5.png" },
  { id: 4, className: "md:col-span-2", thumbnail: "/BREWHOUSEMENU-6.png" },
  { id: 5, className: "md:col-span-1", thumbnail: "/BREWHOUSEMENU-7.png" },
  { id: 6, className: "md:col-span-1", thumbnail: "/BREWHOUSEMENU-9.png" },
  { id: 7, className: "md:col-span-2", thumbnail: "/BREWHOUSEMENU-10.png" },
  { id: 8, className: "md:col-span-1", thumbnail: "/BREWHOUSEMENU-11.png" },
  { id: 9, className: "md:col-span-1", thumbnail: "/BREWHOUSEMENU-12.png" },
  { id: 10, className: "md:col-span-2", thumbnail: "/BREWHOUSEMENU-13.png" },
  { id: 11, className: "md:col-span-1", thumbnail: "/BREWHOUSEMENU-16.png" },
  { id: 12, className: "md:col-span-1", thumbnail: "/BREWHOUSEMENU-34.png" },
  { id: 13, className: "md:col-span-2", thumbnail: "/BREWHOUSEMENU-36.png" },
  { id: 14, className: "md:col-span-1", thumbnail: "/BREWHOUSEMENU-41.png" },
  { id: 15, className: "md:col-span-1", thumbnail: "/BREWHOUSEMENU-42.png" },
  { id: 16, className: "md:col-span-2", thumbnail: "/BREWHOUSEMENU-45.png" },
]

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-40">
      <h1 className="text-6xl font-bold mb-8">Gallery</h1>
      <LayoutGrid cards={cards} />
    </div>
  )
}
