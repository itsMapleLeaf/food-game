class Player {
  sprite = new PIXI.Graphics()

  private xvel = 0
  private yvel = 0
  private gravity = 0.5
  private size = 64
  private speed = 10

  movingLeft = false
  movingRight = false

  constructor(private x: number, private y: number) {
    this.sprite.beginFill(0xffffff)
    this.sprite.drawCircle(0, 0, this.size / 2)
    this.sprite.endFill()
  }

  update(dt: number) {
    let movement = 0
    if (this.movingLeft) movement = -1
    if (this.movingRight) movement = 1
    this.xvel = util.lerp(this.xvel, this.speed * movement, dt * 0.1)

    // this.yvel += this.gravity * dt

    this.x += this.xvel * dt
    this.y += this.yvel * dt

    this.sprite.x = this.x
    this.sprite.y = this.y
  }
}
