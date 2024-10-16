import "./WorkCardStyles.css";

import React from 'react'
import pro1 from "../Assests/project1.png"

const Work = () => {
  return (
    <div className="WorkCard-Container">
        <h1 className="Project-Heading">Projects</h1>
        <div className="Project-Container">
            <div className="Project-Card">
                <img src={pro1} alt="pro1"/>
                <h2 className="Project-Title">Project TItle</h2>
                <div className="Pro-Details">
                    <p>This is text</p>
                    <div className="Pro-Buttons">
                        <navlink to = "remotasks.com" className ="btn">View</navlink>
                        <navlink to = "remotasks.com" className ="btn">Source</navlink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work