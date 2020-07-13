import * as elements from "./elements.js";

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let x = 0;
let y = 0;

let init = () => {
  window.requestAnimationFrame(gameLoop);
};

let gameLoop = () => {
  update();
  draw();

  window.requestAnimationFrame(gameLoop);
};

let draw = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = `#ff8080`;
  context.fillRect(x, y, 150, 150);
};

let update = () => {
  x += 5;
  y += 7;
};

window.onload = init;
