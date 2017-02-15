namespace Keyboard {
  const pressed = {} as { [key: string]: boolean }

  export function isDown(...keys: number[]) {
    return keys.some(key => pressed[key] === true)
  }

  window.addEventListener('keydown', event => { pressed[event.keyCode] = true })
  window.addEventListener('keyup', event => { delete pressed[event.keyCode] })
}
