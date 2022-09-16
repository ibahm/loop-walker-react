import React, {useState} from "react";
import Cell from "./Cell";

/*
    type = 'cell', 'cell-start', 'cell-curr', 'cell-end'
    row = i index
    col = j index
*/

class Spot{
    constructor(type, row, col) {
        this.type = type;
        this.row = row;
        this.col = col;
    }
}

// Initial board state on render

function initBoard() {
    let n = 32;
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
                {board.map((spot) => (
                    board.map((spot, index) => (
                        <Cell type={spot[index].type} row={spot[index].row} col={spot[index].col}/>
                    ))
                ))}
            </div>
            <button>START</button>
        </div>               
    )
}

export default Grid;