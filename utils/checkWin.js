import SuperSet from "superset";

function checkWin(board) {
    const winningPositions = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ].map(arr => new SuperSet(arr));

    const positions = board.reduce( (accumulator, mark, index) => {
        if (!mark) {
            return accumulator;
        }

        accumulator[mark].add(index);

        return accumulator;
    }, { "X": (new SuperSet()), "O": (new SuperSet())});

    let xWins = false;
    let oWins = false;

    winningPositions.forEach(winningPosition => {
        if (winningPosition.isSubsetOf(positions["X"])) {
            xWins = true;
        }
        if (winningPosition.isSubsetOf(positions["O"])) {
            oWins = true;
        }
    });

    if (xWins) return "X";
    if (oWins) return "O";
    return null;
}

export default checkWin;
