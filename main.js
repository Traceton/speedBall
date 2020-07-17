import * as elements from "./elements.js";

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let init = () => {
  window.requestAnimationFrame(gameLoop);
};

let gameLoop = (timeStamp) => {
  let startTime = timeStamp;
  let deltaTime = timeStamp - startTime;

  //   update();
  //   draw();
  window.requestAnimationFrame(gameLoop);
};

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

window.onload = init;
