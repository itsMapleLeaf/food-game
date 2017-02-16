import * as pixi from 'pixi.js'
import {FOOD_IMAGES, VIEW_HEIGHT, VIEW_WIDTH} from './game'
import * as util from './util'

export default class Target {
  image = util.randomItem(FOOD_IMAGES)
  sprite = pixi.Sprite.fromImage(this.image)

  constructor() {
    this.sprite.position.set(VIEW_WIDTH / 2, VIEW_HEIGHT / 2)
    this.sprite.anchor.set(0.5, 0.5)
    this.sprite.scale.set(1.2)
  }
}
