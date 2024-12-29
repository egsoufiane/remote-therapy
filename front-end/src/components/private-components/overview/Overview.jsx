import React, {useState, useEffect} from 'react'
import './overview.css'
import axios from 'axios'
import pp from '../../../assets/profile.jpg'
import { FaRegEnvelope } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Header from '../header/Header';
import Rating from '@mui/material/Rating';


import { Skeleton } from '@mui/material';

const apiURL=process.env.REACT_APP_API_URL;

const Overview = (props) => {


    const [fullName, setfullName] = useState('');
    const [honorific, sethonorific] = useState('');
    const [isLoading,setisLoading] = useState(true);
    const [selectedTherapist, setSetecltedTherapist] = useState({})
    const [upComingSession, setUpComingSession] = useState({})
    const [counter, setCounter] = useState(null)
    const [remainingDays, setRemainingDays] = useState(null)


    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        axios.get(apiURL+'/users/username/',{
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

            sethonorific(res.data.sexe === 'male'? 'Mr' : 'Mrs');

            setisLoading(false);

        }).catch(err => {

        })
    },[]);



    //get selected therapist
    useEffect(()=>{
        axios.get(apiURL+'/users/get_assigned_therapist/', {
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res =>{
            console.log(res);
            console.log(res.data);
            setSetecltedTherapist(res.data)

        }).catch(err =>{
            console.log(err.message)
        })
        
    }, []);

    //get upcoming session data
    useEffect(()=>{
        axios.get(apiURL+'/appointments/get_upcoming_session/',{
            headers:{
                'content-type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res=>{
            console.log(res.data);
            if(Object.keys(res.data).length>0){
                setUpComingSession(res.data);
            
            }
        }).catch(err =>{
            console.log(err.message)
        })


    }, []);
   

    //run timer whenver upComingSession updates
    // useEffect(()=>{

        
    //     // Timer 
    //     const  timer = () => {
    
    //         if (!upComingSession){
    //             return;
    //         }else{
    //             // console.log("upComingSession:", upComingSession);
    //             // var sec = null;
    //             // let appDate = new Date(upComingSession.date);
    //             // let startTime = null;
    //             // let currentDate = new Date();

    //             if (upComingSession.start_time) {
    //                 // Get the start time (in HH:MM:SS format)
    //                 const [startHour, startMinute, startSecond] = upComingSession.start_time.split(":").map(Number);
                
    //                 // Create Date objects for the start time and current time
    //                 let currentDate = new Date();
    //                 let appDate = new Date(upComingSession.date); // Copy current date to match day and time
    //                 appDate.setHours(startHour, startMinute, startSecond, 0); // Set app date to start time

    //                 console.log('Appointment Date: '+appDate);
    //                 console.log('current date: '+currentDate)

    //                 if(appDate <= currentDate){
    //                     document.getElementById('safeTimerDisplay').innerHTML = "The appointments has passed.";
    //                 }else{
    //                     //Days left
    //                     const a = appDate,
    //                     b = currentDate,
    //                     difference = dateDiffInDays(a, b);
    //                     console.log('days difference: '+difference )
    //                     setRemainingDays(difference)
                        
    //                     // Get current time in seconds
    //                     // const currentTimeInSeconds = Math.floor(currentDate.getTime() / 1000);
                        
    //                     // // Get the session start time in seconds
    //                     // const startTimeInSeconds = Math.floor(appDate.getTime() / 1000);
                        
    //                     // // Calculate the difference between current time and start time
    //                     // let sec = Math.abs(currentTimeInSeconds - startTimeInSeconds); // Absolute difference in seconds

    //                     let sec = Math.floor((appDate.getTime()-currentDate.getTime()) / 1000)
                    
    //                     var timer = setInterval(function () {
    //                         // Calculate hours, minutes, and seconds
    //                         let hours = Math.floor(sec / 3600); // Calculate hours
    //                         let minutes = Math.floor((sec % 3600) / 60); // Calculate minutes
    //                         let seconds = sec % 60; // Calculate seconds
                    
    //                         // Format time as h:m:s
    //                         let timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                            
    //                         // Display the formatted time
    //                         document.getElementById('safeTimerDisplay').innerHTML = timeString;
                    
    //                         sec--; // Decrement the total remaining time in seconds
                    
    //                         if (sec < 0) {
    //                             clearInterval(timer); // Stop the timer once the countdown reaches 0
    //                         }
    //                     }, 1000); // Update the timer every second
    //                 }
                
                 
    //             }
                
           

    //         }
        
    //     }
  
    //     timer();

    // }, [upComingSession]); 

    //Calculate differecne between two days
    const dateDiffInDays = (a, b)=> {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      
        return Math.abs(Math.floor((utc2 - utc1) / _MS_PER_DAY));
      }

      useEffect(()=>{

        if(!upComingSession){
            return;
        }else{
            if(upComingSession.start_time){
                const [startHour, startMinute, startSecond] = upComingSession.start_time.split(':').map(Number)
                let currentDate = new Date();
                let appDate = new Date(upComingSession.date);

                appDate.setHours(startHour, startMinute, startSecond, 0);

                // Get the difference in milliseconds 
                let sec = Math.floor((appDate.getTime() - currentDate.getTime()) / 1000)

                if(sec<0){
                        document.getElementById('safeTimerDisplay').innerHTML = "The appointments has passed.";
                }else{
                        var timer = setInterval(function () {
                        // Calculate hours, minutes, and seconds
           
                        let days = Math.floor(sec / (3600 * 24));
                        let hours = Math.floor((sec % (3600 * 24)) / 3600);// Calculate hours
                        let minutes = Math.floor((sec % 3600) / 60); // Calculate minutes
                        let seconds = sec % 60; // Calculate seconds
                        
                        const dayString = (days===1)? ' day' : ' days'
                        // Format time as h:m:s
                        let timeString = `${days} ${dayString} ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                        
                        // Display the formatted time
                        document.getElementById('safeTimerDisplay').innerHTML = timeString;
                
                        sec--; // Decrement the total remaining time in seconds
                
                        if (sec < 0) {
                            clearInterval(timer); // Stop the timer once the countdown reaches 0
                        }
                    }, 1000); // Update the timer every second

                }
    

            }
          

        }


      },[upComingSession]);


    return(

            <section className='section-2'>
            <Header/>

            <section className='client-content'>
       
                <h1 Style='font-size:2rem'>Welcome</h1>
                {isLoading ? (
                    <Skeleton variant='text' width={220} /> 
                ) : ( 
                    <h2>{honorific+' '+fullName}</h2>
                )}

                
                    <div className='dashboard-cards'>

                        {
                            (Object.keys(upComingSession).length>0)? (      
                                <div className='client-card card'>
                                <h2>Upcoming Session</h2>
                                <h3>{upComingSession.date}</h3>
                                <h3>{upComingSession.start_time}</h3>
                                <div className='appointment-counter'>
                                    <h1 id='safeTimerDisplay'> </h1>
                                </div>

                                
                                <div className='cta'>
                                    <button className='btn btn-primary'>Join Session</button>
                                    <button className='btn btn-secondary'>Cancel</button>
                                </div>

                            </div>
                        ):
                                    ( <div className='client-card card'>
                                            <h3>No Upcoming Session</h3>
                                            <a href='/appointment' ><button className='btn btn-primary'>Book Appointment</button></a>
                                        </div>)
                            
                        }


                    {
                        (Object.keys(selectedTherapist).length>0)? (
                            <div className='client-card therapist-card card'>
                        
                            <h2 Style='align-self:center'>My Therapist</h2>
                            <a href='/' className='card-profile'>
                                <div className='profile-img-container'>
                                    <img src={pp} alt='profile-picture' className='profile-picture'/>
                                </div>
                                <h3>{(selectedTherapist.sexe === 'male')?  'Mr ': 'Mrs ' } {selectedTherapist.firstname+' '+selectedTherapist.lastname} </h3>
                            </a>
                            <p>
                               {selectedTherapist.bio}
                            </p>
                        
                            <Rating Style='color: yellow;' name="half-rating-read" defaultValue={selectedTherapist.ratings} precision={0.5} readOnly />
                            <FaRegEnvelope/>
                        
                        </div>

                        ):(
                            <div className='client-card therapist-card card'>
                                <h3>No therapist selected yet</h3>
                                <a href='/therapists'><button className='btn btn-primary'>Choose Your Therapist</button></a>
                            </div>
                        )
                    }
             

                </div>

                <h1 Style='align-self:center; font-size:1.5rem; width: 95%;'>Your Therapy Snapshot:</h1>

                <div className='therapy-snapshot'>
                    
                    <div className='snap'>
                        <h3>Current Therapist:</h3>
                        <div className='snap-info-unit'>
                            <h5>Name: </h5><p>{selectedTherapist.firstname+' '+selectedTherapist.lastname}</p>
                        </div>
                        <div className='snap-info-unit'>
                            <h5>Specialization: </h5>
                            <p>{selectedTherapist.specialization}</p>
                        </div>
                    </div>
                    <div className='snap'>
                        <h3>Session summary:</h3>
                        <div className='snap-info-unit'>
                            <h5>Total Sessions Completed: </h5>
                            <p>9</p>
                        </div>
                        <div className='snap-info-unit'>
                            <h5>Upcoming Session:</h5>
                            <p>{upComingSession.date}</p>   
                        </div>
                    </div>
                    
                    <div className='snap'>
                        <h3>Account Status:</h3>
                        <div className='snap-info-unit'>
                            <h5>Next Billing Date:</h5>
                            <p>09/12</p> 
                        </div>


                    </div>
                    <div className='snap'>
                        <h3>Contact & Support:</h3>
                        <div className='snap-info-unit'>
                            <h5>Support Contact:</h5>
                            <p>support@therapynow.com</p>   
                        </div>
                        <div className='snap-info-unit'>
                            <h5>Emergency Assistance:</h5>
                            <p>9009000</p>   
                        </div>
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