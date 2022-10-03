import React, { useState } from "react";

const Logs = ({count, visited, path}) => {
    return (
        <div className="logs-container">
            <div className="logs-header">
                <h1>Logs</h1>
                <span role="img" aria-label="notebook">📓</span>
            </div>
            <span className="logs-steps">Steps: {count}</span>
            <span className="logs-results">Array of directions: {path.length > 0 ? `[${path}]` : "No data found..."}</span>
            <span className="logs-visited">Cells visited: {visited.length > 0 ? `{${visited}}` : "No data found..."}</span>
        </div>
    )
}

export default Logs;