import Game from './game'
import './styles.css'

new Game().start().catch(err => console.error(err))
