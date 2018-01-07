import React from 'react';
import { connect } from 'react-redux';
import Cell from "./Cell";
import { makeMove, reset } from "../actions";

class TicTacToe extends React.Component {
    handleClick = (index) => {
        this.props.dispatch(makeMove(this.props.currentPlayer, index));
    };

    handleResetClick = () => {
        this.props.dispatch(reset());
    }

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
            {
                chunkArray(this.props.board, 3).map( (row, rowIndex) => {
                    return <div key={rowIndex}>
                        {
                            row.map( (mark, index) => {
                                return <Cell mark={mark}
                                             index={(rowIndex * 3) + index}
                                             key={`${rowIndex}_${index}`}
                                             onClick={this.handleClick} />;
                            })
                        }
                    </div>
                })
            }

            {resetButton}
        </div>;
    }
}

function chunkArray(array, part) {
    let tmp = [];
    for(let i = 0; i < array.length; i += part) {
        tmp.push(array.slice(i, i + part));
    }
    return tmp;
}

function mapStateToProps(storeState, componentProps) {
    return {
        ...storeState
    };
}

export default connect(mapStateToProps)(TicTacToe);
