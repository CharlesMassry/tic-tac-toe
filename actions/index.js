import { MAKE_MOVE, RESET, WIN } from "./actionTypes";

export function makeMove(currentPlayer, index) {
    return {
        type: MAKE_MOVE,
        currentPlayer, index
    }
}

export function reset() {
    return {
        type: RESET
    }
}

export function win(winner, board) {
    return {
        type: WIN,
        winner, board
    }
}
