
import React, { useRef, useState, useEffect } from 'react';
import Moveable from "react-moveable";
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import './index.css'
import testIMG from "./testIMG.png"
import testVideo from "./testVideo.mp4"

export default function MoveTest(props) {
    const [target, setTarget] = useState();
    const moveableRef = useRef();
    const [frame, setFrame] = useState({
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    });

    const [width, setWidth] = useState()
    const [height, setHeight] = useState()
    const boxRef = useRef();
    const targetRef = useRef();
    // const [coordinate, setCoordinate] = useState({
    //     pos1: [10, 10],
    //     pos2: [60, 10],
    //     pos3: [10, 60],
    //     pos4: [60, 60],
    // })


    useEffect(() => {
        // console.log(document.querySelector(".target"))
        // setTarget(document.querySelector(".target"));
        setWidth(boxRef.current.getBoundingClientRect().width)
        setHeight(boxRef.current.getBoundingClientRect().height)


        setTarget(document.querySelector(".target"))

        function handleResize() {
            console.log(moveableRef.current.moveable)
            moveableRef.current.moveable.updateTarget()
            var allMatrix = moveableRef.current.moveable.state.allMatrix
            var index = 0


            onWarp(moveableRef.current.moveable.props.target, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
            // moveableRef.current.moveable.props.target.style.width = "20%"
            // console.log(moveableRef.current.moveable)
            // console.log(moveableRef.current.moveable.state.allMatrix)
            // console.log(boxRef.current.getBoundingClientRect().width)
            // console.log(boxRef.current.getBoundingClientRect().height)
            console.log(moveableRef.current.moveable.state)
            // // moveableRef.current.moveable.updateTarget()
            // const myDiv = document.getElementById("target");
            // myDiv.style.transform = "translate3d(-1px, 1px, 1vw)";
            setWidth(boxRef.current.getBoundingClientRect().width)
            setHeight(boxRef.current.getBoundingClientRect().height)

        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const onWarp = (target, matrix) => {
        target.style.transform = `matrix3d(${matrix.join(",")})`;
        frame.matrix = matrix;
    }


    return (
        <div style={{ margin: "200px" }} className="container">
            <div
                id="target"
                ref={targetRef}
                className="target">
            </div>
            <video
                ref={boxRef}
                controls
                style={{ width: "100%", height: "100%" }}
                src={testVideo}>
            </video>

            <Moveable
                ref={moveableRef}
                target={target}
                warpable={true}
                container={document.querySelector(".container")}
                useResizeObserver={true}
                renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
                padding={{ "left": 0, "top": 0, "right": 0, "bottom": 0 }}
                edge={false}
                id="img1"
                key="img1"
                zoom={1}
                keepRatio={true}
                origin={false}
                // scalable={true}
                snappable={true}
                bounds={{
                    "left": 0.1, "right": width,
                    "top": 0.1, "bottom": height
                }}
                onWarpStart={e => {
                    e.set(frame.matrix);
                }}
                onWarp={e => {
                    console.log(e)
                    frame.matrix = e.matrix;
                    e.target.style.transform = `matrix3d(${e.matrix.join(",")})`;
                }}


            />
            width:
            {
                width
            }
            height:
            {
                height
            }
        </div>
    )
}





// const onEnd = (ev) => {

//     console.log("pos1:", ev.moveable.getRect().pos1)
//     console.log("pos2:", ev.moveable.getRect().pos2)
//     console.log("pos3:", ev.moveable.getRect().pos3)
//     console.log("pos4:", ev.moveable.getRect().pos4)
//     // setCoordinate({
//     //     pos1: [parseInt(ev.moveable.getRect().pos1[0]), parseInt(ev.moveable.getRect().pos1[1])],
//     //     pos2: [parseInt(ev.moveable.getRect().pos2[0]), parseInt(ev.moveable.getRect().pos2[1])],
//     //     pos3: [parseInt(ev.moveable.getRect().pos3[0]), parseInt(ev.moveable.getRect().pos3[1])],
//     //     pos4: [parseInt(ev.moveable.getRect().pos4[0]), parseInt(ev.moveable.getRect().pos4[1])],
//     // })
// }
