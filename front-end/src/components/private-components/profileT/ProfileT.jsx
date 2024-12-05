import React,{useState, useEffect} from "react";
import axios from 'axios';
import './profileT.css'
import Header from "../header/Header";
import pp from '../../../assets/profile.jpg'
import { CiEdit } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";

import ReactStars from "react-rating-stars-component";

import Skeleton from '@mui/material/Skeleton';

const apiURL=process.env.REACT_APP_API_URL;

const ProfileT = (props) => {

            const [userData, setuserData] =  useState({
                username: '',
                firstname: '',
                lastname: '',
                birthday:'',
                email: '',
                city: '',
                state:'',
                country: '',
                bio:'',
                experienceyears:'',
                ratings:0,
                specialization: '',
            });

            const [fullName, setfullName] = useState('');

            const [honorific, sethonorific] = useState('');

            const [isLoading, setisLoading] = useState(true);

            const numberOfSkeletons = 10;

            const [formattedDate, setformattedDate] = useState('');
      

            //handle user input
            const handleInput = (e) => {
                const {name,value } = e.target;

                setuserData({
                    ...userData,
                    [name] : value
                })

        }

        useEffect(()=> {
            axios.get(apiURL+'/users/user/',{
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
                    sexe: res.data.profile.sexe,
                    email: res.data.email,
                    city: res.data.profile.city,
                    state: res.data.profile.state,
                    country: res.data.profile.country,
                    bio: res.data.profile.bio,
                    experienceyears: res.data.profile.experience_years,
                    ratings: res.data.profile.ratings,
                    specialization: res.data.profile.specialization
                })

                setisLoading(false);
                // setTimeout(()=>{
                    

                // },"3000")
                
          
                console.log(res.data)

            }).catch(err =>{
                console.log(err.message);
            });

        

        }, []);


        //set fullname and honorific
        useEffect(() =>{
                //set fullname
                let fn = userData.firstname;
                let ln = userData.lastname
                fn = fn.charAt(0).toUpperCase() + fn.slice(1);
                ln= ln.charAt(0).toUpperCase() + ln.slice(1);
                setfullName(fn+' '+ln);

                //set honorific
                if(userData.sexe === 'male'){
                    sethonorific('Mr')
                }
                else if(userData.sexe ==='female'){
                    sethonorific('Mrs')
                }
                        

        }, [userData]);

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

            //Edit Popup
            const editPopup = () => {
                const overlay = document.querySelector('.overlay');
                const ppoc = document.querySelector('.update-profile-container');
                overlay.style.display = 'flex';
                ppoc.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }

            //Hide Edit Popup
            const hideEditPopup = () => {
                const overlay = document.querySelector('.overlay');
                const ppoc = document.querySelector('.update-profile-container');
                overlay.style.display = 'none';
                ppoc.style.display = 'none';
                document.body.style.overflow = 'auto';
                
            }

            //formatting Bday
            useEffect(() =>{

                if (userData && userData.birthday) {
                    const bday = new Date(userData.birthday);

                    const formatter = new Intl.DateTimeFormat('en-US', { 
                        year: "numeric",
                        month: "short",
                        day: "2-digit", });
        
                    setformattedDate(formatter.format(bday));  
                }
               
            }, [userData]);


         

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
                    
                    
                    { isLoading? (
                        <div className='user-card card'>
                            <Skeleton variant="circular" width={100} height={100} />
                            <Skeleton variant="text" width="80%" />
                            <Skeleton variant="text" width='60%' />
                            <Skeleton variant="rounded" width="60%" height={50} />
                            <Skeleton variant="text" width="60%" />
                            <Skeleton variant="text" width="60%" />
                            
                           
                            {/* <div className='profile-img-container2'>
                                
                            </div>
                            <h3 ></h3>
                            <h5 ></h5>
                            <button ><CiEdit /> </button>
                            <h5 >145 ratings</h5>
                            <div /> */}
                    
                        </div>
                        

                    ) : (
                        <div className='user-card card'>
                            <div className='profile-img-container2'>
                                <img src={pp} alt='pp' className='profile-picture2'/>
                            </div>
                            <h3 Style='color: var(--bar-text-color);'>{honorific+'. '+fullName}</h3>
                            <h5 Style='color: var(--bar-text-color); font-weight: 400'>{userData.specialization}</h5>
                            <button onClick={editPopup}className='btn btn-secondary'><CiEdit /> Edit profile</button>
                            <h5 Style='color: var(--bar-text-color);'>145 ratings</h5>
                            <ReactStars
                                        count={5}
                                        value={userData.ratings}
                                        // onChange={ratingChanged}
                                        size={26}
                                        isHalf={true}
                                        edit={false}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                    
                        </div>
                    )}

                 
                    
                    <ul className='profile-nav'>
                            <li><a href='/profile' className='nav-link'>My Profile</a></li>
                            <li><a href='/changepassword' className='nav-link'>Change Password</a></li>
                            <li><a href='/notifications' className='nav-link'>Notifications</a></li>
                            <li><a href='/reviews' className='nav-link'>Reviews</a></li>
                            <li><a href='/privacy' className='nav-link'>Privacy</a></li>
                    </ul>
            
                    <div className='profile-body'>

                        <ul>
                            <li><a href='/profile' className='nav-link'>My Profile</a></li>
                            <li><a href='/changepassword' className='nav-link'>Change Password</a></li>
                            <li><a href='/notifications' className='nav-link'>Notifications</a></li>
                            <li><a href='/reviews' className='nav-link'>Reviews</a></li>
                            <li><a href='/privacy' className='nav-link'>Privacy</a></li>
                        </ul>

             
                
                
                        {isLoading ? (
                            // Show skeletons while loading
                            <div Style='height: 100%; width: 100%; gap: 1rem; display:flex; flex-direction: column'>
                        
                                {Array.from({ length: numberOfSkeletons }).map((_, index) => (
                                    <div key={index} className="skeleton-item">
                                    <Skeleton variant="text" width="50%" />
                                    <Skeleton variant="text" width="30%" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                     
                            <div Style='height: 100%; width: 100%; gap: 1rem; display:flex; flex-direction: column'> 

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
                                    <h2>Bio:</h2>
                                    <p>{userData.bio}</p>
                                </div>

                                <div className='info-block'>
                                    <h2>
                                        Birthday:
                                    </h2>
                                    <p>
                                        {formattedDate}
                                    </p>
                                </div>

                                <div className='info-block'>
                                    <h2>
                                        Username:
                                    </h2>
                                    <p>
                                        {userData.username}
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
                                    <h2>Specialization:</h2>
                                    <p>{userData.specialization}</p>
                                </div>

                                <div className='info-block'>
                                    <h2>Experience Years:</h2>
                                    <p>{userData.experienceyears}</p>
                                </div>
                            </div>
                        )}
                                    


        
                    </div>

            
                </div>
                
            </section>
        )

    
}

export default ProfileT