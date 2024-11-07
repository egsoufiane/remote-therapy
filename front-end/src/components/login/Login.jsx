import React,{useState} from 'react'
import './login.css'
import logo from '../../assets/logo6.png';
import Oath from '../oath/Oath';
import axios from 'axios'
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";

const apiURL=process.env.REACT_APP_API_URL;




const Login = () => {

    let maxL = '30';
    let minL ='8';

    
    const [formData, setformData] = useState({
        username:'',
        password:'',
    })

    const handleInput = (e) => {
        const {name, value} = e.target;
        setformData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(apiURL+'/api/token/',formData,{
            headers:{
                'Content-type': 'application/json'
            } 
        }).then(res => {
            console.log(res);
            console.log(res.data);
      
            localStorage.setItem('accessToken',res.data.access);
            localStorage.setItem('refreshToken',res.data.refresh);
            localStorage.setItem('isClient',res.data.is_client);
            localStorage.setItem('isTherapist',res.data.is_therapist);
            if(res.data.is_client)
                window.location.href='/'
            if(res.data.is_therapist)
                window.location.href ='/'
            
            
        }).catch(err => {
            console.log(err);
            console.log(err.message);
         


        });


    }

     //toggle password visibility
    const toggleEye = () => {
    const eyeClosed = document.querySelector('.eye-closed');
    const eyeOpen = document.querySelector('.eye-open');
    const passwordInput = document.getElementById('password');
    if(passwordInput.type === 'password'){
        eyeClosed.style.display = 'none';
        eyeOpen.style.display = 'flex';
        passwordInput.type = 'text';
    }else if(passwordInput.type === 'text'){
        eyeClosed.style.display = 'flex';
        eyeOpen.style.display = 'none';
        passwordInput.type = 'password';
    }
   
}

    return (
        

        <section className='login-section'>
           
                    {/* <div className='login-message center'>
                        <a href='/home'><img src={logo} alt='logo' className='logo-login'/></a>
                        <h3 className='center'>Login or create an account!</h3>

                    </div> */}

                    <div className='login-container-inner '>
                 
                        <form className='login-form' onSubmit={handleSubmit}>
                            <div className='input-unit'>
                                {/* <input type='email' id='email' name='email' className='textfield email' placeholder='Email' onChange={handleInput}/> */}
                                <input type='text' id='username' name='username' className='textfield username' placeholder='Username or Email' onChange={handleInput}/>
                            </div>
                    
                            <div className='input-unit'>
                                <input type='password' id='password' name='password' className='textfield password' placeholder='Password' onChange={handleInput}/>
                                <GoEyeClosed className='eye-closed' onClick={toggleEye}/>
                                <RxEyeOpen className='eye-open' onClick={toggleEye}/>
                                
                            </div>
                            <div className="checkbox-input">
                                <input type='checkbox' value='rememberme'/>
                                <label for='rememberme' Style='font-weight: 400'>Remember me</label>
                            </div>
                            <input type='submit' id='submit-login' value='LogIn' className='btn btn-primary'/>
                        </form>
                        {/* <a className='center' href='#'>Forgotten password?</a> */}
                                                

                       <Oath/>

                        {/* <form method='post' action='/loggedin' className='login-form'>
            
                            <label for="email" >Email address:</label>
                            <input type="email" id='email' name="email" className='textfield email' maxlength={maxL} />
                    
                            <label for='password'>Password:</label>
                            <input type='password' id='password' name='password' className='textfield password' minLength={minL}/>
                        
                            <input type='submit' id='submit' value='Sign in' className='btn btn-primary'/>

                        </form> */}

                        {/* <form className='login-form'>

                            <div className="entryarea">
                                <input  type="email" id='email' name="email" className='email input-cool' maxlength={maxL} />
                                <div className="label-cool">email</div>
                            </div>
                            
                            <div className="entryarea">
                                <input type='password' id='password' name='password' className='password input-cool' minLength={minL}/>   
                                <div className="label-cool">password</div>
                            </div>

                            <input type='submit' id='submit' value='Sign in' className='btn btn-secondary'/>
                            
                        </form> 
                         */}
                       


                    </div>
            
        </section>

    );
}

export default Login;