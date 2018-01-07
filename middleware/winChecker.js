import { MAKE_MOVE } from "../actions/actionTypes";
import SuperSet from "superset";
import { win } from "../actions";

const winChecker = ({ dispatch, getState }) => next => action => {
    if ( action.type !== MAKE_MOVE ) {
        return next(action);
    }

    const winningPositions = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ].map(arr => new SuperSet(arr));

    let { board }= getState();
    board = [...board.slice(0, action.index), action.currentPlayer, ...board.slice(action.index + 1, 9)]

    const positions = board.reduce( (accumulator, mark, index) => {
        if (!mark) {
            return accumulator;
        }

        accumulator[mark] = [ ...accumulator[mark], index];

        return accumulator;
    }, { "X": [], "O": []});

    let xWins = false;
    let oWins = false;

    winningPositions.forEach(winningPosition => {
        if (winningPosition.isSubsetOf(new SuperSet(positions["X"]))) {
            xWins = true;
        }
        if (winningPosition.isSubsetOf(new SuperSet(positions["O"]))) {
            oWins = true;
        }
    });

    if(xWins) {
        dispatch(win("X", board));
    } else if(oWins) {
        dispatch(win("O", board));
    } else {
        return next({ ...action, board });
    }
};

export default winChecker;