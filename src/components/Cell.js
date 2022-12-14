import React from "react";

const Cell = ({type, visited}) => {
    return (
        <div className={type} style={type === "cell-end" ? {backgroundColor: `rgb(136, 128, 253,${0.1 * visited})`} : null}></div>
    )
}

export default Cell;