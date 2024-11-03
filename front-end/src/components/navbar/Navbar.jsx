import React from 'react'
import './navbar.css'
import logo from '../../assets/logo6.png'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { MdOutlineMedicalServices  } from "react-icons/md";
import { click } from '@testing-library/user-event/dist/click';
import { BsWindowSidebar } from 'react-icons/bs';
import Login from '../login/Login';
import Register from '../register/Register';
import { useEffect } from 'react';
import { FaBars } from "react-icons/fa6";



/*sidebar show and hide  */

const showSidebar = () => {
   
    const menu = document.querySelector('.menu');
    const quitmenu = document.querySelector('.quit-menu');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay2');

    menu.style.display = 'none';
    quitmenu.style.display ='flex';
    sidebar.style.display = 'flex';
    overlay.style.display = 'flex';

    const forceReflow = sidebar.offsetHeight;

    // sidebar.classList.add('slide-in');
    sidebar.classList.add('slide-in');
}



const hideSidebar = () => {
   
    const menu = document.querySelector('.menu');
    const quitmenu = document.querySelector('.quit-menu');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay2');

 
    overlay.style.display = 'none';

    // Force a reflow to ensure the animation happens
    // const forceReflow = sidebar.offsetHeight;

    // sidebar.classList.remove('slide-in');
    sidebar.classList.remove('slide-in');

    menu.style.display = 'flex';
    quitmenu.style.display ='none';
      
}



/* login-form show and hide  */


const showLogin = () => {
    const logincontainer = document.querySelector('.login-container');
    const overlay = document.querySelector('.overlay');
    const registercontainer = document.querySelector('.register-pop');

   
    logincontainer.style.display = 'flex';
    overlay.style.display = 'flex';
    registercontainer.style.display = 'none';

    const forceRefloew = logincontainer.offsetHeight;
    logincontainer.classList.add('slide-in');
    registercontainer.classList.remove('slide-in');
  
}

const hideLogin = () => {
    const logincontainer = document.querySelector('.login-container');
    const registercontainer = document.querySelector('.register-pop');
    const overlay = document.querySelector('.overlay');

    logincontainer.classList.remove('slide-in');
    registercontainer.classList.remove('slide-in');

    logincontainer.style.display = 'none';
    overlay.style.display = 'none';
    



}

const showRegister = () => {
    const logincontainer = document.querySelector('.login-container');
    const overlay = document.querySelector('.overlay');
    const registercontainer = document.querySelector('.register-pop');


    registercontainer.style.display = 'flex';
    overlay.style.display = 'flex';
    logincontainer.style.display = 'none';

    const forceReflow = registercontainer.offsetHeight;
    registercontainer.classList.add('slide-in');
    logincontainer.classList.remove('slide-in');

}

const hideRegister = () => {
    const logincontainer = document.querySelector('.login-container');
    const overlay = document.querySelector('.overlay');
    const registercontainer = document.querySelector('.register-pop');


    registercontainer.style.display = 'none';
    overlay.style.display = 'none';
    registercontainer.classList.remove('slide-in');
    logincontainer.classList.remove('slide-in');

}

const hidePopup = () => {

    const overlay = document.querySelector(".overlay");
    const logincontainer = document.querySelector('.login-container');
    const registercontainer = document.querySelector('.register-pop');

    registercontainer.style.display = 'none';
    logincontainer.style.display = 'none';
    overlay.style.display = 'none';

    logincontainer.classList.remove('slide-in');
    registercontainer.classList.remove('slide-in');


}




/* change navbar style when scrolling down */

window.onscroll = function() {
    var navbar = document.querySelector('.navbar-section-outer');
    let nls = document.querySelectorAll('.nav-link');
    let btn = document.querySelector('.btn');
    let menu = document.querySelector('.menu');
    let logo = document.querySelector('.logo');
    let logoE = document.querySelector('.logo-e');

    let path = window.location.pathname;

    if(navbar){

        if (window.pageYOffset > 60) {
            navbar.classList.add("scrolled");
            btn.classList.add("scrolled");
            menu.classList.add("scrolled");
            logo.classList.add("scrolled");
            // logoE.style.fill = 'var(--accent-color)'; 
    
        } else {
            navbar.classList.remove("scrolled");
            btn.classList.remove("scrolled");
            menu.classList.remove("scrolled");
            logo.classList.remove("scrolled");
            // logoE.style.fill = 'var(--text-color)'; 

        }

        nls.forEach(nl => {
            if (window.pageYOffset > 60) {

                nl.classList.add("scrolled");
            } else {
        
                nl.classList.remove("scrolled");
            }
        });
    
    }
 
};

// style navbar based on current path

