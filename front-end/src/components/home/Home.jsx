import React from 'react'
import './home.css'
import hp from '../../assets/Counseling-PNG-Picture.png';
import hp2 from '../../assets/home-picture2.jpg';

const Home = () => {

//    let maxL = "30";
//    let minL="8";

    return(
        
        <section className='home-section'>
            <div className='container cool-container home-container'>
                <div className='home-slogan'>
                    <h1>Therapy Now!</h1>
                    <h2></h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos, doloribus illo dolores mai
                        ores totam dolorem nihil numquam. Fugit quas minima odit sapiente illo temporibus praesentium rem aperiam 
                        incidunt quia.
                    </p>
                    <a href='/about'><button className='btn btn-secondary' > Read More! </button></a>

                </div>
                <div className='home-picture-container'>
                    <img className='home-picture' src={hp} alt='Home Picture'/>
                </div>

                <div className='login-container'>
                        
                    {/* <h2>Login!</h2> */}

                    {/* <label for='Username'>Username:</label>
                    <input type='text' id='username' name='username' className='textfield' />
                    <label for='Password'>Password</label>
                    <input type='password' id='password' name='password' className='textfield'/>
                    <button className='btn btn-primary'>Log in</button>
                    <p>New user? <a href='/register'>Create an account</a></p> */}
{/* 
                    <form method='post' action='/loggedin'>
                        <label for="email" >Email address:</label>
                        <input type="email" id='email' name="email" className='textfield email' maxlength={maxL} />
                        <label for='password'>Password:</label>
                        <input type='password' id='password' name='password' className='textfield password' minLength={minL}/>
                        <input type='submit' id='submit' value='Sign in' className='btn btn-primary'/>

                    </form>
                    
                    <p>New user? <a href='/register'>Create an account</a></p> */}

                    
                 </div>
            </div>
        
          
        </section>
    );
}

export default Home;