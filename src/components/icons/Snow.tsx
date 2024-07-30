import React from 'react'
import snowImage from "./snow.json"
import Lottie from 'lottie-react'

export default function Snow() {
  return (
    <Lottie animationData={snowImage} loop={true}></Lottie>
  )
}
