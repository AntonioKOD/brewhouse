'use client'
import Link from 'next/link'
import { AnimatedText } from './ui/animated-underline-text-one'
import { Badge } from './ui/badge'
export default function Events() {
    return(
        <div>
            <div className="text-center">
          <AnimatedText
            text="Specials & Events"
            textClassName="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
            underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
            underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
            underlineDuration={1.5}
          />
        </div>
        <h4 className="text-center mt-6">Come for the bar pizza. Stay for the game nights, deals, and good times.</h4>
        <div className='text-center'><Badge className="m-2 text-sm">This Week at the Brewhouse</Badge></div>
        </div>
    )
}