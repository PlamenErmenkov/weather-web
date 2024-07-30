"use client"
import { getDefaultLocation } from '@/lib/weather'
import { APIResponse } from '@/types'
import React from 'react'
import { useEffect, useState } from 'react'

export default function Asection() {
    const [position, setPosition] = useState<GeolocationPosition | null> (null) 
    const [weatherData, setWeatheraData] = useState<APIResponse | null> (null)
    useEffect(() => {
      getDefaultLocation().then(setPosition).catch(console.error) 
    
      
    }, [])
    useEffect(() => {
      if (!position) return
        fetch(`/api/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}`).then(data=>data.json()).then(console.log)
    

    }, [position])
    console.log(position)
    if (!weatherData) return
  return (
    <div>{weatherData.main.temp - 273}</div>
  )
}
