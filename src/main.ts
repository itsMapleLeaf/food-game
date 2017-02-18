import { GameOver } from './game-over';
import '../assets/styles.css'
import {game} from './game'
import Gameplay from './gameplay'

game.start(new GameOver()).catch(err => console.error(err))
