import React from 'react'
import './register.css'
import logo from '../../assets/logo6.png';
import countryData1 from '../../assets/countries1.json';
import countryData from '../../assets/countries.json';
import {useState} from 'react'
import Oath from '../oath/Oath';
import axios from 'axios'


const Register = ({showLogin}) => {

    const [selectedCountry, setSelectedCountry] = useState("");
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [cities, setCities] = useState([]);

       const [formData, setformData] = useState({
            firstname: '',
            lastname: '',
            username: '',
            birthday:'',
            sexe:'',
            city:'',
            state:'',
            country:'',
            email: '',
            password: ''
        });

 
  
    const handleCountryChange = (event) => {
      const selectedCountry = event.target.value;
      setSelectedCountry(selectedCountry);

      const { name, value } = event.target;
      setformData({
          ...formData,
          [name]: value
      });

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

        const { name, value } = event.target;
        setformData({
            ...formData,
            [name]: value
        });
  
   
        // Find the selected country in the data
        const state = states.find((item) => item.name === selectedState);
    
        // Set the states based on the selected country

                if (state) {
                    setCities(state.cities);
                    } else {
                    setCities([]);
                    }
        
        };

  

        //Handling getting and sending registring data to backend

    
    
        const handleInput = (e) => {
            const { name, value } = e.target;
            setformData({
                ...formData,
                [name]: value
            });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
    
            axios.post('http://127.0.0.1:8000/users/register_client/', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.href='/'
            })
            .catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message);
        
            });
        };



    
     
    return(
        
        <section className='container register-section'>

            {/* <div className=" register-message center">
                <a href='/home'><img src={logo} alt="logo" className='logo-register'/></a>
                <h3>You can create an account right now!</h3>
                
            </div> */}

            <div className="register-container">
                {/* <h2>{JSON.stringify(formData)}</h2> */}
                <form className='register-form' onSubmit={handleSubmit}>
                    <div className='input-unit'>   
                        <input type='text' id='firstname' name='firstname' className='textfield firstname' placeholder='Firstname' onChange={handleInput}/>
                        <input type='text' id='lastname' name='lastname' className='textfield lastname' placeholder='Lastname' onChange={handleInput}/>
                     </div>

                     <div className='input-unit'>   
                        <input type='date' id='birthday' name='birthday' className='textfield date' onChange={handleInput}/>
                       
                     </div>

                    {/* <div className='input-unit'>
                        <input type='text' id='address' name='address' className='textfield address' placeholder='Address'/>
                    </div> */}

              
                    <div className='input-unit'>
                        <div className='hinput-unit'>
                            <label htmlFor='country' className='register-label' >Country</label>
                            <select id='country' name="country"  value={selectedCountry} onChange={handleCountryChange} >
                                <option value="">Select a country</option>
                                {countryData.map((item) => (
                                    <option value={item.name}>{item.name}</option>
                                        ))
                                    }
                            </select> 
                        </div>
                        
                        <div className='hinput-unit'>
                            <label htmlFor='state' className='register-label' >Region</label>
                            <select id='state' name="state"  value={selectedState} onChange={handleStateChange}>
                                <option value="">Select a Region</option>
                                {states.map((state) => (
                                    <option value={state.name}>{state.name}</option>
                                        ))
                                    }
                            </select> 
                        </div>

                        <div className='hinput-unit'>
                            <label htmlFor='country' className='register-label' >City</label>
                            <select id='city' name="city" value={formData.city} onChange={handleInput}>
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
                                <input type="radio" id='sexe' value="male" name="sexe" onChange={handleInput}/>
                                <label for='male'>Male</label>
                                <input type="radio" id='sexe' value="female" name="sexe" onChange={handleInput}/>
                                <label for='female'>Female</label> 
                            </div>
                        </div>

                    <div className='input-unit'>
                        <input type='text' id='username' name='username' className='textfield username' placeholder='Username' onChange={handleInput}/>
                    </div>
                    <div className='input-unit'>
                        <input type='email' id='email' name='email' className='textfield email' placeholder='Email address' onChange={handleInput}/>
                    </div>

                    <div className='input-unit'>

                        <input type='password' id='password' name='password' className='textfield password' placeholder='Password' onChange={handleInput}/>
                    </div>

                    <input type='submit' id='submit' value='Register' className='btn btn-primary'/>

                </form>
                <Oath />
                <hr/>
                {/* <h2>{JSON.stringify(formData)}</h2> */}
                <p className='center'>Already have an account? <a onClick={showLogin}>Login Now</a></p>

            </div>

 {/* select country and city */}    
        
 
        </section>


    );
}

export default Register;