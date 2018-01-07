import { MAKE_MOVE, RESET, WIN } from '../actions/actionTypes';

export default function board(state=[ '', '', '', '', '', '', '', '', ''], action) {
    switch (action.type) {
        case MAKE_MOVE:
            return action.board;
        case WIN:
            return action.board;
        case RESET:
            return [ '', '', '', '', '', '', '', '', ''];
        default:
            return state;
    }
}