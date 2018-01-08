import React from 'react';
import { connect } from 'react-redux';
import Board from "./Board";
import { makeMove, reset } from "../actions";

class TicTacToe extends React.Component {
    handleResetClick = () => {
        this.props.dispatch(reset());
    };

    render() {
        const resetButton = <button onClick={this.handleResetClick}>Reset</button>;

        if (this.props.winner) {
            return <div>
                <h1>{this.props.winner} WINS THE GAME</h1>
                {resetButton}
            </div>
        }

        return <div>
            <h3>{this.props.currentPlayer}'s turn</h3>
            <Board onClick={this.handleClick} board={this.props.board}/>
            {resetButton}
        </div>;
    }
}

function mapStateToProps(storeState, componentProps) {
    return {
        winner: storeState.winner,
        currentPlayer: storeState.currentPlayer
    };
}

export default connect(mapStateToProps)(TicTacToe);
