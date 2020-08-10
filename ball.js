// imports from the main js page
import { showScore, canvas, saveScore, username, checkScores } from "./main.js";
// exports the current game score to be sent to the server in main.js
export let currentGameScore;
// exports the ball class to be instanciated later.
export class Ball {
  // constructs many of the basic game dimensions and ball variables
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
    // this timeout deterimines the length of the game,
    // once the time has passed, many elements are hidden from user,
    // shows the user the score, and sets the current game score,
    // and slows the speed of the ball.
    setTimeout(() => {
      canvas.classList = "hidden";
      saveScore.classList.remove("hidden");
      username.classList.remove("hidden");
      checkScores.classList.remove("hidden");
      showScore(`SCORE -> ${this.score}`);
      currentGameScore = this.score;
      this.speed.x = 0.3;
      this.speed.y = 0.3;
    }, 20000);

    // sets the speed of the ball
    this.speed = {
      x: 7,
      y: 5,
    };
  }

  // draw method draws the ball based on the size and position that is currently defined.
  draw(context) {
    context.fillStyle = "blue";
    context.fillRect(this.position.x, this.position.y, this.size, this.size);
  }

  // update method updates the balls position and speed when called.
  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // makes the ball reverse when a boundry is hit
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // defines the bottom of the ball and sides of the paddle.
    let bottomOfBall = this.position.y + this.size;
    let topOfPaddle = this.game.paddle.position.y;
    let leftOfPaddle = this.game.paddle.position.x;
    let rightOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

    // when the ball bounces off the paddle,
    // it adds to the score variable and increases the speed of the ball.
    // also bounces the ball off of the paddle.
    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x >= leftOfPaddle &&
      this.position.x + this.size <= rightOfPaddle
    ) {
      this.score++;

      this.speed.x++;
      this.speed.y++;
      this.speed.y++;
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
