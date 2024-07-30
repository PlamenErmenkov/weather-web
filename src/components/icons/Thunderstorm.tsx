import React from 'react'
import thundestormImage from "./thunderstormData.json"
import Lottie from 'lottie-react';

export default function Thunderstorm() {
  return (
    <Lottie animationData={thundestormImage} loop={true} />
  )
}
