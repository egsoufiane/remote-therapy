import React, {useState, useEffect} from 'react'
import './overview.css'
import axios from 'axios'
import pp from '../../../assets/profile.jpg'
import { FaRegEnvelope } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Header from '../header/Header';



const Overview = () => {


    const [fullName, setfullName] = useState('');

 

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        axios.get('http://127.0.0.1:8000/users/username/',{
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(res => {
            console.log(res)
            console.log(res.data)
            let fn = res.data.firstname;
            let ln = res.data.lastname
            fn = fn.charAt(0).toUpperCase() + fn.slice(1);
            ln= ln.charAt(0).toUpperCase() + ln.slice(1);
            setfullName(fn+' '+ln);

        }).catch(err => {

        })
    },[]);



    // Timer 
    const  timer = () => {
        var sec = 60;
        var timer = setInterval(function(){
            document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
            }
        }, 1000);
    }

    window.addEventListener('load',timer)


    return(

            <section className='section-2'>
            {/* <header className='dashboard-header'>
                <span className='search-container'>
                    <CiSearch/><input type="text" id='search-box' placeholder='search' className='search'/>
                </span>
                
                <div className='profile-header'>
                    <div className='profile-img-container'>
                        <img src={pp} alt='profile-picture' className='profile-picture'/>
                    </div>
                    <h3>{fullName}</h3>
                </div>
            </header> */}
            <Header/>
            <section className='client-content'>
                <h1 Style='font-size:2rem'>Welcome</h1>
                <h2>{fullName}</h2>
                <div className='dashboard-cards'>
                    <div className='client-card card'>
                        <h2>Upcoming Session</h2>
                        <p>02 February 2025</p>
                        <p>9:00PM</p>
                        <h2 id='safeTimerDisplay'>Counter/Timer </h2>
                        <div className='cta'>
                            <button className='btn btn-primary'>Join Session</button>
                            <button className='btn btn-secondary'>Cancel</button>
                        </div>
    
                    </div>
                    <div className='client-card therapist-card card'>
                        
                            <h2 Style='align-self:center'>My Therapist</h2>
                            <a href='/' className='card-profile'>
                                <div className='profile-img-container'>
                                    <img src={pp} alt='profile-picture' className='profile-picture'/>
                                </div>
                                <h3>Dr. FirstName Lastname </h3>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repudiandae recusandae 
                                eveniet dolorem, quaerat laborum, magni deleniti sunt rerum voluptatum aut 
                                consequuntur! Sed reiciendis voluptates distinctio perspiciatis commodi sit labore.
                            </p>
                        
                            <h5>⭐⭐⭐⭐⭐</h5>
                            <FaRegEnvelope/>
                        
                    </div>

                </div>

                <h1 Style='align-self:flex-start; font-size:1.5rem; padding-left: 1rem;'>Your Therapy Snapshot:</h1>
                <div className='therapy-snapshot'>
                    
                    <div className='snap'>
                        <h3>Current Therapist:</h3>
                        <p>Name: <b>Fullname</b></p>
                        <p>Specialization: <b>Therapist's expertise or area of focus</b></p>
                    </div>
                    <div className='snap'>
                        <h3>Session summary:</h3>
                        <p>Total Sessions Completed: <b>9</b></p>
                        <p>Upcoming Session: <b>09 mars 2025</b></p>
                    </div>
                    
                    <div className='snap'>
                        <h3>Account Status:</h3>
                        <p>Next Billing Date: <b>09/12</b></p>
                        <p>Upcoming Session: <b>09 mars 2025</b></p>
                    </div>
                    <div className='snap'>
                        <h3>Contact & Support:</h3>
                        <p>Support Contact: <b>support@therapynow.com</b></p>
                        <p>Emergency Assistance: <b>9009000</b></p>
                    </div>






                    {/* <p>Current Therapist: <b>Fullname</b></p>
                    <p>Sessions: <b>8</b></p>
                    <p>Support contact: <b>support@therapynow.com</b></p> */}

                </div>
                
            </section>

            </section>

    )
}


export default Overview