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
  public blinking = false
  public image = getRandomFruit()

  private width = this.image.width
  private height = this.image.height
  private x = randomRange(0, game.viewWidth - this.width)
  private y = randomRange(0, game.viewHeight - this.height)
  private xvel = 0
  private yvel = 0
  private blinkTime = 0

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

  updateBlink(dt: number) {
    this.blinkTime += dt
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.blinking && Math.floor(this.blinkTime * 10) % 2 === 0) return
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  containsPoint(x: number, y: number) {
    return this.x < x && x < this.x + this.width
        && this.y < y && y < this.y + this.height
  }
}
