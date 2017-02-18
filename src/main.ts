import '../assets/styles.css'
import {game} from './game'
import {GameOver} from './game-over'
// import Gameplay from './gameplay'

game.start(new GameOver()).catch(err => console.error(err))
