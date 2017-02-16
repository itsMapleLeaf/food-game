import * as pixi from 'pixi.js'
import ScoreDisplay from './score-display'
import Target from './target'
import TargetDisplay from './target-display'
import * as util from './util'

export const VIEW_WIDTH = 960
export const VIEW_HEIGHT = 540

export const BACKGROUND_IMAGE = require('./resources/sky.png') as string
export const FOOD_IMAGES = [
  require('./resources/apple.png'),
  require('./resources/banana.png'),
  require('./resources/cake.png'),
  require('./resources/cherry.png'),
  require('./resources/grape.png'),
  require('./resources/jello.png'),
  require('./resources/lemon.png'),
  require('./resources/orange.png'),
  require('./resources/pear.png'),
  require('./resources/tomato.png'),
] as string[]

export default class Game {
  app = new pixi.Application(VIEW_WIDTH, VIEW_HEIGHT)
  level = 0
  levelStage = new pixi.Container()
  score = 0
  scoreDisplay = new ScoreDisplay()
  targets = [] as Target[]

  start() {
    let background = pixi.Sprite.fromImage(BACKGROUND_IMAGE)
    background.width = VIEW_WIDTH
    background.height = VIEW_HEIGHT

    this.app.stage.addChild(background)
    this.app.stage.addChild(this.levelStage)
    this.app.stage.addChild(this.scoreDisplay.sprite)

    document.body.appendChild(this.app.view)

    this.app.ticker.add(dt => this.update(dt))

    this.startNextLevel()
  }

  update(dt: number) {
    this.targets.forEach(t => t.update(dt))
  }

  startNextLevel() {
    this.level += 1
    this.targets = []
    this.levelStage.removeChildren()

    for (let i = 0; i < this.level; i++) {
      let target = new Target()
      this.targets.push(target)
      this.levelStage.addChild(target.sprite)
    }

    let chosenTarget = util.randomItem(this.targets)
    let targetDisplay = new TargetDisplay(chosenTarget.image)
    this.levelStage.addChild(targetDisplay.sprite)

    this.targets.forEach(target => {
      if (target.image === chosenTarget.image) {
        target.sprite.interactive = true
        target.sprite.once('pointerdown', (event: pixi.interaction.InteractionEvent) => {
          this.score += 1
          this.scoreDisplay.update(this.score)
          this.startNextLevel()
        })
      }
    })
  }
}
