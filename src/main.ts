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

  game.stage.addChild(createTargetDisplay('resources/apple.png'))
}

function createTargetDisplay(targetImage: string) {
  let targetDisplay = new PIXI.Container()
  let targetText = targetDisplay.addChild(new PIXI.Text('Touch:', { fill: 'white', stroke: 'black', strokeThickness: 3, fontSize: 40 }))
  let targetSprite = targetDisplay.addChild(PIXI.Sprite.fromImage(targetImage))

  targetText.anchor.set(0, 0.5)

  targetSprite.anchor.set(0, 0.5)
  targetSprite.position.set(targetText.width, 0)
  targetSprite.scale.set(0.75)

  targetDisplay.pivot.set(targetDisplay.width / 2, targetDisplay.height / 2)
  targetDisplay.position.set(VIEW_WIDTH / 2, 100)
  return targetDisplay
}

PIXI.loader
  .add(FRUIT_IMAGES)
  .add(BACKGROUND_IMAGE)
  .load(setup)
