"use client";
import { getDefaultLocation , getWeatherData} from "@/lib/weather";
import { APIResponse } from "@/types";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export default function WeatherProvider({ children }: PropsWithChildren) {
  const [location, setlocation] = useState<
    GeolocationPosition | null | "REFUSED" | "TIMEOUT"
  >(null);
  const [weather, setWeather] = useState<APIResponse | null>(null);

  useEffect(() => {
    async function getLocation() {
      try {
        const location = await getDefaultLocation(); // cached front-side
        setlocation(location);
      } catch (error) {
        if (error.code === 1) setlocation("REFUSED");
        if (error.code === 3) setlocation("TIMEOUT");
      }
    }

    getLocation();
  }, []);
  useEffect(() => {
    async function getWeather() {
      if (location && (location !== "REFUSED" && location !== "TIMEOUT")) {
        const data = await getWeatherData(location)
        setWeather(data);
      }
    }

    getWeather();
  }, [location]);
  return (
    <WeatherContext.Provider value={{ location, weather }}>
      {children}
    </WeatherContext.Provider>
  );
}

const WeatherContext = createContext<{
  location: GeolocationPosition | null | "REFUSED" |"TIMEOUT"
  weather: APIResponse | null;
}>(null!);

export function useWeather() {
  const weather = useContext(WeatherContext);
  if (!weather) throw new Error("useWeather cannot be used without provider!");
  return weather;
}
