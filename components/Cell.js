import React from 'react';
import PropTypes from 'prop-types';

const style ={
    display: "inline-block",
    height: 50,
    width: 50,
    border: "1px solid black",
    margin: "1px"
};

const innerStyle = {
    position: "absolute",
    marginTop: 15,
    marginLeft: 19
};

class Cell extends React.Component {
    static propTypes = {
        mark: PropTypes.string,
        onClick: PropTypes.func,
        index: PropTypes.number
    };

    handleClick = () => {
        if (!this.props.mark) {
            this.props.onClick(this.props.index);
        }
    };

    render() {
        return <div style={style} onClick={this.handleClick}>
            <div style={innerStyle}>{this.props.mark}</div>
        </div>;
    }
}

export default Cell;
