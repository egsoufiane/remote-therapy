import React from 'react'
import './TherapistDashboard.css'

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
import OverviewT from '../overviewT/OverviewT';


const TherapistDashboard = () => {

    const accessToken = localStorage.getItem('accessToken');

    //Hide Edit Popup
    const hideEditPopup = () => {
    const overlay = document.querySelector('.overlay');
    const ppoc = document.querySelector('.update-profile-container');
    overlay.style.display = 'none';
    ppoc.style.display = 'none';

    }


    return (

        <section className='dashboard-section'>
        <div onClick={hideEditPopup} className='overlay'/>


        <Sidebar/>
        <Routes >
            <Route path="/" element={<OverviewT/>} />
            <Route path="*" element={<Navigate to="/"/>} />  

        </Routes>
        
            
        </section>
    )
}


export default TherapistDashboard

