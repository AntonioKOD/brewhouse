"use client"
import Image from "next/image"

interface FlipCardProps {
  title: string
  description: string
  image: string
  imageAlt?: string
  className?: string
}

export default function FlipCard({ title, description, image, imageAlt = "", className = "" }: FlipCardProps) {
  return (
    <div
      className={`group relative w-[300px] h-[200px] rounded-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-5deg] hover:scale-110 hover:shadow-xl ${className}`}
    >
      <div className="absolute inset-0 w-full h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-0 group-hover:scale-110">
        <Image src={image || "/placeholder.svg"} alt={imageAlt || title} className="w-full h-full object-cover" width={300} height={200} />
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Title preview on image */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white text-lg font-bold drop-shadow-lg">{title}</h3>
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full p-5 bg-card flex flex-col justify-center opacity-0 rotate-[-45deg] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-0 group-hover:opacity-100">
        <h3 className="m-0 text-2xl text-foreground font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
