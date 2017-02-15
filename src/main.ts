const KEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_UP = 38
const KEY_DOWN = 40

function setup() {
  let game = new PIXI.Application(960, 540)
  document.body.appendChild(game.view)

  let background = game.stage.addChild(PIXI.Sprite.fromImage('resources/sky.png'))
  background.width = game.view.width
  background.height = game.view.height

  // let player = new Player(100, 300)
  // game.stage.addChild(player.sprite)

  // // let fruits = [] as Fruit[]

  // game.ticker.add(dt => {
  //   player.movingLeft = Keyboard.isDown(KEY_LEFT)
  //   player.movingRight = Keyboard.isDown(KEY_RIGHT)
  //   player.update(dt)
  //   // fruits.forEach(fruit => {
  //   //   fruit.update(dt)
  //   // })
  // })
}

PIXI.loader
  .add('resources/sky.png')
  .load(setup)
