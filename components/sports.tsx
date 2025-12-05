/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import { Calendar, Clock, Percent, Beer, UtensilsCrossed } from "lucide-react"

const SPORT_BADGES: Record<string, string> = {
  "american-football": "NFL",
  basketball: "NBA",
  hockey: "NHL",
  baseball: "MLB",
}

const SPORT_ORDER = ["american-football", "basketball", "hockey", "baseball"]

// Mock specials data
const SPECIALS = [
  {
    id: 1,
    title: "Happy Hour",
    description: "Half-price drafts & $5 appetizers",
    time: "4PM - 7PM",
    icon: Beer,
    badge: "Daily",
  },
  {
    id: 2,
    title: "Wing Wednesday",
    description: "50¢ wings with any drink purchase",
    time: "All Day",
    icon: UtensilsCrossed,
    badge: "Wed",
  },
  {
    id: 3,
    title: "Game Day Buckets",
    description: "5 domestic beers for $18",
    time: "During Games",
    icon: Percent,
    badge: "Special",
  },
  {
    id: 4,
    title: "Trivia Night",
    description: "Win prizes & enjoy $3 wells",
    time: "8PM - 10PM",
    icon: Beer,
    badge: "Thu",
  },
]

function formatGameTime(dateStr: string, timeStr?: string): string {
  try {
    const [year, month, day] = dateStr.split("-").map(Number)
    let gameDate: Date
    if (timeStr) {
      const [hours, minutes] = timeStr.split(":").map(Number)
      gameDate = new Date(Date.UTC(year, month - 1, day, hours, minutes || 0))
    } else {
      gameDate = new Date(Date.UTC(year, month - 1, day))
    }
    return gameDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  } catch {
    return "TBD"
  }
}

export default function SpecialsEvents() {
  const [games, setGames] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSportsData() {
      try {
        setLoading(true)
        const response = await fetch(`/api/games`)
        const data = await response.json()

        if (!data?.sports) {
          setGames([])
          return
        }

        const flat = data.sports.flatMap((sportBlock: any) =>
          (sportBlock.data || []).map((game: any) => ({
            ...game,
            sport: sportBlock.sport,
          })),
        )

        flat.sort((a: any, b: any) => {
          const sa = SPORT_ORDER.indexOf(a.sport)
          const sb = SPORT_ORDER.indexOf(b.sport)
          if (sa !== sb) return sa - sb
          const timeA = a.time || "00:00"
          const timeB = b.time || "00:00"
          return timeA.localeCompare(timeB)
        })

        setGames(flat)
      } catch (error) {
        console.error("Error fetching sports data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchSportsData()
  }, [])

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-6">
          {/* Specials Card */}
          <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 p-4 border-b border-border bg-primary/10">
              <Percent className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground">Today&apos;s Specials</h3>
            </div>
            <div className="h-72 overflow-y-auto p-4 space-y-3">
              {SPECIALS.map((special) => (
                <div
                  key={special.id}
                  className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/15">
                      <special.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-card-foreground">{special.title}</h4>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                          {special.badge}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{special.description}</p>
                      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {special.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Card */}
          <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 p-4 border-b border-border bg-accent/10">
              <Calendar className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-semibold text-card-foreground">Today&apos;s Games</h3>
            </div>
            <div className="h-72 overflow-y-auto p-4">
              {loading ? (
                <div className="flex items-center justify-center h-full text-muted-foreground">Loading games...</div>
              ) : games.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-muted-foreground">No games scheduled for today.</p>
                  <p className="text-sm text-muted-foreground mt-1">Check back on the next game day!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {games.map((game: any) => {
                    const gameTime = formatGameTime(game.date, game.time)
                    return (
                      <div
                        key={game.id}
                        className="p-4 rounded-lg bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold px-2 py-1 rounded-md bg-accent text-accent-foreground">
                            {SPORT_BADGES[game.sport] || game.sport}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-card-foreground truncate">
                              {game.teams?.home?.name || "TBD"} vs {game.teams?.away?.name || "TBD"}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
