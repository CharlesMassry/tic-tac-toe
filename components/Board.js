import React from 'react';
import PropTypes from 'prop-types';
import Cell from "./Cell";
import { makeMove } from "../actions";
import { connect } from "react-redux";

class Board extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
        board: PropTypes.array
    };

    handleClick = (index) => {
        this.props.dispatch(makeMove(this.props.currentPlayer, index));
    };

    render() {
        return chunkArray(this.props.board, 3).map( (row, rowIndex) => {
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
        board: storeState.board,
        currentPlayer: storeState.currentPlayer
    };
}

export default connect(mapStateToProps)(Board);
