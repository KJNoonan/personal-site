import React, { useRef, useLayoutEffect } from "react";
import { drawMountain } from "./canvasMountainUtils.js";

const draw = (ctx, width, height) => {
  drawMountain(ctx, width, height);
};

const WrappedCanvas = ({ width, height }) => {
  const canvas = useRef(null);

  useLayoutEffect(() => {
    const context = canvas.current.getContext("2d");
    const width = canvas.current.width;
    const height = canvas.current.height;
    console.log(context, width, height);
    draw(context, width, height);
  });

  return <canvas ref={canvas} width={width} height={height} />;
};

export default WrappedCanvas;
