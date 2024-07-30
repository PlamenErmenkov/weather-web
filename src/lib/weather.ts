"use client";
import { APIResponse } from "@/types";

export async function getDefaultLocation() {
  if (!window) {
    throw new Error("Function should not be invoked from server");
  }

  // Check cache
  const cache = localStorage.getItem("location");
  if (cache) return Promise.resolve(JSON.parse(cache) as GeolocationPosition);

  // get location
  const location = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        // save in cache
        localStorage.setItem("location", JSON.stringify(data));
        resolve(data);
      },
      reject,
      {
        enableHighAccuracy: false,
      }
    );
  }) as Promise<GeolocationPosition>;

  return location;
}

export async function getWeatherData(
  location: GeolocationPosition
): Promise<APIResponse> {
  const { coords } = location;
  const { latitude, longitude } = coords;

  // Check cache
  const key = latitude + "," + longitude;
  const cache = localStorage.getItem(key);
  if (cache) return JSON.parse(cache) as APIResponse;

  const response = await fetch(
    `/api/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}`
  );
  const data = (await response.json()) as unknown as APIResponse;
  // save in cache
  localStorage.setItem(key, JSON.stringify(data));

  return data;
}
