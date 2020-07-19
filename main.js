import { Game } from "./game.js";
import { Paddle } from "./paddle.js";
import { InputHandler } from "./input.js";

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
// NEXT, start game after a username is submited.
game.start();

let init = () => {
  window.requestAnimationFrame(gameLoop);
};

let startTime = 0;
let gameLoop = (timeStamp) => {
  let startTime = timeStamp;
  let deltaTime = timeStamp - startTime;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(context);
  window.requestAnimationFrame(gameLoop);
};

window.onload = init;

export let output = document.getElementById("output");

export let showScore = (score) => {
  let h2 = document.createElement("h2");
  let scoreName = document.createTextNode(score);
  h2.append(scoreName);
  output.append(h2);
};
