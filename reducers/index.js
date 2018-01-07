import { combineReducers } from 'redux';
import board from './board';
import currentPlayer from './currentPlayer';
import winner from "./winner";

export default combineReducers({
    board,
    currentPlayer,
    winner
});
