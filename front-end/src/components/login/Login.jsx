import React from 'react'
import './login.css'
import logo from '../../assets/logo6.png';

const Login = () => {

    let maxL = '30';
    let minL ='8';

    return (
        

        <section className='login-section'>
            <div  className='container login-container-outer'>
                    <div className='login-message center'>
                        <a href='/home'><img src={logo} alt='logo' className='logo-login'/></a>
                        <h3 className='center'>Login or create an account!</h3>

                    </div>

                    <div className='login-container-inner cool-container'>
                        <h2 className='center'>Sign in!</h2>
                        {/* <form method='post' action='/loggedin' className='login-form'>
            
                            <label for="email" >Email address:</label>
                            <input type="email" id='email' name="email" className='textfield email' maxlength={maxL} />
                    
                            <label for='password'>Password:</label>
                            <input type='password' id='password' name='password' className='textfield password' minLength={minL}/>
                        
                            <input type='submit' id='submit' value='Sign in' className='btn btn-primary'/>

                        </form> */}

                        <form className='login-form'>

                            <div className="entryarea">
                                <input  type="email" id='email' name="email" className='email input-cool' maxlength={maxL} />
                                <div className="label-cool">email</div>
                            </div>
                            
                            <div className="entryarea">
                                <input type='password' id='password' name='password' className='password input-cool' minLength={minL}/>   
                                <div className="label-cool">password</div>
                            </div>

{/*                           
                            <div className="entryarea">
                                <input type="text" className="input-cool" />
                                <div className="label-cool">fullname</div>
                            </div>
 */}                
                            <input type='submit' id='submit' value='Sign in' className='btn btn-primary'/>
                            
                        </form> 
                        
                       

                        <a className='center' href='#'>Forgotten password?</a>

                        <hr/>
            
                        <p className='center' >New user? <a href='/register'>Create an account</a></p>
                    </div>
            </div>
        </section>

    );
}

export default Login;