import '../assets/styles.css'
import Game from './game'

new Game().start().catch(err => console.error(err))
