import React, {useEffect, useRef} from 'react';
import './services.css';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";
import sp from '../../assets/therapists1.png';
import service1 from '../../assets/online-interview.png';
import service2 from '../../assets/message.png';
import service3 from '../../assets/calendar.png';
import service4 from '../../assets/compliant.png';
import service5 from '../../assets/lock.png';


// const arrowLeftClicked = () => {
//     const servicesCards = document.querySelectorAll('.service-card');
//     servicesCards.forEach(serviceCard => {
//         // serviceCard.classList.add('.cliked-left');
//         // serviceCard.style.background = 'red';
//         serviceCard.style.transform = 'translateX(-30%)';
//     });

//     // const servicesCards = document.querySelector('.services-cards');
//     // // servicesCards.classList.add('clicked-left');
//     // servicesCards.style.background = 'blue';
//     // servicesCards.style.transform = 'translateX(-100px)';

// }

// const arrowRightClicked = () => {
//     const servicesCards = document.querySelectorAll('.service-card');
//     servicesCards.forEach(serviceCard => {
//         // serviceCard.classList.add('.cliked-right');
//         // serviceCard.style.background = 'blue';

//         serviceCard.style.transform = 'translateX(30%)';
//     });

//     // const servicesCards = document.querySelector('.services-cards');
//     // // servicesCards.classList.add('clicked-right');
//     // servicesCards.style.background = 'red';
//     // servicesCards.style.transform = 'translateX(100px)';

// }



// document.querySelector(".arrow-left").addEventListener("click", function() {
//     const servicesCards = document.querySelector(".services-cards");
//     servicesCards.classList.add('clicked-left');

// });

// document.getElementById("arrow-left").addEventListener("click", function() {
//     const servicesCards = document.querySelector(".services-cards");
//     servicesCards.scrollBy({
//         left: -servicesCards.clientWidth / 3,
//         behavior: 'smooth'
//     });
// });

// document.getElementById("arrow-right").addEventListener("click", function() {
//     const servicesCards = document.querySelector(".services-cards");
//     servicesCards.scrollBy({
//         left: servicesCards.clientWidth / 3,
//         behavior: 'smooth'
//     });
// });



