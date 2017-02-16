export let images = {} as { [name: string]: HTMLImageElement }

export function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    let image = new Image()
    image.src = src
    image.onload = event => resolve(image)
    image.onerror = event => reject(event.error)
  })
}

// this is lazy as hell don't do this
export async function loadImages() {
  images['sky'] = await loadImage(require('./assets/images/sky.png'))

  images['apple'] = await loadImage(require('./assets/images/apple.png'))
  images['banana'] = await loadImage(require('./assets/images/banana.png'))
  images['cake'] = await loadImage(require('./assets/images/cake.png'))
  images['cherry'] = await loadImage(require('./assets/images/cherry.png'))
  images['grape'] = await loadImage(require('./assets/images/grape.png'))
  images['jello'] = await loadImage(require('./assets/images/jello.png'))
  images['lemon'] = await loadImage(require('./assets/images/lemon.png'))
  images['orange'] = await loadImage(require('./assets/images/orange.png'))
  images['pear'] = await loadImage(require('./assets/images/pear.png'))
  images['tomato'] = await loadImage(require('./assets/images/tomato.png'))
}
