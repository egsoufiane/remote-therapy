import React, { useEffect,useState } from 'react';
import axios from 'axios';
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
    const [formData, setformData] = useState({

        username : '',
        firstname : '',
        lastname : '',
        birthday: '',
        sexe: '',
        city:'',
        state:'',
        country: '',
        email: '',
        password: '',
        specialization: '',
        bio: '',
        experienceyears: null,
    
    });



    const handleInput = (e) => {
        const {name,value} = e.target;
        setformData({
            ...formData,
            [name]:value
        })
    }

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


    
    const specialtyClick = (event)=> {
         handleInput(event);
        // event.preventDefault(); // prevent page reload
        const apply2 = document.querySelector('.apply3');

        document.querySelector('.apply1').style.display='none';
        apply2.style.display='flex';

       

        // setTimeout(() => {
        //     const apply2 = document.querySelector('.apply2');
        //     apply2.classList.add('slide-in');
        // }, 10);
       
        const forceReflow = apply2.offsetHeight; 

       
        // Now apply the sliding animation
        apply2.classList.add('slide-in');

    };

    /*handle form submit event */
    useEffect(()=> {
        // const form = document.getElementById('apply-form');

        // const specialtyClick = (event)=> {
        //     event.preventDefault(); // prevent page reload
        //     const apply2 = document.querySelector('.apply2');

        //     document.querySelector('.apply1').style.display='none';
        //     apply2.style.display='flex';

           

        //     // setTimeout(() => {
        //     //     const apply2 = document.querySelector('.apply2');
        //     //     apply2.classList.add('slide-in');
        //     // }, 10);
           
        //     const forceReflow = apply2.offsetHeight; 

        // // Now apply the sliding animation
        // apply2.classList.add('slide-in');
    
        // };

        // document.getElementById('application-form3').addEventListener('submit', (event) => {
        //     event.preventDefault();

        //     //handle submitting data
        //     // axios.post('http://127.0.0.1:8000/users/register_therapist/', formData,{
        //     //     headers: {
        //     //         'Content-Type': 'application/json'
        //     //     }
        //     // }).then(res => {
        //     //     console.log(res);
        //     //     console.log(res.data);
        //     // }).catch(error => {
        //     //     console.error('Error:', error.response ? error.response.data : error.message);
        //     // })



        //     const apply2 = document.querySelector('.apply2');
    
        //     document.querySelector('.apply2').style.display='none';
        //     document.querySelector('.apply3').style.display='flex';

        //     const forceReflow = apply2.offsetHeight;

        //     apply2.classList.add('slide-in');
           

        //   });



    },[]);

    
    //handle apply3 form go from apply3 goto apply2
    const nextForm = (event) => {
        event.preventDefault();

            const apply2 = document.querySelector('.apply2');
    
            document.querySelector('.apply3').style.display='none';
            document.querySelector('.apply2').style.display='flex';

            const forceReflow = apply2.offsetHeight;

            apply2.classList.add('slide-in');
           


    }




    return (
        <section className='apply-section'>
            <div className='apply-container'>
                
                <div className='application' id="start-application">
                    <h2 className='center side-slide-left'>Join Our team of <b Style='color:var(--accent-color);'>203239</b> Therapists</h2>
                    <div className="apply1 slide-in-element">
                        
                        <h2>What is your specialty?</h2>
                        
                        <div id='apply-form' className="apply-form">
                            <button value='Psychologist' name='specialization' className='btn btn-primary' onClick={specialtyClick}>Psychologist</button>
                            <button value='Licensed Professional Counselor (LPC)' name='specialization'  className='btn btn-primary' onClick={specialtyClick}>Licensed Professional Counselor (LPC)</button>
                            <button value='Marriage and Family Therapist (MFT)' name='specialization' className='btn btn-primary' onClick={specialtyClick}>Marriage and Family Therapist (MFT)</button>
                            <button value='Licensed Clinical Social Worker (LCSW)' name='specialization' className='btn btn-primary' onClick={specialtyClick}>Licensed Clinical Social Worker (LCSW)</button>
                            <button value='Child and Adolescent Therapist' name='specialization' className='btn btn-primary' onClick={specialtyClick}>Child and Adolescent Therapist</button>
                        </div>
                        <h3>01/03</h3>
                    </div>
                    <div className="apply2"><Apply2 formData={formData} setformData={setformData} handleInput={handleInput}/></div>
                    <div className="apply3"><Apply3 nextForm={nextForm} formData={formData} setformData={setformData} handleInput={handleInput}/></div>
                    
                
                </div>

                <div className='benefits slide-in-element'>
                
                    <h2 className='center' Style="font-weight:500;"><b Style='color:var(--accent-color);'>THERAPYNOW</b> <b>vs</b> Traditional Office Therapy</h2>

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
                                <td className='right-row'><FaCheck size={20} fill='green'/> </td>
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

                <div className='therapists-testemonies slide-in-element'>
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

                

                <div className="requirements slide-in-element">
                    <h2>Requirements</h2>
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