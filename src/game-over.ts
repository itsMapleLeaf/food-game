import {game, GameState, viewHeight, viewWidth} from './game'
import {Gameplay} from './gameplay'
import {drawOutlinedText} from './graphics'
import {images} from './resources'

export class GameOver implements GameState {
  constructor(private score: number) {}

  enter() {}

  leave() {}

  update() {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(images['sky'], 0, 0, viewWidth, viewHeight)

    ctx.textAlign = 'center'

    ctx.font = '80px Roboto'
    drawOutlinedText(ctx, 'Game Over!', viewWidth / 2, viewHeight / 2 - 50)

    ctx.font = '40px Roboto'
    drawOutlinedText(ctx, 'Score: ' + this.score, viewWidth / 2, viewHeight / 2 + 80, 3)
    drawOutlinedText(ctx, 'Tap to try again', viewWidth / 2, viewHeight / 2 + 140, 3)
  }

  pointerdown() {
    game.switchState(new Gameplay())
  }
}
