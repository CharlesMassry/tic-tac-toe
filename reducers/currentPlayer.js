import { MAKE_MOVE, RESET } from '../actions/actionTypes';

export default function currentPlayer(state="X", action) {
    switch (action.type) {
        case MAKE_MOVE:
            return action.currentPlayer === "X" ? "O" : "X";
        case RESET:
            return "X";
        default:
            return state;
    }
}