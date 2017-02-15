class Game {
  start() {
    let game = new PIXI.Application(VIEW_WIDTH, VIEW_HEIGHT)
    document.body.appendChild(game.view)

    let background = game.stage.addChild(PIXI.Sprite.fromImage('resources/sky.png'))
    background.width = VIEW_WIDTH
    background.height = VIEW_HEIGHT

    game.stage.addChild(this.createTargetDisplay('resources/apple.png'))
  }

  createTargetDisplay(targetImage: string) {
    let targetDisplay = new PIXI.Container()
    let targetText = targetDisplay.addChild(new PIXI.Text('Touch:', {
      fill: 'white', stroke: 'black', strokeThickness: 3, fontSize: 40,
    }))
    let targetSprite = targetDisplay.addChild(PIXI.Sprite.fromImage(targetImage))

    targetText.anchor.set(0, 0.5)

    targetSprite.anchor.set(0, 0.5)
    targetSprite.position.set(targetText.width, 0)
    targetSprite.scale.set(0.75)

    targetDisplay.pivot.set(targetDisplay.width / 2, targetDisplay.height / 2)
    targetDisplay.position.set(VIEW_WIDTH / 2, 100)
    return targetDisplay
  }
}
