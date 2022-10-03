import React, {useEffect, useState} from "react";
import Cell from "./Cell";

// Global variables
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

const Grid = ({anim, setAnim, count, setCount, valid, setValid, visited, setVisited, path, setPath}) => {
    const [board, setBoard] = useState(() => initBoard());
    const [curr, setCurr] = useState(board[BOARD_SIZE/2][BOARD_SIZE/2]);
    const [prev, setPrev] = useState(board[BOARD_SIZE/2][BOARD_SIZE/2]);

    // Create a valid path (even number of steps)
    // O(n^3) 
    // Inefficient function
    useEffect(() => {
            if (!valid) {
                const timer = setInterval(() => {
                    let x = 0
                    let y = 0
                    let arr = []
                    for(let i = 0; i < Math.floor(Math.random() * 500 / 2) * 2 + 50; i++) {
                        switch (Math.floor(Math.random(0)*4)) {
                            case 0:
                                y -= 1;
                                arr[i] = 0;
                                break;
                            case 1:
                                y += 1;
                                arr[i] = 1;
                                break;
                            case 2:
                                x -= 1;
                                arr[i] = 2;
                                break;
                            case 3:
                                x += 1;
                                arr[i] = 3;
                                break;
                        }
                    }
                    if (x === 0 && y === 0) {
                        setValid((pState) => !valid)
                        setPath((pState) => [...arr])
                        clearInterval(timer)
                    }

                    return () => {
                        clearInterval(timer)
                    }
            }, 1)  
        }
    }, [path, valid])

    // useEffect and setInterval to iterate count every n milliseconds on condition
    useEffect(() => {
        if (anim) {
            const timer = setInterval(() => {
                if (path.length > 1) {
                    setCount(pState => pState + 1)
                    updateCell(count, path)
                }    
            }, 50)

            if (count > path.length) {
                clearInterval(timer)
            }

            return () => {
                clearInterval(timer)
            }
        }    
    }, [anim, count, path])

    const handleStart = () => {
        setAnim(pState => !pState)
    }

    const handleReset = () => {
        setBoard(initBoard);
        setAnim((pState) => false);
        setCount((pState) => 0);
        setCurr((pState) => board[BOARD_SIZE/2][BOARD_SIZE/2])
        setPrev((pState) => board[BOARD_SIZE/2][BOARD_SIZE/2])
        setVisited((pState) => [])
        setPath((pState) => [])
    }

    const handlePath = () => {
        handleReset()
        setValid((pState) => !valid)
    }

    // Update the state variables for pathing
    const updateCell = (i, path) => {
        let arr = board;
        switch(path[i]) {
            case 0:
                setCurr((pState) => arr[curr.row-1][curr.col])
                setVisited((pState) => [...visited, `Left`])
                break;
            case 1:
                setCurr((pState) => arr[curr.row+1][curr.col])
                setVisited((pState) => [...visited, `Right`])
                break;
            case 2:
                setCurr((pState) => arr[curr.row][curr.col-1])
                setVisited((pState) => [...visited, `Up`])
                break;
            case 3:
                setCurr((pState) => arr[curr.row][curr.col+1])
                setVisited((pState) => [...visited, `Down`])
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
                    <button className="footer-button" onClick={handlePath}>New Path</button>
                </div>
            </div>
        </>                   
    )
}

export default Grid;