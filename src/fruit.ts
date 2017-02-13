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
}
