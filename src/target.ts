import * as pixi from 'pixi.js'
import * as game from './game'
import * as util from './util'

export default class Target {
  image = util.randomItem(game.FOOD_IMAGES)
  sprite = pixi.Sprite.fromImage(this.image)

  x = util.randomRange(0, game.VIEW_WIDTH)
  y = util.randomRange(0, game.VIEW_HEIGHT)
  xvel = 8 * util.randomSign()
  yvel = 8 * util.randomSign()

  constructor() {
    this.sprite.anchor.set(0.5, 0.5)
    this.sprite.scale.set(1.2)
    this.update(0)
  }

  update(dt: number) {
    if (this.xvel < 0 && this.x - this.sprite.width / 2 < 0) {
      this.xvel = Math.abs(this.xvel) * 1
    }
    if (this.xvel > 0 && this.x + this.sprite.width / 2 > game.VIEW_WIDTH) {
      this.xvel = Math.abs(this.xvel) * -1
    }
    if (this.yvel < 0 && this.y - this.sprite.width / 2 < 0) {
      this.yvel = Math.abs(this.yvel) * 1
    }
    if (this.yvel > 0 && this.y + this.sprite.width / 2 > game.VIEW_HEIGHT) {
      this.yvel = Math.abs(this.yvel) * -1
    }
    this.x += this.xvel * dt
    this.y += this.yvel * dt
    this.sprite.position.set(this.x, this.y)
  }
}
