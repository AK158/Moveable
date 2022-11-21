import Moveable from "react-moveable";
import { ref } from "framework-utils";
import { Frame } from "scenejs";
import React from "react";
import { Modal } from "antd";

export default class TestRectangle extends React.Component {
    frame = new Frame({
        width: "250px",
        height: "200px",

        left: "20px",
        top: "200px",
        transform: {
            rotate: "0deg",
            scaleX: 1,
            scaleY: 1,
            matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }
    });
    state = {
        target: null,
        container: null,
        scalable: false,
        resizable: false,
        warpable: true
    };



    componentDidMount() {
        this.setState({
            target: document.querySelector(".moveable")
        });
        window.addEventListener("resize", this.onWindowReisze);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.onWindowReisze);
    }
    onWindowReisze = () => {
        this.Moveable.updateRect();
    };
    // clickScalable = () => {
    //     this.setState({
    //         scalable: true,
    //         resizable: false,
    //         warpable: false
    //     });
    // };
    // clickResizable = () => {
    //     this.setState({
    //         scalable: false,
    //         resizable: true,
    //         warpable: false
    //     });
    // };


    clickWarpable = () => {
        this.setState({
            scalable: false,
            resizable: false,
            warpable: true
        });
    };

    setTransform(target) {
        target.style.cssText = this.frame.toCSS();
    }
    setLabel(clientX, clientY, text) {

    }
    onPinch = ({ clientX, clientY }) => {
        setTimeout(() => {
            this.setLabel(
                clientX,
                clientY,
                `X: ${this.frame.get("left")}
    <br/>Y: ${this.frame.get("top")}
    <br/>W: ${this.frame.get("width")}
    <br/>H: ${this.frame.get("height")}
    <br/>S: ${this.frame.get("transform", "scaleX").toFixed(1)}, ${this.frame
                    .get("transform", "scaleY")
                    .toFixed(1)}
    <br/>R: ${parseFloat(this.frame.get("transform", "rotate")).toFixed(1)}deg
    `
            );
        });
    };

    onScale = ({ target, delta, clientX, clientY, isPinch }) => {
        const scaleX = this.frame.get("transform", "scaleX") * delta[0];
        const scaleY = this.frame.get("transform", "scaleY") * delta[1];
        this.frame.set("transform", "scaleX", scaleX);
        this.frame.set("transform", "scaleY", scaleY);
        this.setTransform(target);
        if (!isPinch) {
            this.setLabel(
                clientX,
                clientY,
                `S: ${scaleX.toFixed(2)}, ${scaleY.toFixed(2)}`
            );
        }
    };

    onResize = ({ target, clientX, clientY, width, height, isPinch }) => {

        this.frame.set("width", `${width}px`);
        this.frame.set("height", `${height}px`);
        this.setTransform(target);
        if (!isPinch) {
            this.setLabel(clientX, clientY, `W: ${width}px<br/>H: ${height}px`);
        }
    };
    onWarp = ({ target, clientX, clientY, delta, multiply }) => {


        // var pos1 = this.moveable.moveable.getRect().pos1;
        // var pos2 = this.moveable.moveable.getRect().pos2;
        // var pos3 = this.moveable.moveable.getRect().pos3;
        // var pos4 = this.moveable.moveable.getRect().pos4;
        // console.log(pos1, pos2, pos3, pos4)
        // // console.log("<><><><><><><>", this.moveable.moveable)
        // if (document.getElementById('imgDiv').getBoundingClientRect().height < clientY) {
        //     return
        // }
        // if (clientX < 0 || clientY < 0 || pos1 < 0 || pos2 < 0 || pos3 < 0 || pos4 < 0) {
        //     return
        // }
        // if (clientX > 800 || clientY > 800) {
        //     return
        // }
        this.frame.set(
            "transform",
            "matrix3d",
            multiply(this.frame.get("transform", "matrix3d"), delta)
        );
        this.setTransform(target);
        this.setLabel(clientX, clientY, `X: ${clientX}px<br/>Y: ${clientY}px`);
    };
    onEnd = (ev) => {

        this.label.style.display = "none";
        // console.log("pos1:", ev.moveable.getRect().pos1)
        // console.log("pos2:", ev.moveable.getRect().pos2)
        // console.log("pos3:", ev.moveable.getRect().pos3)
        // console.log("pos4:", ev.moveable.getRect().pos4)




    };
    handlePrint = () => {
        const moveable = new Moveable(document.body);
        moveable.bounds = { left: 0, right: 1000, top: 0, bottom: 1000 };
        const rectInfo = moveable.getRect();
        console.log(rectInfo)

    }

    render() {
        const { scalable, warpable, resizable, target } = this.state;
        return (
            <div>
                asdasd
                <div style={{ position: "sticky", }} className="page main">
                    <div>
                        <img
                            id="imgDiv"
                            style={{ pointerEvents: "none", width: "600px" }}
                            src="https://i.ytimg.com/vi/8WGdCsQ0G3I/maxresdefault.jpg" >
                        </img>
                    </div>
                    <div style={{ textAlign: "center" }} >
                        <Moveable
                            padding={{ "left": 0, "top": 0, "right": 0, "bottom": 0 }}
                            style={{ zIndex: "2", position: "absolute", left: "200px", marginTop: "200px" }}
                            ref={ref(this, "moveable")}
                            target={target}
                            container={document.body}
                            draggable={false}
                            origin={false}
                            resizable={resizable}
                            warpable={warpable}
                            rotatable={false}
                            pinchable={true}
                            roundRelative={true}
                            originDraggable={true}
                            throttleDrag={0}
                            edge={false}
                            zoom={1}

                            onResize={this.onResize}
                            onScale={this.onScale}
                            onWarp={this.onWarp}
                            onPinch={this.onPinch}

                            onDragEnd={this.onEnd}
                            onScaleEnd={this.onEnd}
                            onResizeEnd={this.onEnd}
                            onWarpEnd={this.onEnd}
                            onRotateEnd={this.onEnd}
                            onPinchEnd={this.onEnd}
                        />
                    </div>
                    <div style={{ width: "100%" }} className="container">
                        <div className="moveable">

                        </div>

                    </div>
                    <div className="label" ref={ref(this, "label")} />
                </div>
            </div>

        );
    }
}