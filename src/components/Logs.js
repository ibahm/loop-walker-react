import React from "react";

const Logs = ({count, visited, path}) => {
    return (
        <div className="side-container">
            <div className="side-header">
                <h1>Logs</h1>
                <span className="emoji" role="img" aria-label="open-file-folder">📂</span>
            </div>
            <span className="logs-steps"><b style={{color: "rgb(136, 128, 253)"}}>Steps:</b> {count}</span>
            <span className="logs-results"><b style={{color: "rgb(136, 128, 253)"}}>Generated directions:</b> {path.length > 0 ? `{${path}}` : "No data found..."}</span>
            <span className="logs-visited"><b style={{color: "rgb(136, 128, 253)"}}>Route:</b> {visited.length > 0 ? `{${visited}}` : "No data found..."}</span>
        </div>
    )
}

export default Logs;