import React, {useEffect, useState} from "react";
import Cell from "./Cell";

// Global variables
// Replace these with state variables 
const BOARD_SIZE = 48;

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
    const [curr, setCurr] = useState(board[BOARD_SIZE/2][BOARD_SIZE/2]);
    const [prev, setPrev] = useState(board[BOARD_SIZE/2][BOARD_SIZE/2]);

    // Initialise the path state

    useEffect(() => {
        if (!(path.length > 0)) {
            for(let i = 0; i < 1000; i++) {
                setPath((pState) => [...pState, Math.floor(Math.random(0)*4)])
            }
        }
    }, [])

    // useEffect and setInterval to iterate count every n milliseconds anim is true

    useEffect(() => {
        if (anim) {
            const timer = setInterval(() => {
                setCount(pState => pState + 1)
                updateCell(count, path)
            }, 100)

            if (count === path.length) {
                clearInterval(timer)
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
        setBoard(initBoard);
        setAnim((pState) => false);
        setCount((pState) => 0);
        setCurr((pState) => board[BOARD_SIZE/2][BOARD_SIZE/2])
        setPrev((pState) => board[BOARD_SIZE/2][BOARD_SIZE/2])
    }

    // Update the state variables for pathing

    const updateCell = (i, path) => {
        let arr = board;
        switch(path[i]) {
            case 0:
                setCurr((pState) => arr[curr.row-1][curr.col])
                break;
            case 1:
                setCurr((pState) => arr[curr.row+1][curr.col])
                break;
            case 2:
                setCurr((pState) => arr[curr.row][curr.col+1])
                break;
            case 3:
                setCurr((pState) => arr[curr.row][curr.col-1])
                break;
        }
        setPrev((pState) => curr)
        curr.type="cell-current"
        curr.visited += 1
        prev.type="cell-end"
        return arr;
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