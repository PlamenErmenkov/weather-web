import { ENV } from "@/env";
import { APIResponse } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  console.log("Running API route /api/weather");

  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) return NextResponse.error();

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ENV.OPEN_WEATHER_TOKEN}`
  );
  const data = (await res.json()) as APIResponse;

  return NextResponse.json(data);
};
