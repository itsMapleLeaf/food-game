function setup() {
  let game = new PIXI.Application()
  document.body.appendChild(game.view)

  let fruits = [] as Fruit[]
  for (let i = 0; i < 20; i++) {
    let fruit = new Fruit()
    fruits.push(fruit)
    game.stage.addChild(fruit.sprite)
  }

  game.ticker.add(dt => {
    fruits.forEach(fruit => {
      fruit.update(dt)
      fruit.bounceOffEdges(game.view.width, game.view.height)
    })
  })
}

PIXI.loader
  .add('apple', 'resources/food/47.png')
  .load(setup)
