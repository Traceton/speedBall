import { Paddle } from "./paddle.js";
import { output, showScore, sendGameSession } from "./main.js";
export let currentGameScore;
export class Ball {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.size = 20;
    this.game = game;
    this.score = 0;
    this.position = {
      x: 120,
      y: 10,
    };
    setTimeout(() => {
      showScore(`5 SECOND SCORE -> ${this.score}`);
      currentGameScore = this.score;
      // console.log(this.score);
      this.speed.x = 0.3;
      this.speed.y = 0.3;
    }, 5000);

    this.speed = {
      x: 7,
      y: 5,
    };
    this.maxSpeed = 3;
  }

  draw(context) {
    context.fillStyle = "blue";
    context.fillRect(this.position.x, this.position.y, this.size, this.size);
  }

  update(deltaTime) {
    // this.position.x += this.maxSpeed;

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    let bottomOfBall = this.position.y + this.size;
    let topOfPaddle = this.game.paddle.position.y;
    let leftOfPaddle = this.game.paddle.position.x;
    let rightOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

    // making the ball bounce below the paddle on either side of it.
    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x >= leftOfPaddle &&
      this.position.x + this.size <= rightOfPaddle
    ) {
      this.score++;
      // console.log(this.score);
      this.speed.x++;
      this.speed.y++;
      this.speed.y++;
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
