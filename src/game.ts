import * as pixi from 'pixi.js'
import ScoreDisplay from './score-display'
import Target from './target'
import TargetDisplay from './target-display'

export const VIEW_WIDTH = 960
export const VIEW_HEIGHT = 540

export const BACKGROUND_IMAGE = 'resources/sky.png'
export const FOOD_IMAGES = [
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

export default class Game {
  app = new pixi.Application(VIEW_WIDTH, VIEW_HEIGHT)
  level = 0
  levelStage = new pixi.Container()
  score = 0
  scoreDisplay = new ScoreDisplay()
  targets = [] as Target[]

  start() {
    let background = pixi.Sprite.fromImage('resources/sky.png')
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
    target.sprite.once('pointerdown', (event: pixi.interaction.InteractionEvent) => {
      this.score += 1
      this.scoreDisplay.update(this.score)
      this.startNextLevel()
    })
  }
}
