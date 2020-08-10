// imports the paddle, inputHandler, and ball classes.
import { Paddle } from "./paddle.js";
import { InputHandler } from "./input.js";
import { Ball } from "./ball.js";

// Game constructor to control all aspects of the game itself.
export class Game {
  // constructs the gameWidth and gameHeight
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  // calls new instances of the paddle and ball.
  // creates game object array to be looped through
  // sends the Input handler class this.paddle
  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.gameObjects = [this.paddle, this.ball];

    new InputHandler(this.paddle);
  }

  // calls the update method for each game object
  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime));
  }

  // calls the draw method for each game object giving them context
  draw(context) {
    this.gameObjects.forEach((object) => object.draw(context));
  }
}
