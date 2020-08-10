// exports the paddle class to be instanciated upon.
export class Paddle {
  // constructor for basic game/canvas dimensions.
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = this.gameWidth / 4;
    this.height = 20;

    // sets the starting position for the paddle(centered)
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10,
    };
    // sets the speed and max speed to be switched between depending on user input.
    this.speed = 0;
    this.maxSpeed = 12;
  }

  // different methods to make the paddle move left or right, change speeds, and stop.
  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  moveRight() {
    this.speed = this.maxSpeed;
  }
  maxSpeedUp() {
    this.maxSpeed++;
  }
  maxSpeedDown() {
    this.maxSpeed--;
  }
  stop() {
    this.speed = 0;
  }

  // draws the paddle when method is called upon, based on the current method being called above.
  draw(context) {
    context.fillStyle = "blue";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // updates the paddles position based upon the speed from methods above.
  update(deltaTime) {
    this.position.x += this.speed;
  }
}
