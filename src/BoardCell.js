import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dropCell } from './action';

class BoardCell extends Component{
    handleClick() {
        console.log(`click on column ${this.props.x}`);

        this.props.sendCellDrop(this.props.x);
    }
    render() {
        const board = this.props.board;
        const x = this.props.x;
        const y = this.props.y;
        let styles = 'cell';

        if(board[x][y] !== undefined) {
            if(board[x][y] === 'red') {
                styles += ' p2';
            } else {
                styles += ' p1';
            }
        }
        return (
            <div className={styles} onClick={() => this.handleClick()}>
                {/* <p>{this.props.x}, {this.props.y}</p> */}
            </div>
        )
    }
}

let stateToProps = state => {
    return {
        board: state.board
    };
}
let dispatchToProps = dispatch => {
    return {
        sendCellDrop(column) {
            dispatch(dropCell(column));
        }
    }
}

export default connect(stateToProps, dispatchToProps)(BoardCell);