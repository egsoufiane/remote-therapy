import React,{useState, useEffect} from 'react'
import './header.css'
import axios from 'axios'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { RiShutDownLine } from "react-icons/ri";
import { RxSwitch } from "react-icons/rx";
import pp from '../../../assets/profile.jpg'

import { Skeleton } from '@mui/material';
const apiURL=process.env.REACT_APP_API_URL;

const Header = () => {
    const [fullName, setfullName] = useState('');
    const [specialization, setSpecialization] = useState('');

    const [isLoading, setisLoading] = useState(true);

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
            setSpecialization(res.data.specialization);

            // setTimeout(()=>{
                
            // }, "3000");
            setisLoading(false);
           

        }).catch(err => {

        })
    },[]);

    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar-dashboard');
        const overlay = document.querySelector('.overlay3');
       
        document.body.style.overflow = 'hidden';
        sidebar.style.display = 'flex';
        overlay.style.display = 'flex';

        const forceReflow = sidebar.offsetHeight;

        sidebar.classList.add('slide-in');
     
    }

    const logOut = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('isClient');
        localStorage.removeItem('isTherapist');
        window.location.href='/';
    }

    return(
        <header className='dashboard-header'>
             <li className='menu' onClick={showSidebar}><a><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                        viewBox="0 -960 960 960" width="24px" 
                                        fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                                        </svg></a>
                            </li>
            <span className='search-container'>
                <CiSearch/><input type="text" id='search-box' placeholder='search' className='search'/>
            </span>


        { isLoading ? (
            <h5 className='profile-header'>
                <Skeleton variant='circular' width={30} height={30}/>
              
                    <Skeleton variant='circular' width={50} height={50}/>
             
                <div  className='header-ps'>
                    <Skeleton variant='text' width={100}/>
                    <Skeleton variant='text' width={80}/>
                   
                </div>
        
                
            </h5>
            
        ):(
            <h5  className='profile-header'>
            <FaRegBell size={22}/>
            <a href='/profile' className='header-ips' >
                <div className='profile-img-container'>
                    <img src={pp} alt='profile-picture' className='profile-picture'/>
                </div>
                <div  className='header-ps'>
                    <h3>{fullName}</h3>
                    <h5>{specialization}</h5>
                </div>
            </a>

            <div className='dropdown-arrow'>
                <div className='arrowdown-icon'> <MdOutlineArrowDropDown size={22}/> </div>
                    <div className='header-profile-dropdown'>
                        <ul className='header-profile-dp-ul'>
                            <li><a href='/profile' ><LuUser/>Profile</a></li>
                            <li><a ><CiSettings/>Settings</a></li>
                            <li><a ><IoMoonOutline/>Interface </a> <RxSwitch size={26}/></li>
                            <li onClick={logOut}><a ><RiShutDownLine/>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </h5>

        )}

         </header>
    )
}

export default Header
