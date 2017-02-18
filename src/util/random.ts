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
