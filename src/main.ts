import '../assets/styles.css'
import {game} from './game'
import {Gameplay} from './states/gameplay'

game.start(new Gameplay()).catch(err => console.error(err))
