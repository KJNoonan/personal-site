import React, { useRef, useLayoutEffect } from "react";
import { drawMountain, spawnMeteor } from "./canvasMountainUtils.js";

const draw = (ctx, width, height) => {
  drawMountain(ctx, width, height);
};

const WrappedCanvas = ({ width, height }) => {
  const canvas = useRef(null);

  const onClickSpawnMeteor = event => {
    console.log("clicked");
    const context = canvas.current.getContext("2d");
    const width = canvas.current.width;
    const height = canvas.current.height;

    console.log(event.pageX, event.pageY);
    spawnMeteor(context, event.pageX, event.pageY, width, height)();
  };

  useLayoutEffect(() => {
    const context = canvas.current.getContext("2d");
    const width = canvas.current.width;
    const height = canvas.current.height;
    draw(context, width, height);
    window.addEventListener("click", onClickSpawnMeteor);
  });

  return <canvas ref={canvas} width={width} height={height} />;
};

export default WrappedCanvas;
