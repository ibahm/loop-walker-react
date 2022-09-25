import React, {useState} from "react";
import Cell from "./Cell";
import {nanoid} from "nanoid"

// Global variables

const BOARD_SIZE = 64;
const PATH_SPEED = 200;
let CURR_CELL = null;
let PREV_CELL = null;

/*
    type = 'cell', 'cell-start', 'cell-current', 'cell-end'
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

// Update visited cell

function updateCell(array, i, path) {
    switch(path[i]) {
        case 0:
            PREV_CELL = CURR_CELL
            CURR_CELL = array[CURR_CELL.row-1][CURR_CELL.col]
            break;
        case 1:
            PREV_CELL = CURR_CELL
            CURR_CELL = array[CURR_CELL.row+1][CURR_CELL.col]
            break;
        case 2:
            PREV_CELL = CURR_CELL
            CURR_CELL = array[CURR_CELL.row][CURR_CELL.col+1]
            break;
        case 3:
            PREV_CELL = CURR_CELL
            CURR_CELL = array[CURR_CELL.row][CURR_CELL.col-1]
            break;
    }
    CURR_CELL.type="cell-current"
    PREV_CELL.type="cell-end"

    return array;
}

const Grid = () => { 
    const [board, setBoard] = useState(() => initBoard());

    function beginPath() {
        let path = new Array();
        CURR_CELL = board[BOARD_SIZE/2][BOARD_SIZE/2]

        for(let i = 0; i < 1000; i++) {
            path.push(Math.floor(Math.random(0)*4))
        }

        // Call function in interval
        
        let i = 0;
        let interval = setInterval(() => {
            
            setBoard([...updateCell(board, i, path)])

            console.log(path[i++]);
            
            if(i === path.length){
                clearInterval(interval);
            }
        }, PATH_SPEED)
    }

    // Always render the most middle cell as green

    if (board[BOARD_SIZE/2][BOARD_SIZE/2].type !== "cell-start") {
        board[BOARD_SIZE/2][BOARD_SIZE/2].type="cell-start"
        setBoard([...board])
    }

    return (
        <>
            <div className="grid-cont">
                <div className ="grid">
                    {board.map((spot, index) => (
                        board.map(spot => (
                            <Cell key={nanoid()} type={spot[index].type} row={spot[index].row} col={spot[index].col} board={board}/>
                        ))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                    ))}
                </div>
                <button className="start" onClick={beginPath}>START</button>
            </div>
        </>                   
    )
}

export default Grid;