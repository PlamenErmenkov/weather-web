import { ENV } from "@/env";
import { APIResponse } from "@/types";

export async function getWeather(lon: number, lat: number) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ENV.OPEN_WEATHER_TOKEN}`
  );
  const data = (await res.json()) as APIResponse;
  return data
}

export async function getDefaultLocation() {
  if (!window) {
    throw new Error("Function should not be invoked from server");
  }
  const location = new Promise((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition(resolve, reject)
  }) as Promise<GeolocationPosition>
  return await location
}
