import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './scheduleT.css';
import Header from '../header/Header';
import Calendar from 'react-calendar';
import Weekdays from 'react-calendar/dist/esm/MonthView/Weekdays.js';
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";
import ReactLoading from 'react-loading';
import { Skeleton } from '@mui/material';
import { MdBorderColor, MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight} from "react-icons/md";

const apiURL=process.env.REACT_APP_API_URL;


const ScheduleT = (props) => {


    // Create an array from 1 to 17
    const numbers = Array.from({ length: 17-8+1 }, (_, i) => i + 8);
    // const numbers = Array.from({ length: 24 }, (_, i) => i++);
    const days = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const [schedule, setSchedule] = useState({
        "Monday":[{from: '', to:'', is_available: false}],
        "Tuesday":[{from: '', to:'', is_available: false}],
        "Wednesday":[{from: '', to:'', is_available: false}],
        "Thursday":[{from: '', to:'', is_available: false}],
        "Friday":[{from: '', to:'', is_available: false}],
        "Saturday":[{from: '', to:'', is_available: false}],
        "Sunday":[{from: '', to:'', is_available: false}],
    })

    const [recSchedule, setRecSchedule] = useState({
        "Monday":[{from: '', to:'', is_available: false}],
        "Tuesday":[{from: '', to:'', is_available: false}],
        "Wednesday":[{from: '', to:'', is_available: false}],
        "Thursday":[{from: '', to:'', is_available: false}],
        "Friday":[{from: '', to:'', is_available: false}],
        "Saturday":[{from: '', to:'', is_available: false}],
        "Sunday":[{from: '', to:'', is_available: false}],
    })

    const [deletedSchedule, setdeletedSchedule] = useState({});
    const [deletedSpecialSchedule, setdeletedSpecialSchedule] = useState({});
    
    const [success, setSuccess] = useState(0);
    const [loading, setLoading] = useState(true);

    const [currentDate, setCurrentDate] = useState(new Date()); // Tracks selected day
    const [startOfWeek, setStartOfWeek] = useState(new Date());
    const [endOfWeek, setendOfWeek] = useState(new Date());
    const [weekDays, setWeekDays] = useState([]);
    
    const [specialSchedule, setSpecialSchedule] = useState({
        // [currentDate.toLocaleDateString('en-CA')]:[{
        //     from: '',
        //     to: '',
        //     is_available: false
        // }]
    
    })

    const [specificDaySchedule, setSpecificDaySchedule] = useState({
        [currentDate.toLocaleDateString('en-CA')]:[{
            from: '',
            to: '',
            is_available: false
        }]
    })


    //Recurring Schedule Skeleton
    let recurringSkeletons = []
    const reccuringSkeleton =   <div className='range-container'>  
                                    <Skeleton variant='text' width={80} length={30} animation="wave" />
                                    <div className='recurring-schedule-inputs'> 
                                        <Skeleton variant="rectangular" width={100} length={60} animation="wave" />
                                        <Skeleton variant="text" width={20} animation="wave" />
                                        <Skeleton variant="rectangular" width={100} length={60} animation="wave" />
                                        <Skeleton variant="rounded" width={30} length={20} animation="wave" />
                                        <Skeleton variant="text" width={30} animation="wave"  />
                                    </div>
                                    <Skeleton variant='rounded' width={20} length={20} />
                                    <hr/>
                                </div>

    //multiply skeleton template
    for(let i=0; i<7; i++){
        recurringSkeletons.push(reccuringSkeleton)
    }

        const renderCellsForRow = (hour) => {
            return weekDays.map((day) => {

                const dayName= day.toLocaleDateString('en-US', { weekday: 'long' });
                const daySlots = Array.isArray(schedule[dayName]) ? schedule[dayName] : [];
                let cellColor = ""; // Default empty
                let cellBorder = ""
    
                // Check if the current hour falls within any slot
                for (const slot of daySlots) {
                    const slotStart = Number(slot.from.split(":")[0]);
                    const slotEnd = Number(slot.to.split(":")[0]);
                    
                    

                    if (hour >= slotStart && hour < slotEnd) {
                        // cellColor = slot.is_available ? '#4CAF50' : '#F44336';
                        cellColor = slot.is_available ?  'rgba(0, 225, 0, 0.7)' : 'rgba(225, 0, 0, 0.7)';
                        
                        
                        if(dayName === currentDate.toLocaleDateString('en-US', { weekday: 'long' })){
                            cellBorder= '3px solid var(--black-color)';
                            cellColor = slot.is_available ?  'rgba(0, 225, 0, 1)' : 'rgba(225, 0, 0, 1)';

                        }else{
                            cellBorder= '3px solid var(--white-color)';
                        }
                        break; // No need to check further slots
                    }else{

                        if(dayName === currentDate.toLocaleDateString('en-US', { weekday: 'long' })){
                            cellBorder= '3px solid var(--black-color)';
                            cellColor =  'rgba(225, 0, 0, 1)';
                        }else{
                            cellBorder= '3px solid var(--white-color)';
                            cellColor =  'rgba(225, 0, 0, 0.7)';
                            
                        }
                        // cellColor = '#F44336';

                    }


                }
    
                return (
                    <td
                        key={`${dayName}-${hour}`}
                        style={{ backgroundColor: cellColor,
                            border: cellBorder,
                   
                        }}
                        onClick={()=>{
                            getWeekRange(day)}
                            }  
                    ></td>
                );
            });
        };
    


    const addTimeSlot = (day) => {
        setRecSchedule((prev) => ({
            ...prev,
            [day]: [...prev[day], { from: '', to: '', is_available: false }],
        }));
    };
 
    const removeTimeSlot = (day, index) => {
        setRecSchedule((prev) => {
            const slotToRemove = prev[day][index]; // Get the slot to be removed
            const updatedSlots = prev[day].filter((_, i) => i !== index); // Remove the slot
            
            // Update `deletedSchedule` state
            setdeletedSchedule((prevDeleted) => ({
                ...prevDeleted,
                [day]: [...(prevDeleted[day] || []), slotToRemove], // Add removed slot to deletedSchedule
            }));
            
            return {
                ...prev,
                [day]: updatedSlots, // Update the main schedule state
            };
        });
    };
    

    const updateField = (day, index, field, value) => {
        setRecSchedule((prev) => {
            const updatedSlots = [...prev[day]];
            const updatedSlot = { ...updatedSlots[index], [field]: value };
            
            // Validate time range (from < to)
            if (timeToMinutes(updatedSlot.from) >= timeToMinutes(updatedSlot.to)) {
                alert("The start time must be earlier than the end time.");
                return prev;
            }
            // Check for overlaps
            if (hasOverlap(updatedSlots, updatedSlot, index)) {
                alert("This time slot overlaps with another. Please adjust the time.");
                return prev; // Don't update if overlap exists
            }
    
            // Update the slot if no overlap
            updatedSlots[index] = updatedSlot;
            return { ...prev, [day]: updatedSlots };
        });
    };


    // Recurring Schedule Availability 
    //Handle timeslots overlap
    const hasOverlap = (slots, updatedSlot, excludeIndex) => {
        const updatedFrom = timeToMinutes(updatedSlot.from);
        const updatedTo = timeToMinutes(updatedSlot.to);

        return slots.some((slot, index) => {
       
            if (index === excludeIndex) return false; // Skip the current slot being edited
            const slotFrom = timeToMinutes(slot.from);
            const slotTo = timeToMinutes(slot.to);
             // Check if the time ranges overlap
            return updatedFrom < slotTo && updatedTo > slotFrom;
        });
    };


    //Covert to Minutes
    const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    };
 

    //Handle submitting data
    const handleSubmit = () => {
        setSuccess(3);

        // Prepare the combined payload
        const payload = {
            recSchedule, // Updated or added time slots
            deleted_slots: deletedSchedule, // Removed time slots
        };

        axios.post(apiURL+'/users/schedule_availability/', payload,{
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res => {
            console.log(res)
            console.log(res.data)
            // getSpecialSchedule();
            setSuccess(1);
            getWeekRange(currentDate);

            
            
        }).catch(err => {
            console.log(err.message)
            setSuccess(2)
        })
    }

    //handle Special Schedule

    const addTimeSlotSpecial = (date) => {
        setSpecialSchedule((prev) => ({
            ...prev,
            [date]: [...prev[date], { from: '', to: '', is_available: false }],
        }));
    };
 
    const removeTimeSlotSpecial = (date, index) => {
        setSpecialSchedule((prev) => {
            const slotToRemove = prev[date][index]; // Get the slot to be removed
            const updatedSlots = prev[date].filter((_, i) => i !== index); // Remove the slot
            
            // Update `deletedSchedule` state
            setdeletedSpecialSchedule((prevDeleted) => ({
                ...prevDeleted,
                [date]: [...(prevDeleted[date] || []), slotToRemove], // Add removed slot to deletedSchedule
            }));
            
            return {
                ...prev,
                [date]: updatedSlots, // Update the main schedule state
            };
        });
    };
    

    const updateSpecialField = (date, index, field, value) => {
        setSpecialSchedule((prev) => {
            const updatedSlots = [...prev[date]];
            const updatedSlot = { ...updatedSlots[index], [field]: value };
            
            // Validate time range (from < to)
            if (timeToMinutes(updatedSlot.from) >= timeToMinutes(updatedSlot.to)) {
                alert("The start time must be earlier than the end time.");
                return prev;
            }
            // Check for overlaps
            if (hasOverlap(updatedSlots, updatedSlot, index)) {
                alert("This time slot overlaps with another. Please adjust the time.");
                return prev; // Don't update if overlap exists
            }
    
            // Update the slot if no overlap
            updatedSlots[index] = updatedSlot;
            return { ...prev, [date]: updatedSlots };
        });
    };

    //handle submitting deleteing specialdSchedule  data
    const handleSubmitSpecial = () => {

        // Prepare the combined payload
        const payload = {
            specialSchedule, // Updated or added time slots
            deleted_slots: deletedSpecialSchedule, // Removed time slots
        };

        axios.post(apiURL+'/users/special_availability/', payload,{
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res => {
            console.log(res)
            console.log(res.data)
        
            
        }).catch(err => {
            console.log(err.message)

        })
    }

    // handle specific day schedule


    const addTimeSlotSpecifiDayField = (date) => {
        setSpecificDaySchedule((prev) => ({
            ...prev,
            [date]: [...prev[date], { from: '', to: '', is_available: false }],
        }));
    };
 
    const removeTimeSlotSpecifiDayField = (date, index) => {
            setSpecificDaySchedule((prev) => {
            // const slotToRemove = prev[date][index]; // Get the slot to be removed
            const updatedSlots = prev[date].filter((_, i) => i !== index); // Remove the slot
            
            // Update `deletedSchedule` state
            // setdeletedSpecialSchedule((prevDeleted) => ({
            //     ...prevDeleted,
            //     [date]: [...(prevDeleted[date] || []), slotToRemove], // Add removed slot to deletedSchedule
            // }));
            
            return {
                ...prev,
                [date]: updatedSlots, // Update the main schedule state
            };
        });
    };
    

    const updateSpecifiDayField = (date, index, field, value) => {
        // setSpecificDaySchedule((prev) => {
        //     const updatedSlots = [...prev[date]];
        //     const updatedSlot = { ...updatedSlots[index], [field]: value };
            
        //     // Validate time range (from < to)
        //     if (timeToMinutes(updatedSlot.from) >= timeToMinutes(updatedSlot.to)) {
        //         alert("The start time must be earlier than the end time.");
        //         return prev;
        //     }
        //     // Check for overlaps
        //     if (hasOverlap(updatedSlots, updatedSlot, index)) {
        //         alert("This time slot overlaps with another. Please adjust the time.");
        //         return prev; // Don't update if overlap exists
        //     }
    
        //     // Update the slot if no overlap
        //     updatedSlots[index] = updatedSlot;
        //     return { ...prev, [date]: updatedSlots };
        // });

        //     setSpecificDaySchedule({
        //     [currentDate.toLocaleDateString('en-CA')]:[{
        //             from: '',
        //             to: '',
        //             is_available: false
        //  }]})

            // setSpecificDaySchedule((prevSchedule) => ({
            //     ...prevSchedule, // Keep the old values
            //     [currentDate.toLocaleDateString('en-CA')]: [{ // Add/Update the new date
            //      [field] :value
            //     }]
            // }));

            // setSpecificDaySchedule((prevSchedule) => {
                
            //     const existingSchedule = prevSchedule[date] || [{}]; // Get the existing schedule or initialize with an empty array
                
            //     // Update the first object in the array, keeping other fields
            //     const updatedSchedule = {
            //         ...existingSchedule[0], // Keep existing fields
            //         [field]: value // Update the specific field
            //     };
            
            //     return {
            //         ...prevSchedule, // Keep old values for other dates
            //         [date]: [updatedSchedule] // Update the schedule for the current date
            //     };
            // });

            setSpecificDaySchedule((prev) => {
                const updatedSlots = [...prev[date]];
                const updatedSlot = { ...updatedSlots[index], [field]: value };
                
                // Validate time range (from < to)
                if (timeToMinutes(updatedSlot.from) >= timeToMinutes(updatedSlot.to)) {
                    alert("The start time must be earlier than the end time.");
                    return prev;
                }
                // Check for overlaps
                if (hasOverlap(updatedSlots, updatedSlot, index)) {
                    alert("This time slot overlaps with another. Please adjust the time.");
                    return prev; // Don't update if overlap exists
                }
        
                // Update the slot if no overlap
                updatedSlots[index] = updatedSlot;
                return { ...prev, [date]: updatedSlots };
            });



    };

    //handle Submitting specifi day data
    const handleSubmitSpecificDay = () => {

        axios.post(apiURL+'/users/specific_day_availability/', specificDaySchedule,{
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res => {
            console.log(res)
            console.log(res.data)
            getSpecialSchedule()
        
            
        }).catch(err => {
            console.log(err.message)

        })
    }


    //update specialSchedule
    useEffect(()=>{

        // setSpecialSchedule({
        //     [currentDate.toLocaleDateString('en-CA')]:[{
        //             from: '',
        //             to: '',
        //             is_available: false
        // }]})



        //add new date to exsting data
        // setSpecialSchedule((prevSchedule) => ({
        //     ...prevSchedule, // Keep the old values
        //     [currentDate.toLocaleDateString('en-CA')]: [{ // Add/Update the new date
        //         from: '',
        //         to: '',
        //         is_available: false,
        //     }]
        // }));


        //keep existing entries
        // setSpecialSchedule((prevSchedule) => {

        // const dateKey = currentDate.toLocaleDateString('en-CA');
        // const existingEntries = prevSchedule[dateKey] || [{from: '', to: '', is_available: false,}]

        //     return{
        //         ...prevSchedule,
        //         [dateKey]: existingEntries
        //     };
        
        // });

        
        const dateKey = currentDate.toLocaleDateString('en-CA');

        if( dateKey in specialSchedule){
            alert("Schedule for this date already set go to Special Schedule Section if you want to Update")
          

        }else{
            setSpecificDaySchedule({
                [currentDate.toLocaleDateString('en-CA')]:[{
                        from: '',
                        to: '',
                        is_available: false
            }]})

        }

        window.location.href="#"+dateKey;

   
    }, [currentDate]);


    const getCurrentWeekSchedule = (start, end) => {

        const params = {
            startOfWeek: start.toISOString().split('T')[0], // Format date as YYYY-MM-DD
            endOfWeek: end.toISOString().split('T')[0], // Format date as YYYY-MM-DD
        };
    
        axios.get(apiURL+'/users/schedule_availability/', {
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
                    setLoading(false);
            }

     
        }).catch(err => {
            console.log(err.message);
        });
    
    }
  

    //get SpecialdSchedule Data

    const getSpecialSchedule = () => {

        axios.get(apiURL+'/users/special_availability/', {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res => {
            console.log(res);
            console.log(res.data);
    
            if (res.data && Object.keys(res.data).length > 0) {
                    setSpecialSchedule(res.data);
            }
        }).catch(err => {
            console.log("SpecialSheduleee"+err.message);
 
        });
    
    }

    //get recurring schedule
    const getRecurringSchedule = () => {

        axios.get(apiURL+'/users/recurring_schedule/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res => {
            console.log(res);
            console.log(res.data);
    
            if (res.data && Object.keys(res.data).length > 0) {
           
                    setRecSchedule(res.data)
                    setLoading(false);
            }

     
        }).catch(err => {
            console.log(err.message);
        });
    
    }


    //Handle Specific schedule
    useEffect(() => {

            const { startOfWeek, endOfWeek } = getWeekRange(currentDate);
            getCurrentWeekSchedule(startOfWeek, endOfWeek);
            getSpecialSchedule();
            getRecurringSchedule();
         
        
    }, []);


    //Get week range
    const getWeekRange = (selectedDate) =>{
        setCurrentDate(selectedDate)
        const dayIndex = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const mondayOffset = (dayIndex === 0 ? -6 : 1) - dayIndex; // Adjust for Sunday
        const startOfWeek = new Date(selectedDate);
        startOfWeek.setDate(selectedDate.getDate() + mondayOffset);
    
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);

        setStartOfWeek(startOfWeek);
        setendOfWeek(endOfWeek)
        console.log(startOfWeek)
        console.log(endOfWeek)

   

        //to update selectedweekschedule everytime a date is selected
        getCurrentWeekSchedule(startOfWeek,endOfWeek);

        const current = new Date(startOfWeek);
        const allDays = [];

        while (current <= endOfWeek){
            allDays.push(new Date(current))
            current.setDate(current.getDate() + 1);
            
        }
        
        setWeekDays(allDays)
        
       

        return { startOfWeek, endOfWeek };
    }

    //navigation left right week
    const leftWeek = () => {
    // Subtract 7 days to shift the week back
        const newStartOfWeek = new Date(startOfWeek);
        newStartOfWeek.setDate(startOfWeek.getDate() - 7); // Shift by 7 days backward

        const newEndOfWeek = new Date(endOfWeek);
        newEndOfWeek.setDate(endOfWeek.getDate() - 7); // Shift by 7 days backward

        setStartOfWeek(newStartOfWeek);
        setendOfWeek(newEndOfWeek);
      
        

    }

    const rightWeek = () =>{
    // Add 7 days to shift the week forward
        const newStartOfWeek = new Date(startOfWeek);
        newStartOfWeek.setDate(startOfWeek.getDate() + 7); // Shift by 7 days forwad

        const newEndOfWeek = new Date(endOfWeek);
        newEndOfWeek.setDate(endOfWeek.getDate() + 7); // Shift by 7 days forward

        setStartOfWeek(newStartOfWeek);
        setendOfWeek(newEndOfWeek);

       
    }

    //Handle Specific schedule
        useEffect(() => {
            if (startOfWeek && endOfWeek) {
                getCurrentWeekSchedule(startOfWeek, endOfWeek);
              
                const current = new Date(startOfWeek);
                const allDays = [];

                        while (current <= endOfWeek){
                            allDays.push(new Date(current))
                            current.setDate(current.getDate() + 1);
                        
                    }
                    
                    setWeekDays(allDays)
            }
        }, [startOfWeek, endOfWeek]);


    return(
        <section className='section-2'>
            <Header />

            <div Style='display: flex; flex-direction: column; justify-content; align-items:center; width: 95%;'>
                <h2>Therapist Schedule</h2>
                <p>Note! Special/Specific Day Schedule will override your set working hours(weekly working hours)</p>
            </div>
            
            {/* pick range start end date and specify availability for the days in that range 
            like monday from this time to end time available , thursday ... etc; when clicked on day from calendar 
            choose an hour or range of hours to specidy availabilty */}


            <div className='schedule-container'>
             
                <div className='calendar-nav'>
                    <MdKeyboardArrowLeft className='calendar-nav-arrows' onClick={leftWeek}/>
                    <div className='week-range'>      
                        <p>{startOfWeek.toLocaleDateString()}</p>
                        <span>-</span>
                        <p>{endOfWeek.toLocaleDateString()}</p>
                        
                    </div>
                
                    <MdKeyboardArrowRight className='calendar-nav-arrows' onClick={rightWeek}/>
                </div>
                
                <div className='hours-range'>
                    
                    <div className='hours'>
                        <div className='table-container'>
                            <table className="scheduleTable" border="1">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            {weekDays.map((day) => (
                                                <th key={day} Style={day.toLocaleDateString('en-US', { weekday: 'long' }) === currentDate.toLocaleDateString('en-US', { weekday: 'long' })?
                                                ('background-color:  var(--accent-color); border: 3px solid var(--black-color);'):('')}
                                                    onClick={()=>{
                                                        getWeekRange(day);
                                                        }
                                                        }   
                                                    >
                                                {/* <h5 Style='color: var(--bar-text-color)'>{day.substring(0, 3)}</h5> */}
                                                {/* <h5  Style='color: var(--bar-text-color)'>{day.toLocaleDateString('en-US', { weekday: 'long' }).substring(0,3)}</h5>
                                                <h5 Style='color: var(--bar-text-color)'>{day.toLocaleDateString()}</h5> */}
                                                    <h5> {day.toDateString('en-CA')}</h5>
                                                
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {numbers.map((hour) => (
                                            <tr key={hour} className='dayCells'>
                                                <td className='hourCell'
                                                
                                                ><p>{hour+':00'}</p>
                                                </td>
                                                {renderCellsForRow(hour)}
                                            </tr>
                                        ))}
                                    </tbody>
                            </table>
                        </div>

                {

                    Object.keys(specificDaySchedule).map((dateKey) =>
                        <div className='special-schedule-container' id={dateKey} 
                        Style={(currentDate.toLocaleDateString('en-CA') === dateKey)? 'background-color: yellow;': ''}>
                            <h3>Specific Day Schedule</h3>
                            <h4 Style='color: var(--accent-color);'>{dateKey}</h4>
                                
                                {specificDaySchedule[dateKey].map((slot, index) => (

                                <div className='special-schedule' >
                                {/* <h3>{ currentDate.toLocaleDateString('en-US' ,  {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',} )}</h3> */}
                                   
                                    <input type='time' step="3600" min="09:00" name='from' max="18:00"  className='from' value={slot.from}
                                    onChange={(e) => {
                                        updateSpecifiDayField(dateKey, index , 'from', e.target.value)
                                    }}/>
                                    <h3>To</h3>
                                    <input type='time' step="3600" min="09:00" name='from' max="18:00"  className='from' value={slot.to}
                                    onChange={(e) => {
                                        updateSpecifiDayField(dateKey, index ,'to', e.target.value)
                                    }}/>

                                    {
                                        slot.is_available?(
                                            <div className="availability">
                                                <FaToggleOn size={26} name='is_available'className='toggleOn toggleIcon' 
                                                  onClick={() => {
                                                    updateSpecifiDayField(dateKey, index , 'is_available', !slot.is_available)
                                                }}/>
                                                <h5 className='openclose' Style='color: #4CAF50;'>Open</h5>
                                            </div>
                                        ):(
                                            <div className="availability">
                                                <FaToggleOff size={26}  className='toggleOff toggleIcon'   onClick={() => {
                                                    updateSpecifiDayField(dateKey, index , 'is_available', !slot.is_available)
                                                }}/>
                                                <h5 className='openclose' Style="color: #F44336;">Closed</h5>
                                            </div>
                                        )
                                    }
                            
                                
                                    <span className='remove-icon entry-icon' onClick={()=>{
                                removeTimeSlotSpecifiDayField(dateKey, index)
                            }}>-</span>
                                </div>
                                ))}

                
                            <span  className='add-icon entry-icon' onClick={()=>{
                                addTimeSlotSpecifiDayField(dateKey)
                            }}>+</span>
                            <button className='btn btn-primary' onClick= {handleSubmitSpecificDay}>Save Day changes</button>
                        </div> 

                    )}

                        <div className='special-schedule-container'>
                            <h3>Special Schedule</h3>
                          
                                {

                                    Object.keys(specialSchedule).map((date) =>
                                    <div className='range-container' key={date} id={date}
                                    Style={(date === currentDate.toLocaleDateString('en-CA'))? 'background-color: yellow; ': ''}>
                                        <h4 Style='color: var(--accent-color)'>{date}</h4>
                                        {specialSchedule[date].map((slot, index) => (
                                        <div className='recurring-schedule-inputs' key={index} >
                                            <input type='time' step="3600" min="09:00" name='from' max="18:00" value={slot.from} className='from' id={'day'+index} 
                                            onChange={(e) => {
                                                updateSpecialField(date, index, 'from', e.target.value)
                                            }}/>
                                            {/* <input type="number" id="hourInput" min="1" max="24" step="1" Style="width: 60px; text-align: center;"/> */}
                                            <h5>To</h5>
                                            <input type='time' step="3600" min="09:00" max="18:00" name='to' value={slot.to} className='to' id={'day'+index}
                                            onChange={(e) => {
                                                updateSpecialField(date, index, 'to', e.target.value)
                                            }}/>
                                    
                                            {
                                                slot.is_available? (
                                                    <div className="availability">
                                                    <FaToggleOn size={26} name='is_available' value={slot.is_available} className='toggleOn toggleIcon' onClick={() => {
                                                        updateSpecialField(date, index, 'is_available', !slot.is_available)
                                                    }}/>
                                                    <h5 className='openclose' Style='color: #4CAF50;'>Open</h5>
                                                </div>
                                                ):(
                                                    <div className="availability">
                                                    <FaToggleOff size={26}  name='is_available' value={slot.is_available} className='toggleOff toggleIcon' 
                                                    onClick={() => {
                                                        updateSpecialField(date, index, 'is_available', !slot.is_available)
                                                    }}/>
                                                    <h5 className='openclose' Style="color: #F44336;">Closed</h5>
                                                </div>
                                                )
                                            }
                                        

                                                <span className='remove-icon entry-icon' onClick={() => { removeTimeSlotSpecial(date,index)}}>-</span>
                                        

                                            </div>
                                            ))}
                                        
                                                <span  className='add-icon entry-icon' onClick={() => addTimeSlotSpecial(date)}>+</span>    
                                        
                                    

                                            
                                        </div>  
                                    )}
                                <button className='btn btn-primary' onClick={handleSubmitSpecial} Style='width: auto;' >Save Changes Special</button>


                        </div>
               
                    </div>

                    <div className='range-calendar'>
                    <div className='calendar'>
                                <h2>Calendar</h2>
                                <Calendar 
                                className={"inside-calendar"}
                                value={currentDate}
                                    onChange={getWeekRange}
                                    />
                    </div>
                
                        <div className='range'>
                            
                            <h3>Set working hours</h3>
                            {
                                    success === 1?(
                                        <h3 Style='color: green;'>Schedule Set Successfully</h3>
                                    ) : success === 2?(
                                        <h3 Style='color: red;'> Failed to Set Schedule!</h3>
                                    )
                                    : success === 3?(
                                        <ReactLoading type='spin' color='var(--bar-text-color)' height="30px" width="30px" />
                                    ): null
                                
                            }
                            
                          

                            {loading?(

                                recurringSkeletons
                                

                            ):
                            (
                                <div Style='width: 100%'>
                                        {
                                // days.map((day, index) =>
                                    Object.keys(recSchedule).map((day) =>
                                    <div className='range-container' key={day}>
                                        <h4 Style='color: var(--accent-color)'>{day}</h4>
                                        {recSchedule[day].map((slot, index) => (
                                        <div className='recurring-schedule-inputs' key={index}>
                                            <input type='time' step="3600" min="09:00" name='from' max="18:00" value={slot.from} className='from' id={'day'+index} 
                                            onChange={(e) => {
                                                updateField(day, index, 'from', e.target.value)
                                            }}/>
                                            {/* <input type="number" id="hourInput" min="1" max="24" step="1" Style="width: 60px; text-align: center;"/> */}
                                            <h5>To</h5>
                                            <input type='time' step="3600" min="09:00" max="18:00" name='to' value={slot.to} className='to' id={'day'+index}
                                            onChange={(e) => {
                                                updateField(day, index, 'to', e.target.value)
                                            }}/>
                                    
                                            {
                                                slot.is_available? (
                                                    <div className="availability">
                                                    <FaToggleOn size={26} name='is_available' value={slot.is_available} className='toggleOn toggleIcon' onClick={() => {
                                                        updateField(day, index, 'is_available', !slot.is_available)
                                                    }}/>
                                                    <h5 className='openclose' Style='color: #4CAF50;'>Open</h5>
                                                </div>
                                                ):(
                                                    <div className="availability">
                                                    <FaToggleOff size={26}  name='is_available' value={slot.is_available} className='toggleOff toggleIcon' 
                                                    onClick={() => {
                                                        updateField(day, index, 'is_available', !slot.is_available)
                                                    }}/>
                                                    <h5 className='openclose' Style="color: #F44336;">Closed</h5>
                                                </div>
                                                )
                                            }
                                        

                                        
                                                <span className='remove-icon entry-icon' onClick={() => { removeTimeSlot(day,index)}}>-</span>
                                        

                                            </div>
                                            ))}
                                        
                                                <span  className='add-icon entry-icon' onClick={() => addTimeSlot(day)}>+</span>    
                                        

                                        </div>
                                    ) 
                                 }
                                </div>
                                )
                                
                                }
                        
                            
                                <button className='btn btn-primary' onClick={handleSubmit} Style='width: 90%;'>Save Changes</button>
                                
                        </div>
                    </div>

                </div>
            
        
            </div>
        </section>
    );
}

export default ScheduleT