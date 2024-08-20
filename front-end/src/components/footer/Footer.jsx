import React from "react";
import './footer.css';
import {BsTwitter} from 'react-icons/bs';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";



const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    const iconSize = 20;
    return(

        <div className="footer-section-outer">
            <div className='footer-section'>
                <h4>Copyright © {year} ES. All rights reserved.</h4>
                <div className='socials'>
                    <a href=""><BsTwitter className="social_icon" size={iconSize}/></a>
                    <a href=""><FaInstagram className="social_icon" size={iconSize}/></a>
                    <a href=""><FaFacebook className="social_icon"size={iconSize}/></a>
                </div>
            </div>
        </div>
        );
}

export default Footer;