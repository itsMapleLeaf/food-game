const KEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_UP = 38
const KEY_DOWN = 40

function setup() {
  let game = new PIXI.Application()
  document.body.appendChild(game.view)

  let player = new Player(100, 300)
  game.stage.addChild(player.sprite)

  // let fruits = [] as Fruit[]

  game.ticker.add(dt => {
    player.update(dt)
    // fruits.forEach(fruit => {
    //   fruit.update(dt)
    // })
  })

  window.addEventListener('keydown', event => {
    if (event.keyCode === KEY_LEFT) player.movingLeft = true
    if (event.keyCode === KEY_RIGHT) player.movingRight = true
  })

  window.addEventListener('keyup', event => {
    if (event.keyCode === KEY_LEFT) player.movingLeft = false
    if (event.keyCode === KEY_RIGHT) player.movingRight = false
  })
}

PIXI.loader
  .add('apple', 'resources/food/47.png')
  .load(setup)
