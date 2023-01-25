
import React, { useState, useEffect, lazy, useRef } from 'react';

import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import './index.css'
import CrossLine from './lineCross';
import testRectanlge from "./testRectanlge";
import ReactHlsPlayer from 'react-hls-player/dist';
import testAudio from "./test-music.mp3"
const MotionDetection = lazy(() => import("./motionDetection"))

export default function App() {
  const [motionDetection, setMotionDetection] = useState(false)
  const videoNode = useRef();
  // const canvasRef = useRef();

  // const drawRectangle = () => {
  //   const context = canvasRef.current.getContext("2d");
  //   context.strokeStyle = "white";
  //   context.lineWidth = 2;
  //   context.backgroundColor = "red"
  //   context.strokeRect(50, 30, 110, 90);
  //   context.strokeRect(170, 65, 100, 80);
  // };

  // useEffect(() => {
  //   drawRectangle();
  // }, []);
  useEffect(() => {

  })
  const test = () => {
    const audioContext = new AudioContext();
    const audioSource = audioContext.createBiquadFilter();
    console.log(videoNode)
    // const mediaElementSource = audioContext.createMediaElementSource(videoNode);
    // const filter = audioContext.createBiquadFilter();
    // filter.type = "notch";
    // filter.frequency.value = 2000
    // filter.Q.value = 200;
    // mediaElementSource.connect(filter);
    // filter.connect(audioContext.destination);

    // audioSource.connect(filter);
    // filter.connect(audioContext.destination);
  }
  return (
    <div>
      {/* <ReactHlsPlayer
        src="http://10.21.68.175/videos/21/index.m3u8"
        autoPlay={true}
        controls={true}
        ref={videoNode}
        width="100%"
      />,
      <button
        onClick={test}
      >
        ahsbdahsbdh
      </button> */}
      <testRectanlge />
      <Button onClick={() => {
        setMotionDetection(true)
      }} >
        open Motion Detection
      </Button>
      {/* <NoiseSuppression /> */}
      <MotionDetection motionDetection={motionDetection} />
      {/* <Modal open={true} >
        <canvas
          ref={canvasRef}
          style={{
            width: "800px",
            height: "400px",
            background: "url('https://www.earthcam.com/cams/includes/image.php?logo=0&playbutton=0&s=1&img=qNvv42vqjNEKe80k0mCm0w%3D%3D')",
          }}
        />
      </Modal> */}
      {/* <CrossLine /> */}
    </div>

  )
}









// <div class="container"><div class="target"></div><img class="box" id="imgDiv" alt="detectImage" src="https://nofilmschool.com/sites/default/files/styles/twitter/public/cctv.png?itok=9HFOTw5Y" style="pointer-events: none; width: 1024px;"><div data-styled-id="rCSwd26qe" class="moveable-control-box    [object HTMLDivElement] rCSwd26qe" data-able-snappable="true" data-able-warpable="true" data-able-padding="true" data-able-origindraggable="true" style="position: absolute; display: none; visibility: visible; transform: translate3d(0px, 0px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-line" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-control moveable-direction moveable-nw moveable-warpable" data-rotation="135" data-direction="nw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-n moveable-warpable" data-rotation="0" data-direction="n" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-ne moveable-warpable" data-rotation="45" data-direction="ne" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-w moveable-warpable" data-rotation="90" data-direction="w" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-e moveable-warpable" data-rotation="90" data-direction="e" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-sw moveable-warpable" data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-s moveable-warpable" data-rotation="0" data-direction="s" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-se moveable-warpable" data-rotation="135" data-direction="se" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction  " data-rotation="-1" data-line-key="render-line-0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction  " data-rotation="-1" data-line-key="render-line-1" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction  " data-rotation="-1" data-line-key="render-line-2" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction  " data-rotation="-1" data-line-key="render-line-3" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div></div></div>





// <div class="container"><div class="target"></div><img class="box" id="imgDiv" alt="detectImage" src="https://nofilmschool.com/sites/default/files/styles/twitter/public/cctv.png?itok=9HFOTw5Y" style="pointer-events: none; width: 1024px;"><div data-styled-id="rCSwd26qe" class="moveable-control-box    [object HTMLDivElement] rCSwd26qe" data-able-snappable="true" data-able-warpable="true" data-able-padding="true" data-able-origindraggable="true" style="position: absolute; display: block; visibility: visible; transform: translate3d(10px, 10px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-line" style="transform: translateY(-50%) translate(16.6667px, 0px) rotate(1.5708rad) scaleY(1); width: 50px;"></div><div class="moveable-line" style="transform: translateY(-50%) translate(33.3333px, 0px) rotate(1.5708rad) scaleY(1); width: 50px;"></div><div class="moveable-line" style="transform: translateY(-50%) translate(0px, 16.6667px) rotate(0rad) scaleY(1); width: 50px;"></div><div class="moveable-line" style="transform: translateY(-50%) translate(0px, 33.3333px) rotate(0rad) scaleY(1); width: 50px;"></div><div class="moveable-control moveable-direction moveable-nw moveable-warpable" data-rotation="135" data-direction="nw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-n moveable-warpable" data-rotation="0" data-direction="n" style="transform: translateZ(0px) translate(25px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-ne moveable-warpable" data-rotation="45" data-direction="ne" style="transform: translateZ(0px) translate(50px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-w moveable-warpable" data-rotation="90" data-direction="w" style="transform: translateZ(0px) translate(0px, 25px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-e moveable-warpable" data-rotation="90" data-direction="e" style="transform: translateZ(0px) translate(50px, 25px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-sw moveable-warpable" data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 50px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-s moveable-warpable" data-rotation="0" data-direction="s" style="transform: translateZ(0px) translate(25px, 50px) rotate(0rad) scale(1);"></div><div class="moveable-control moveable-direction moveable-se moveable-warpable" data-rotation="135" data-direction="se" style="transform: translateZ(0px) translate(50px, 50px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction  " data-rotation="-1" data-line-key="render-line-0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 50px;"></div><div class="moveable-line moveable-direction  " data-rotation="-1" data-line-key="render-line-1" data-direction="" style="transform: translateY(-50%) translate(50px, 0px) rotate(1.5708rad) scaleY(1); width: 50px;"></div><div class="moveable-line moveable-direction  " data-rotation="-1" data-line-key="render-line-2" data-direction="" style="transform: translateY(-50%) translate(50px, 50px) rotate(3.14159rad) scaleY(1); width: 50px;"></div><div class="moveable-line moveable-direction  " data-rotation="-1" data-line-key="render-line-3" data-direction="" style="transform: translateY(-50%) translate(0px, 50px) rotate(4.71239rad) scaleY(1); width: 50px;"></div></div></div>
