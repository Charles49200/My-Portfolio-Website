import "./HeroImgStyles.css";
import React from 'react'
import { Link } from "react-router-dom"
import IntroImg from "../Assests/intro-bg.jpg"

const Heroimg = () => {
    return (
        <div className="">
            <div className="Mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="Content">
                <p>HI, I'M A SOFTWARE ENGINEER</p>
                <h1>React Developer</h1>
                <div className="button-container"> {/* Added this div */}
                    <Link to="/Projects" className="btn">Projects</Link>
                    <Link to="/Contact" className="btn-Light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Heroimg