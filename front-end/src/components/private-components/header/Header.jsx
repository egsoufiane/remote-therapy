import React,{useState, useEffect} from 'react'
import './header.css'
import axios from 'axios'
import { CiSearch } from "react-icons/ci";
import pp from '../../../assets/profile.jpg'

const Header = () => {
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

    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar-dashboard');
  
        sidebar.style.display = 'flex';
     
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

            <a href='/profile' className='profile-header'>
                <div className='profile-img-container'>
                    <img src={pp} alt='profile-picture' className='profile-picture'/>
                </div>
                <h3>{fullName}</h3>
            </a>
        </header>
    )
}


export default Header
