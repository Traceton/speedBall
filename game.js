import { Paddle } from "./paddle.js";
import { InputHandler } from "./input.js";

export class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.gameObjects = [this.paddle];

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime));
  }

  draw(context) {
    this.gameObjects.forEach((object) => object.draw(context));
  }
}
