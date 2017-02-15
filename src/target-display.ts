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
