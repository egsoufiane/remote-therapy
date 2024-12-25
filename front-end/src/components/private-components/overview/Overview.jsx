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



    // Timer 
    // const  timer = () => {
    //     var sec = 60;
    //     var timer = setInterval(function(){
    //         document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
    //         sec--;
    //         if (sec < 0) {
    //             clearInterval(timer);
    //         }
    //     }, 1000);
    // }

    // window.addEventListener('load',timer)


   
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
            if(res.data){
                setUpComingSession(res.data);
           
            }
        }).catch(err =>{
            console.log(err.message)
        })


    }, []);
    


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
                                <h1>{upComingSession.date}</h1>
                                <h1>{upComingSession.start_time}</h1>
                                {/* <h2 id='safeTimerDisplay'>Counter/Timer </h2> */}
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
                            <p>09 mars 2025</p>   
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