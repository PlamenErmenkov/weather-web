import React from 'react'
import cloudyImage from "./cloudy.json"
import Lottie from 'lottie-react'

export default function Cloudy() {
  return (
    <Lottie animationData={cloudyImage} loop={true} />
  )
}
