import React, { useRef, useLayoutEffect } from "react";
import {
  drawMountain,
  spawnMeteor,
  SIZE_OF_METEOR,
} from "./canvasMountainUtils.js";

const meteors = [];

const draw = (ctx, width, height) => {
  let existingObjects = [...meteors];
  const animate = () => {
    ctx.clearRect(0, 0, width, height);
    drawMountain(ctx, width, height);
    existingObjects = existingObjects.reduce((acc, meteor) => {
      const yPos = meteor();
      if (yPos < height - SIZE_OF_METEOR) {
        acc.push(meteor);
      }
      return acc;
    }, []);
    if (existingObjects.length > 0) {
      requestAnimationFrame(animate);
    }
  };
  animate();
};

let canvas = null;

const onClickSpawnMeteor = (event) => {
  if (canvas) {
    const context = canvas.current.getContext("2d");
    const width = canvas.current.width;
    const height = canvas.current.height;
    const meteor = spawnMeteor(
      context,
      event.pageX,
      event.pageY,
      width,
      height
    );
    meteors.push(meteor);
    //kick off animation
    draw(context, width, height);
  }
};

window.addEventListener("click", onClickSpawnMeteor);

const WrappedCanvas = ({ width, height }) => {
  canvas = useRef(null);

  useLayoutEffect(() => {
    const context = canvas.current.getContext("2d");
    const width = canvas.current.width;
    const height = canvas.current.height;
    draw(context, width, height);
  });

  return <canvas ref={canvas} width={width} height={height} />;
};

export default WrappedCanvas;
