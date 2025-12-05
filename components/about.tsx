"use client"
import FlipCard from "./card"
import { AnimatedText } from "./ui/animated-underline-text-one"
import beer from "../public/beer-image.png"
import pizza from "../public/pizza-image.png"
import music from "../public/sports-bar.png"

export default function About() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <AnimatedText
            text="What We're Known For"
            textClassName="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
            underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
            underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
            underlineDuration={1.5}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 justify-items-center">
         <FlipCard
  title="Bar Pizza, Done Right"
  description="A crispy New England bar pizza with golden edges, rich flavor, and the perfect crunch — it’s what we’re known for."
  image={pizza.src}
  imageAlt="Bar Pizza"
/>

<FlipCard
  title="Cold Drinks & Full Bar"
  description="Ice-cold drafts, cocktails, and a fully stocked bar — always poured cold and served with great energy."
  image={beer.src}
  imageAlt="Cold Drinks"
/>

<FlipCard
  title="Sports, Music & Good Times"
  description="Catch every big game on our wall of TVs, enjoy the music, and experience a lively neighborhood vibe every night."
  image={music.src}
  imageAlt="Sports Bar Atmosphere"
  className="md:col-span-2 lg:col-span-1 md:justify-self-center"
/>
        </div>
      </div>
    </section>
  )
}
