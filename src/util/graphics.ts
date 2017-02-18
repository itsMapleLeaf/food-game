export function drawOutlinedText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, outlineWidth = 5) {
  ctx.save()

  ctx.lineWidth = outlineWidth
  ctx.strokeStyle = 'black'
  ctx.strokeText(text, x, y)

  ctx.fillStyle = 'white'
  ctx.fillText(text, x, y)

  ctx.restore()
}

export function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    let image = new Image()
    image.src = src
    image.onload = event => resolve(image)
    image.onerror = event => reject(event.error)
  })
}

export function animationFrame() {
  return new Promise<number>(window.requestAnimationFrame)
}
