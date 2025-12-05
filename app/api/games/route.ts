/* eslint-disable @typescript-eslint/no-explicit-any */
import sportData from "@/lib/sport-data";
import { NextResponse } from "next/server";

const sports = [
  "american-football",
  "basketball",
  "hockey",
  "baseball",
];

const ALLOWED_LEAGUES: Record<string, string[]> = {
  "american-football": ["NFL"],
  basketball: ["NBA"],
  hockey: ["NHL"],
  baseball: ["MLB"],
};

// Get tomorrow's date in local timezone (YYYY-MM-DD format)
// This is used because the API returns games for the next day
function getTomorrowDate(): string {
  const now = new Date();
  now.setDate(now.getDate() + 1); // Add 1 day
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // Always use tomorrow's date to get the correct games
  const date = searchParams.get("date") || getTomorrowDate();

  try {
    const results = await Promise.all(
      sports.map(async (sport) => {
        try {
          const res = await sportData(sport, date);
          const json = await res.json();

          // API-Sports returns data in json.response
          const games = json.response ?? [];

          console.log(games);
          // Filter only allowed leagues (NBA / NHL / MLB / NFL)
          const filtered = games.filter((g: any) => {
            const leagueName = g.league?.name;
            return ALLOWED_LEAGUES[sport].includes(leagueName);
          });

          return {
            sport,
            success: res.ok,
            data: filtered,
          };
        } catch (error) {
          return {
            sport,
            success: false,
            error: "Failed to fetch",
          };
        }
      })
    );

    return NextResponse.json({
      date,
      sports: results,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}