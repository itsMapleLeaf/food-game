import { GameState, viewHeight, viewWidth } from './game'
import { images } from './resources'

export class GameOver implements GameState {
  enter() {}

  leave() {}

  update() {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(images['sky'], 0, 0, viewWidth, viewHeight)
  }

  pointerdown() {}
}
