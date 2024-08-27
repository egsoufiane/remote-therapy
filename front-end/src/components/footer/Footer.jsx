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
            <div className='footer-section container-m'>
                <h2 Style="color: var(--accent-color);">THEARAPYNOW</h2>
                <div className="footer-block">
                    <ul>
                        <li><a>HOME</a></li>
                        <li><a>ABOUT</a></li>
                        <li><a>SERVICES</a></li>
                        <li><a>CONTACT US</a></li>
                    </ul>
                </div>


                <div className="footer-block">
                    
                    <div className='socials'>
                        <a href=""><BsTwitter className="social_icon" size={iconSize}/></a>
                        <a href=""><FaInstagram className="social_icon" size={iconSize}/></a>
                        <a href=""><FaFacebook className="social_icon"size={iconSize}/></a>
                    </div>
                </div>

                <hr Style="background-color: var(--bar-text-color);"/>

                <div className="footer-block">
                    <h4>Copyright © {year} ES. All rights reserved.</h4>
                </div>
                
              
            </div>
        </div>
        );
}

export default Footer;