import '../assets/styles.css'
import {game} from './game'
import {Gameplay} from './gameplay'

game.start(new Gameplay()).catch(err => console.error(err))
