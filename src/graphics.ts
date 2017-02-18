export function drawOutlinedText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, outlineWidth = 5) {
  ctx.save()

  ctx.lineWidth = outlineWidth
  ctx.strokeStyle = 'black'
  ctx.strokeText(text, x, y)

  ctx.fillStyle = 'white'
  ctx.fillText(text, x, y)

  ctx.restore()
}
