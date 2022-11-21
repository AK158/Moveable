
import React, { useRef, useState, useEffect } from 'react';
import Moveable from "react-moveable";
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import './index.css'
import testIMG from "./testIMG.png"

export default function MoveTest(props) {
    const [target, setTarget] = useState();
    const [frame, setFrame] = useState({
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    });
    const [maxHeight, setMaxHeight] = useState(100)
    const [maxWidth, setMaxWidth] = useState(100)
    const boxRef = useRef();
    const [coordinate, setCoordinate] = useState({
        pos1: [10, 10],
        pos2: [60, 10],
        pos3: [10, 60],
        pos4: [60, 60],

    })


    useEffect(() => {
        console.log("renderlegcjadasdnasjd")
        setTarget(document.querySelector(".target"));
        getPosition();
    }, []);

    const handleImageLoad = (event) => {
        // Do whatever you want here
        props.handleImageLoad(event)
        const imageHeight = event.target.clientHeight;
        const imageWidth = event.target.clientWidth;
        setMaxWidth(imageWidth)
        setMaxHeight(imageHeight)
        console.log(event.target.clientHeight)
        console.log(event.target.clientWidth)
    }

    const onEnd = (ev) => {

        console.log("pos1:", ev.moveable.getRect().pos1)
        console.log("pos2:", ev.moveable.getRect().pos2)
        console.log("pos3:", ev.moveable.getRect().pos3)
        console.log("pos4:", ev.moveable.getRect().pos4)
        setCoordinate({
            pos1: [parseInt(ev.moveable.getRect().pos1[0]), parseInt(ev.moveable.getRect().pos1[1])],
            pos2: [parseInt(ev.moveable.getRect().pos2[0]), parseInt(ev.moveable.getRect().pos2[1])],
            pos3: [parseInt(ev.moveable.getRect().pos3[0]), parseInt(ev.moveable.getRect().pos3[1])],
            pos4: [parseInt(ev.moveable.getRect().pos4[0]), parseInt(ev.moveable.getRect().pos4[1])],

        })
    }
    const getPosition = () => {
        console.log(coordinate)
    };


    return (
        <div className="container">
            <div className="target"></div>
            <img
                className="box"
                ref={boxRef}
                id="imgDiv"
                alt='detectImage'
                onLoad={handleImageLoad}
                style={{ pointerEvents: "none", width: window.screen.width - (window.screen.width / 2) }}
                src={"https://www.earthcam.com/cams/includes/image.php?logo=0&playbutton=0&s=1&img=qNvv42vqjNEKe80k0mCm0w%3D%3D"}>
            </img>
            <Moveable
                target={target}
                className={document.querySelector(".container")}
                warpable={true}
                renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
                edge={false}
                id="img1"
                key="img1"
                zoom={1}
                origin={false}
                snappable={true}
                container={document.querySelector(".container")}
                snapGap={true}
                onDragEnd={onEnd}
                onScaleEnd={onEnd}
                onResizeEnd={onEnd}
                onWarpEnd={onEnd}
                onRotateEnd={onEnd}
                onPinchEnd={onEnd}
                originDraggable={true}
                elementGuidelines={[".element"]}
                bounds={{ "left": 0.1, "right": maxWidth, "top": 0.1, "bottom": maxHeight }}
                padding={{ "left": 0, "top": 0, "right": 0, "bottom": 0 }}
                onWarpStart={e => {
                    e.set(frame.matrix);
                }}
                onWarp={e => {
                    frame.matrix = e.matrix;
                    e.target.style.transform = `matrix3d(${e.matrix.join(",")})`;
                }}
            />

            <Moveable
                target={target}
                className={document.querySelector(".container")}
                warpable={true}
                renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
                edge={false}
                id="img2"
                key="img2"
                zoom={1}
                origin={false}
                snappable={true}
                container={document.querySelector(".container")}
                snapGap={true}
                onDragEnd={onEnd}
                onScaleEnd={onEnd}
                onResizeEnd={onEnd}
                onWarpEnd={onEnd}
                onRotateEnd={onEnd}
                onPinchEnd={onEnd}
                originDraggable={true}
                elementGuidelines={[".element"]}
                bounds={{ "left": 0.1, "right": maxWidth, "top": 0.1, "bottom": maxHeight }}
                padding={{ "left": 0, "top": 0, "right": 0, "bottom": 0 }}
                onWarpStart={e => {
                    e.set(frame.matrix);
                }}
                onWarp={e => {
                    frame.matrix = e.matrix;
                    e.target.style.transform = `matrix3d(${e.matrix.join(",")})`;
                }}
            />
        </div>
    )
}