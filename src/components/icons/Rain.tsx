import React from "react";
import rainImage from "./sunny.json";
import Lottie from "lottie-react";

export default function Rain() {
  return <Lottie animationData={rainImage} loop={true} />;
}
