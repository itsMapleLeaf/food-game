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

export function clamp(num: number, min: number, max: number) {
  if (num > max) return max
  if (num < min) return min
  return num
}

export function lerp(a: number, b: number, delta: number) {
  return a + (b - a) * clamp(delta, 0, 1)
}

export function sign(n: number) {
  if (n < 0) return -1
  if (n > 0) return 1
  return 0
}

export function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function randomSign() {
  return Math.random() > 0.5 ? 1 : -1
}

export function randomItem<T>(list: T[]): T {
  const index = Math.floor(randomRange(0, list.length - 1))
  return list[index]
}
