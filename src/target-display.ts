class TargetDisplay {
  sprite = new PIXI.Container()
  text = new PIXI.Text('Touch:', { fill: 'white', stroke: 'black', strokeThickness: 3, fontSize: 40 })
  image = PIXI.Sprite.fromImage('resources/apple.png')

  constructor() {
    this.text.anchor.set(0, 0.5)

    this.image.anchor.set(0, 0.5)
    this.image.position.set(this.text.width, 0)
    this.image.scale.set(0.75)

    this.sprite.addChild(this.text)
    this.sprite.addChild(this.image)
    this.sprite.pivot.set(this.sprite.width / 2, this.sprite.height / 2)
    this.sprite.position.set(VIEW_WIDTH / 2, 100)
  }
}
