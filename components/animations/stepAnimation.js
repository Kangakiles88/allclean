import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "/public/stepAnimation";

export default function StepAnimation() {
  return <Lottie loop animationData={lottieJson} play />;
}
