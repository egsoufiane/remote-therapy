import React, { useEffect } from 'react';
import './apply.css';
import { FaCheck } from "react-icons/fa";
import { FaSquareXmark } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import {FaQuoteLeft} from "react-icons/fa";
import pp from '../../assets/profile.jpg';
import Apply2 from './Apply2';
import Apply3 from './Apply3';







// const showInfo = () => {
//     const infoBox = document.querySelector('.info-box');
//     infoBox.style.display = 'flex';
// }

// const hideInfo = () => {
//     const infoBox = document.querySelector('.info-box');
//     infoBox.style.display = 'none';
// }


const Apply = () => {

    useEffect(() => {
        const moreInfos = document.querySelectorAll('.more-info');
     
        moreInfos.forEach((moreInfo) => {
            const infoBox = moreInfo.nextElementSibling;
    
            moreInfo.addEventListener('mouseover', () => {
                
                
                infoBox.style.display = 'flex';
            });

            moreInfo.addEventListener('mouseout', () => {
            
                infoBox.style.display = 'none';
            });

            return () => {
                if(moreInfo){
                    moreInfo.removeEventListener("mouseover", ()=> {});
                    moreInfo.removeEventListener("mouseout", () => {});
            }
                
            }
    
        })

    
    }, []);



    /*handle form submit event */
    useEffect(()=> {
        const form = document.getElementById('apply-form');

        form.addEventListener('submit', (event)=> {
            event.preventDefault(); // prevent page reload

            document.querySelector('.apply1').style.display='none';
            document.querySelector('.apply2').style.display='flex';
        });

        document.getElementById('apply-form2').addEventListener('submit', (event) => {
            event.preventDefault();
    
            document.querySelector('.apply2').style.display='none';
            document.querySelector('.apply3').style.display='flex';
          });

    }, []);




    return (
        <section className='apply-section'>
            <div className='apply-container'>
                <div className='application' id="start-application">
                <h1 className='center'>Join Our team of <b Style='color:var(--accent-color);'>203239</b> Therapists</h1>
                    <div className="apply1">
                        
                        <h2>What is your specialty?</h2>
                        
                        <form id='apply-form' className="apply-form">
                            <input type='submit' value='Psychologist' className='btn btn-primary'/>
                            <input type='submit' value='Licensed Professional Counselor (LPC)' className='btn btn-primary'/>
                            <input type='submit' value='Marriage and Family Therapist (MFT)' className='btn btn-primary'/>
                            <input type='submit' value='Licensed Clinical Social Worker (LCSW)' className='btn btn-primary'/>
                            <input type='submit' value='Child and Adolescent Therapist' className='btn btn-primary'/>
                        </form>
                        <h3>01/03</h3>
                    </div>
                    <div className="apply2"><Apply2/></div>
                    <div className="apply3"><Apply3/></div>
                    
                
                </div>
                <div className='benefits'>
                
                   
                    <h1 className='center'><b Style='color:var(--accent-color);'>THERAPYNOW</b> vs Traditional Office Therapy</h1>

                    <table>
                        <tr> 
                            <th></th>
                            <th className='table-header'>THERAPYNOW</th>
                            <th className='table-header2'>OFFICE THERAPY</th>
                        </tr>
                       
                        <tr>
                            <td>Work from anywhere</td>
                            <td className='right-row'><FaCheck size={20} fill='green'/></td>
                            <td><FaXmark size={26}fill='red'/></td>
                        </tr>
                        <tr>
                            <td>Set your own schedule</td>
                            <td className='right-row'><FaCheck size={20} fill='green'/></td>
                            <td><FaXmark size={26}fill='red'/></td>
                        </tr>
                        <tr>
                            <td>Get paid instantly <FaCircleInfo className='more-info'/> 
                                <h6 className='info-box'>Loroekrznr</h6></td>
                            <td className='right-row'><FaCheck size={20} fill='green'/>
                               
                            </td>
                            <td><FaXmark size={26}fill='red'/></td>
                        </tr>
                        <tr>
                            <td>Meet clients in person</td>
                            <td className='right-row'><FaXmark size={26}fill='red'/></td>
                            <td><FaCheck size={20} fill='green'/></td>
                        </tr>
                        <tr>
                            <td>Cost-Effectiveness</td>
                            <td className='right-row'><FaCheck size={20} fill='green'/></td>
                            <td><FaXmark size={26}fill='red'/></td>
                        </tr>
                        <tr>
                            <td>Broader Client Base <FaCircleInfo className='more-info'/> 
                            <h6 className='info-box'>Lorem ipsum dolor sit amet cons in maiores, velitium doloribus dignissimos nihil maiores.</h6>
                            </td>
                            <td className='right-row'><FaCheck size={20} fill='green'/></td>
                            <td><FaXmark size={26}fill='red'/></td>
                        </tr>
                        <tr>
                            <td>Enhanced Work-Life Balance</td>
                            <td className='right-row'><FaCheck size={20} fill='green'/></td>
                            <td><FaXmark size={26}fill='red'/></td>
                        </tr>



                       
                    </table>
                </div>

                <div className='therapists-testemonies'>
                    <h1>Testimonies</h1>
                    <div className='testimonies-cards reviews-cards'>
                        <div className="testimony-card review-card card">
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
                                </div>
                            </div>   
                            <p className='review-date'>Date of review: August 30, 2024</p>  
                        </div>
                        <div className="testimony-card review-card card">
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
                                </div>
                            </div>   
                            <p className='review-date'>Date of review: August 30, 2024</p>  
                        </div>
                        <div className="testimony-card review-card card">
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
                                </div>
                            </div>   
                            <p className='review-date'>Date of review: August 30, 2024</p>  
                        </div>


                    </div>

                </div>

                

                <div className="requirements">
                    <h1>Requirements</h1>
                    <ul className='requirements-list' Style='list-style:circle'>
                        <li className='requierement'>
                           Must have a valid therapist license (e.g., LPC, LCSW, MFT)
                        </li>
                        <li className='requierement'>
                            Minimum of 3+ years of clinical experience
                        </li>
                        <li className='requierement'>
                            Master's degree or higher in Psychology, Counseling, Social Work, or a related field
                        </li>
                        <li className='requierement'>
                        Proficiency in teletherapy platforms (for remote positions)
                        </li>
                        <li className='requierement'>
                        Excellent communication and interpersonal skills
                        </li>
                        <li className='requierement'>
                           Must have a valid therapist license (e.g., LPC, LCSW, MFT)
                        </li>
                    </ul>
                    <a  href="#start-application">
                        <button className="btn btn-secondary start-btn-app" >Start Application</button></a>
                </div>
              
            </div>

           
            
        </section>
        
    );
}

export default Apply;