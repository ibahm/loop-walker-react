import React, {useState} from "react";
import Cell from "./Cell";
import {nanoid} from "nanoid"

// Global variables

const BOARD_SIZE = 64;

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

const Grid = () => { 
    const [board, setBoard] = useState(() => initBoard());

    function beginPath() {
        let path = new Array();
        let curr = board[BOARD_SIZE/2][BOARD_SIZE/2];
        let prev = null;

        for(let i = 0; i < 1000; i++) {
            path.push(Math.floor(Math.random(0)*4))
        }

        // Every 0.2 seconds => i++

        let i = 0;
        let interval = setInterval(() => {
            switch(path[i]) {
                case 0:
                    prev = curr
                    curr = board[curr.row-1][curr.col]
                    break;
                case 1:
                    prev = curr
                    curr = board[curr.row+1][curr.col]
                    break;
                case 2:
                    prev = curr
                    curr = board[curr.row][curr.col+1]
                    break;
                case 3:
                    prev = curr
                    curr = board[curr.row][curr.col-1]
                    break;
            }
            curr.type="cell-current"
            prev.type="cell-end"
            setBoard([...board])

            console.log(path[i++]);
            
            if(i === path.length){
                clearInterval(interval);
            }
        }, 200)
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