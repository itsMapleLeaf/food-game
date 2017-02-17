import Fruit from './fruit'
import * as game from './game'
import {images} from './resources'
import * as util from './util'

function drawOutlinedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number, y: number,
) {
  ctx.save()

  ctx.lineWidth = 5
  ctx.strokeStyle = 'black'
  ctx.strokeText(text, x, y)

  ctx.fillStyle = 'white'
  ctx.fillText(text, x, y)

  ctx.restore()
}

export default class Gameplay implements game.GameState {
  fruitTarget: HTMLImageElement
  fruits = [] as Fruit[]
  level = 0
  score = 0
  targetBlinkTime = 0

  init() {
    this.nextLevel()
  }

  update(dt: number) {
    if (dt > 0.5) return
    this.fruits.forEach(fruit => fruit.update(dt))
    this.targetBlinkTime -= dt
  }

  pointerdown(x: number, y: number) {
    for (const fruit of this.fruits) {
      if (fruit.x < x && x < fruit.x + fruit.width && fruit.y < y && y < fruit.y + fruit.height
      && fruit.isGood) {
        this.score += 1
        this.nextLevel()
        break
      }
    }
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

    if (this.level === 1) this.targetBlinkTime = 0.8
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.drawBackground(ctx)
    this.fruits.forEach(fruit => fruit.draw(ctx))
    this.drawFruitTarget(ctx)
    this.drawScore(ctx)
  }

  drawBackground(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.scale(game.VIEW_WIDTH / images['sky'].width, game.VIEW_HEIGHT / images['sky'].height)
    ctx.drawImage(images['sky'], 0, 0)
    ctx.restore()
  }

  drawFruitTarget(ctx: CanvasRenderingContext2D) {
    if (this.targetBlinkTime > 0 && Math.sin(this.targetBlinkTime * 20) < 0) return

    ctx.font = '50px Roboto'
    ctx.textAlign = 'right'
    ctx.textBaseline = 'middle'
    drawOutlinedText(ctx, 'Touch', game.VIEW_WIDTH / 2, 50)

    ctx.save()
    ctx.translate(game.VIEW_WIDTH / 2, 50 - this.fruitTarget.height / 2 + 20)
    ctx.scale(0.7, 0.7)
    ctx.drawImage(this.fruitTarget, 0, 0)
    ctx.restore()
  }

  drawScore(ctx: CanvasRenderingContext2D) {
    ctx.font = '50px Roboto'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    drawOutlinedText(ctx, `Score: ${this.score}`, game.VIEW_WIDTH / 2, game.VIEW_HEIGHT * 0.9)
  }
}
