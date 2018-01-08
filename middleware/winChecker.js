import { MAKE_MOVE } from "../actions/actionTypes";
import { win } from "../actions";
import checkWin from "../utils/checkWin";

const winChecker = ({ dispatch, getState }) => next => action => {
    if ( action.type !== MAKE_MOVE ) {
        return next(action);
    }

    let { board }= getState();
    board = [...board.slice(0, action.index), action.currentPlayer, ...board.slice(action.index + 1, 9)]

    let winner = checkWin(board);

    if (winner) {
        dispatch(win(winner, board));
    } else {
        return next({ ...action, board });
    }
};

export default winChecker;