import React, { useRef, useState } from "react";

// import { useGesture } from "@use-gesture/react";

import ReactPlayer from "react-player";
import video from "../../assets/Intro.mp4";

const VideoPlayer = () => {
  // const videoRef = useRef(null);

  // const [doubleScreenCount, setDoubleScreenCount] = useState(0);

  // const handleScreenHold = (progress) => {
  //   if (doubleScreenCount === 2) {
  //     const currentTime = videoRef.current.getCurrentTime();
  //     const changement = currentTime + progress;
  //     videoRef.current.seekTo(changement);
  //     // console.log(`i am active ${currentTime} now changed by ${changement}`);
  //   }
  // };

  // const handleTouchStart = (ev) => {
  //   // ev.stopImmediatePropagation();
  //   let screenx = ev.changedTouches[0]["screenX"];

  //   let MidWidth = videoRef.current.getInternalPlayer().videoWidth / 2; //videoRef.current.offsetWidth / 2;

  //   if (screenx > MidWidth) {
  //     setDoubleScreenCount((doubleScreenCount) => doubleScreenCount + 1);

  //     handleScreenHold(0);

  //     setTimeout(() => {
  //       setDoubleScreenCount(0);
  //     }, 3000);

  //     console.log(
  //       `${screenx} Right Side ${MidWidth}, now u clicked me by ${doubleScreenCount}`
  //     );
  //   } else {
  //     setDoubleScreenCount((doubleScreenCount) => doubleScreenCount + 1);

  //     handleScreenHold(-5);

  //     setTimeout(() => {
  //       setDoubleScreenCount(0);
  //     }, 3000);

  //     // console.log(
  //     //   `${screenx} Left Side ${MidWidth}, now u clicked me by ${doubleScreenCount}`
  //     // );
  //   }
  // };

  return (
    <div>
      <ReactPlayer url={video} controls width={"90%"} height={"90%"} />
    </div>
  );
};

export default VideoPlayer;
