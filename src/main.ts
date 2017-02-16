import * as pixi from 'pixi.js'
import Game, {BACKGROUND_IMAGE, FOOD_IMAGES} from './game'
import './styles.css'

function setup() {
  new Game().start()
}

function load() {
  pixi.loader
  .add(FOOD_IMAGES)
  .add(BACKGROUND_IMAGE)
  .load(setup)
}

load()
