import React from 'react'
import './login.css'
import logo from '../../assets/logo6.png';
import Oath from '../oath/Oath';

const Login = () => {

    let maxL = '30';
    let minL ='8';

    return (
        

        <section className='login-section'>
           
                    {/* <div className='login-message center'>
                        <a href='/home'><img src={logo} alt='logo' className='logo-login'/></a>
                        <h3 className='center'>Login or create an account!</h3>

                    </div> */}

                    <div className='login-container-inner '>
                        
                        <form className='login-form'>
                            <div className='input-unit'>
                                <input type='email' id='email' name='firstname' className='textfield email' placeholder='Email'/>
                            </div>
                    
                            <div className='input-unit'>
                                <input type='password' id='password' name='password' className='textfield password' placeholder='Password'/>
                            </div>
                            <div className="checkbox-input">
                                <input type='checkbox' value='rememberme'/>
                                <label for='rememberme' Style='font-weight: 400'>Remember me</label>
                            </div>
                            <input type='sumbit' value='Log In' className='btn btn-primary'/>
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