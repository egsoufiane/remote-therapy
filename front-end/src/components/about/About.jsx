import React from 'react'
import './about.css'
import ph from '../../assets/64placegolder.png'
import hp from '../../assets/aboutH3.png';
import about1 from '../../assets/about1.jpg'
import about2 from '../../assets/about2.jpg'
import about3 from '../../assets/about4.jpg'
import Typewriter from "typewriter-effect";




/*slide in animation  */
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.slide-in-element');
  
    const handleScroll = () => {
        elements.forEach(el => {
        const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                el.classList.add("visible");
                }
            });
        };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on page load
  });



const About = () => {
    return(
        <section className='about-section'>
            <div className="about-title">

                    <h2>Here is a little bit about us</h2>
                    <h1>
                    <Typewriter
                        options={{
                            strings: [
                                "What do we do?",
                                "How can we help <span style='color: var(--gold-color); font-weight:700;'>You?</span>"
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                    </h1>
           
                {/* <h1>What do we do?</h1> */}
            </div>
            
            <div className='about-container'>

                <div className='box '>

                    {/* <h2>Our Story</h2> */}
                    <div className='about-box box-left slide-in-element'> 
                        <img src={about1} alt='ph' className='about-img'/>
                        <div className='about-descritpion'>
                            <h2>Our Story</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum inventore aliquam soluta et facilis sapiente, vel,
                            a consequatur itaque nulla excepturi architecto repudiandae modi! Pariatur officiis excepturi ab ratione! Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Facilis quo eaque perspiciatis incidunt repellat vero, error doloribus eum, 
                            veritatis quaerat, illo quia sapiente? Neque assumenda quo incidunt itaque id vitae.</p>
                        </div>
                    </div>
                </div>
              
                <div className='box box-middle '>
                    <div className='about-box box-right slide-in-element'>
                        <div>
                            {/* <h2>Your Path to Mental Wellness, Anywhere</h2> */}
                            <div className='double-text'>
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
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum inventore aliquam soluta et facilis sapiente, vel,
                            a consequatur itaque nulla excepturi architecto repudiandae modi! Pariatur officiis excepturi ab ratione! Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Facilis quo eaque perspiciatis incidunt repellat vero, error doloribus eum, 
                            veritatis quaerat, illo quia sapiente? Neque assumenda quo incidunt itaque id vitae.
                            </p>
                        </div>
                        <img src={about2} alt='ph' className='about-img'/>  
                       
                       
                    </div>
                </div>

                <div className='box'>
                   
                    <div className='about-box box-left slide-in-element'>
                      
                        <img src={about3} alt='ph' className='about-img'/> 
                        <div>
                            <h2 className='third-header'>Virtual Care, Real Support</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum inventore aliquam soluta et facilis sapiente, vel,
                            a consequatur itaque nulla excepturi architecto repudiandae modi! Pariatur officiis excepturi ab ratione! Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Facilis quo eaque perspiciatis incidunt repellat vero, error doloribus eum, 
                            veritatis quaerat, illo quia sapiente? Neque assumenda quo incidunt itaque id vitae.
                        </p>
                        </div>
                       
                    </div>
                </div>
            </div>
    
        </section>
      
    );
}

export default About;