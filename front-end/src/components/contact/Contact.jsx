import React from 'react';
import './contact.css' 
import pic from '../../assets/about1.jpg';


const Contact = () =>{
    return(
        <section className='contact-section'>
            <div className="contact-container">
                <div className="message-area slide-up-element">
                    <h1>Contact Us</h1>
                    <p>
                        Need to get in touch with us? Fill in this form and we will get back to you as soon as possible.
                    </p>
                </div>
                <div className='infos-container card slide-in-element'>
                    <form className='contact-form'>
                        <div className='name'>
                            <div className='entryareac'>
                                <label htmlFor='firstname' className='contact-label'>Firsrtname*</label>
                                <input type="text" className="firstname" name="firstname" required/>
                            </div>
                            <div className='entryareac'>
                                <label for='lastname' className='contact-label'>Lastname:</label>
                                <input type="text" className="lastname" name="lastname"/>
                             
                            </div>
                        </div>
                        <div className='entryareac'>
                            <label for='email' className='contact-label'>Email*</label>
                            <input type="email" className="firstname" name="email" required/>
                        </div>
                        <div className='entryareac'>
                            <label for='message' className='contact-label'>What can we help you with?</label>
                            <textarea name="Text1" cols="40" rows="8"/>
                        </div> 
                        <input type='submit' value='Submit' className='btn btn-primary'/>
                    </form>
                   
                </div>
            </div>
                
        </section>
    );
}

export default Contact;

