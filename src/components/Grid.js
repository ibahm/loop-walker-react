import React, {useState} from "react";
import Cell from "./Cell";
import {nanoid} from "nanoid"

/*
    type = 'cell', 'cell-start', 'cell-curr', 'cell-end'
    row = i index
    col = j index
*/

class Spot{
    constructor(type, col, row) {
        this.type = type;
        this.row = row;
        this.col = col;
    }
}

// State on initial render

function initBoard() {
    let n = 64;
    let arr = new Array(n)

    for(let i = 0; i < n; i++) {
        arr[i] = new Array(n);
    }
    
    for(let i = 0; i < n; i++) {
       for(let j = 0; j < n; j++) {
        arr[i][j] = new Spot("cell", i, j);
       }
    }

    return arr;
}

const Grid = () => { 
    const [board, setBoard] = useState(() => initBoard());
    return (
        <div className="grid-cont">
            <div className ="grid">
                {board.map((spot, index) => (
                    board.map(spot => (
                        <Cell key={nanoid()} type={spot[index].type} row={spot[index].row} col={spot[index].col} board={board}/>
                    ))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                ))}
            </div>
        </div>               
    )
}

export default Grid;