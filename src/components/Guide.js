import React from "react";
import {VscGithubAlt, VscMail, VscFolder} from "react-icons/vsc"

const Guide = () => {
    return (
        <div className="side-container">
            <div className="side-header">
                <h1>Guide</h1>
                <span className="emoji" role="img" aria-label="newspaper">📰</span>
            </div>
            <span>
                Before pressing start, make sure that the 'Array of directions' in logs is displaying an array.
                If <b style={{color: "rgb(136, 128, 253)"}}>no data is found</b>, then <b style={{color: "rgb(136, 128, 253)"}}>click the 'New Path' button</b> to generate a valid array.
            </span>
            <span>
                Always wait for an array of directions to be generated before pressing start.    
            </span>
            <span>
                The <b style={{color: "rgb(136, 128, 253)"}}>array of directions</b> is what the algorithm reads. 
                It finds the next cell to visit based on the element at the nth index.
            </span>
            <span>
                The <b style={{color: "rgb(136, 128, 253)"}}>route</b> is the relative direction the algorithm is moving to.
            </span>
            <span>
            <b style={{color: "rgb(136, 128, 253)"}}>Enjoy 😄</b>
            </span> 
            <div className="side-footer">
                <a href="https://github.com/ibahm" target="_blank" rel="noopener noreferrer">
                        <VscGithubAlt className="git-profile"/>
                </a>
                <a href="https://github.com/ibahm/loop-walker-react" target="_blank" rel="noopener noreferrer">
                        <VscFolder className="git-repo"/>
                </a>
                <a href="mailto:ahmed.ibraahm@gmail.com" className="contact"><VscMail/></a>
            </div>
        </div>
    )
}
export default Guide;