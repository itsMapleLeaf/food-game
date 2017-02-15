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
    player.movingLeft = Keyboard.isDown(KEY_LEFT)
    player.movingRight = Keyboard.isDown(KEY_RIGHT)
    player.update(dt)
    // fruits.forEach(fruit => {
    //   fruit.update(dt)
    // })
  })
}

PIXI.loader
  .add('apple', 'resources/food/47.png')
  .load(setup)
