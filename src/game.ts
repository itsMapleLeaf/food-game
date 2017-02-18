import * as resources from './resources'
import * as util from './util'

export const VIEW_WIDTH = 960
export const VIEW_HEIGHT = 540

export interface GameState {
  enter(): void
  leave(): void
  update(dt: number): void
  draw(ctx: CanvasRenderingContext2D): void
  pointerdown(x: number, y: number): void
}

export class Game {
  state: GameState

  async start(state: GameState) {
    await resources.loadImages()

    this.switchState(state)

    let canvas = document.createElement('canvas')
    canvas.width = VIEW_WIDTH
    canvas.height = VIEW_HEIGHT
    document.body.appendChild(canvas)

    canvas.addEventListener('pointerdown', event => {
      let {width, height} = canvas.getBoundingClientRect()
      let x = event.offsetX / width * VIEW_WIDTH
      let y = event.offsetY / height * VIEW_HEIGHT
      this.state.pointerdown(x, y)
    })

    let time = Date.now()
    let ctx = canvas.getContext('2d')
    while (true) {
      await util.animationFrame()

      let now = Date.now()
      let elapsed = now - time
      time = now

      this.state.update(elapsed / 1000)
      this.state.draw(ctx)
    }
  }

  switchState(state: GameState) {
    if (this.state) this.state.leave()
    this.state = state
    if (this.state) this.state.enter()
  }
}

export const game = new Game()
