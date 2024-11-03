import React, {useState, useEffect} from 'react'
import axios from 'axios'
import pp from '../../../assets/profile.jpg'
import { CiEdit } from "react-icons/ci";
import './profile.css'
import Header from '../header/Header';
import { FaRegEnvelope } from "react-icons/fa6";
import countryData from '../../../assets/countries.json';


const Profile = (props) => {

  
    const [userData, setuserData] =  useState({
        username: '',
        firstname: '',
        lastname: '',
        birthday:'',
        email: '',
        city: '',
        state:'',
        country: '',
    });


    //handle user input
    const handleInput = (e) => {
        const {name,value } = e.target;

        setuserData({
            ...userData,
            [name] : value
        })

    }

    useEffect(()=> {
        axios.get('http://127.0.0.1:8000/users/user/',{
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res => {
            setuserData({
                username: res.data.username,
                firstname: res.data.profile.firstname,
                lastname: res.data.profile.lastname,
                birthday: res.data.profile.birthday,
                email: res.data.email,
                city: res.data.profile.city,
                state: res.data.profile.state,
                country: res.data.profile.country,
            })
            console.log(res.data)

        }).catch(err =>{
            console.log(err.message);
        });


    }, []);

            //Update username
            const updateProfile = (e) => {
                e.preventDefault();
    
                axios.put('http://127.0.0.1:8000/users/user/',userData,{
                    headers:{
                        'Content-Type' : 'application/json',
                        'Authorization': `Bearer ${props.accessToken}`
                    }
    
                }).then(res => {
                    console.log(res);
                    console.log(res.data);
                    hideEditPopup();
    
                }).catch(err => {
                    console.log("error")
                })
    
            }

            //Edit Popip
            const editPopup = () => {
                const overlay = document.querySelector('.overlay');
                const ppoc = document.querySelector('.update-profile-container');
                overlay.style.display = 'flex';
                ppoc.style.display = 'flex';
            }

            //Hide Edit Popup
            const hideEditPopup = () => {
                const overlay = document.querySelector('.overlay');
                const ppoc = document.querySelector('.update-profile-container');
                overlay.style.display = 'none';
                ppoc.style.display = 'none';
                
            }


    return(
        <section className='profile-section section-2'>
            
            
            <div className='update-profile-container card'>
                <div className='profile-update-header'>  
                    <h2>Edit Profile Infos</h2>
                    <li onClick={hideEditPopup} className='quit-profile-update'><a > <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                                viewBox="0 -960 960 960" width="24px" fill="var(--bar-text-color)">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                                </svg></a>
                    </li>
                </div>
                
                <div className='pp-update'>
                    <div className='profile-img-container3'>
                        <img src={pp} alt='pp' className='profile-picture2'/>
                    </div>
                    <div className='pp-update-msg'>
                        <h3>Upload your picture</h3>
                        <p>For best results, use an image at least 300px by 300px in either JPEG, JPG or PNG</p>
                    </div>
                    <div className='cta'>
                        <button className='btn '>Upload</button>
                        <button className='btn '>Remove</button>

                    </div>

                </div>

                <form onSubmit={updateProfile} className='update-form'>
    
                    <div className='input-unit'>
                        <div className='hinput-unit'>
                            <label forHtml='firstname'>Firstname</label>
                            <input type='text' id='firstname' name='firstname' value={userData.firstname} className='textfield firstname' placeholder='Firstname' onChange={handleInput}/>
                        </div>
                        <div className='hinput-unit'>
                            <label forHtml='firstname'>Lastname</label>
                            <input type='text' id='lastname' name='lastname'  value={userData.lastname} className='textfield lastname' placeholder='Lastname' onChange={handleInput}/>
                        </div>
                     </div>


                    <div className='hinput-unit'>
                        <label forHtml='firstname'>Username</label>
                        <input type='text' id='username' name='username' value={userData.username}  className='textfield username' placeholder='Username' onChange={handleInput}/>
                    </div>
                    <div className='hinput-unit'>
                        <label forHtml='firstname'>Email</label>
                        <input type='email' id='email' name='email' value={userData.email}  className='textfield email' placeholder='Email address' onChange={handleInput}/>
                    </div>

         
                        <button type='submit' value='update' className='btn btn-primary'>Save</button>
                   

                </form>
              
            </div>

            <Header/>

            <h1 Style='align-self: flex-start; padding-left: 2rem'>My Profile</h1>
            <div className='profile-container'>
                
                
                <div className='user-card card'>
                    <div className='profile-img-container2'>
                        <img src={pp} alt='pp' className='profile-picture2'/>
                    </div>
                    <h2 Style='color: var(--bar-text-color);'>{userData.username}</h2>
                    <button onClick={editPopup}className='btn btn-secondary'><CiEdit /> Edit profile</button>

                    <ul className='profile-nav'>
                        <li><a href='/profile' className='nav-link'>My Profile</a></li>
                        <li><a className='nav-link'>Change Password</a></li>
                        <li><a className='nav-link'>Notifications</a></li>
                        <li><a className='nav-link'>Privacy</a></li>
                    </ul>
                </div>
                
         
                <div className='profile-body'>
                    <ul>
                        <li><a href='/profile' className='nav-link'>My Profile</a></li>
                        <li><a className='nav-link'>Change Password</a></li>
                        <li><a className='nav-link'>Notifications</a></li>
                        <li><a className='nav-link'>Privacy</a></li>
                    </ul>

                    <div className='info-block'>
                        <h2>Goals:</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui cum, adipisci 
                            necessitatibus numquam dignissimos inventore dolor voluptates deserunt alias sunt
                             similique doloribus officiis animi praesentium suscipit, libero eius tempore.</p>
                    </div>
                    <div className='info-block'>
                        <h2>
                            Firstname:
                        </h2>
                        <p>
                            {userData.firstname}
                        </p>
                    </div>
                    <div className='info-block'>
                        <h2>
                            Lastname:
                        </h2>
                        <p>
                            {userData.lastname}
                        </p>
                    </div>

                    <div className='info-block'>
                        <h2>
                            Birthday:
                        </h2>
                        <p>
                            {userData.birthday}
                        </p>
                    </div>
              
                    <div className='info-block'>
                        <h2>
                            Email:
                        </h2>
                        <p>
                            {userData.email}
                        </p>
                    </div>
                    <div className='info-block'>
                        <h2>
                            City:
                        </h2>
                        <p>
                            {userData.city}
                        </p>
                    </div>

                    <div className='info-block'>
                        <h2>
                            State:
                        </h2>
                        <p>
                            {userData.state}
                        </p>
                    </div>

                    <div className='info-block'>
                        <h2>
                            Country:
                        </h2>
                        <p>
                            {userData.country}
                        </p>
                    </div>

                    <div className='info-block'>
                        <h2>
                            My Therapist Infos:
                        </h2>
                        <p>
                            <b>Email:</b >MyTherapist@mail.com<br/>
                            <b>Emergency Phone Number:</b> +293903929394<br/>
                            <b>Message:</b> <a><FaRegEnvelope/></a><br/>
                        </p>
                    </div>
                </div>

          
            </div>
            
        </section>
    )
}

export default Profile