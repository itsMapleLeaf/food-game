class Game {
  app = new PIXI.Application(VIEW_WIDTH, VIEW_HEIGHT)
  level = 0
  levelStage = new PIXI.Container()
  score = 0
  scoreDisplay = new ScoreDisplay()
  targets = [] as Target[]

  start() {
    let background = PIXI.Sprite.fromImage('resources/sky.png')
    background.width = VIEW_WIDTH
    background.height = VIEW_HEIGHT

    this.app.stage.addChild(background)
    this.app.stage.addChild(this.levelStage)
    this.app.stage.addChild(this.scoreDisplay.sprite)

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
      this.scoreDisplay.update(this.score)
      this.startNextLevel()
    })
  }
}
