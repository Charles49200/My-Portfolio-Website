import "./NavbarStyles.css";
import{FaBars, FaTimes} from "react-icons/fa"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
function Navbar() {

    const[Click,setClick] = useState(false);
    const handleClick =() => setClick (!Click);

    const [color,setColor] = useState(false);
    const changeColor =() =>{
        if (window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll",changeColor);
    return (
        <div className= {color? "header header-bg":"header"}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={Click ? "NavMenu active":"NavMenu"}>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/About">About</Link>
                </li>
                <li>
                    <Link to ="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to ="/Contact">Contact</Link>
                </li>
            </ul>
            <div className = "hamburger" onClick = {handleClick}>
                {Click ? (<FaTimes size ={20} style={{color: "white"}}/>) : (<FaBars size ={20} style={{color: "white"}}/>)}
                
                
            </div>
        </div>
    );
}

export default Navbar