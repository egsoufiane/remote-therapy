import React, { useEffect, useState } from 'react';
import countryData from '../../assets/countries.json';



const Apply2 = () => {

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

    return (
        <section className="apply2-section" >
            <div className='apply2-container'>
                
                <h1>Please fill in the information below</h1>
                <form id="apply-form2" className="application-form">
                    <input type='text' id='firstname' placeholder='First name' className='textfield' />
                    <input type='text' id='lastname' placeholder='Last name' className='textfield' />
                    <input type='email' id='email' placeholder='Email address' className='textfield' />
                    <input type='text' id='address' placeholder='Address' className='textfield' />
                    {/* <select value='select a country'>
                        <option value='oujda '>Oujda</option>
                        <option value='rabat'>Rabat</option>
                        <option valye='casablanca'>Casablanca
                        </option>
                    </select> */}
                    
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
                            <select id='city' name="city"  >
                                <option value="">Select a city</option>
                                {cities.map((city) => (
                                    <option value={city.name}>{city.name}</option>
                                        ))
                                    }
                            </select> 
                        </div>
                  
                       
                    </div>

                    

                    <input type='submit' value='Next' className='btn btn-primary apply-submit-btn' />

                </form>
                <h3>02/03</h3>

            </div>
    
                
        </section>
    );

}



export default Apply2;