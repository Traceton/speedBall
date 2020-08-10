// imports goLeft or goRight buttons to be used with mobile devices.
import { goLeft, goRight } from "./main.js";

// exports input handler class so that a instance of it can be called on.
// listens to the users input and moves the paddle accordingly.
export class InputHandler {
  // takes in a paddle instance, so the move left or move right methods can be called on it.

  constructor(paddle) {
    // touch event listeners to call the move left or move right methods on paddle.
    goLeft.addEventListener("touchstart", function () {
      paddle.moveLeft();
    });
    goRight.addEventListener("touchstart", function () {
      paddle.moveRight();
    });
    goLeft.addEventListener("touchend", function () {
      paddle.stop();
    });
    goRight.addEventListener("touchend", function () {
      paddle.stop();
    });

    // listens for keydown events and calls the move left or move right paddle methods accordingly.
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 65:
          paddle.moveLeft();
          break;
        case 68:
          paddle.moveRight();
          break;
        case 87:
          paddle.maxSpeedUp();
          break;
        case 83:
          paddle.maxSpeedDown();
          break;
      }
    });

    // listens for keyup events to stop the paddle.
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 65:
          if (paddle.speed <= 0) paddle.stop();
          break;
        case 68:
          if (paddle.speed >= 0) paddle.stop();
          break;
      }
    });
  }
}
