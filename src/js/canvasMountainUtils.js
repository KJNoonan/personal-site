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

export const SIZE_OF_METEOR = 5;
const DROP_SPEED = 6;

export const spawnMeteor = (ctx, x, y, width, height) => {
  let spawningX = Math.random() * (width - SIZE_OF_METEOR);
  let spawningY = -1 * SIZE_OF_METEOR;
  const slope = (y - spawningY) / (x - spawningX);
  const yIntercept = -1 * slope * x + y;
  return () => {
    ctx.beginPath();
    ctx.arc(spawningX, spawningY, SIZE_OF_METEOR, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();

    //begin calculations for the next draw
    spawningY = spawningY + DROP_SPEED;
    spawningX = (spawningY - yIntercept) / slope;
    return spawningY;
  };
};
