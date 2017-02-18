import '../assets/styles.css'
import {game} from './game'
import {GameOver} from './game-over'
// import Gameplay from './gameplay'

game.start(new GameOver(10)).catch(err => console.error(err))
