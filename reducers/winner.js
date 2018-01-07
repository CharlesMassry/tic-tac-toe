import { RESET, WIN } from '../actions/actionTypes';

export default function winner(state=null, action) {
    switch (action.type) {
        case WIN:
            return action.winner;
        case RESET:
            return null;
        default:
            return state;
    }
}