import React, {useState, useEffect} from 'react'
import './overviewT.css'
import axios from 'axios'
import Header from '../header/Header';
import { CiCalendar } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdOutlineVideoCall } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { Skeleton } from '@mui/material';

import pp from '../../../assets/profile.jpg'


const ageData = [
    { ageGroup: '0-18', count: 120 },
    { ageGroup: '19-24', count: 90 },  // Added this group for clarity
    { ageGroup: '25-34', count: 200 }, // Added this group
    { ageGroup: '35-44', count: 150 }, // Added this group
    { ageGroup: '45-54', count: 110 }, // Added this group
    { ageGroup: '55+', count: 80 },     // Adjusted for a cleaner presentation
  ];

const genderData = [
{ name: 'Male', value: 400 },
{ name: 'Female', value: 300 },
];

const COLORS = ['#33a2ff', '#ff33ca'];

const apiURL=process.env.REACT_APP_API_URL;

const OverviewT = () => {
    const [fullName, setfullName] = useState('');

    const [value, onChange] = useState(new Date());

    const [isLoading,setisLoading] = useState(true);

    const [honorific, sethonorific] = useState('');
   

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


  

    return(

        <section className='section-2'>
            <Header/>
            <section className='therapist-content'>

                <div className='welcome-msg'>
                    {isLoading ? (
                      
                        <b Style='color: var(--text-color)'><Skeleton variant='text' width={220} /> </b>): (
                        <h1>Welcome, <b Style='color: var(--text-color)'>{honorific+' '+fullName}</b> </h1>
                    )}
                        
                    <h3>Have a good day at work!</h3>
                </div>
              
                <div className='stats-cards'>
              
                    <div className='stat-card' Style='background-color: teal;'>
                        <CiCalendar/>
                        <div>
                            <h2>19.5k</h2>
                            <h3>Appointments</h3>
                        </div>
                    </div>

                    <div className='stat-card' Style='background-color: pink;'>
                        <FaUser/>
                        <div>
                            <h2>40k</h2>
                            <h3>Clients</h3>
                        </div>
                    </div>

                    <div className='stat-card' Style='background-color: orange;'>
                        <FaRegEnvelope/>
                        <div>
                            <h2>90.6k</h2>
                            <h3>Messages</h3>
                        </div>
                    </div>

                    <div className='stat-card' Style='background-color: magenta;'>
                        <MdOutlineVideoCall/>
                        <div>
                            <h2>29k</h2>
                            <h3>VideoCalls</h3>
                        </div>
                    </div>

                </div>

                <div className='detailed-overview'>

                    <div className='appointments'>
                        <div className='appointments-header'>
                            <h3>Appointments</h3>
                            <a href='/appointments'>View All <MdOutlineKeyboardArrowRight/></a>
                        </div>
                        
                        <div className='client-appt-cards card'>
                        <div className='client-appt-card'>
                                <div className='profile-card'>  
                                    <div className='profile-img-container'>
                                        <img src={pp} alt='profile-picture' className='profile-picture'/>
                                    </div>
                                    <div>
                                        <h5>Brad Pitt</h5>
                                        <p>33 Male, 10 May 9:30</p>
                                    </div>
                                </div>
                                <button className='cancel-btn'>Cancel</button>
                            </div>

                            <div className='client-appt-card'>
                                <div className='profile-card'>  
                                    <div className='profile-img-container'>
                                        <img src={pp} alt='profile-picture' className='profile-picture'/>
                                    </div>
                                    <div>
                                        <h5>Brad Pitt</h5>
                                        <p>33 Male, 10 May 9:30</p>
                                    </div>
                                </div>
                                <button className='cancel-btn'>Cancel</button>
                            </div>

                            <div className='client-appt-card'>
                                <div className='profile-card'>  
                                    <div className='profile-img-container'>
                                        <img src={pp} alt='profile-picture' className='profile-picture'/>
                                    </div>
                                    <div>
                                        <h5>Brad Pitt</h5>
                                        <p>33 Male, 10 May 9:30</p>
                                    </div>
                                </div>
                                <button className='cancel-btn'>Cancel</button>
                            </div>

                            <div className='client-appt-card'>
                                <div className='profile-card'>  
                                    <div className='profile-img-container'>
                                        <img src={pp} alt='profile-picture' className='profile-picture'/>
                                    </div>
                                    <div>
                                        <h5>Brad Pitt</h5>
                                        <p>33 Male, 10 May 9:30</p>
                                    </div>
                                </div>
                                <button className='cancel-btn'>Cancel</button>
                            </div>

                            <div className='client-appt-card'>
                                <div className='profile-card'>  
                                    <div className='profile-img-container'>
                                        <img src={pp} alt='profile-picture' className='profile-picture'/>
                                    </div>
                                    <div>
                                        <h5>Brad Pitt</h5>
                                        <p>33 Male, 10 May 9:30</p>
                                    </div>
                                </div>
                                <button className='cancel-btn'>Cancel</button>
                            </div>

                            <div className='client-appt-card'>
                                <div className='profile-card'>  
                                    <div className='profile-img-container'>
                                        <img src={pp} alt='profile-picture' className='profile-picture'/>
                                    </div>
                                    <div>
                                        <h5>Brad Pitt</h5>
                                        <p>33 Male, 10 May 9:30</p>
                                    </div>
                                </div>
                                <button className='cancel-btn'>Cancel</button>
                            </div>

                            <div className='client-appt-card'>
                                <div className='profile-card'>  
                                    <div className='profile-img-container'>
                                        <img src={pp} alt='profile-picture' className='profile-picture'/>
                                    </div>
                                    <div>
                                        <h5>Brad Pitt</h5>
                                        <p>33 Male, 10 May 9:30</p>
                                    </div>
                                </div>
                                <button className='cancel-btn'>Cancel</button>
                            </div>
                            

                        </div>
                    </div>

                    <div className='demographic'>
                    
                        {/* <div className='appointments-header'>
                            <h3>Clients</h3>
                            <a href='/appointments'  Style='background-color: var(--lightgray-color); padding: 5px; border-radius: 5px' >2024 <IoIosArrowDown/></a>
                        </div>
                        <div className='client-appt-cards card'>
                  
                        </div> */}

                        <div className='appointments-header'>
                            <h3>Gender</h3>
                            <a href='/appointments'  Style='background-color: var(--lightgray-color); padding: 5px; border-radius: 5px'>2024 <IoIosArrowDown/></a>
                            {/* <select>
                                <option>2024</option>
                                <option>2023</option>
                                <option>2022</option>
                                <optino>2021</optino>
                            </select> */}
                        </div>

                        <div className='client-appt-cards card' Style="width: 100%; height: 20rem;">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={genderData}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                      {genderData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
                            <Tooltip />
                            <Legend/>
                            </PieChart>
                        </ResponsiveContainer>
                        </div>

                        <div className='appointments-header'>
                            <h3>Age</h3>
                            <a href='/appointments' Style='background-color: var(--lightgray-color); padding: 5px; border-radius: 5px'>2024 <IoIosArrowDown/></a>
                        </div>
                        
                        <div className='client-appt-cards card' Style="width: 100%; height: 20rem; padding: 0.2rem;">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={ageData}>
                            <XAxis      
                                dataKey="ageGroup" 
                                tick={{ fontSize: 12 }} 
                                interval={0}
                                
                            />
                            <YAxis  
                                tick={{ fontSize: 12 }}  
                                />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="green" /> {/* Customize color as needed */}
                            </BarChart>
                        </ResponsiveContainer>
                        </div>
                        


                    </div>

                    <div className='today-appointments'>
                        <h3>Today's Appointments</h3>
                        <div className='client-appt-cards card'>
                            <div className='client-appt-card'>
                                <div className='profile-card'>   
                                    <div className='profile-img-container'>
                                        <img src={pp} alt='profile-picture' className='profile-picture'/>
                                    </div>
                                    <div>
                                        <h5>Brad Pitt</h5>
                                        <p>24 Male</p>
                                    </div>

                                </div>
                                <h5 className='hours'>Ongoing</h5>
                            </div>
                            
                            <div className='client-appt-card'>
                                <div className='profile-card'>   
                                    <div className='profile-img-container'>
                                        <img src={pp} alt='profile-picture' className='profile-picture'/>
                                    </div>
                                    <div>
                                        <h5>Brad Pitt</h5>
                                        <p>24 Male</p>
                                    </div>

                                </div>
                                <h5 className='hours'>10:30</h5>
                            </div>

                            <div className='client-appt-card'>
                                <div className='profile-card'>   
                                    <div className='profile-img-container'>
                                        <img src={pp} alt='profile-picture' className='profile-picture'/>
                                    </div>
                                    <div>
                                        <h5>Brad Pitt</h5>
                                        <p>24 Male</p>
                                    </div>

                                </div>
                                <h5 className='hours'>10:30</h5>
                            </div>
                            
                            <div className='client-appt-card'>
                                <div className='profile-card'>   
                                    <div className='profile-img-container'>
                                        <img src={pp} alt='profile-picture' className='profile-picture'/>
                                    </div>
                                    <div>
                                        <h5>Brad Pitt</h5>
                                        <p>24 Male</p>
                                    </div>

                                </div>
                              
                                <h5 className='hours'>10:30</h5>
                            </div>

                        </div>

                       <div >
                            <h3>Calendar</h3>
                            <Calendar onChange={onChange} value={value} />
                       </div>
                       
                        
                        
                    </div>


                </div>

                <div className='recent-clients'>
                    <h3>Recent Clients</h3>
                    <div className='table-container'>
                        <table className='recent-clients-table'>
                            <tr className='table1-header'>
                                <th>
                                    Client name
                                </th>
                                <th>
                                    PatientID
                                </th>
                                <th>
                                    Date 
                                </th>
                                <th>
                                    Gender
                                </th>
                                <th>
                                    Age
                                </th>
                                <th>
                                    Diagnosis
                                </th>
                                <th>
                                    Status
                                </th>
                                <th>

                                </th>
                            </tr>
                            <tr>
                                <td>Haruki Murakami</td>
                                <td>2</td>
                                <td>10 April 2024</td>
                                <td>Male</td>
                                <td>33</td>
                                <td>Bipolar</td>
                                <td>Active</td>
                                <td><BsThreeDotsVertical/></td>
                            </tr>
                            <tr>
                                <td>Haruki Murakami</td>
                                <td>2</td>
                                <td>10 April 2024</td>
                                <td>Male</td>
                                <td>33</td>
                                <td>Bipolar</td>
                                <td>Active</td>
                                <td><BsThreeDotsVertical/></td>
                            </tr>

                            <tr>
                                <td>Haruki Murakami</td>
                                <td>2</td>
                                <td>10 April 2024</td>
                                <td>Male</td>
                                <td>33</td>
                                <td>Bipolar</td>
                                <td>Active</td>
                                <td><BsThreeDotsVertical/></td>
                            </tr>

                            <tr>
                                <td>Haruki Murakami</td>
                                <td>2</td>
                                <td>10 April 2024</td>
                                <td>Male</td>
                                <td>33</td>
                                <td>Bipolar</td>
                                <td>Active</td>
                                <td><BsThreeDotsVertical/></td>
                            </tr>

                            <tr>
                                <td>Haruki Murakami</td>
                                <td>2</td>
                                <td>10 April 2024</td>
                                <td>Male</td>
                                <td>33</td>
                                <td>Bipolar</td>
                                <td>Active</td>
                                <td><BsThreeDotsVertical/></td>
                            </tr>

                            <tr>
                                <td>Haruki Murakami</td>
                                <td>2</td>
                                <td>10 April 2024</td>
                                <td>Male</td>
                                <td>33</td>
                                <td>Bipolar</td>
                                <td>Active</td>
                                <td><BsThreeDotsVertical/></td>
                            </tr>
                
                        </table>
                    </div>
                </div>
                    
            </section>
        

        
            

        </section>

    )
}

export default OverviewT