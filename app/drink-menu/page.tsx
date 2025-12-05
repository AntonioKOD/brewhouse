import { DrinkMenu } from "@/components/drink-menu"

export default function DrinksPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 mt-24 mb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-2">Drink Menu</h1>
        <p className="text-center text-muted-foreground mb-10">Signature cocktails, wines, and cold brews</p>
        <DrinkMenu />
      </div>
    </div>
  )
}
