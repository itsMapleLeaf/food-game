import {images} from './resources'
import * as util from './util'

export const VIEW_WIDTH = 960
export const VIEW_HEIGHT = 540

function drawOutlinedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number, y: number,
  align = 'center', baseline = 'middle',
) {
  ctx.save()

  ctx.font = '55px Roboto'
  ctx.textAlign = align
  ctx.textBaseline = baseline

  ctx.lineWidth = 5
  ctx.strokeStyle = 'black'
  ctx.strokeText(text, x, y)

  ctx.fillStyle = 'white'
  ctx.fillText(text, x, y)

  ctx.restore()
}

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

class Fruit {
  image = getRandomFruit()
  width = this.image.width
  height = this.image.height
  x = util.randomRange(0, VIEW_WIDTH - this.width)
  y = util.randomRange(0, VIEW_HEIGHT - this.height)
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
    if (this.xvel > 0 && this.x + this.width > VIEW_WIDTH) {
      this.xvel = Math.abs(this.xvel) * -1
    }
    if (this.yvel < 0 && this.y < 0) {
      this.yvel = Math.abs(this.yvel) * 1
    }
    if (this.yvel > 0 && this.y + this.width > VIEW_HEIGHT) {
      this.yvel = Math.abs(this.yvel) * -1
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}

export default class Game {
  fruits = [] as Fruit[]
  fruitTarget: HTMLImageElement
  level = 0

  constructor() {
    this.nextLevel()
  }

  nextLevel() {
    this.level += 1
    this.fruits = []

    for (let i = 0; i < this.level; i++) {
      this.fruits.push(new Fruit(0.8 + 0.8 * (1 / this.level), 100 + this.level * 20))
    }

    this.fruitTarget = util.randomItem(this.fruits).image
    this.fruits
      .filter(fruit => fruit.image === this.fruitTarget)
      .forEach(fruit => fruit.isGood = true)
  }

  update(dt: number) {
    if (dt > 0.5) return
    this.fruits.forEach(fruit => fruit.update(dt))
  }

  draw(ctx: CanvasRenderingContext2D) {
    // background
    ctx.save()
    ctx.scale(VIEW_WIDTH / images['sky'].width, VIEW_HEIGHT / images['sky'].height)
    ctx.drawImage(images['sky'], 0, 0)
    ctx.restore()

    // fruits
    this.fruits.forEach(fruit => fruit.draw(ctx))

    // ui
    drawOutlinedText(ctx, 'Touch:', VIEW_WIDTH / 2, 50, 'right')

    ctx.save()
    ctx.translate(VIEW_WIDTH / 2, 50 - this.fruitTarget.height / 2 + 15)
    ctx.scale(0.8, 0.8)
    ctx.drawImage(this.fruitTarget, 0, 0)
    ctx.restore()
  }

  pointerdown(x: number, y: number) {
    for (const fruit of this.fruits) {
      if (fruit.x < x && x < fruit.x + fruit.width && fruit.y < y && y < fruit.y + fruit.height
      && fruit.isGood) {
        this.nextLevel()
        break
      }
    }
  }
}
