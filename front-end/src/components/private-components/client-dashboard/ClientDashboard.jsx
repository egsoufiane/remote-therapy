import React from 'react'
import './ClientDashboard.css'
import Sidebar from '../sidebar/Sidebar';
import Overview from '../overview/Overview';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    useLocation
  
  } from "react-router-dom";
import Appointment from '../appointment/Appointment';
import Profile from '../profile/Profile';


const ClientDashboard = () => {

    const accessToken = localStorage.getItem('accessToken');

        //Hide Edit Popup
    const hideEditPopup = () => {
        const overlay = document.querySelector('.overlay');
        const ppoc = document.querySelector('.update-profile-container');
        overlay.style.display = 'none';
        ppoc.style.display = 'none';

    }

    //Hide sidebar
    const hideSidebar = () => {
        const overlay = document.querySelector('.overlay3');
        const sidebar = document.querySelector('.sidebar-dashboard');
        overlay.style.display = 'none';
        
        sidebar.classList.remove('slide-in');
        // const forceReflow = sidebar.offsetHeight;

        // sidebar.style.display = 'none';

        document.body.style.overflow = 'auto';

    }


    return(
        <section className='dashboard-section'>
        <div onClick={hideEditPopup} className='overlay'/>
        <div onClick={hideSidebar} className='overlay3'/>

        <Sidebar/>
        <Routes >
            <Route path="/" element={<Overview/>} />
            <Route path="/appointment" element={<Appointment/>} />
            <Route path='/profile' element={<Profile accessToken = {accessToken} />} />
            <Route path="*" element={<Navigate to="/"/>} />  
        </Routes>
        
            
        </section>
    )
}

export default ClientDashboard