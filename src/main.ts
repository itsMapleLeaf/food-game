const VIEW_WIDTH = 960
const VIEW_HEIGHT = 540

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

  let targetDisplay = game.stage.addChild(new PIXI.Container())
  let targetText = targetDisplay.addChild(new PIXI.Text('Touch:', { fill: 'white', stroke: 'black', strokeThickness: 3, fontSize: 40 }))
  let targetSprite = targetDisplay.addChild(PIXI.Sprite.fromImage('resources/apple.png'))

  targetText.anchor.set(0, 0.5)

  targetSprite.anchor.set(0, 0.5)
  targetSprite.position.set(targetText.width, 0)
  targetSprite.scale.set(0.75)

  targetDisplay.pivot.set(targetDisplay.width / 2, targetDisplay.height / 2)
  targetDisplay.position.set(VIEW_WIDTH / 2, 100)
}

PIXI.loader
  .add('resources/apple.png')
  .add('resources/sky.png')
  .load(setup)
