import React, {useState, useEffect} from 'react'
import './appointment.css'
import Header from '../header/Header';
import tpp from '../../../assets/832.jpg';
import ReactStars from "react-rating-stars-component";
import {
 
    useLocation,
     
  } from "react-router-dom";

  import Calendar from 'react-calendar';
  import axios from 'axios'

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";

import { jwtDecode }  from "jwt-decode";


const apiURL=process.env.REACT_APP_API_URL;


const Appointment = (props) => {
   

    //get current user id
    const accessToken = props.accessToken;
    const decodedToken = jwtDecode(accessToken);
    const userId = decodedToken.user_id; 
 
    // const location = useLocation();
    // const therapist= location.state || {}

    const numbers = Array.from({ length: 17-8+1 }, (_, i) => i + 8);
    const weekDays = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const cells = [];

    // for(let i=0; i<7; i++){
    //      cells.push(<td></td>)
    // }
    
    const [currentDate, setCurrentDate] = useState(new Date());
    const [startOfWeek, setStartOfWeek] = useState(new Date());
    const [endOfWeek, setEndOfWeek] = useState(new Date());
    const [selectedWeek, setSelectedWeek] = useState([])

    const [schedule, setSchedule] = useState({
        // "Monday":[{from: '', to:'', is_available: false}],
        // "Tuesday":[{from: '', to:'', is_available: false}],
        // "Wednesday":[{from: '', to:'', is_available: false}],
        // "Thursday":[{from: '', to:'', is_available: false}],
        // "Friday":[{from: '', to:'', is_available: false}],
        // "Saturday":[{from: '', to:'', is_available: false}],
        // "Sunday":[{from: '', to:'', is_available: false}],
    })
    const [msg, setMsg] = useState('');

    //appoitnemnt data
    const [selectedTherapist, setSelectedTherapist] = useState({});
    const [isSlotPicked, setIsSlotPicked] = useState(false);
    const [pickedHour, setPickedHour] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const [selectedWeekAppointments, setSelectedWeekAppointments] = useState({})
    const [selectedIndex, setSelectedIndex] = useState(null)

    //get selected therapist
    // useEffect(()=>{

    //     const params = {
    //         therapist_id: therapist.id,
    //     };
        
    //     axios.get(apiURL+'/users/user/', {
    //         params, // Add params here
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${props.accessToken}`
    //         }
    //     }).then(res => {
    //         console.log(res);
    //         console.log(res.data);
    
        
    //             setSelectedTherapist(res.data.profile);
    //             setMsg('success');
             
         
    
     
    //     }).catch(err => {
    //         console.log(err.message);
    //         setMsg('failed');

    //     });
    

    // },[]);

    useEffect(()=>{
        axios.get(apiURL+'/users/get_assigned_therapist/', {
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res =>{
            console.log(res);
            console.log(res.data);
            setSelectedTherapist(res.data)

        }).catch(err =>{
            console.log(err.message)
        })
        
    }, []);


    // //Get week range
    const getWeekRange = (selectedDate) =>{
        setCurrentDate(selectedDate)
        const dayIndex = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const mondayOffset = (dayIndex === 0 ? -6 : 1) - dayIndex; // Adjust for Sunday
        const startOfWeek = new Date(selectedDate);
        startOfWeek.setDate(selectedDate.getDate() + mondayOffset);
    
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);

        setStartOfWeek(startOfWeek);
        setEndOfWeek(endOfWeek)
        console.log(startOfWeek)
        console.log(endOfWeek)

    //     //to update selectedweekschedule everytime a date is selected

        const current = new Date(startOfWeek);
        const allDays = [];

        while (current <= endOfWeek){
            allDays.push(new Date(current))
            current.setDate(current.getDate() + 1);
        }

        setSelectedWeek(allDays)
    


        return { startOfWeek, endOfWeek };
    }


    useEffect(()=>{
        getWeekRange(currentDate);
        getTherapistSelectedWeekSchedule(startOfWeek, endOfWeek, selectedTherapist.user);
    }, []);

    //Get selected week schedule 
    const getTherapistSelectedWeekSchedule = (start, end, id) => {

        const params = {
            therapist_id: id,
            startOfWeek: start.toISOString().split('T')[0], // Format date as YYYY-MM-DD
            endOfWeek: end.toISOString().split('T')[0], // Format date as YYYY-MM-DD
        };
    
        axios.get(apiURL+'/users/get_therapist_schedule/', {
            params, // Add params here
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res => {
            console.log(res);
            console.log(res.data);
    
            if (res.data && Object.keys(res.data).length > 0) {
           
                    setSchedule(res.data);
                    
                 
            }

     
        }).catch(err => {
            console.log(err.message);
      

        });
    
    }

    useEffect(()=>{

        const { startOfWeek, endOfWeek } = getWeekRange(currentDate);

        if (selectedTherapist && selectedTherapist.id && startOfWeek && endOfWeek) {
            getTherapistSelectedWeekSchedule(startOfWeek, endOfWeek, selectedTherapist.user);
        }

    }, []);

    // Get booked slots
    const [selectedHour, setSelectedHour] = useState('');
    const [d, setD] = useState('')

    const getCell = (day, hour) =>{
        setSelectedHour(hour);
        setD(day);
        
    }
    useEffect(()=>{
        if(startOfWeek && endOfWeek){
            getTherapistSelectedWeekSchedule(startOfWeek, endOfWeek, selectedTherapist.user);
            const current = new Date(startOfWeek);
            const allDays = [];

                    while (current <= endOfWeek){
                        allDays.push(new Date(current))
                        current.setDate(current.getDate() + 1);
                    
                }
                
                setSelectedWeek(allDays)

        }

    }, [startOfWeek, endOfWeek, selectedTherapist]);
    


    //render slots

    const renderCellsForRow = (hour) => {

        if(selectedWeekAppointments && schedule && Object.keys(schedule).length > 0){
            return selectedWeek.map((day) => {

                // toLocaleDateString('en-US')
                const dayName= day.toLocaleDateString('en-CA', { weekday: 'long' });
                const daySlots = Array.isArray(schedule[dayName]) ? schedule[dayName] : [];
                const appointmentSlots = Array.isArray(selectedWeekAppointments[dayName]) ? selectedWeekAppointments[dayName] : [];
                let cellColor = ""; // Default empty
                let cellBorder = ""
                let className = 'slot'
    
                // Check if the current hour falls within any slot
                
                for (const slot of daySlots) {
                    const slotStart = Number(slot.from.split(":")[0]);
                    const slotEnd = Number(slot.to.split(":")[0]);
    
                    const ap = appointmentSlots.some(
                        (appointment) => Number(appointment.start_time.split(":")[0]) === hour
                    );
    
                    // const ac = appointmentSlots.some(
                    //     (appointment) => Number(appointment.start_time.split(":")[0]) === hour && appointment.status === 'confirmed'
                    // );
    
                    const myapptP = appointmentSlots.some(
                        (appointment) => Number(appointment.start_time.split(":")[0]) === hour && appointment.status === 'pending' 
                        && appointment.client === userId
                    );
    
                    const myapptC = appointmentSlots.some(
                        (appointment) => Number(appointment.start_time.split(":")[0]) === hour && appointment.status === "confirmed" &&
                        appointment.client === userId
                    );
    
    
                    if(myapptP){
                        //my pending appointments
                        // cellColor = 'rgb(104, 61, 104)';
                        cellBorder = "2px solid var(--white-color)"
                        cellColor = 'rgb(255, 152, 0)';
    
                    }else if(myapptC){
                        //my confirmed appointments
                        cellColor = 'rgb(3, 169, 244)';
                        cellBorder = "2px solid var(--white-color)"
                        
    
                      
                    }        
                    else if(ap){
                        //booked appointments
                        // cellColor = 'rgb(255, 152, 0)';
                        cellBorder = "2px solid var(--white-color)"
                        cellColor =  'rgb(150, 150, 150)';
    
                    }else{
    
                        if (hour >= slotStart && hour < slotEnd) {
                            // cellColor = slot.is_available ? '#4CAF50' : '#F44336';
                            // cellColor = slot.is_available ?  'rgba(0, 225, 0, 0.7)' : 'rgba(225, 0, 0, 0.7)';
                            cellColor = slot.is_available ?  'rgb(76, 175, 80)' : 'rgb(150, 150, 150)';
                            //selected slot
                            if(hour===selectedHour && day === d){
                                cellColor = "rgb(255, 241, 118)" ;
                               
                         }
                            
                            if(dayName === currentDate.toLocaleDateString('en-US', { weekday: 'long' })){
                                cellBorder= '3px solid var(--black-color)';
                                cellColor = slot.is_available ?  'rgb(76, 175, 80)' : 'rgb(150, 150, 150)';
                                
                                //selected slot
                                if(hour===selectedHour && day === d){
                                    cellColor = "rgb(255, 241, 118)";
                             }
        
                            }else{
                                cellBorder= '2px solid var(--white-color)';
                            }
                            break; // No need to check further slots
                        }else{
        
                            if(dayName === currentDate.toLocaleDateString('en-US', { weekday: 'long' })){
                                cellBorder= '2px solid var(--white-color)';
                                // cellColor =  'rgba(225, 0, 0, 1)';
                                cellColor =  'rgb(150, 150, 150)';
                                
                            }else{
                                cellBorder= '2px solid var(--white-color)';
                                // cellColor =  'rgba(225, 0, 0, 0.7)';
                                cellColor =  'rgb(150, 150, 150)';
                                
                            }
                            // cellColor = '#F44336';
        
                        }
        
                    }
                
    
    
                }
    
                return (
                    <td
                        id={dayName+hour}
                        style={{ backgroundColor: cellColor,
                            border: cellBorder,
                   
                        }}
                        class ={className}
                        onClick={()=>{
                            // getWeekRange(day)
                            getCell(day, hour);
                            confirmAppointment(day, hour);
                        }
                            }  
                    ></td>
                );
            });
        };
        }
   

    //navigation left right week
    const leftWeek = () => {
        // Subtract 7 days to shift the week back
            const newStartOfWeek = new Date(startOfWeek);
            newStartOfWeek.setDate(startOfWeek.getDate() - 7); // Shift by 7 days backward
    
            const newEndOfWeek = new Date(endOfWeek);
            newEndOfWeek.setDate(endOfWeek.getDate() - 7); // Shift by 7 days backward
    
            setStartOfWeek(newStartOfWeek);
            setEndOfWeek(newEndOfWeek);
            
            
    
        }
        
    const rightWeek = () =>{
    // Add 7 days to shift the week forward
        const newStartOfWeek = new Date(startOfWeek);
        newStartOfWeek.setDate(startOfWeek.getDate() + 7); // Shift by 7 days forwad

        const newEndOfWeek = new Date(endOfWeek);
        newEndOfWeek.setDate(endOfWeek.getDate() + 7); // Shift by 7 days forward

        setStartOfWeek(newStartOfWeek);
        setEndOfWeek(newEndOfWeek);

        
        }

    //pick slot
    const confirmAppointment = (day, hour) => {

        const cell= document.getElementById(day.toLocaleDateString('en-US', { weekday: 'long' })+hour);

        if(cell.style.backgroundColor === 'rgb(76, 175, 80)' || cell.style.backgroundColor === 'rgb(255, 241, 118)'){
            
            setIsSlotPicked(true);
            setPickedHour(hour);
            setSelectedDate(day);
            
        }else{
            alert('The slot you picked is unavailable, pick an other one')
        }

    }

    //confirm booking post data
    const confirm = () => {
        axios.post(apiURL+'/appointments/appointment/',{
            "date": selectedDate.toLocaleDateString('en-CA'),
            "start_time": pickedHour,
            "selected_therapist_id": selectedTherapist.user
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res => {
            console.log(res);
            console.log(res.data);
            alert(res.data.detail)
            setIsSlotPicked(false);
            if(res.data){
                //to get updated weekAppointmens with the new set apptment and display updated data
                getSelectedWeekAppointment(startOfWeek,endOfWeek,selectedTherapist.user);

            }
            
            
        }).catch(err => {
            console.log(err.message);
            alert(err.response.data.detail)
            

        });
        
    }

    //cancel booking
    const cancel = () => {
        setIsSlotPicked(false);

    }

     //get slected week appointments
     const getSelectedWeekAppointment = (start, end, id) => {

        const params = {
            therapist_id: id,
            startOfWeek: start.toISOString().split('T')[0], // Format date as YYYY-MM-DD
            endOfWeek: end.toISOString().split('T')[0], // Format date as YYYY-MM-DD
        };
    
        axios.get(apiURL+'/appointments/get_therapist_appointments/', {
            params, // Add params here
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res => {
            console.log(res);
            console.log(res.data);
    
            if (res.data && Object.keys(res.data).length > 0) {
        
                    setSelectedWeekAppointments(res.data);
            }

    
        }).catch(err => {
            console.log(err.message);
        

        });

}


    //get selected week appointments
    useEffect(()=>{
       
        // const { startOfWeek, endOfWeek } = getWeekRange(currentDate);

        if (selectedTherapist && selectedTherapist.id && startOfWeek && endOfWeek) {
            getSelectedWeekAppointment(startOfWeek, endOfWeek, selectedTherapist.user);
        }
        

    }, [selectedTherapist,startOfWeek,endOfWeek,props]);



    return(
        <section className='appointment-section section-2'>
            <Header />
             {/* <h1>Appointment</h1>
             <h2>Therapist Id: {therapist.id}</h2>
             <h3>{JSON.stringify(selectedTherapist)}</h3> */}

        {
                (isSlotPicked)? (
                    <>
                    <div className='overlay4' onClick={cancel}></div>
                        <div className='confirmation-box'>
                            {/* <div className='confirmation-box-header'>
                                <h3>Confirm therapist selection</h3>
                                <a onClick = {cancel} className='quit-login'> <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                                    viewBox="0 -960 960 960" width="24px" fill="#000000">
                                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                                </svg></a>
                            
                            </div> */}
                              <h5 onClick = {cancel} className='quit-login'> <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                                    viewBox="0 -960 960 960" width="24px" fill="#000000">
                                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                                </svg></h5>
                          
                            <h2>Confirm Appointment Information</h2>
            
                            <div className='confirmation-infos-box'>
                                <div className='confirmation-infos-unit'>
                                    <h3>Fullname:</h3>
                                    <p>{selectedTherapist.firstname+' '+selectedTherapist.lastname}</p>
                                </div>
                                <div className='confirmation-infos-unit'>
                                    <h3>Specialization:</h3>
                                    <p>{selectedTherapist.specialization}</p>
                                </div>
                                {/* <div className='confirmation-infos-unit'>
                                    <h3>Experience years:</h3>
                                    <p>{selectedTherapist.experience_years}</p>
                                </div>
                                
                                <div className='confirmation-infos-unit'>
                                    <h3>From:</h3>
                                    <p>{selectedTherapist.country}</p>
                                </div> */}
                                <div className='confirmation-infos-unit'>
                                    <h3>Date:</h3>
                                    <p>{selectedDate.toLocaleDateString('en-CA')}</p>
                                </div>
                                <div className='confirmation-infos-unit'>
                                    <h3>Start Time:</h3>
                                    <p>{pickedHour+':00'}</p>
                                </div>
                                <div className='confirmation-infos-unit'>
                                    <h3>Duration:</h3>
                                    <p>1 Hour</p>
                                </div>
                    
                                <div className='choices'>
                                    <button className='btn btn-primary' onClick={confirm}>Confirm</button>
                                    <button className='btn btn-secondary' onClick={cancel}>Cancel</button>
                                </div>
                            </div>
                    </div>
                    </>
                ):(
                    ''
                )

            }
           

             <div className='appointment-container'>
                <h1 Style='margin-top: 20px; font-size: 1.5rem;'>Schedule your next session!</h1>
                <h5>It's simple:</h5>
                <ol     Style='margin-bottom: 20px'>
                    <li Style='list-style-type: decimal;'>Select a date and time.</li>
                    <li Style='list-style-type: decimal;'>Confirm your session details.</li>
                    <li Style='list-style-type: decimal;'>Start your path to growth and healing.</li>
                </ol>
                {/* <h3 Style='color: var(--accent-color)'>Your well-being matters—let's get started!</h3> */}

                <div className='therapist-calendar'>
                    <div  className='therapist-appointment-card' Style='height: 100%;'>
                        <h2 Style='background-color: var(--bar-color); width: 100%; padding: 1rem; color:var(--bar-text-color); text-align: center; 
                        justify-self: flex-start'>Your Therapist</h2>
                        
                        {  (selectedTherapist.id)? (
                               <div className='inner-therapist-card' >
                               <div className='tppc-container'>
                                   <img src={tpp} alt='tpp' className='tppc'/>
                               </div>
                               {/* <p><h5>{(therapist.sexe === 'male')? 'Mr': 'Mrs'}</h5> {therapist.firstname+' '+therapist.lastname}</p> */}
                               <h5> {(selectedTherapist.sexe === 'male')? 'Mr. '+selectedTherapist.firstname+' '+selectedTherapist.lastname : 'Mrs. '+selectedTherapist.firstname+' '+selectedTherapist.lastname }</h5>
                               <p>{(selectedTherapist.experience_years)? selectedTherapist.experience_years+' years of experience' : ''}</p>
                               <h5>{selectedTherapist.specialization}</h5>
                           
                                   <p>             
                                   <ReactStars
                                           count={5}
                                           value={Number(selectedTherapist.ratings)}
                                           // onChange={ratingChanged}
                                           size={20}
                                           isHalf={true}
                                           edit={false}
                                           emptyIcon={<i className="far fa-star"></i>}
                                           halfIcon={<i className="fa fa-star-half-alt"></i>}
                                           fullIcon={<i className="fa fa-star"></i>}
                                           activeColor="#ffd700"
                                       /></p>
                                        <div className='therapist-cta'>
                                            <div className='cta-1 card-cta-icon'  Style='background-color: green'>
                                                < FaRegEnvelope/>
                                            </div>
                                            <div className='cta-2 card-cta-icon'>
                                                <FaRegUser/>
                                            </div>
                                            
                                        </div>

                           
                               </div>

                        ):(
                            <div className='inner-therapist-card' >
                                <p>Please pick your therapist.</p>
                                <a href="/therapists"><button className='btn btn-primary' >Choose Your Therapist</button></a>
                            </div>
                        )



                        }
                       
                
                    </div>
                    <div className='calendar' >
                        <h2 Style='width: 100%; justify-self: flex-start'>Calendar</h2>
                            <Calendar
                            value={currentDate}
                            onChange={getWeekRange}
                            className={"inside-calendar"}
                        />
                    </div>

                </div>
            
                    
                <div className='calendar-nav'>
                    <MdKeyboardArrowLeft className='calendar-nav-arrows' onClick={leftWeek}/>
                    <div className='week-range'>     
                    
                        <p>{startOfWeek.toLocaleDateString('en-CA') }</p>
                        <span>-</span>
                        <p>{endOfWeek.toLocaleDateString('en-CA') }</p>
                        
                    </div>
                
                    <MdKeyboardArrowRight className='calendar-nav-arrows' onClick={rightWeek}/>
                </div>
                    <div className='table-container'>
                        <table className='appointment-table'>
                            <tr>
                                <th></th>
                                { selectedWeek.map((weekDay, index) =>
                                    <th  

                                        Style={weekDay.toLocaleDateString('en-CA') === currentDate.toLocaleDateString('en-CA')?
                                        ('background-color:  var(--accent-color); border: 3px solid var(--black-color);'):('')}

                                        onClick={()=>{
                                            getWeekRange(weekDay);
                                            // setSelectedIndex(index);
                                            }}
                                            
                                            // style={{backgroundColor : (selectedIndex === index)? 'var(--accent-color)' : ''}}
                                        >
                                        <h5>{weekDay.toDateString('en-CA').substr(0,3)}</h5>
                                        <h5>{weekDay.toDateString('en-CA').substr(3, )}</h5>
                                    </th>
                                )
                            }
                            </tr>
                        
                            {
                               numbers.map((hour, index)=>
                                    <tr key={hour}>
                                        <td className='hourCell'><p Style='color:var(--bar-text-color);'>{hour+':00'}</p></td>
                                        
                                        {
                                        renderCellsForRow(hour)}
                                    </tr>
                                )
                        }
                                
                        
                        </table>
                    </div>
                  

                    <div className='color-maps'>
                        <div className='color-map'>
                            <div className='square available-1'></div>
                            <h5>available</h5>
                        </div>

                        <div className='color-map'>
                            <div className='square unavailable-1'></div>
                            <h5>unavailable</h5>
                        </div>
                        
                        {/* <div className='color-map'>
                            <div className='square bookedbyme'></div>
                            <h5>Your appointment</h5>
                        </div> */}

                        <div className='color-map'>
                            <div className='square pending-1'></div>
                            <h5>pending</h5>
                        </div>

                        <div className='color-map'>
                            <div className='square confirmed-1'></div>
                            <h5>confirmed</h5>
                        </div>

                        <div className='color-map'>
                            <div className='square selected-slot-1'></div>
                            <h5>selected</h5>
                        </div>

                        <div className='color-map'>
                            <div className='square notset-1'></div>
                            <h5>not set/no therapist selected</h5>
                        </div>

                    </div>
                    
            </div>
           
            
            
        
        </section>
       
    )
}

export default Appointment;

