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
                If <b style={{color: "rgb(136, 128, 253)"}}>no data is found</b>, then <b style={{color: "rgb(136, 128, 253)"}}>click the 'New Path' button</b> to generate a valid array.
                Wait for the algorithm to generate an array.
            </span>
            <span>
                The <b style={{color: "rgb(136, 128, 253)"}}>array of directions</b> is what the algorithm reads. 
                It finds the next cell to visit based on the element at the nth index. Think of it as a list of directions to turn.
            </span>
            <span>
                The <b style={{color: "rgb(136, 128, 253)"}}>route</b> is the relative direction the algorithm is moving in.
            </span>
            <span>
            <b style={{color: "rgb(136, 128, 253)"}}>0 = left, 1 = right, 2 = up, 3 = down</b>
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