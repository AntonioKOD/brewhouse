import { FoodMenu } from "@/components/food-menu"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 mt-24 mb-24">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Our Menu</h1>
        <p className="text-muted-foreground">Fresh food, cold drinks, good times</p>
      </div>
      <FoodMenu />
    </div>
  )
}
