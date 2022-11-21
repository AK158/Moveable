import React, { useRef, useState, useEffect } from 'react';
import Moveable from "react-moveable";
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import './index.css'
import testIMG from "./testIMG.png"
import MoveTest from './MoveTest';
export default function MotionDetection(props) {

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
        console.log("event ", event.target.clientHeight)
        const imageHeight = event.target.clientHeight;
        const imageWidth = event.target.clientWidth;
        setMaxWidth(imageWidth)
        setMaxHeight(imageHeight)
        console.log(event.target.clientHeight)
        console.log(event.target.clientWidth)
    }
    const getPosition = () => {
        console.log(coordinate)
    };



    return (
        <Modal
            title="asdad" width={maxWidth + 50} style={{ minWidth: maxWidth + 50 }} open={props.motionDetection} >
            <MoveTest handleImageLoad={handleImageLoad} />
        </Modal>
    )
}