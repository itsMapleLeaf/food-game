const VIEW_WIDTH = 960
const VIEW_HEIGHT = 540

const BACKGROUND_IMAGE = 'resources/sky.png'
const FRUIT_IMAGES = [
  'resources/apple.png',
  'resources/banana.png',
  'resources/cake.png',
  'resources/cherry.png',
  'resources/grape.png',
  'resources/jello.png',
  'resources/lemon.png',
  'resources/orange.png',
  'resources/pear.png',
  'resources/tomato.png',
]

const KEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_UP = 38
const KEY_DOWN = 40

function setup() {
  let game = new PIXI.Application(VIEW_WIDTH, VIEW_HEIGHT)
  document.body.appendChild(game.view)

  let background = game.stage.addChild(PIXI.Sprite.fromImage('resources/sky.png'))
  background.width = VIEW_WIDTH
  background.height = VIEW_HEIGHT

  game.stage.addChild(new TargetDisplay().sprite)
}

PIXI.loader
  .add(FRUIT_IMAGES)
  .add(BACKGROUND_IMAGE)
  .load(setup)
