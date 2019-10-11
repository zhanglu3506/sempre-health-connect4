import { createStore } from 'redux';

// Initial state for the store.
const initialState = {
    current: 'red', // can also be yellow.
    board: [
        [],  //column 0
        [],  //column 1
        [],  //column 2
        [],  //column 3
        [],  //column 4
        [],  //column 5
        [],  //column 6
    ]
};

function reducer(state, action) {
    if (action.type === 'DROP_CELL') {
        console.log('drop' + action.payload);
        const cell = state.current;
        const column = state.board[action.payload].concat(cell); // new column

        const board = state.board.slice(); // copy the board array
        board[action.payload] = column;
        return {
            current: state.current === 'red' ? 'yellow' : 'red',
            board: board,
        };
    } else if(action.type === 'NEW_GAME') {
        console.log('new game action');
        state = initialState;
    }
    return state;
}

export default createStore(reducer, initialState);