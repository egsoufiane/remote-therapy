import React from 'react'
import './navbar.css'
import logo from '../../assets/logo6.png'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const showSidebar = () => {
   
    const menu = document.querySelector('.menu');
    const quitmenu = document.querySelector('.quit-menu');
    const sidebar = document.querySelector('.sidebar');

    menu.style.display = 'none';
    quitmenu.style.display ='flex';
    sidebar.style.display = 'flex';

}

const hideSidebar = () => {
   
    const menu = document.querySelector('.menu');
    const quitmenu = document.querySelector('.quit-menu');
    const sidebar = document.querySelector('.sidebar');

    menu.style.display = 'flex';
    quitmenu.style.display ='none';
    sidebar.style.display = 'none'; 
    

}

const Navbar = () => {
    const iconSize = 20;
    return(

    <section className='navbar-section-outer'>
            <nav className='navbar-section'>

                    <div className='logo-navbar'>

                        <li onClick= {showSidebar} className='menu'><a ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                            fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
                        <li onClick = {hideSidebar} className='quit-menu'><a > <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>

                    <div className='logo-container'>
                        <a href='/home'><img src={logo} alt="TherapyNow" className='logo'/></a> 
                    </div>
                    
                    {/* <div className='nav-links'>
                        <a href='/' className='nav-link'>Home</a>
                        <a href='/about' className='nav-link'>About</a>
                        <a href='/reviews' className='nav-link'>Reviews</a>
                        <a href='/faq' className='nav-link'>FAQ</a>
                        <a href='/contact' className='nav-link'>Contact</a>
                    </div> */}

                
                    <ul className='nav-links'>   
                        <li> <a href='/' className='nav-link'><FaHome size={iconSize} className='icon'/><h3>Home</h3></a></li>
                        <li> <a href='/about' className='nav-link'><FaUser size={iconSize} className='icon'/><h3>About</h3></a></li>
                        <li> <a href='/reviews' className='nav-link'><MdRateReview size={iconSize} className='icon'/><h3>Reviews</h3></a></li>
                        <li><a href='/faq' className='nav-link'><FaQuestion size={iconSize} className='icon'/>FAQ</a></li>
                        <li><a href='/contact' className='nav-link'><FaEnvelope size={iconSize} className='icon'/>Contact</a> </li> 
                    </ul>

                
                    </div>

                    <a href='/login'><button className='btn btn-primary'>Sign in</button></a>

            </nav>

            <div>
                    <ul className='sidebar'>
                        <li> <a href='/' className='nav-link'><FaHome size={iconSize} className='icon'/>Home</a></li>
                        <li> <a href='/about' className='nav-link'><FaUser size={iconSize} className='icon'/>About</a></li>
                        <li> <a href='/reviews' className='nav-link'><MdRateReview size={iconSize} className='icon'/>Reviews</a></li>
                        <li><a href='/faq' className='nav-link'><FaQuestion size={iconSize} className='icon'/>FAQ</a></li>
                        <li><a href='/contact' className='nav-link'><FaEnvelope size={iconSize} className='icon'/>Contact</a> </li>
                    </ul>

            </div>

       </section>
    );
}

export default Navbar;