import React from 'react'
import './sidebar.css'
import { FaBars } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { FaPen } from "react-icons/fa"; 
import { IoMdLogOut } from "react-icons/io";


const Sidebar = () => {

    const logOut = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('isClient');
        localStorage.removeItem('isTherapist');
        window.location.href='/'
    }


    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar-dashboard');
        const overlay = document.querySelector('.overlay3');
        sidebar.classList.remove('slide-in');
        document.body.style.overflow = 'auto';
        overlay.style.display = 'none';

        // sidebar.style.display = 'none';
        sidebar.classList.remove('slide-in');
       
    }


    return(
            <sidebar className='sidebar-dashboard'>
            <div className='sidebar-top'>
                    <a href="/"><h2 className='logo-log'>TH<FaBars className='logo-e' fill="var(--accent-color)"/>RAPYNOW</h2></a>
                    <li onClick = {hideSidebar} className='quit-menu'><a > <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                                viewBox="0 -960 960 960" width="24px" fill="var(--bar-text-color)">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                                </svg></a>
                                </li>
                    

            </div>
            <ul>

                <li><a href='/' className='nav-link'><LuLayoutDashboard/>Overview</a></li>
                <li><a href='/appointment' className='nav-link'><FaPen/>Schedule Appointment</a></li>
                <li><a href='/myappointments' className='nav-link'><CiCalendar/>My Appointments</a></li>
                <li><a href='/sessions' className='nav-link'><MdOutlineVideoCall/>Sessions</a></li>
                <li><a href='/therapists' className='nav-link'><FaClipboardList/>Therapists</a></li>
                <li><a href='/messages' className='nav-link'><FaRegEnvelope/>Messages</a></li>
                <li><a href='/profile' className='nav-link'><FaUser/>Profile</a></li>
                <li><a href='/settings' className='nav-link'><IoSettingsOutline/>Settings</a></li>
                <li onClick={logOut}><a className='nav-link' Style='color: red;'><BiLogOut/>Logout</a></li>
                {/* <button id='logout' onClick={logOut} className='btn btn-primary'>Logout</button> */}
            </ul>
            </sidebar>
    )
}


export default Sidebar;