const Services = () => {


    /* Cards moving left right */


    const servicesCardsRef = useRef(null);
    const arrowLeftRef = useRef(null);
    const arrowRightRef = useRef(null);
    const arrowLeftSmallRef = useRef(null);
    const arrowRightSmallRef = useRef(null);
  
 
    useEffect(() => {
        const servicesCards = servicesCardsRef.current;
        const arrowLeft = arrowLeftRef.current;
        const arrowRight = arrowRightRef.current;
        const arrowLeftSmall = arrowLeftSmallRef.current;
        const arrowRightSmall = arrowRightSmallRef.current;

        const w = window.innerWidth;


        if(w < 1025){
            if (arrowLeft && arrowRight && servicesCards) {

                arrowLeftSmall.addEventListener("click", () => {
                    servicesCards.scrollBy({
                        left: -servicesCards.clientWidth,
                        behavior: 'smooth'
                    });
                });

                arrowRightSmall.addEventListener("click", () => {
                    servicesCards.scrollBy({
                        left: servicesCards.clientWidth,
                        behavior: 'smooth'
                    });
                });
            }


        }else{
            

            if (arrowLeft && arrowRight && servicesCards) {

                arrowLeft.addEventListener("click", () => {
                    servicesCards.scrollBy({
                        left: -servicesCards.clientWidth / 3,
                        behavior: 'smooth'
                    });
                });

                arrowRight.addEventListener("click", () => {
                    servicesCards.scrollBy({
                        left: servicesCards.clientWidth / 3,
                        behavior: 'smooth'
                    });
                });
            }

        }

        // Cleanup the event listeners on component unmount
        return () => {
            if (arrowLeft) arrowLeft.removeEventListener("click", () => {});
            if (arrowRight) arrowRight.removeEventListener("click", () => {});
            if (arrowLeftSmall) arrowLeftSmall.removeEventListener("click", () => {});
            if (arrowRightSmall) arrowRightSmall.removeEventListener("click", () => {});
        };
    }, []);

    

 

    return (
        <section className="services-section">
            <div className='services-container'>
                <div className='services-header'>
                    <div className='services-intro'>                    
                        <h2>Welcome To Our Online Therapy Services</h2>
                        <h3> we provide compassionate, personalized care through convenient online video therapy.</h3>
                        <p>
                            Our team of licensed therapists is dedicated to providing empathetic, expert care. With diverse specialties and a passion 
                            for helping others, they are here to support you on your journey to better mental health.
                        </p>
                    </div>

                    <img src={sp} alt='services picture' className='services-img'/>

                </div>
                

                <div className="therapy-services middle-box slide-in-element">

                    <div className="services-intro">
                    
                        <h2>Connecting You to Better Mental Health</h2>
                        <h3>Why type of type of therapy are you looking for?</h3>
                    </div>

                    <div className='services-list'>       
                                
                            <button className='arrow arrow-side arrow-left' ref={arrowLeftRef} ><FaArrowLeft/></button>

                            <div className="services-cards" ref={servicesCardsRef}>

                                <div className='card service-card'>
                                    <div className='service-card-title'>   
                                        <FaPerson/>
                                        <h1>Individual Therapy</h1>
                                    </div>
                                    <p>Tailored one-on-one sessions to help you address anxiety, depression, stress, and personal growth. Our therapists use
                                        approaches like Cognitive Behavioral Therapy (CBT), mindfulness, and psychodynamic therapy to guide you. Sessions 
                                        typically last 50 minutes and are scheduled weekly or bi-weekly.
                                    </p>
                                    <div className='cta'>
                                        <button className='btn btn-secondary'>Sign Up</button>
                                        <button className='btn btn-primary'>Ask a Question!</button>
                                    </div>
                                </div>

                                <div className='card service-card'>
                                    <div className='service-card-title'>
                                        <MdFamilyRestroom/>
                                        <h1>Family Therapy </h1>
                                    </div>
                                    <p>
                                        Enhance family dynamics and resolve conflicts with our family therapy sessions. We address parenting challenges, blended family issues,
                                        and generational conflicts. Sessions can involve the whole family or focus on specific members to support each individual's mental
                                        well-being.
                                    </p>
                                    <div className='cta'>
                                        <button className='btn btn-secondary'>Sign Up</button>
                                        <button className='btn btn-primary'>Ask a Question!</button>
                                    </div>
                                </div>

                                <div className='card service-card '>
                                    <div className='service-card-title'>
                                        <FaPeopleGroup/>
                                        <h1>Group Therapy</h1>
                                    </div>
                                    
                                    <p>
                                    Join our group therapy sessions to connect with others facing similar challenges. Whether dealing with 
                                    anxiety, grief, or addiction, group therapy offers shared experiences, peer support, and reduxced isolation. 
                                    Choose from support groups, skill-building groups, or discussion groups.
                                    </p>
                                    <div className='cta'>
                                        <button className='btn btn-secondary'>Sign Up</button>
                                        <button className='btn btn-primary'>Ask a Question!</button>
                                    </div>
                                </div>
            
                                <div className='card service-card'>
                                    <div className='service-card-title'>   
                                        <IoBook/>
                                        <h1>Free Resources</h1>
                                    </div>
                                    <p>
                                    Access our library of self-help guides, mental health articles, and recommended books, apps, and websites. 
                                    Visit our blog for insights and advice on various mental health topics.
                                    </p>
                                    <div className='cta'>
                                        <button className='btn btn-secondary'>Sign Up</button>
                                        <button className='btn btn-primary'>Ask a Question!</button>
                                    </div>
                                </div>

                            

                                {/* <a className='arrow arrow-right' onClick={arrowRightClicked} Style='color:black;'><FaArrowRight/></a> */}
                                

                            </div>
                
                            <button className='arrow arrow-side arrow-right' ref={arrowRightRef} ><FaArrowRight/></button>
                        
                            <div className='arrows'>
                                <button className='arrow arrow-left' ref={arrowLeftSmallRef} ><FaArrowLeft/></button>
                                <button className='arrow arrow-right' ref={arrowRightSmallRef}><FaArrowRight/></button>
                            </div>

                    </div>  


                </div>
            

                <div className="technical-services slide-in-element">
                    <div className='services-intro'>
                        <h2> Your Safe Space Online</h2>  
                        <h3>Our platform is designed to make your sessions accessible and convenient, so you can focus on what matters most—your 
                            well-being.</h3>
                    </div>
                    
                    <div className="technical-cards">
                        <div className='card tech-card'>
                            <img src={service1} alt='video-call' className='service-img'/>
                            <div className="tech-service-description">
                                <h2>
                                    VideoCalls
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab, beatae delectus aperiam consequuntur
                                     ex a odio quasi ipsum eum corrupti quae totam quam aspernatur autem cumque corporis minus voluptas.
                                </p>
                            </div>

                        </div>
                        <div className='card tech-card'>
                            <img src={service2} alt='video-call' className='service-img'/>
                            <div className="tech-service-description">
                                <h2>
                                    Messaging
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab, beatae delectus aperiam consequuntur
                                     ex a odio quasi ipsum eum corrupti quae totam quam aspernatur autem cumque corporis minus voluptas.
                                </p>
                            </div>

                        </div>
                        <div className='card tech-card'>
                            <img src={service3} alt='video-call' className='service-img'/>
                            <div className="tech-service-description">
                                <h2>
                                    Schedule Sessions
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab, beatae delectus aperiam consequuntur
                                     ex a odio quasi ipsum eum corrupti quae totam quam aspernatur autem cumque corporis minus voluptas.
                                </p>
                            </div>
                        </div>
                        <div className='card tech-card'>
                            <img src={service4} alt='video-call' className='service-img'/>
                            <div className="tech-service-description">
                                <h2>
                                    Privacy
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab, beatae delectus aperiam consequuntur
                                     ex a odio quasi ipsum eum corrupti quae totam quam aspernatur autem cumque corporis minus voluptas.
                                </p>
                            </div>
                        </div>
                        <div className='card tech-card'>
                            <img src={service5} alt='video-call' className='service-img'/>
                            <div className="tech-service-description">
                                <h2>
                                    Secure Payment
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab, beatae delectus aperiam consequuntur
                                     ex a odio quasi ipsum eum corrupti quae totam quam aspernatur autem cumque corporis minus voluptas.
                                </p>
                            </div>
                        </div>


                    </div>
                    

                </div>
                   
           
            </div>
        </section>
    );

}

export default Services;