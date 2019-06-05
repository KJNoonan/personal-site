import React from "react";
import styles from "./BackgroundAnimation.module.scss";

class BackgroundAnimation extends React.PureComponent {
  componentDidMount() {
    const canvas = this.refs.canvas;
    //TODO make a more dynamic set
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    /** @type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext("2d");
    ctx.fillRect(100, 100, 100, 100);
    ctx.beginPath();
  }
  render() {
    return (
      <div className={styles["background-animation"]}>
        <canvas ref="canvas" />
      </div>
    );
  }
}

export default BackgroundAnimation;
