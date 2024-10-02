import React from 'react'
import './about.css'
import ph from '../../assets/64placegolder.png'
import hp from '../../assets/aboutH3.png';
import about1 from '../../assets/about1.jpg'
import about2 from '../../assets/about6.jpg'
import about3 from '../../assets/about4.jpg'
import about4 from '../../assets/videocalls.jpg'
import Typewriter from "typewriter-effect";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight} from "react-icons/fa";
import pp from '../../assets/profile.jpg';
import pp2 from '../../assets/profile2.jpg';





/*slide in animation  */

// document.addEventListener("DOMContentLoaded", function() {


//            window.addEventListener('load', () => {
//             const elements = document.querySelectorAll('.show-in-element');
//             elements.forEach(el => {
//             const rect = el.getBoundingClientRect();
//                     if (rect.top < window.innerHeight) {
//                     el.classList.add('visible');
//                     }
//                 });
//             });     



//            window.addEventListener('scroll', () => {
//             const elements = document.querySelectorAll('.slide-in-element');
//             elements.forEach(el => {
//             const rect = el.getBoundingClientRect();
//                     if (rect.top < window.innerHeight) {
//                     el.classList.add('visible');
//                     }
//                 });
//             });     

//   });


  



const About = () => {
    return(
        <section className='about-section'>
            <div className="about-title slide-in-element">

                    <h2>Here is a little bit about us</h2>
                    <h2 Style='font-size: 3rem; font-weight:600;'>
                    <Typewriter
                        options={{
                            strings: [
                                "What do we do?",
                                "And how can we help <span style='color: var(--accent-color); font-weight:700;'>You?</span>"
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
        
                        }}
                    />
                    </h2>
           
                {/* <h1>What do we do?</h1> */}
            </div>
            
            <div className='about-container'>

                <div className='healing-together-section'>
                    <div className='about-header-title'>
                        <h2 className='slide-in-element' Style="font-weight:600">Healing together</h2>
                        <hr className='slide-in-element'/>
                    </div>

                    <div className='box slide-in-element'>

                        {/* <h2>Our Story</h2> */}
                        <div className='about-box box-left '> 
                            
                            <div className='img-container'>
                                
                                <img src={about1} alt='ph' className='about-img'/>  
                            </div>
                            
                            <div className='about-descritpion'>
                                <div className='description-header'>
                                    <h2>Your Journey to Well-Being Starts Here</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum inventore aliquam soluta et facilis sapiente, vel,
                                    a consequatur itaque nulla excepturi architecto repudiandae modi! Pariatur officiis excepturi ab ratione! Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit. Facilis quo eaque perspiciatis incidunt repellat vero, error doloribus eum, 
                                    veritatis quaerat, illo quia sapiente? Neque assumenda quo incidunt itaque id vitae.</p>
                            </div>
                        </div>
                    </div>
                
                    <div className='box box-middle slide-in-element'>
                        <div className='about-box box-right'>
                            <div>
                            <div className='about-descritpion'>
                                    <h2>Your Path to Mental Wellness,<b> Anywhere</b></h2>
                                    {/* <div className='double-text'>
                                        <h2>Your Path to Mental Wellness,</h2>
                                        <h2>
                                            <Typewriter
                                            options={{
                                                strings: [
                                                    "<span style='font-weight: 600;'>Anywhere</span>"
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                deleteSpeed: 50,
                                            }}
                                            /> 
                                        </h2>
                                    </div> */}
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum inventore aliquam soluta et facilis sapiente, vel,
                                    a consequatur itaque nulla excepturi architecto repudiandae modi! Pariatur officiis excepturi ab ratione! Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit. Facilis quo eaque perspiciatis incidunt repellat vero, error doloribus eum, 
                                    veritatis quaerat, illo quia sapiente? Neque assumenda quo incidunt itaque id vitae.
                                    </p>
                                </div>
                        </div>
                            <div className='img-container-right'>
                            <   img src={about2} alt='ph' className='about-img'/> 
                            </div>
                    
                            

                        </div>
                    </div>

                    <div className='box slide-in-element'>
                    
                        <div className='about-box box-left'>
                        
                            <div className='img-container'>
                                <img src={about3} alt='ph' className='about-img'/>
                            </div>
                            
                            <div>
                            <div className='about-descritpion'>
                                <div className='description-header'>
                                        <h2 className='third-header'>Virtual Care, Real Support</h2>
                                </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum inventore aliquam soluta et facilis sapiente, vel,
                                    a consequatur itaque nulla excepturi architecto repudiandae modi! Pariatur officiis excepturi ab ratione! Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit. Facilis quo eaque perspiciatis incidunt repellat vero, error doloribus eum, 
                                    veritatis quaerat, illo quia sapiente? Neque assumenda quo incidunt itaque id vitae.
                                    </p>
                                </div>
                            </div>
                        
                        </div>
                    </div>

                    <div className='box box-middle '>
                        <div className='about-box box-right slide-in-element'>
                            <div>
                            <div className='about-descritpion'>
                                    <h2>Connecting Hearts and Minds</h2>
                                    {/* <div className='double-text'>
                                        <h2>Your Path to Mental Wellness,</h2>
                                        <h2>
                                            <Typewriter
                                            options={{
                                                strings: [
                                                    "<span style='font-weight: 600;'>Anywhere</span>"
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                deleteSpeed: 50,
                                            }}
                                            /> 
                                        </h2>
                                    </div> */}
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum inventore aliquam soluta et facilis sapiente, vel,
                                    a consequatur itaque nulla excepturi architecto repudiandae modi! Pariatur officiis excepturi ab ratione! Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit. Facilis quo eaque perspiciatis incidunt repellat vero, error doloribus eum, 
                                    veritatis quaerat, illo quia sapiente? Neque assumenda quo incidunt itaque id vitae.
                                    </p>
                                </div>
                        </div>
                            <div className='img-container-right'>
                            <   img src={about4} alt='ph' className='about-img'/> 
                            </div>
                    
                            

                        </div>
                    </div>

                </div>

                <div className='stats'>
                    <div className='stats-header side-slide-left'>
                        <h3 Style='font-weight:400'>Our Impact in <b Style='font-weight:700'>Numbers</b></h3>
                        <p>The numbers speak for themselves—our clients experience real, lasting change through our remote therapy services.</p>
                    </div>
                    <div className="stats-cards">
                        <div className="stats-card stair-element">
                            <h2 className='number'>95%</h2>
                            <h3>of clients report feeling better after just 3 sessions</h3>
                           
                        </div>

                        <div className="stats-card stair-element">
                            <h2 className='number'>1,500+</h2>
                            <h3>successful therapy sessions completed each month</h3>
                        </div>

                        <div className="stats-card stair-element">
                            <h2 className='number'>98%</h2>
                            <h3>client satisfaction rate across all therapy services</h3>
                        </div>

                        <div className="stats-card stair-element">
                            <h2 className='number'>24/7</h2>
                            <h3>availability for scheduling and support</h3>
                        </div>

                        <div className="stats-card stair-element">
                            <h2 className='number'>85%</h2>
                            <h3>of users feel more confident managing stress and anxiety</h3>
                        </div>

                        <div className="stats-card stair-element">
                            <h2 className='number'>12,000+</h2>
                            <h3>people have started their mental wellness journey with us</h3>
                        </div>

                        <div className="stats-card stair-element">
                            <h2 className='number'>300+</h2>
                            <h3>licensed therapists specializing in various fields, ready to help you</h3>
                        </div>

                        <div className="stats-card stair-element">
                            <h2 className='number'>99%</h2>
                            <h3>of sessions are successfully completed without technical issues</h3>
                        </div>

                        

                    </div>
                    
                </div>

                <div className='about-reviews'>
                    <h2 className='side-slide-left'>Our lastest reviews</h2>
                    <div className='about-reviews-cards'>
                        <div className='about-review-card stair-element'>
                            <div className='profile-img-container'>
                                <img className='profile-picture' src={pp2} alt='profile-picture'/>
                            </div>
                            <div className='quote-icon-left'><FaQuoteLeft/></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatum a pariatur nemo quasi modi 
                                cumque explicabo esse quibusdam illo rem! Fugiat a error quas nobis ut veritatis labore saepe</p>
                            <div className='quote-icon-right'><FaQuoteRight/></div>
                            <h3>Therapist name</h3>
                            <h5>Review date</h5>
                        </div>

                        <div className='about-review-card stair-element'>
                            <div className='profile-img-container'>
                                <img className='profile-picture' src={pp} alt='profile-picture'/>
                            </div>
                            <div className='quote-icon-left'><FaQuoteLeft/></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatum a pariatur nemo quasi modi 
                                cumque explicabo esse quibusdam illo rem! Fugiat a error quas nobis ut veritatis labore saepe</p>
                            <div className='quote-icon-right'><FaQuoteRight/></div>
                            <h3>Therapist name</h3>
                            <h5>Review date</h5>
                        </div>

                          <div className='about-review-card stair-element'>
                          <div className='profile-img-container'>
                                <img className='profile-picture' src={pp2} alt='profile-picture'/>
                            </div>
                            <div className='quote-icon-left'><FaQuoteLeft/></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatum a pariatur nemo quasi modi 
                                cumque explicabo esse quibusdam illo rem! Fugiat a error quas nobis ut veritatis labore saepe</p>
                            <div className='quote-icon-right'><FaQuoteRight/></div>
                            <h3>Therapist name</h3>
                            <h5>Review date</h5>
                        </div>
                    </div>
                    <a  href='/reviews'><button className='btn'>Read more reviews</button> </a>
                </div>

                {/* <div className="box-team">
                    <h2>Our team</h2>
                </div> */}
                
            </div>
    
        </section>
      
    );
}

export default About;