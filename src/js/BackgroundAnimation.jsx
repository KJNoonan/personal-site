import React from "react";
import styles from "./BackgroundAnimation.module.scss";

class BackgroundAnimation extends React.PureComponent {
  componentDidMount() {
    const canvas = this.refs.canvas;
    //TODO make a more dynamic set react-virtualized may be a good idea
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    /** @type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext("2d");
    //draw a line
    /*ctx.beginPath();
    ctx.moveTo(50, 300);
    ctx.lineTo(300, 100);
    ctx.lineTo(200, 400);
    ctx.strokeStyle = "#Fa34A3";
    ctx.fillStyle = "rgb(255, 0, 0, 0.1)";
    ctx.stroke();
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2, false);
      ctx.strokeStyle = "blue";
      ctx.stroke();
    }*/
    const getBouncingCircleUpdates = () => {
      let x = Math.random() * window.innerWidth;
      let dx = (Math.random() - -0.5) * 10;
      let y = Math.random() * window.innerHeight;
      let dy = (Math.random() - -0.5) * 10;
      const radius = (Math.random() - -0.5) * 10;
      return () => {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = "blue";
        ctx.stroke();
        if (x + radius > window.innerWidth || x - radius < 0) {
          dx = -dx;
        }
        x += dx;

        if (y + radius > window.innerHeight || y - radius < 0) {
          dy = -dy;
        }
        y += dy;
      };
    };

    const bouncingCirclesUpdateFunctions = [];
    for (let index = 0; index <= 10; index++) {
      bouncingCirclesUpdateFunctions.push(getBouncingCircleUpdates());
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      bouncingCirclesUpdateFunctions.map(func => func());
    };

    animate();
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
