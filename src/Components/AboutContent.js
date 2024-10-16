import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react'

import react1 from "../Assests/react1.jpg"
import react2 from "../Assests/react2.webp"
const AboutContent = () => {
  return (
    <div className="About">
        <div className="left">
            <h1>Who Am I</h1>
            <p>I am a React Front End Developer. I create responsive secure websites for my clients.</p>
            <Link to = "/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="Image-Container">
                <div className="Img-Stack-Top">
                   <img src = {react1} className="img" alt="react1"/>
                </div>

                <div className="Img-Stack-Bottom">
                   <img src = {react2} className="img" alt="react2"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent