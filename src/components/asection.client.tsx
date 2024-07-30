"use client"
import React from 'react'
import { useWeather } from './WeatherProvider.client'
import Thunderstorm from './icons/Thunderstorm'
import Clear from './icons/Clear'
import Drizzle from './icons/Drizzle'
import Rain from './icons/Rain'
import Snow from './icons/Snow'
import Cloudy from './icons/Cloudy'

export default function Asection() {
  const weather = useWeather()

  if(weather.location === "REFUSED") return <div>Location access denied</div>
  return (
    <>
    <div>{weather.weather?(weather.weather.name):""}</div>
    <div>{weather.weather?(weather.weather.main.temp - 273).toFixed(0):""}</div>
    <div>weather code: {weather.weather?(weather.weather.weather.at(0)!.id):""}</div>
    <div>{weather.weather?(weatherIcon({code:weather.weather.weather.at(0)!.id})):"No image"}</div>

    </>
  )
}

function weatherIcon({code}:{code:number}) {
  if(code < 200) return <Clear></Clear>
  else if(code < 300) return <Thunderstorm></Thunderstorm>
  else if(code < 400) return <Drizzle></Drizzle>
  else if(code < 600) return <Rain></Rain>
  else if(code < 700) return <Snow></Snow>
  else if(code === 800) return <Clear></Clear>
  else return <Cloudy></Cloudy>
}