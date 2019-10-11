// action for when player clicks on the column.
export function dropCell(column) {
    return {
        type: 'DROP_CELL',
        payload: column
    }
}
export function newGame() {
    return {
        type:'NEW_GAME'
    }
}