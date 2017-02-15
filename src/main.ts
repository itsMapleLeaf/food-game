const VIEW_WIDTH = 960
const VIEW_HEIGHT = 540

const BACKGROUND_IMAGE = 'resources/sky.png'
const FOOD_IMAGES = [
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

function setup() {
  new Game().start()
}

function load() {
  PIXI.loader
  .add(FOOD_IMAGES)
  .add(BACKGROUND_IMAGE)
  .load(setup)
}

load()
