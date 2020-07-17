export class Ball {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 20;
    this.height = 20;

    this.position = {
      x: 10,
      y: 10,
    };

    this.speed = 10;
  }

  draw(context) {
    context.fillStyle = "#0ff";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    this.position.x += this.speed;
    this.position.y += this.speed;

    // gotta figure out edge detection still.
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = 0;
    } else if (this.position.y + this.height > this.gameHeight) {
      this.position.y = 0;
    }
  }
}
