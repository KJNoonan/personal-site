import {
  appBackgroundColorShade,
  appBackgroundColorHighlight
} from "../css/constants.scss";

export const drawMountain = (ctx, width, height) => {
  ctx.beginPath();
  //draw fill
  ctx.moveTo(width / 2, height / 3);
  ctx.lineTo(width / 10, height);
  ctx.lineTo((width * 9) / 10, height);
  ctx.fillStyle = appBackgroundColorShade;
  ctx.fill();
  ctx.closePath();

  //draw highlights
  ctx.beginPath();
  ctx.lineWidth = 15;
  ctx.moveTo(width / 2, height / 3);
  ctx.lineTo(width / 10, height);
  ctx.moveTo(width / 2, height / 3);
  ctx.lineTo((width * 9) / 10, height);
  ctx.strokeStyle = appBackgroundColorHighlight;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.closePath();
};
