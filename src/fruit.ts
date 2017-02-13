class Fruit {
  sprite = new PIXI.Sprite(PIXI.loader.resources['apple'].texture)
  xvel = 0
  yvel = 0
  gravity = 0.5
  radius = 45

  constructor() {
    this.sprite.position.set(util.randomRange(50, 750), 100)
    this.sprite.anchor.set(0.5, 0.5)
    this.xvel = util.randomRange(5, 10) * util.randomSign()
  }

  update(dt: number) {
    this.yvel += this.gravity * dt
    this.sprite.x += this.xvel * dt
    this.sprite.y += this.yvel * dt
    this.sprite.rotation += this.xvel / 100 * dt
  }

  bounceOffEdges(viewWidth: number, viewHeight: number) {
    if (this.sprite.x - this.radius <= 0) {
      this.sprite.x = 0 + this.radius
      this.xvel = Math.abs(this.xvel)
    }
    if (this.sprite.x + this.radius >= viewWidth) {
      this.sprite.x = viewWidth - this.radius
      this.xvel = -Math.abs(this.xvel)
    }
    if (this.sprite.y + this.radius >= viewHeight) {
      this.sprite.y = viewHeight - this.radius
      this.yvel = -util.randomRange(10, 25)
    }
  }
}
