const KEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_UP = 38
const KEY_DOWN = 40

function setup() {
  let game = new PIXI.Application()
  document.body.appendChild(game.view)

  let fruits = [] as Fruit[]
  for (let i = 0; i < 20; i++) {
    let fruit = new Fruit()
    fruits.push(fruit)
    game.stage.addChild(fruit.sprite)
  }

  let player = new Player(100, 550)
  game.stage.addChild(player.sprite)

  game.ticker.add(dt => {
    player.update(dt)
    fruits.forEach(fruit => {
      fruit.update(dt)
      fruit.bounceOffEdges(game.view.width, game.view.height)
    })
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
