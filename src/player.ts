class Player {
  sprite = new PIXI.Graphics()
  movingLeft = false
  movingRight = false

  private speed = 10

  constructor(x: number, y: number) {
    this.sprite.beginFill(0xffffff)
    this.sprite.drawCircle(0, 0, 50)
    this.sprite.endFill()

    this.sprite.x = x
    this.sprite.y = y
  }

  update(dt: number) {
    if (this.movingLeft) this.sprite.x -= this.speed * dt
    if (this.movingRight) this.sprite.x += this.speed * dt
  }
}
