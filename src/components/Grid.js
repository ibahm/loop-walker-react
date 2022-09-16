import React, {useState} from "react";
import Cell from "./Cell";

const Grid = () => { 

    const [board, setBoard] = useState([]);

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

    return (
        <div className="grid-cont">
            <div className ="grid">
                <Cell/>
            </div>
            <button>START</button>
        </div>               
    )
}

export default Grid;