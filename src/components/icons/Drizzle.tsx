import React from 'react'
import drizzleImage from "./drizzle.json"
import Lottie from 'lottie-react'

export default function Drizzle() {
  return (
    <Lottie animationData={drizzleImage} loop={true} />
  )
}
