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
                <b style={{color: "rgb(136, 128, 253)"}}>Click the 'New Path' button</b> to generate directions.
            </span>
            <span>
                The <b style={{color: "rgb(136, 128, 253)"}}>route</b> is a readable version of directions.
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