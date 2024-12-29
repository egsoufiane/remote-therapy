import React, { useEffect, useState } from 'react';
import axios from 'axios';
import countryData from '../../assets/countries.json';



const Apply2 = (props) => {

    const [selectedCountry, setSelectedCountry] = useState("");
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [cities, setCities] = useState([]);

 
  
    const handleCountryChange = (event) => {
      const selectedCountry = event.target.value;
      setSelectedCountry(selectedCountry);

      props.handleInput(event);
    
  
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

        props.handleInput(event);
    
        // Find the selected country in the data
        const state = states.find((item) => item.name === selectedState);
    
        
        // Set the states based on the selected country

 
                if (state) {
                    setCities(state.cities);
                    } else {
                    setCities([]);
                    }
        
        };


    
        //Apply2 render animation
    // useEffect(()=> {
    //     const apply2 = document.querySelector('.apply2-section');

    //     apply2.addEventListener('load', ()=> ()=> {
    //         apply2.classList.add('slide-in');

    //     });

    // }, []);




    // const handleInput = (e) => {
    //     const {name,value} = e.target;
    //     setformData({
    //         ...formData,
    //         [name]:value
    //     })
    // }


    const handleSubmit = (e) => {
        e.preventDefault();

        //handle submitting data
        axios.post('http://127.0.0.1:8000/users/register_therapist/', props.formData,{
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            console.log(res.data);
        }).catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
        })

    }


    return (
        <section className="apply2-section" >
            <div className='apply2-container'>
                <h2>Please fill in the information below</h2>
                <form id="apply-form2" className="application-form" onSubmit={handleSubmit}>
                    <div className='input-unit' Style='width:100%'>   
                        <input type='text' id='firstname' name='firstname' className='textfield firstname' placeholder='Firstname' Style='width:100%;' onChange={props.handleInput}/>
                        <input type='text' id='lastname' name='lastname' className='textfield lastname' placeholder='Lastname' Style='width:100%;' onChange={props.handleInput}/>
                     </div>

                     <div className='input-unit'>   
                        <input type='date' id='birthday' name='birthday' className='textfield date' Style='width: auto' onChange={props.handleInput}/>
                       
                     </div>
                     <div>
                        <label for='sex' className='register-label'>Sex</label>
                            <div className='sexe-options' >
                                <input type="radio" id='male' value="male" name="sexe" onChange={props.handleInput}/>
                                <label htmlFor='male'>Male</label>
                                <input type="radio" id='female' value="female" name="sexe" onChange={props.handleInput}/>
                                <label htmlFor='female' Style='align-self: center'>Female</label> 
                            </div>
                     </div>
                        
                    

                    <div className='input-unit-apply'>
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
                            <select id='city' name="city" onChange={props.handleInput} >
                                <option value="">Select a city</option>
                                {cities.map((city) => (
                                    <option value={city.name}>{city.name}</option>
                                        ))
                                    }
                            </select> 
                        </div>
                    </div>
                    
                
                    <input type='text' id='username' name='username' className='textfield username' placeholder='Username' onChange={props.handleInput}/>
                
                    <input type='email' id='email' name='email' placeholder='Email address' className='textfield' onChange={props.handleInput}/>
                    <input type='password' id='password' name='password' placeholder='Password' className='textfield' onChange={props.handleInput}/>

                    

                    <input type='submit' value='Next' className='btn btn-primary apply-submit-btn' />

                </form>
                <h3>03/03</h3>

            </div>
    
                
        </section>
    );

}



export default Apply2;