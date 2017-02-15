class Target {
  image = util.randomItem(FOOD_IMAGES)
  sprite = PIXI.Sprite.fromImage(this.image)

  constructor() {
    this.sprite.position.set(VIEW_WIDTH / 2, VIEW_HEIGHT / 2)
    this.sprite.anchor.set(0.5, 0.5)
    this.sprite.scale.set(1.2)
  }
}

class TargetDisplay {
  sprite = new PIXI.Container()

  constructor(image: string) {
    let text = new PIXI.Text('Touch:', {
      fill: 'white',
      stroke: 'black',
      strokeThickness: 3,
      fontSize: 40,
    })
    text.anchor.set(0, 0.5)

    let imageSprite = PIXI.Sprite.fromImage(image)
    imageSprite.anchor.set(0, 0.5)
    imageSprite.position.set(text.width, 0)
    imageSprite.scale.set(0.75)

    this.sprite.addChild(text)
    this.sprite.addChild(imageSprite)
    this.sprite.pivot.set(this.sprite.width / 2, this.sprite.height / 2)
    this.sprite.position.set(VIEW_WIDTH / 2, 100)
  }
}

class Game {
  app = new PIXI.Application(VIEW_WIDTH, VIEW_HEIGHT)
  level = 0
  levelStage = new PIXI.Container()
  score = 0
  scoreDisplay = new PIXI.Text('Score: 0', {
    fill: 'white',
    stroke: 'black',
    strokeThickness: 3,
    fontSize: 40,
  })
  targets = [] as Target[]

  start() {
    this.scoreDisplay.anchor.set(0.5, 0.5)
    this.scoreDisplay.position.set(VIEW_WIDTH / 2, VIEW_HEIGHT * 0.9)

    let background = PIXI.Sprite.fromImage('resources/sky.png')
    background.width = VIEW_WIDTH
    background.height = VIEW_HEIGHT

    this.app.stage.addChild(background)
    this.app.stage.addChild(this.levelStage)
    this.app.stage.addChild(this.scoreDisplay)

    document.body.appendChild(this.app.view)

    this.startNextLevel()
  }

  startNextLevel() {
    this.level += 1

    let target = new Target()
    let targetDisplay = new TargetDisplay(target.image)

    let level = this.levelStage
    level.removeChildren()
    level.addChild(targetDisplay.sprite)
    level.addChild(target.sprite)

    target.sprite.interactive = true
    target.sprite.once('pointerdown', (event: PIXI.interaction.InteractionEvent) => {
      this.score += 1
      this.scoreDisplay.text = 'Score: ' + this.score.toString()
      this.startNextLevel()
    })
  }
}
