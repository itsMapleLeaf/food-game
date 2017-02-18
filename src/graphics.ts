export function drawOutlinedText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number) {
  ctx.save()

  ctx.lineWidth = 5
  ctx.strokeStyle = 'black'
  ctx.strokeText(text, x, y)

  ctx.fillStyle = 'white'
  ctx.fillText(text, x, y)

  ctx.restore()
}
