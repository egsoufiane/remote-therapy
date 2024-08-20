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


/*sidebar show and hide  */

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


/* login-form show and hide  */





const showLogin = () => {
    const logincontainer = document.querySelector('.login-container');
    const overlay = document.querySelector('.overlay');
    const registercontainer = document.querySelector('.register-pop');

   
    logincontainer.style.display = 'flex';
    overlay.style.display = 'flex';
    registercontainer.style.display = 'none';
  
}

const hideLogin = () => {
    const logincontainer = document.querySelector('.login-container');
    const overlay = document.querySelector('.overlay');



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

}

const hideRegister = () => {

    const overlay = document.querySelector('.overlay');
    const registercontainer = document.querySelector('.register-pop');


    registercontainer.style.display = 'none';
    overlay.style.display = 'none';

}






/* change navbar style when scrolling down */

window.onscroll = function() {
    var navbar = document.querySelector('.navbar-section-outer');
    let nls = document.querySelectorAll('.nav-link');
    let btn = document.querySelector('.btn');
    let menu = document.querySelector('.menu')
    let path = window.location.pathname;

    if(path!=='/register' && path !=='/login'){

        if (window.pageYOffset > 60) {
            navbar.classList.add("scrolled");
            btn.classList.add("scrolled");
            menu.classList.add("scrolled");
    
        } else {
            navbar.classList.remove("scrolled");
            btn.classList.remove("scrolled");
            menu.classList.remove("scrolled");

        }

        nls.forEach(nl => {
            if (window.pageYOffset > 60) {

                nl.classList.add("s");
            } else {
        
                nl.classList.remove("s");
            }
        });
    
    }
 
};





const Navbar = () => {
    
    const iconSize = 16;


    return(
    
    <div>
       
       <div className='overlay'></div>
        <div className='navbar-section-outer'>
        
                <nav className='navbar-section'>

                        <div className='logo-navbar'>
                            <li onClick= {showSidebar} className='menu' ><a><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                viewBox="0 -960 960 960" width="24px" 
                                fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                                </svg></a>
                            </li>
                            {/* quit menu*/ }
                            <div className='logo-container'>
                                <a href='/home'><img src={logo} alt="TherapyNow" className='logo'/></a> 
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
                                <li> <a href='/reviews' className='nav-link'><MdOutlineMedicalServices  size={iconSize} className='icon'/>Services</a></li>
                                <li><a href='/faq' className='nav-link'><FaQuestion size={iconSize} className='icon'/>FAQ</a></li>
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
                            <li><a href='/faq' className='nav-link'><FaQuestion size={iconSize} className='icon'/>FAQ</a></li>
                            <li><a href='/contact' className='nav-link'><FaEnvelope size={iconSize} className='icon'/>Contact</a> </li>
                        </ul>

                </div>

            </div>

    
            <div className='login-container cool-container'>
                <div className='login-header'>
                        <div className='login-msg'>
                            <h2 className='center'>Sign in!</h2>
                            <p className='center'>It's quick and easy!</p>
                        </div> 

                        <a onClick = {hideLogin} className='quit-login'> <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                            viewBox="0 -960 960 960" width="24px" fill="#000000">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg></a>
                        
                </div>

                <hr/>
              
                <Login/>

                <a className='center' href='#'>Forgotten password?</a>

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