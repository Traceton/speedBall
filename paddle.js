export class Paddle {
  constructor(Game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 150;
    this.height = 20;

    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10,
    };

    this.speed = 0;

    this.maxSpeed = 6;
  }
  draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = `#ff8080`;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {}
}
