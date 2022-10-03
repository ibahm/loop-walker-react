import React from "react";

const Guide = () => {
    return (
        <div className="side-container">
            <div className="side-header">
                <h1>Guide</h1>
                <span className="emoji" role="img" aria-label="newspaper">📰</span>
            </div>
            <span>
                Before pressing start, make sure that the 'Array of directions' in logs is displaying an array.
                If <b>no data is found</b>, then <b>click the 'New Path' button</b> to generate a valid array.
            </span>
            <span>
                Always wait for an array of directions to be generated before pressing start.    
            </span>
            <span>
                Enjoy 😄.
            </span> 
              
        </div>
    )
}

export default Guide;