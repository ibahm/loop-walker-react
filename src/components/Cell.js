import React, {useState} from "react";
import Grid from "./Grid";

const Cell = ({type, row, col, board}) => {
    return (
        <div className={type}></div>
    )
}

export default Cell;