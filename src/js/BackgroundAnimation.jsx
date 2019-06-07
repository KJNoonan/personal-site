import React, { useRef, useLayoutEffect } from "react";
import styles from "./BackgroundAnimation.module.scss";
import { AutoSizer } from "react-virtualized";

const getBouncingCircleUpdates = ctx => {
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

const draw = ctx => {
  const bouncingCirclesUpdateFunctions = [];
  for (let index = 0; index <= 10; index++) {
    bouncingCirclesUpdateFunctions.push(getBouncingCircleUpdates(ctx));
  }

  const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    bouncingCirclesUpdateFunctions.map(func => func());
  };

  animate();
};

const BackgroundAnimation = () => {
  const canvas = useRef(null);

  useLayoutEffect(() => {
    const context = canvas.current.getContext("2d");
    draw(context);
  });

  return (
    <div className={styles["background-animation"]}>
      <AutoSizer>
        {({ height, width }) => (
          <canvas ref={canvas} width={width} height={height} />
        )}
      </AutoSizer>
    </div>
  );
};
export default BackgroundAnimation;
