'use client'
import { WordRotate } from "@/components/ui/word-rotate"
import { EventPlanningForm } from "@/components/event-planning-formt"
export default function EventPlanning(){
    return(
        <div>
            <WordRotate className="text-6xl font-bold text-black dark:text-white text-center mt-24"
            words={['Contact Us', 'Plan Your Next Event']}/>
            <div className="max-w-3xl mx-auto my-16 px-4">
            <EventPlanningForm />
            </div>
        </div>
    )
}