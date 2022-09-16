import React from "react";

const Cell = ({type, row, col, board}) => {
    if (row == 31 && col == 31) {
        type="cell-start";
    }


    return (
        <div className={type}></div>
    )
}

export default Cell;