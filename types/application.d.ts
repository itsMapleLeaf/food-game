declare module PIXI {
  export class Application {
    constructor(width?: number, height?: number, options?: ApplicationOptions, noWebGL?: boolean)

    renderer: WebGLRenderer
    stage: Container
    ticker: ticker.Ticker
    readonly view: HTMLCanvasElement

    destroy(removeView?: boolean): void
    render(): void
    start(): void
    stop(): void
  }

  interface ApplicationOptions {
    view?: HTMLCanvasElement
    transparent?: boolean
    antialias?: boolean
    preserveDrawingBuffer?: boolean
    resolution?: number
  }
}
