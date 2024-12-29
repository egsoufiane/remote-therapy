import React,{useState, useEffect} from 'react'
import './myappointmentsT.css'
import Header from '../header/Header';
import axios from 'axios';
import { RiReservedFill } from 'react-icons/ri';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { PiCaretUpDownLight } from "react-icons/pi";
import { LuChevronsUpDown } from "react-icons/lu";
import { CiCalendar, CiSearch } from "react-icons/ci";
import { MdKeyboardArrowRight, MdOutlineSort } from "react-icons/md";
import { IoMdSwitch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BiEnvelope, BiLeftArrow, BiMessage, BiRightArrow } from 'react-icons/bi';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import { pager, loadNextPage, loadPrevPage, loadSpecificPage} from '../../../utils/utils'

const apiURL=process.env.REACT_APP_API_URL;

const MyappointmentsT = (props) => {

    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [pageSize, setPageSize] = useState(0)
    const [totalCount, setTotalCount] = useState(0);
    const [appointments, setAppointments] = useState([])
    const [therapistProfiles, setTherapistProfiles] = useState([])
    const [mergedData, setMergedData] = useState([])
    const today = new Date()
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [selectedPageIndex, setSelectedPageIndex] = useState(1)

    const [orderParam, setOrderParam] = useState("date")
    const [isAscending, setIsAscending] = useState(true);
   
    const therapistIds = [...new Set(appointments.map(ap => ap.therapist))];
    console.log(therapistIds); // Output: [56, 57, 54]
  


    // get clients appointns and therapist data
    const getAppointAndTherapistsData = (url, orderParam, isAscending) => {
        const params = {
            orderParam : orderParam,
            isAscending : isAscending
        };
        axios.get(url,{
            params,
            headers :{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }

        }).then(res=>{
            if(res && res.data){
                setAppointments(res.data.results); // Set the appointments
                setNextPage(res.data.next); // Set the next page URL
                setPrevPage(res.data.previous); // Set the previous page URL
                setTotalCount(res.data.count); // Set the total count of appointments
                setPageSize(res.data.page_size);
                    // Extract unique therapist IDs
                    const clientIds = [...new Set(res.data.results.map(appt => appt.client))];
                    window.location.href="#myappoitments"

                    if (clientIds.length > 0) {
                        // Fetch therapist profiles with unique IDs as query params
                        axios.get(apiURL+'/users/get_clients/', {
                                headers: {
                                    'Content-type': 'application/json',
                                    'Authorization': `Bearer ${props.accessToken}`
                                },
                                params: {
                                    'get_clients[]': clientIds // Pass IDs as array
                                }
                            })
                            .then(res => {
                                if (res && res.data) {
                                    console.log(res.data)
                                    setTherapistProfiles(res.data);
                                }
                            })
                            .catch(err => {
                                console.error("Error fetching therapist profiles:", err.message);
                            });
                            
                        }

            }

        }).catch(err =>{
            console.log(err.message)
        
        })

    }

    useEffect(()=>{    
        setSelectedPageIndex(1)
        getAppointAndTherapistsData(apiURL+'/appointments/appointment/', orderParam, isAscending);

    },[orderParam,isAscending]);


    //merger therpiest profiles and appointments data 
    useEffect(()=>{

        if(therapistProfiles.length>0 && appointments.length>0){
            const mergedAsTs = appointments.map((appointment) => {
                const client = therapistProfiles.find(
                (profile) => profile.user === appointment.client
                );
                return {
                ...appointment,
                therapist_firstname: client ? client.firstname : "Unknown",
                therapist_lastname: client ? client.lastnamename : "Unknown",
                therapist_fullname: client ? client.firstname+' '+ client.lastname : "Unknown",
       
                };
            });

            if(mergedAsTs.length>0) {
                setMergedData(mergedAsTs);
            }
                           

        }

    }, [appointments, therapistProfiles]);


        //sort data by field
        const sortArray = (field) =>{

            setMergedData([...mergedData].sort((a, b) => {
                if(isAscending){

                    return((a[field] < b[field])? -1 : 1)
                
                }else{
                    return((a[field] > b[field])? -1 : 1)
                }
                
            }));

            setIsAscending(!isAscending);

        }

        //Cancel Appointment
        const updateAppointment = (appt_id, status) => {

                axios.post(apiURL+'/appointments/update_appointment/',{
                    'appointment_id' : appt_id,
                    'status' : status
                },
                {
                    headers:{
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${props.accessToken}`
                    }
                }).then(res =>{
                    console.log(res.data);
                    if(res && res.data){
                        alert(res.data)
                        getAppointAndTherapistsData();//to get updated data
                        setSelectedIndex(null)// hide action-bar
                    }
                }).catch(err =>{
                    console.log(err.message)
                })

          

        }
        



    return(
        <section className='section-2 myappointments-section'>
            
            <Header />

            <div className='myappointmens-header'>
                <h1>Appointments</h1>
                <p>Here are all of your all appointments</p>
            </div>

            <div className='myappointments-container'>
                       
                    {
                            (selectedIndex !== null)? (
                            <div className='table-overlay'
                                onClick={()=>{
                                    setSelectedIndex(null)
                                }}
                            ></div>
                            ):(
                                ''
                            )

                        }

                <div className='table-container'  id="myappoitments">

        
                    <table className='myappointments-table'>
                        <tr>
                            <th onClick={()=>{
                                    setOrderParam('id');
                                    setIsAscending(!isAscending);
                                }} >
                                <h5>Appointment ID <LuChevronsUpDown/></h5> 
                            </th>
                       
                            <th 
                            onClick={()=>{
                                setOrderParam('client');
                                setIsAscending(!isAscending);
                            }} >
                                <h5>Client ID <LuChevronsUpDown/></h5> 

                            </th>
                            <th onClick={()=>{
                                    setOrderParam('therapist_fullname');
                                    setIsAscending(!isAscending);
                                }} >
                                <h5>Client Name <LuChevronsUpDown/></h5> 
                            </th>
                            <th onClick={()=>{
                                    setOrderParam('date');
                                    setIsAscending(!isAscending);
                                }}        
                                >
                                <h5 >Date <LuChevronsUpDown/></h5>
                            </th>
                            <th onClick={()=>{
                                    setOrderParam('start_time');
                                    setIsAscending(!isAscending);
                                }} >
                                <h5>Starting Time <LuChevronsUpDown/></h5>
                            </th>
                            <th  onClick={()=>{
                                setOrderParam('notes');
                                setIsAscending(!isAscending);
                            }}>
                                <h5>Notes<LuChevronsUpDown/></h5> 
                            </th>
                            <th
                            onClick={()=>{
                                setOrderParam('status');
                                setIsAscending(!isAscending);
                            }} >
                                <h5>Status<LuChevronsUpDown/></h5> 
                            </th>
                            <th>    
                                <h5>Message</h5>
                            </th>
                            <th>    
                                <h5>Action</h5>
                            </th>
            
                        </tr>


                        {
                            mergedData.length>0 && mergedData.map((appointment, index) => {
                               
                                return(
                                    
                                    <tr key={appointment.id} className={(new Date(appointment.date) < today)? 'passed-date' : ''}>
                                        <td><h5>APPT-{appointment.id}</h5></td>
                                        <td><h5>CLIENT-{appointment.client}</h5></td>
                                        <td><h5>{appointment.therapist_fullname.toUpperCase()}</h5></td>
                                        <td><h5>{appointment.date}</h5></td>
                                        <td><h5>{appointment.start_time.split(':')[0]+":00"}</h5></td>
                                        <td><h5>{appointment.notes}</h5></td>
                                        <td ><h5 className={"appointment-status "+appointment.status}>{appointment.status}</h5></td>
                                        <td ><h5 className='icon-container'><BiEnvelope/></h5></td>
                                        <td><h5 className='icon-container' onClick={()=>{
                                                setSelectedIndex(index)
                                            }}><HiOutlineDotsVertical/></h5>
                                            
                                            {
                                             (selectedIndex === index)? (
                                                    <div className='action-bar' >
                                                        <MdKeyboardArrowRight  onClick={()=>{
                                                        setSelectedIndex(null)
                                                    }}/>
                                                    
                                                        <button className='action-btn completed'><h5>Join Session</h5></button>
                                                        <button className='action-btn confirmed' onClick={()=>{
                                                               updateAppointment(appointment.id, "confirmed")
                                                        }}><h5>Confirm</h5></button>
                                                        <button className='action-btn canceled'
                                                            onClick={()=>{
                                                                updateAppointment(appointment.id, "canceled")

                                                            }
                                                           }
                                                        ><h5>Cancel</h5></button>
                                                        
                                                    </div>
                                                ):(
                                                    ''
                                                )
            
                                            }

                                            
                                            
                                            </td>
                                        
                                    
                                    </tr>
                            )
                            
                            
                            })
                        }
                        
                    </table>
                        
                </div>


                <div className='list-nav'>
                
                    <h5 className='page-prev-next' onClick={ ()=>{
                              loadPrevPage({
                                prevPage,
                                setSelectedPageIndex,
                                getAppointAndTherapistsData
                        })
                    }
                  }><MdOutlineKeyboardArrowLeft/> Prev</h5>
                    <div className='index-container'>
                        {pager({
                            totalCount,
                            pageSize,
                            selectedPageIndex,
                            setSelectedPageIndex,
                            loadSpecificPage,

                            apiURL,
                            getAppointAndTherapistsData,
                            orderParam,
                            isAscending
                        })}

                    </div>
                    <h5 className='page-prev-next' onClick={()=>{
                        loadNextPage(
                            {
                                nextPage,
                                setSelectedPageIndex,
                                getAppointAndTherapistsData
                            
                            }
                        )}
                    }>Next <MdOutlineKeyboardArrowRight/> </h5>
                </div>
                
            </div>
        </section>

    );
}

export default MyappointmentsT
