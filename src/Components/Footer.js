import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaFacebook, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
        <div className="Footer-Container">
            <div className="Left">
                <div className="Location">
                    <FaHome size={20} style={{color:"white",marginRight: "2rem"}} />
                    <div>
                        <p>568 Nyayo Estate.</p>
                        <p>Nairobi.</p>
                    </div>
                </div>

                <div className="Phone">
                    <FaPhone size={20} style={{color:"white",marginRight: "2rem"}} />
                    0790217993
                </div>

                <div className="Email">
                    <FaMailBulk size={20} style={{color:"white",marginRight: "2rem"}} />
                    tarzancharles@gmail.com
                </div>
            </div>

            <div className="Right">
                <h4>About The Company</h4>
                <p>This is me Charles Irungu. CEO and founder of TarzCorp Technologies. I enjoy discussing new projects and designing challenges.</p>
                <div className="Social">
                    <FaFacebook size={30} style={{color:"white",marginRight: "1rem"}} />
                    <FaTwitter size={30} style={{color:"white",marginRight: "1rem"}} />
                    <FaLinkedin size={30} style={{color:"white",marginRight: "1rem"}} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;