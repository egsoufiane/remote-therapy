import React from 'react'
import './register.css'
import logo from '../../assets/logo6.png';
import countryData1 from '../../assets/countries1.json';
import countryData from '../../assets/countries.json';
import {useState} from 'react'
import Oath from '../oath/Oath';


const Register = ({showLogin}) => {

    const [selectedCountry, setSelectedCountry] = useState("");
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [cities, setCities] = useState([]);

 
  
    const handleCountryChange = (event) => {
      const selectedCountry = event.target.value;
      setSelectedCountry(selectedCountry);
  
      // Find the selected country in the data
      const country = countryData.find((item) => item.name === selectedCountry);

  
      // Set the states based on the selected country
         

            if (country) {

                setStates(country.states);
            } else {
                setStates([]);

            }


    };



    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        setSelectedState(selectedState);
    
        // Find the selected country in the data
        const state = states.find((item) => item.name === selectedState);
    
        
        // Set the states based on the selected country

  
 
                if (state) {
                    setCities(state.cities);
                    } else {
                    setCities([]);
                    }
        
        };

    
     
    return(
        
        <section className='container register-section'>

            {/* <div className=" register-message center">
                <a href='/home'><img src={logo} alt="logo" className='logo-register'/></a>
                <h3>You can create an account right now!</h3>
                
            </div> */}

            <div className="register-container">
        
                <form className='register-form'>
                    <div className='input-unit'>   
                        <input type='text' id='firstname' name='firstname' className='textfield firstname' placeholder='Firstname'/>
                        <input type='text' id='lastname' name='lastname' className='textfield lastname' placeholder='Lastname'/>
                     </div>

                    {/* <div className='input-unit'>
                        <input type='text' id='address' name='address' className='textfield address' placeholder='Address'/>
                    </div> */}

              
                    <div className='input-unit'>
                        <div className='hinput-unit'>
                            <label htmlFor='country' className='register-label' >Country</label>
                            <select id='country' name="country"  value={selectedCountry} onChange={handleCountryChange}>
                                <option value="">Select a country</option>
                                {countryData.map((item) => (
                                    <option value={item.name}>{item.name}</option>
                                        ))
                                    }
                            </select> 
                        </div>
                        
                        <div className='hinput-unit'>
                            <label htmlFor='state' className='register-label' >Region</label>
                            <select id='state' name="state"  value={selectedState} onChange={handleStateChange} >
                                <option value="">Select a Region</option>
                                {states.map((state) => (
                                    <option value={state.name}>{state.name}</option>
                                        ))
                                    }
                            </select> 
                        </div>

                        <div className='hinput-unit'>
                            <label htmlFor='country' className='register-label' >City</label>
                            <select id='city' name="city"  >
                                <option value="">Select a city</option>
                                {cities.map((city) => (
                                    <option value={city.name}>{city.name}</option>
                                        ))
                                    }
                            </select> 
                        </div>
                  
                    </div>

                        <div className='hinput-unit'>   
                            <label for='sex' className='register-label'>Sex</label>
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

                    <div className='input-unit'>

                        <input type='password' id='password' name='password' className='textfield password' placeholder='Password'/>
                    </div>

                    <input type='submit' id='submit' value='Register' className='btn btn-primary'/>

                </form>
                <Oath />
                <hr/>
                <p className='center'>Already have an account? <a onClick={showLogin}>Login Now</a></p>

            </div>

 {/* select country and city */}    
        
 
        </section>


    );
}

export default Register;