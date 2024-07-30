import React from 'react'
import sunnyImage from "./sunny.json"
import Lottie from 'lottie-react'

export default function Clear() {
  return (
    <Lottie animationData={sunnyImage} loop={true} />
  )
}
