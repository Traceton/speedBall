import { Paddle } from "./paddle.js";

export class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
  }

  update(deltaTime) {}

  draw(context) {
    this.paddle.draw(context);
  }
}
