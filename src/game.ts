import * as resources from './resources'
import * as util from './util'

export const VIEW_WIDTH = 960
export const VIEW_HEIGHT = 540

export interface GameState {
  init(): void
  update(dt: number): void
  draw(ctx: CanvasRenderingContext2D): void
  pointerdown(x: number, y: number): void
}

export default class Game {
  state: GameState

  async start(state: GameState) {
    this.state = state

    await resources.loadImages()

    let canvas = document.createElement('canvas')
    canvas.width = VIEW_WIDTH
    canvas.height = VIEW_HEIGHT
    document.body.appendChild(canvas)

    let ctx = canvas.getContext('2d')
    let time = Date.now()

    canvas.addEventListener('pointerdown', (event: PointerEvent) => {
      let {width, height} = canvas.getBoundingClientRect()
      let x = event.offsetX / width * VIEW_WIDTH
      let y = event.offsetY / height * VIEW_HEIGHT
      this.state.pointerdown(x, y)
    })

    this.state.init()

    while (true) {
      await util.animationFrame()

      let now = Date.now()
      let elapsed = now - time
      time = now

      this.state.update(elapsed / 1000)
      this.state.draw(ctx)
    }
  }
}
