// imports Game and currentGameScore
import { Game } from "./game.js";
import { currentGameScore } from "./ball.js";

export let output = document.getElementById("output");

let startGame = document.getElementById("startGame");
export let goLeft = document.getElementById("goLeft");
export let goRight = document.getElementById("goRight");

let instructions = document.getElementById("instructions");
export let checkScores = document.getElementById("checkScores");
export let saveScore = document.getElementById("saveScore");
export let username = document.getElementById("username");

let restart = document.getElementById("restart");
export let canvas = document.getElementById("canvas");
// gives context of the canvas
let context = canvas.getContext("2d");

// changes the width of the window for the game
// based on how big the user window really is
let windowWidth = window.innerWidth - 20;
let windowHeight = window.innerHeight;
if (window.innerWidth > 635) {
  windowWidth = window.innerWidth / 2;
} else if (window.innerWidth <= 635) {
  windowWidth = window.innerWidth - 20;
}

// assigns the size of the canvas to the windowWidth and windowHeight variables.
canvas.width = windowWidth;
canvas.height = windowWidth;
const GAME_WIDTH = windowWidth;
const GAME_HEIGHT = windowWidth;

// creates a new Game instance using the GAME_WIDTH AND GAME_HEIGHT
let game = new Game(GAME_WIDTH, GAME_HEIGHT);

// starts the game by calling the start method on the new game instance
// and requesting the animation frame from the window.
let gameStarter = () => {
  restart.classList.remove("hidden");
  game.start();
  instructions.classList = "hidden";
  startGame.classList = "hidden";
  checkScores.classList = "hidden";
  window.requestAnimationFrame(gameLoop);
};

// the basic game loop for the game,
//  calls the game update and draw methods using the context and delta time
let gameLoop = (timeStamp) => {
  let startTime = timeStamp;
  let deltaTime = timeStamp - startTime;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(context);
  window.requestAnimationFrame(gameLoop);
};

// creates a h2 element to show the user their score when called.
export let showScore = (score) => {
  let h2 = document.createElement("h2");
  let scoreName = document.createTextNode(score);
  h2.append(scoreName);
  output.append(h2);
};

// sends the current(just played) game session to my REST API
export let sendGameSession = async (score) => {
  let gameSession = {
    username: username.value,
    game: "speedBall",
    stringScore: "numScore",
    numScore: currentGameScore,
  };

  if (currentGameScore != undefined && username.value != "") {
    try {
      await fetch("https://resting-node.herokuapp.com/gameSessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameSession),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
      username.value = "";
    } catch (error) {
      console.log("session could not be saved.");
    }
  } else {
    console.log("No game played yet or username not entered");
  }
};

// click event listeners for starting the game and saving the session.
startGame.addEventListener("click", gameStarter);
saveScore.addEventListener("click", sendGameSession);
