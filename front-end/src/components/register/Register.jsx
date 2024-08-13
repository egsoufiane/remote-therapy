import React from 'react'
import './register.css'
import logo from '../../assets/logo6.png';

const Register = () => {
    return(
        <section className='container register-section'>

            <div className=" register-message center">
                <a href='/home'><img src={logo} alt="logo" className='logo-register'/></a>
                <h3>You can create an account right now!</h3>
            </div>

            <div className="register-container cool-container">
                <div className="form-message">
                    <h1 className='center'>Sign Up</h1>
                 </div>
                {/* <form>
                    <div className='input-unit'>
                    <label for="firstname">First Name:</label>
                        <input type='text' id='firstname' name='firstname' className='textfield firstname'/>
                    </div>
             
                    <div className='input-unit'>
                        <label for="lastname">Last Name:</label>
                        <input type='text' id='lastname' name='lastname' className='textfield lastname'/>

                     </div>

                    <div className='input-unit'>
                        <label for="Country">Address:</label>
                        <input type='text' id='country' name='country' className='textfield country'/>
                    </div>

                    
                    <div className='input-unit'>
                        <label for='country'>Country:</label>
                        <select id='country' name="country">
                            <option value="morocco" >Morocco</option>
                            <option value="usa" >USA</option>
                            <option value="canada" >Canada</option>
                            <option value="spain" >Spain</option>
                        </select> 
                    </div>

                    <div className='input-unit'>
                        <label for='city'>City:</label>
                        <select id='city' name="city">
                            <option value="oujda" >Oujda</option>
                            <option value="rabat" >Rabat</option>
                            <option value="casablanca" >Casablanca</option>
                            <option value="tanguer" >Tangier</option>
                        </select> 
                    </div>


                    <div className='input-unit'>
                        <label for='gender'>Sexe: </label>
                        <div className='sexe-options'>
                        <input type="radio" id='gender' value="male" name="gender"/>
                        <label for='male'>Male</label>
                        <input type="radio" id='gender' value="female" name="gender"/>
                        <label for='female'>Female</label> 
                        </div>
                    </div>

                    <div className='input-unit'>
                        <label for="email">Email:</label>
                        <input type='email' id='email' name='email' className='textfield email'/>
                    </div>


                    <div className='input-unit'>
                        <label for="confirmemail">Confirm Email:</label>
                        <input type='email' id='confirmemail' name='confirmemail' className='textfield email'/>
                    </div>

                    <div className='input-unit'>
                        <label for="password">Password:</label>
                        <input type='password' id='password' name='password' className='textfield password'/>
                    </div>

                    <div className='input-unit'>
                        <label for="confirmpassword">Confirm Password:</label>
                        <input type='password' id='confirmpassword' name='confirmpassword' className='textfield password'/>
                        <input type='submit' id='submit' value='Register' className='btn btn-secondary'/>
                    </div>

                </form> */}

                <form className='register-form'>
                    <div className='input-unit'>
                        <input type='text' id='firstname' name='firstname' className='textfield firstname' placeholder='Firstname'/>
                    </div>
             
                    <div className='input-unit'>
                        <input type='text' id='lastname' name='lastname' className='textfield lastname' placeholder='Lastname'/>

                     </div>

                    <div className='input-unit'>
                        <input type='text' id='address' name='address' className='textfield address' placeholder='Address'/>
                    </div>

                    
                    <div className='input-unit'>
                        <label for='country'>Country</label>
                        <select id='country' name="country">
                            <option value="morocco" >Morocco</option>
                            <option value="usa" >USA</option>
                            <option value="canada" >Canada</option>
                            <option value="spain" >Spain</option>
                        </select> 
                    </div>

                    <div className='input-unit'>
                        <label for='city'>City</label>
                        <select id='city' name="city">
                            <option value="oujda" >Oujda</option>
                            <option value="rabat" >Rabat</option>
                            <option value="casablanca" >Casablanca</option>
                            <option value="tanguer" >Tangier</option>
                        </select> 
                    </div>


                    <div className='input-unit'>
                        <label for='sexe'>Sexe</label>
                        <div className='sexe-options'>
                            <input type="radio" id='gender' value="male" name="gender"/>
                            <label for='male'>Male</label>
                            <input type="radio" id='gender' value="female" name="gender"/>
                            <label for='female'>Female</label> 
                        </div>
                    </div>

                    <div className='input-unit'>
                        <input type='email' id='email' name='email' className='textfield email' placeholder='Email address'/>
                    </div>


                    {/* <div className='input-unit'>
                        <input type='email' id='confirmemail' name='confirmemail' className='textfield email'/>
                    </div> */}

                    <div className='input-unit'>

                        <input type='password' id='password' name='password' className='textfield password' placeholder='Password'/>
                    </div>

                    {/* <div className='input-unit'>
                        <input type='password' id='confirmpassword' name='confirmpassword' className='textfield password'/>
                    </div> */}

                    <input type='submit' id='submit' value='Register' className='btn btn-secondary'/>

                </form>
                
                <hr/>
                <p className='center'>Already have an account? <a href='/login'>Login Now</a></p>

            </div>


        </section>
    );
}

export default Register;