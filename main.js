import { Game } from "./game.js";
import { Paddle } from "./paddle.js";
import { InputHandler } from "./input.js";

export let output = document.getElementById("output");
let startGame = document.getElementById("startGame");
export let goLeft = document.getElementById("goLeft");
export let goRight = document.getElementById("goRight");
let instructions = document.getElementById("instructions");

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let windowWidth = window.innerWidth - 20;
let windowHeight = window.innerHeight - 400;

console.log(windowWidth);
console.log(windowHeight);

canvas.width = windowWidth;
canvas.height = windowHeight;
const GAME_WIDTH = windowWidth;
const GAME_HEIGHT = windowHeight;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let gameStarter = () => {
  game.start();
  init();
  instructions.classList = "hidden";
};

startGame.addEventListener("click", gameStarter);

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

export let showScore = (score) => {
  let h2 = document.createElement("h2");
  let scoreName = document.createTextNode(score);
  h2.append(scoreName);
  output.append(h2);
};
