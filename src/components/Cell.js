import React from "react";

const Cell = ({type, visited}) => {
    return (
        <div className={type} style={type === "cell-end" ? {backgroundColor: `rgb(255, 100, 100,${0.2 * visited})`} : null}></div>
    )
}

export default Cell;