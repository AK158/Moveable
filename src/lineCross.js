import { Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import img1 from "./Frame1.png"
export default function LineCross() {
    const [position1, setPosition1] = useState({ x: 100, y: 100 });
    const [position2, setPosition2] = useState({ x: 100, y: 0 });
    const [angleDegree, SetAngle] = useState()
    const [leftX, setLeftX] = useState()
    const [TopY, setTopY] = useState()
    const [displayCSS, setDisplayCSS] = useState("none")
    const [selectedIMG, setSelectedIMG] = useState(img1)
    const trackPos = (data, e) => {
        if (e === 1) {
            setPosition1({ x: data.x, y: data.y });
        }
        else {
            setPosition2({ x: data.x, y: data.y });
        }

    };


    useEffect(() => {
        drawLine()
    })



    const drawLine = () => {
        clear()
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = 2
        ctx.fillStyle = 'white';
        var moveX = position1.x
        var moveY = position1.y
        ctx.moveTo(moveX + 10, moveY + 10);
        ctx.lineTo(position2.x + 10, position2.y + 10);
        ctx.strokeStyle = 'yellow';
        ctx.stroke();
        positioningImg()
    }

    const positioningImg = () => {
        var left = (position1.x + position2.x) / 2
        setLeftX(left - 75)
        setTopY((position1.y + position2.y) / 2 - 15)
        var angleRadians = Math.atan2(position2.y - position1.y, position2.x - position1.x);
        console.log("angleRadius", angleRadians)
        var angleDeg = Math.atan2(position2.y - position1.y, position2.x - position1.x) * 180 / Math.PI;
        setDisplayCSS("block")
        SetAngle(parseInt(angleDeg, 10) + 90)
    }

    const clear = () => {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    return (
        <Modal open={true} >
            <div style={{ display: "flex" }} >
                <img className='backgroundimg' style={{ position: "fixed", zIndex: "2", width: "100%" }} src="http://media3.s-nbcnews.com/i/MSNBC/Components/Video/201710/tdy_tren_scary_school_171011.jpg" />

                <canvas id="canvas" style={{ cursor: "crosshair", position: "fixed", zIndex: "12", }} width="1600px" height="1600px"></canvas>
                <div style={{ position: "fixed", zIndex: "2", left: leftX, top: TopY }}>
                    <img style={{ transform: "rotate(" + angleDegree + "deg)", width: "150px", display: displayCSS }} src={selectedIMG} />
                </div>
                <Draggable
                    bounds={".backgroundimg"}
                    position={position1}
                    onDrag={(e, data) => trackPos(data, 1)}>
                    <div
                        style={{ zIndex: "20", backgroundColor: "yellow", borderRadius: "50%", width: "20px", height: "20px", position: "absolute", cursor: "move", color: "black", maxWidth: "20px", margin: "auto" }}
                        className="box1">

                    </div>
                </Draggable>
                <Draggable
                    bounds={".backgroundimg"}
                    position={position2}
                    onDrag={(e, data) => trackPos(data, 2)}>
                    <div style={{ zIndex: "20", backgroundColor: "yellow", borderRadius: "50%", width: "20px", height: "20px", position: "absolute", cursor: "move", color: "black", maxWidth: "20px", margin: "auto" }}
                        className="box2">

                    </div>
                </Draggable>
            </div>
        </Modal>

    );
}