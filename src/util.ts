namespace util {
  export function clamp(num: number, min: number, max: number) {
    if (num > max) return max
    if (num < min) return min
    return num
  }

  export function lerp(a: number, b: number, delta: number) {
    return a + (b - a) * clamp(delta, 0, 1)
  }

  export function randomRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  export function randomSign() {
    return Math.random() > 0.5 ? 1 : -1
  }
}
