import React from 'react'
import './TherapistDashboard.css'

import SidebarT from '../sidebarT/SidebarT';


import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    useLocation
  
  } from "react-router-dom";
import Appointment from '../appointment/Appointment';
import Profile from '../profile/Profile';
import OverviewT from '../overviewT/OverviewT';
import ProfileT from '../profileT/ProfileT';
import ScheduleT from '../scheduleT/ScheduleT';
import MyappointmentsT from '../myappointmentsT/MyappointmentsT';


const TherapistDashboard = () => {

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



    return (

        <section className='dashboard-section'>
        <div onClick={hideEditPopup} className='overlay'/>
        <div onClick={hideSidebar} className='overlay3'/>


        <SidebarT/>
        <Routes >
            <Route path="/" element={<OverviewT/>} />
            <Route path="/appointments" element={<MyappointmentsT accessToken = {accessToken}/>} />
            <Route path="/schedule" element={<ScheduleT accessToken = {accessToken}/>} />
            <Route path='/profile' element= {<ProfileT accessToken = {accessToken}/>}/>
            <Route path="*" element={<Navigate to="/"/>} />  
        </Routes>
        
        </section>
    )
}


export default TherapistDashboard

