import * as game from './game'
import {images} from './resources'
import * as util from './util'

function getRandomFruit() {
  return util.randomItem([
    images['apple'],
    images['banana'],
    images['cake'],
    images['cherry'],
    images['grape'],
    images['jello'],
    images['lemon'],
    images['orange'],
    images['pear'],
    images['tomato'],
  ])
}

export default class Fruit {
  image = getRandomFruit()
  width = this.image.width
  height = this.image.height
  x = util.randomRange(0, game.VIEW_WIDTH - this.width)
  y = util.randomRange(0, game.VIEW_HEIGHT - this.height)
  xvel = 0
  yvel = 0
  isGood = false

  constructor(size: number, speed: number) {
    this.width *= size
    this.height *= size
    this.xvel = speed * util.randomSign()
    this.yvel = speed * util.randomSign()
  }

  update(dt: number) {
    this.x += this.xvel * dt
    this.y += this.yvel * dt

    if (this.xvel < 0 && this.x < 0) {
      this.xvel = Math.abs(this.xvel) * 1
    }
    if (this.xvel > 0 && this.x + this.width > game.VIEW_WIDTH) {
      this.xvel = Math.abs(this.xvel) * -1
    }
    if (this.yvel < 0 && this.y < 0) {
      this.yvel = Math.abs(this.yvel) * 1
    }
    if (this.yvel > 0 && this.y + this.width > game.VIEW_HEIGHT) {
      this.yvel = Math.abs(this.yvel) * -1
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}
