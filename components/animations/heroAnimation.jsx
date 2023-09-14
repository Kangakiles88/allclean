import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "/public/heroAnimation.json";

export default function HeroAnimation() {
  return <Lottie loop animationData={lottieJson} play />;
}
