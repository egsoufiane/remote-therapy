import React from 'react'
import './reviews.css';
import pp from '../../assets/profile.jpg';
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
let date = new Date();

const Reviews = () => {

    return (
        <section className="section-reviews">
            {/* <div>
                <h1>Therapists</h1>
                <h1>Reviews (Clients testemonies)</h1>
            </div> */}
            <div className='reviews-container'>
                <h1>Here are some of our clients reviews</h1>
                <div className='reviews-cards'>

                    <div className="review-card card">
                        <FaQuoteLeft fill="var(--bar-color)"/>
                        <h3><i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ut aliquid amet et necessitatibus veniam 
                            animi quam, consectetur voluptatum omnis, eaque, ducimus numquam cum. Error sunt adipisci consequatur quos
                             eligendi.</i>
                        </h3>
                        <div className='therapist'> 
                            <div className='profile-img-container'>
                            <img src={pp} className='profile-picture' alt='profile picture'/>
                            </div>
                            <div className='therapist-name'>
                                <h3>Therapist Name</h3>
                                <h3> More reviews</h3>
                            </div>
                        </div>   
                        <p className='review-date'>Date of review: August 30, 2024</p>                    
                    </div>

                    <div className="review-card card">
                        <FaQuoteLeft fill="var(--bar-color)"/>
                        <h3><i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ut aliquid amet et necessitatibus veniam 
                            animi quam, consectetur voluptatum omnis, eaque, ducimus numquam cum. Error mnis, eaque, ducimus numquam cum. Error mnis, eaque, ducimus numquam cum. Error mnis, eaque, ducimus numquam cum. Error sunt adipisci consequatur quos
                             eligendi.</i>
                        </h3>
                        <div className='therapist'> 
                            <div className='profile-img-container'>
                            <img src={pp} className='profile-picture'/>
                            </div>
                            <div className='therapist-name'>
                                <h3>Therapist Name</h3>
                                <h3> More reviews</h3>
                            </div>
                        </div>   
                        <p className='review-date'>Date of review: August 30, 2024</p>                    
                    </div>

                    <div className="review-card card">
                        <FaQuoteLeft fill="var(--bar-color)"/>
                        <h3><i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ut aliquid amet et necessitatibus veniam 
                            animi quam, consectetur voluptatum omnis, eaque, ducimus numquam cum. Error sunt adipisci consequatur quos
                             eligendi.</i>
                        </h3>
                        <div className='therapist'> 
                            <div className='profile-img-container'>
                            <img src={pp} className='profile-picture'/>
                            </div>
                            <div className='therapist-name'>
                                <h3>Therapist Name</h3>
                                <h3> More reviews</h3>
                            </div>
                        </div>   
                        <p className='review-date'>Date of review: August 30, 2024</p>                    
                    </div>

                    <div className="review-card card">
                        <FaQuoteLeft fill="var(--bar-color)"/>
                        <h3><i>Lorem ipsum dolor sit, amet coem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ut aliquid amet et necessitatibus veniam 
                        animi quam, consectetur  animi ndae ut aliquid amet et neem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ut aliquid amet et necessitatibus veniam 
                        animi quam, consectetur  animi 
                            animi quam, consectetur voluptatum omnis, eaque, ducimus numquam cum. Error sunt adipisci consequatur quos
                             eligendi.</i>
                        </h3>
                        <div className='therapist'> 
                            <div className='profile-img-container'>
                            <img src={pp} className='profile-picture'/>
                            </div>
                            <div className='therapist-name'>
                                <h3>Therapist Name</h3>
                                <h3> More reviews</h3>
                            </div>
                        </div>   
                        <p className='review-date'>Date of review: August 30, 2024</p>                    
                    </div>

                    <div className="review-card card">
                        <FaQuoteLeft fill="var(--bar-color)"/>
                        <h3><i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ut aliquid amet et necessitatibus veniam 
                        animi quam, consectetur  animi quam, consectetur  animi quam, consectetur voluptatum omnis, eaque, ducimus numquam cum. Error sunt adipisci consequatur quos
                             eligendi.</i>
                        </h3>
                        <div className='therapist'> 
                            <div className='profile-img-container'>
                            <img src={pp} className='profile-picture'/>
                            </div>
                            <div className='therapist-name'>
                                <h3>Therapist Name</h3>
                                <h3> More reviews</h3>
                            </div>
                        </div>   
                        <p className='review-date'>Date of review: August 30, 2024</p>                    
                    </div>


                    <div className="review-card card">
                        <FaQuoteLeft fill="var(--bar-color)"/>
                        <h3><i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ut aliquid amet et necessitatibus veniam 
                            animi quam, consectetur voluptatum omnis, eaque, ducimus numquam cum. Error sunt adipisci consequatur quos
                             eligendi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ut aliquid amet et necessitatibus veniam 
                            animi quam, consectetur voluptatum omnis, eaque, ducimus numquam cum. Error sunt adipisci consequatur quos
                             eligendi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ut aliquid amet et necessitatibus veniam 
                            animi quam, consectetur voluptatum omnis, eaque, ducimus numquam cum. Error sunt adipisci consequatur quos
                             eligendi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ut aliquid amet et necessitatibus veniam 
                        </i>
                        </h3>
                        <div className='therapist'> 
                            <div className='profile-img-container'>
                            <img src={pp} className='profile-picture'/>
                            </div>
                            <div className='therapist-name'>
                                <h3>Therapist Name</h3>
                                <h3> More reviews</h3>
                            </div>
                        </div>   
                        <p className='review-date'>Date of review: August 30, 2024</p>                    
                    </div>



                </div>
                
                <div className='more-reviews'>
                    <h3 > More Reviews </h3>
                    <IoIosArrowDown size={24}/>
                </div>
                
            </div>
        </section>
    );
}

export default Reviews;