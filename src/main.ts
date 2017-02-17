import '../assets/styles.css'
import Game from './game'
import Gameplay from './gameplay'

new Game().start(new Gameplay()).catch(err => console.error(err))
