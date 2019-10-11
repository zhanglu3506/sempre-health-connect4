import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newGame } from './action';
import Button from '@material-ui/core/Button';
import BoardCell from './BoardCell';
import './App.css';

class App extends Component{
  handleButtonClick() {
    console.log('click new game');
    this.props.sendNewGame();
  }
  render() {
    let cells = [];
    for (let y = 5; y >= 0; y--) {
      let row = [];
      for (let x = 0; x < 7; x++) {
        row.push(<BoardCell key={x} x={x} y={y}></BoardCell>)
      }
      cells.push(<div key={y} className="row">{row}</div>);
    }
    return (
      <div className="App">
        <header className="header">
          Connect four of Sempre Health
        </header>
        <div className="tool-bar">
          <Button color="primary" onClick={() => this.handleButtonClick()}>New Game</Button>
        </div>
        <div className="board-area">
          {cells}
        </div>
      </div>
    );
  }
}
let stateToProps = state => {
  return {};
}
let dispatchToProps = dispatch => {
  return {
    sendNewGame() {
      dispatch(newGame());
    }
  }
}

export default connect(stateToProps, dispatchToProps)(App);
