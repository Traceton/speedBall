import { Game } from "./game.js";
import { Paddle } from "./paddle.js";
import { InputHandler } from "./input.js";
import { currentGameScore } from "./ball.js";
export let output = document.getElementById("output");
let startGame = document.getElementById("startGame");
export let goLeft = document.getElementById("goLeft");
export let goRight = document.getElementById("goRight");
let instructions = document.getElementById("instructions");

let checkScores = document.getElementById("checkScores");
let saveScore = document.getElementById("saveScore");
let username = document.getElementById("username");

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let windowWidth = window.innerWidth - 20;
let windowHeight = window.innerHeight;

if (window.innerWidth > 635) {
  windowWidth = window.innerWidth / 2;
} else if (window.innerWidth <= 635) {
  windowWidth = window.innerWidth - 20;
}

// console.log(windowWidth);
// console.log(windowHeight);

canvas.width = windowWidth;
canvas.height = windowWidth;
const GAME_WIDTH = windowWidth;
const GAME_HEIGHT = windowWidth;

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

let getGameSessions = () => {
  console.log("checking game sessions...");
};

export let sendGameSession = async (score) => {
  let gameSession = {
    username: username.value,
    game: "speedBall",
    score: currentGameScore,
  };
  console.log(JSON.stringify(gameSession));
  if (currentGameScore != undefined && username.value != "") {
    // console.log(`sending game session -> ${gameSession}`);
    try {
      await fetch("https://gamescoreserver.herokuapp.com/gameSessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameSession),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    } catch (error) {
      console.log("session could not be saved.");
    }
  } else {
    console.log("No game played yet or username not entered");
  }
};

checkScores.addEventListener("click", getGameSessions);
saveScore.addEventListener("click", sendGameSession);
