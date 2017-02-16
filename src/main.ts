import Game, {VIEW_HEIGHT, VIEW_WIDTH} from './game'
import * as resources from './resources'
import './styles.css'
import * as util from './util'

async function start() {
  await resources.loadImages()

  let canvas = document.createElement('canvas')
  canvas.width = VIEW_WIDTH
  canvas.height = VIEW_HEIGHT
  document.body.appendChild(canvas)

  let game = new Game()
  let ctx = canvas.getContext('2d')
  let time = Date.now()

  canvas.addEventListener('pointerdown', (event: PointerEvent) => {
    let {width, height} = canvas.getBoundingClientRect()
    let x = event.clientX / width * VIEW_WIDTH
    let y = event.clientY / height * VIEW_HEIGHT
    game.pointerdown(x, y)
  })

  while (true) {
    await util.animationFrame()

    let now = Date.now()
    let elapsed = now - time
    time = now

    game.update(elapsed / 1000)
    game.draw(ctx)
  }
}

start()
