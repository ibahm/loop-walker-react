import React, {useEffect, useState} from "react";
import Cell from "./Cell";

// Global variables
// Replace these with state variables 
const BOARD_SIZE = 48;
let CURR_CELL;
let PREV_CELL;

class Spot{
    constructor(type, row, col) {
        this.type = type;   // 'cell', 'cell-start', 'cell-curr', 'cell-end'
        this.row = row;     // i index
        this.col = col;     // j index
        this.visited = 0  
    }
}

// Initialise the board state on initial render

const initBoard = () => {
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
    const [anim, setAnim] = useState(false); 
    const [board, setBoard] = useState(() => initBoard());
    const [path, setPath] = useState([]);
    const [count, setCount] = useState(0);

    // Initialise the path state

    useEffect(() => {
        if (!(path.length > 0)) {
            for(let i = 0; i < 5; i++) {
                setPath((pState) => [...pState, Math.floor(Math.random(0)*4)])
            }
        }
    }, [])

    // useEffect and setInterval to iterate count every n milliseconds anim is true

    useEffect(() => {
        if (anim) {
            const timer = setInterval(() => {
                setCount(pState => pState + 1)
            }, 500)

            if (count === path.length) {
                clearInterval(timer)
                handleReset()
            }

            return () => {
                clearInterval(timer)
            }
        }    
    }, [anim, count])

    // Temp console output to see count iterations
    console.log(count);

    const handleStart = () => {
        setAnim(pState => !pState)
    }

    const handleReset = () => {
        setAnim((pState) => false)
        setCount((pState) => 0);
    }

    // Rewrite to use state variables instead of global variables

    const updateCell = (array, i, path) => {
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
        CURR_CELL.visited += 1;
        PREV_CELL.type="cell-end"

        return array;
    }

    // Always render the most middle cell as green

    if (board[BOARD_SIZE/2][BOARD_SIZE/2].type !== "cell-start") {
        board[BOARD_SIZE/2][BOARD_SIZE/2].type="cell-start"
        setBoard([...board])
    }

    return (
        <>
            <div className="grid-cont">
                <div className ="grid" style={{gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`}}>
                    {board.map((spot, index) => (
                        board.map(spot => (
                            <Cell
                            key={`[${spot[index].col}][${spot[index].row}]`} 
                            type={spot[index].type} 
                            row={spot[index].row} 
                            col={spot[index].col} 
                            board={board} 
                            visited={spot[index].visited}/>
                        ))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                    ))}
                </div>
                <div className="grid-footer">
                    <button className="footer-button" onClick={handleStart} style={{backgroundColor: anim ? `rgb(0, 210, 18, 0.70)` : `rgb(255, 128, 128)`}}>Start/Stop</button>
                    <button className="footer-button" onClick={handleReset}>Clear</button>
                    <button className="footer-button">New Path</button>
                </div>
            </div>
        </>                   
    )
}

export default Grid;