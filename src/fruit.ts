import * as game from './game'
import {images} from './resources'
import {randomItem, randomRange, randomSign} from './util/random'

function getRandomFruit() {
  return randomItem([
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

export class Fruit {
  image = getRandomFruit()
  width = this.image.width
  height = this.image.height
  x = randomRange(0, game.viewWidth - this.width)
  y = randomRange(0, game.viewHeight - this.height)
  xvel = 0
  yvel = 0
  isGood = false

  constructor(size: number, speed: number) {
    this.width *= size
    this.height *= size
    this.xvel = speed * randomSign()
    this.yvel = speed * randomSign()
  }

  update(dt: number) {
    this.x += this.xvel * dt
    this.y += this.yvel * dt

    if (this.xvel < 0 && this.x < 0) {
      this.xvel = Math.abs(this.xvel) * 1
    }
    if (this.xvel > 0 && this.x + this.width > game.viewWidth) {
      this.xvel = Math.abs(this.xvel) * -1
    }
    if (this.yvel < 0 && this.y < 0) {
      this.yvel = Math.abs(this.yvel) * 1
    }
    if (this.yvel > 0 && this.y + this.width > game.viewHeight) {
      this.yvel = Math.abs(this.yvel) * -1
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}
