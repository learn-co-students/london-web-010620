class Sprite {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
  }

  render() {
    Game.renderSprite(this.sprite, this.x, this.y);
  }
}

class Player extends Sprite {
  constructor(x, y) {
    super(x, y, "player.png");
    this.score = 0;
  }

  move = (x, y) => {
    this.x += x;
    this.y += y;
  };

  moveUp = () => {
    console.log(this);
    this.move(0, -1);
  };

  static all() {
    return [];
  }

  render() {
    this.move(1, 10);
    super.render();
  }
}

class Enemy extends Sprite {
  constructor(x, y) {
    super(x, y, "enemy.png");
  }
}

const player1 = new Player(500, 1000);
console.log(player1.move(10, 100));
