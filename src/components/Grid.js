import React, {useState} from "react";
import Cell from "./Cell";
import {nanoid} from "nanoid"

/*
    Global variables
    Update css grid when changing BOARD_SIZE
*/

const BOARD_SIZE = 64;

/*
    type = 'cell', 'cell-start', 'cell-curr', 'cell-end'
    row = i index
    col = j index
*/

class Spot{
    constructor(type, row, col) {
        this.type = type;   // 'cell', 'cell-start', 'cell-curr', 'cell-end'
        this.row = row; // i index
        this.col = col; // j index
    }
}

// State on initial render

function initBoard() {
    let arr = new Array(BOARD_SIZE)

    for(let i = 0; i < BOARD_SIZE; i++) {
        arr[i] = new Array(BOARD_SIZE);
    }
    
    for(let i = 0; i < BOARD_SIZE; i++) {
       for(let j = 0; j < BOARD_SIZE; j++) {
        arr[i][j] = new Spot("cell", i, j);
       }
    }

    return arr;
}

const Grid = () => { 
    const [board, setBoard] = useState(() => initBoard());

    // Always render the most middle cell as green

    if (board[BOARD_SIZE/2][BOARD_SIZE/2].type !== "cell-start") {
        board[BOARD_SIZE/2][BOARD_SIZE/2].type="cell-start"
        setBoard([...board])
    }

    return (
        <div className="grid-cont">
            <div className ="grid">
                {board.map((spot, index) => (
                    board.map(spot => (
                        <Cell key={nanoid()} type={spot[index].type} row={spot[index].row} col={spot[index].col} board={board}/>
                    ))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                ))}
            </div>
            <button className="start">START</button>
        </div>               
    )
}

export default Grid;