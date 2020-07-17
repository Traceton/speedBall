import { Paddle } from "./paddle.js";
import { InputHandler } from "./input.js";
import { Ball } from "./ball.js";
export class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.gameObjects = [this.paddle, this.ball];

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime));
  }

  draw(context) {
    this.gameObjects.forEach((object) => object.draw(context));
  }
}
