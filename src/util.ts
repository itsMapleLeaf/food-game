namespace util {
  export function randomRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  export function randomSign() {
    return Math.random() > 0.5 ? 1 : -1
  }
}
