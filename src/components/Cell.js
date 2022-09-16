import React from "react";

const Cell = ({type, row, col}) => {
    return (
        <div className={type} row={row} col={col}></div>
    )
}

export default Cell;