window.onload = () => {

    const links = document.querySelectorAll('.nav-link');
    
    links.forEach((link) => {
        
        if(link.getAttribute('href') === window.location.pathname){
            link.classList.add('selected');
        }
    });
}




const Navbar = () => {
    
    const iconSize = 16;



    return(
    
    <div>
       
       <div className='overlay' onClick={hidePopup}></div>
       <div className='overlay2' onClick={hideSidebar}></div>
       <div className='navbar-section-outer'>
        
                <nav className='navbar-section slide-up-element'>

                    

                        <div className='logo-navbar'>

                            <li className='menu' onClick={showSidebar}><a><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                        viewBox="0 -960 960 960" width="24px" 
                                        fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                                        </svg></a>
                            </li>
                              
                                {/* quit menu*/ }
                                <div className='logo-container'>
                                    {/* <a href='/home'><img src={logo} alt="TherapyNow" className='logo'/></a>  */}
                                    <a href="/home"><h2 className='logo'>TH<FaBars className='logo-e' fill="var(--accent-color)"/>RAPYNOW</h2></a>

                                </div>
                            
                        </div>
                                
                            {/* <div className='nav-links'>
                                <a href='/' className='nav-link'>Home</a>
                                <a href='/about' className='nav-link'>About</a>
                                <a href='/reviews' className='nav-link'>Reviews</a>
                                <a href='/faq' className='nav-link'>FAQ</a>
                                <a href='/contact' className='nav-link'>Contact</a>
                            </div> */}

                        
                        <ul className='nav-links'>   
                                <li> <a id='myLink' href='/' className='nav-link'><FaHome size={iconSize} className='icon'/>Home</a></li>
                                <li> <a href='/about' className='nav-link'><FaUser size={iconSize} className='icon'/>About</a></li>
                                <li> <a href='/reviews' className='nav-link'><MdRateReview size={iconSize} className='icon'/>Reviews</a></li>
                                <li> <a href='/services' className='nav-link'><MdOutlineMedicalServices  size={iconSize} className='icon'/>Services</a></li>
                                <li><a href='/faq' className='nav-link'><FaQuestion size={iconSize} className='icon'/>FAQ</a></li>
                                <li><a href='/apply' className='nav-link'><FaUser size={iconSize} className='icon'/>Apply</a></li>
                                <li><a href='/contact' className='nav-link'><FaEnvelope size={iconSize} className='icon'/>Contact</a> </li> 
                        </ul>

                        
                        <a onClick={showLogin} className='show-login'>
                                <button className='btn'>Sign in</button>
                        </a>

                </nav>
        

                <div>
                        <ul className='sidebar'>
                            <li onClick = {hideSidebar} className='quit-menu'><a > <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                                viewBox="0 -960 960 960" width="24px" fill="#000000">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                                </svg></a>
                            </li>

                            <li> <a href='/' className='nav-link'><FaHome size={iconSize} className='icon'/>Home</a></li>
                            <li> <a href='/about' className='nav-link'><FaUser size={iconSize} className='icon'/>About</a></li>
                            <li> <a href='/reviews' className='nav-link'><MdRateReview size={iconSize} className='icon'/>Reviews</a></li>
                            <li> <a href='/services' className='nav-link'><MdOutlineMedicalServices  size={iconSize} className='icon'/>Services</a></li>
                            <li><a href='/faq' className='nav-link'><FaQuestion size={iconSize} className='icon'/>FAQ</a></li>
                            <li><a href='/apply' className='nav-link'><FaUser size={iconSize} className='icon'/>Apply</a></li>
                            <li><a href='/contact' className='nav-link'><FaEnvelope size={iconSize} className='icon'/>Contact</a> </li>
                        </ul>

                </div>

            </div>

    
            <div className='login-container cool-container'>
                <div className='login-header'>
                        <div className='login-msg'>
                            <h2 className='center'>Sign in!</h2>
                        </div> 

                        <a onClick = {hideLogin} className='quit-login'> <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                            viewBox="0 -960 960 960" width="24px" fill="#000000">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg></a>

                </div>
              
                <Login/>

                

                <hr/>
                
                <p className='center' >New user? <a onClick={showRegister}>Create an account</a></p>
            </div>

{/*register pop up */}

            <div className='register-pop cool-container'>
                <div className='login-header'>
                        <div className='login-msg'>
                            <h2 className='center'>Register Now!</h2>
                            <p className='center'>It's quick and easy</p>
                        </div> 

                        <a onClick = {hideRegister} className='quit-register'> <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                            viewBox="0 -960 960 960" width="24px" fill="#000000">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg></a>
                        
                </div>

                <hr/>

                <Register showLogin={showLogin}/>


           
            </div>
       
    
    </div>

    );
}

export default Navbar;