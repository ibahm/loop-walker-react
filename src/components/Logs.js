import React, { useState } from "react";

const Logs = ({count, visited, path}) => {
    return (
        <div className="side-container">
            <div className="side-header">
                <h1>Logs</h1>
                <span className="emoji" role="img" aria-label="open-file-folder">📂</span>
            </div>
            <span className="logs-steps">Steps: {count}</span>
            <span className="logs-results">Array of directions: {path.length > 0 ? `{${path}}` : "No data found..."}</span>
            <span className="logs-visited">Route: {visited.length > 0 ? `{${visited}}` : "No data found..."}</span>
        </div>
    )
}

export default Logs;