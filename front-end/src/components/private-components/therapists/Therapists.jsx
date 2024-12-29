import React from 'react'
import './therapists.css'
import Header from '../header/Header';
import {useState, useEffect} from 'react'
import axios from 'axios';
import { TbLayoutGridFilled } from "react-icons/tb";
import { LuLayoutList } from "react-icons/lu";
import tpp from '../../../assets/832.jpg';
import ReactStars from "react-rating-stars-component";
import { RiMessage2Fill } from "react-icons/ri";
import { FaCalendar, FaRegEnvelope} from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineSort } from "react-icons/md";
import { IoMdSwitch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";


import {

    useNavigate 
  
  } from "react-router-dom";



const apiURL=process.env.REACT_APP_API_URL;

const Therapists = (props) =>{


    const navigate = useNavigate()

    // const [therapists, setTherapists] = useState([
    //     {
    //         id: '',
    //         firstname: '',
    //         lastname: '',
    //         birthday: '',
    //         sexe: '',
    //         city: '',
    //         state: '',
    //         country: '',
    //         ratigns: 0,
    //         specialziation: '',
    //         bio: '',
    //         experience_years : 0,
    //         user_id: 0
    
    //     }
    // ])

    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [pageSize, setPageSize] = useState(0)
    const [totalCount, setTotalCount] = useState(0);
    const [therapists, setTherapists] = useState([]);
    const [selectedTherapist, setSelectedTherapist] = useState({});
    const [isList, setIsList] = useState(false);
    const [assignedTherapist, setassignedTherapist] = useState({});
    const [isTSelected, setisTSelected]= useState(false);
    const [selectedPageIndex, setSelectedPageIndex] = useState(1);
    

    const pager = () => {
        let pagination = [];
        const totalPages = Math.ceil(totalCount/pageSize);
        const range = 2; // Number of pages to display before and after the selected page
    
        // Calculate start and end range for pagination
        let startPage = Math.max(1, selectedPageIndex - range);
        let endPage = Math.min(totalPages, selectedPageIndex + range);
    
        if (startPage > 1) {
            // Add the first page and ellipsis if necessary
            pagination.push(
                <div
                    key={1}
                    className="page-index-container"
                    style={(1 === selectedPageIndex) ? { backgroundColor: 'var(--accent-color)' } : {}}
                    onClick={() => {
                        loadSpecificPage(1);
                        setSelectedPageIndex(1);
                    }}
                >
                    <h5 className="page-index">1</h5>
                </div>
            );
            if (startPage > 2) {
                pagination.push(
                    <div key="start-ellipsis" className="page-index-container">
                        <h5 className="page-index">...</h5>
                    </div>
                );
            }
        }
    
        // Add pages in the calculated range
        for (let i = startPage; i <= endPage; i++) {
            pagination.push(
                <div
                    key={i}
                    className="page-index-container"
                    style={(i === selectedPageIndex) ? { backgroundColor: 'var(--accent-color)' } : {}}
                    onClick={() => {
                        loadSpecificPage(i);
                        setSelectedPageIndex(i);
                    }}
                >
                    <h5 className="page-index">{i}</h5>
                </div>
            );
        }
    
        if (endPage < totalPages) {
            // Add ellipsis and the last page if necessary
            if (endPage < totalPages - 1) {
                pagination.push(
                    <div key="end-ellipsis" className="page-index-container">
                        <h5 className="page-index">...</h5>
                    </div>
                );
            }
            pagination.push(
                <div
                    key={totalPages}
                    className="page-index-container"
                    style={(totalPages === selectedPageIndex) ? { backgroundColor: 'var(--accent-color)' } : {}}
                    onClick={() => {
                        loadSpecificPage(totalPages);
                        setSelectedPageIndex(totalPages);
                    }}
                >
                    <h5 className="page-index">{totalPages}</h5>
                </div>
            );
        }
    
        return pagination;
    };

    const getTherapists = (url) => {
        axios.get(url, {
            headers:{
                'Content-type': 'application/json',
                
            }
        }).then(res =>{
            console.log(res);
            console.log(res.data);
            setTherapists(res.data.results)
            setNextPage(res.data.next); // Set the next page URL
            setPrevPage(res.data.previous); // Set the previous page URL
            setTotalCount(res.data.count); // Set the total count of appointments
            setPageSize(res.data.page_size); // Set the total count of appointments
            window.location.href="#therapist-list"

        }).catch(err =>{
            console.log(err.message)
        })
    }
    
    //get all therapists
    useEffect(()=>{

        getTherapists(apiURL+'/users/get_therapists/');


    }, []);

    //get selected therapist
    useEffect(()=>{
        axios.get(apiURL+'/users/get_assigned_therapist/', {
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res =>{
            console.log(res);
            console.log(res.data);
            setassignedTherapist(res.data)

        }).catch(err =>{
            console.log(err.message)
        })
        
    }, []);

    //navigate to Schedule Appointment
    const bookAppointment = (therapist) => {
       
        // navigate('/appointment', { state: { id } });
        setisTSelected(true);
        setSelectedTherapist(therapist);

    }

    const confirm = () => {
        let id = selectedTherapist.user;
        submitAssignedTherapist(id);
        
        
    }

    const cancel = () =>{
        setisTSelected(false);
    }

    //select therapist or change selected therapist
    const submitAssignedTherapist = (id) =>{
        axios.post(apiURL+'/users/set_assigned_therapist/', {"selected_therapist_id": id},{
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${props.accessToken}`
            }
        }).then(res =>{
            console.log(res);
            console.log(res.data);
            if(res.data){
                // navigate('/appointment', { state: { id } });
                navigate('/appointment');
            }
            

        }).catch(err =>{
            console.log(err.message)
        })

    }

    useEffect(()=>{
        

    }, [isTSelected]);


    //load next page
    const loadNextPage = () => {
       
        if (nextPage) {
            const index = Number(nextPage.substr(-1));
            setSelectedPageIndex(index);
            getTherapists(nextPage);
        }
    };

    //load previous page
    const loadPrevPage = () => {
        if (prevPage) {
            const index = prevPage.substr(-1);
            if(index === "/"){
                setSelectedPageIndex(1);
            }else{
                setSelectedPageIndex(Number(index));
            }
            
            getTherapists(prevPage);
        }
    };

    //load previous page
    const loadSpecificPage = (key) => {
        const specPage = apiURL+'/users/get_therapists/?page='+key
        if (specPage) {
            getTherapists(specPage);
        }
    };

   

    return(
        <section Style='height:100%'className='section-2'>
            <Header/>

            {
                (isTSelected)? (
                    <>
                    <div className='overlay4' onClick={cancel}></div>
                        <div className='confirmation-box'>
                   
                              <h5 onClick = {cancel} className='quit-login'> <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                                    viewBox="0 -960 960 960" width="24px" fill="#000000">
                                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                                </svg></h5>
                          
                            <h2>Confirm Therapist Selection</h2>
            
                            <div className='confirmation-infos-box'>
                                <div className='confirmation-infos-unit'>
                                    <h3>Fullname:</h3>
                                    <p>{selectedTherapist.firstname+' '+selectedTherapist.lastname}</p>
                                </div>
                                <div className='confirmation-infos-unit'>
                                    <h3>Specialization:</h3>
                                    <p>{selectedTherapist.specialization}</p>
                                </div>
                                <div className='confirmation-infos-unit'>
                                    <h3>Experience years:</h3>
                                    <p>{selectedTherapist.experience_years}</p>
                                </div>
                                
                                <div className='confirmation-infos-unit'>
                                    <h3>From:</h3>
                                    <p>{selectedTherapist.country}</p>
                                </div>
                                {/* <h3> Confirm Your Therapist Choice</h3>
                                <p>Please review the information above. If you’re sure, click "Confirm" to proceed with booking your 
                                    session.If you want to choose a different therapist, click "Cancel" to return 
                                    to the selection screen.</p> */}
            
                                {/* <h3>Are you sure you want to select this therapist for your session?</h3> */}
                                <div className='choices'>
                                    <button className='btn btn-primary' onClick={confirm}>Confirm</button>
                                    <button className='btn btn-secondary' onClick={cancel}>Cancel</button>
                                </div>
                            </div>
                    </div>
                    </>
                ):(
                    ''
                )

            }
           


            <div className='therapists-container'>

                {/* <h3>{JSON.stringify(assignedTherapist)}</h3> */}

                {
                    (assignedTherapist.id)? (
                        <div Style='width:100%; display: flex; flex-direction: column; gap: 10px;'>

                            <div Style='padding: 10px' className='therapist-card-grid assigned-therapist'> 
                                <h3>Your Assigned Therapist</h3>
                                    <div className='inner-therapist-card'>
                                        <div className='tppc-container'>
                                            <img src={tpp} alt='tpp' className='tppc'/>
                                        </div>
                                        {/* <p><h5>{(therapist.sexe === 'male')? 'Mr': 'Mrs'}</h5> {therapist.firstname+' '+therapist.lastname}</p> */}
                                        <div className='therapist-infos-grid'>
                                            <h5> {(assignedTherapist.sexe === 'male')? 'Mr. '+assignedTherapist.firstname+' '+assignedTherapist.lastname : 'Mrs. '+assignedTherapist.firstname+' '+assignedTherapist.lastname }</h5>
                                            <p>{(assignedTherapist.experience_years)? assignedTherapist.experience_years+' years of experience' : ''}</p>
                                            <h5>{assignedTherapist.specialization}</h5>
                                            <p>             
                                                <ReactStars
                                                    count={5}
                                                    value={assignedTherapist.ratings}
                                                    // onChange={ratingChanged}
                                                    size={20}
                                                    isHalf={true}
                                                    edit={false}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                /></p>
                                                        <div className='therapist-cta'>
                                                            <div className='cta-1 card-cta-icon' Style='background-color: green'>
                                                                < FaRegEnvelope/>
                                                            </div>
                                                            <div className='cta-2 card-cta-icon'>
                                                                <FaRegUser/>
                                                            </div>
                                                            
                                                        </div>
                                        </div>
                                        
                                    </div>
                            </div>
                            <a className='change-therapist' href='#therapist-list'>
                                <h3>Change Therapist</h3> 
                                <IoIosArrowDown/>
                            </a>
                        </div>
                    ):(
                        ''
                    )

                }


                <h2 Style='align-self: flex-start; width: 100%; margin-top: 10px'>Explore Our Therapists</h2>
                <div className='types-options-bar'>

                    <div className='layout-types'>
                        <h3>View</h3>
                        <div className='layout-type-container' onClick={()=>{
                            setIsList(false)
                        }}>   
                            <TbLayoutGridFilled className='layout-type'/>
                        </div>
                        <div className='layout-type-container' onClick={()=>{
                            setIsList(true)
                        }}>   
                            <LuLayoutList className='layout-type'/>
                        </div>

                    </div>

                    <div className='therapist-options-container'>
                        <div className='therapist-option-container'>
                            <CiSearch className='layout-type'/>
                        </div>
                        <div className='therapist-option-container'>
                                <MdOutlineSort/>
                                <h5 className='therapist-option'>Sort by</h5>
                        </div>
                        <div className='therapist-option-container'>
                            <IoMdSwitch/>
                            <h5 className='therapist-option'>Filter</h5>
                        </div>
                    </div>

                </div>


                {
                    (isList)?(
                        <div className='therapists-list' id='therapist-list'>
                    {
                            Object.keys(therapists).map((key) => {
                                const therapist = therapists[key];
                                return (
                                    
                                <div key={key} className='therapist-card-list'>
                                    <div className='inner-therapist-card-list'>
                                        <div className='tppc-container'>
                                            <img src={tpp} alt='tpp' className='tppc'/>
                                        </div>
                                        {/* <p><h5>{(therapist.sexe === 'male')? 'Mr': 'Mrs'}</h5> {therapist.firstname+' '+therapist.lastname}</p> */}
                                        <div className='therapist-infos-list'>
                                            <h5> {(therapist.sexe === 'male')? 'Mr. '+therapist.firstname+' '+therapist.lastname : 'Mrs. '+therapist.firstname+' '+therapist.lastname }</h5>
                                            <p>{(therapist.experience_years)? therapist.experience_years+' years of experience' : ''}</p>
                                            <h5>{therapist.specialization}</h5>
                                            <p>             
                                                <ReactStars
                                                        count={5}
                                                    value={therapist.ratings}
                                                    // onChange={ratingChanged}
                                                    size={20}
                                                    isHalf={true}
                                                    edit={false}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                /></p>
                                        </div>
                                    </div>
                                
                                    <div className='therapist-cta-list'>
                                        <div className='cta-1 card-cta-icon-list' onClick={()=>{
                                            bookAppointment(therapist)
                                        }}><FaCalendar/></div>
                                        <div className='cta-2 card-cta-icon-list'><FaRegUser /></div>
                                        
                                    </div>
                                    
                                    
                                </div>
                                
                                
                                );
                    })
                    }
                    </div>

                    ):(
                        <div className='therapists-grid' id='therapist-list'>
                    {
                            Object.keys(therapists).map((key) => {
                                const therapist = therapists[key];
                                return (
                                    
                                <div key={key} Style='padding: 10px' className='therapist-card-grid'>
                                    <div className='inner-therapist-card'>
                                        <div className='tppc-container'>
                                            <img src={tpp} alt='tpp' className='tppc'/>
                                        </div>
                                        {/* <p><h5>{(therapist.sexe === 'male')? 'Mr': 'Mrs'}</h5> {therapist.firstname+' '+therapist.lastname}</p> */}
                                        <div className='therapist-infos-grid'>
                                            <h5> {(therapist.sexe === 'male')? 'Mr. '+therapist.firstname+' '+therapist.lastname : 'Mrs. '+therapist.firstname+' '+therapist.lastname }</h5>
                                            <p>{(therapist.experience_years)? therapist.experience_years+' years of experience' : ''}</p>
                                            <h5>{therapist.specialization}</h5>
                                            <p>             
                                                <ReactStars
                                                        count={5}
                                                    value={therapist.ratings}
                                                    // onChange={ratingChanged}
                                                    size={20}
                                                    isHalf={true}
                                                    edit={false}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                /></p>
                                        </div>
                                       
                                    </div>
                                
                                    <div className='therapist-cta'>
                                        <div className='cta-1 card-cta-icon' onClick={()=>{
                                            bookAppointment(therapist)
                                        }}><FaCalendar/></div>
                                        <div className='cta-2 card-cta-icon'><FaRegUser /></div>
                                        
                                    </div>
                                    
                                </div>
                                
                                
                                );
                    })
                    }
                    </div>

                    )

                }

                    {/* <div className={isList ? 'therapists-list' : 'therapists-grid'}>
                    {
                            Object.keys(therapists).map((key) => {
                                const therapist = therapists[key];
                                return (
                                    
                                <div key={key} Style='padding: 10px' className={isList ? 'therapist-card-list' : 'therapist-card-grid'}>
                                    <div className={isList ? 'inner-therapist-card-list' : 'inner-therapist-card'}>
                                        <div className='tppc-container'>
                                            <img src={tpp} alt='tpp' className='tppc'/>
                                        </div>

                                        <h5> {(therapist.sexe === 'male')? 'Mr. '+therapist.firstname+' '+therapist.lastname : 'Mrs. '+therapist.firstname+' '+therapist.lastname }</h5>
                                        <p>{(therapist.experience_years)? therapist.experience_years+' years of experience' : ''}</p>
                                        <h5>{therapist.specialization}</h5>
                                        <p>             
                                            <ReactStars
                                                    count={5}
                                                    value={therapist.ratings}
                                                    size={20}
                                                    isHalf={true}
                                                    edit={false}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                /></p>
                                    </div>
                                
                                    <div className='therapist-cta'>
                                        <div className='cta-1 card-cta-icon' onClick={()=>{
                                            bookAppointment(therapist.user)
                                        }}><FaCalendar/></div>
                                        <div className='cta-2 card-cta-icon'><FaRegUser /></div>
                                        
                                    </div>
                                    
                                    
                                </div>
                                
                                
                                );
                    })
                    }
                    </div> */}

                <div className='list-nav'>

                        <h5 className='page-prev-next' onClick={loadPrevPage}><MdOutlineKeyboardArrowLeft/> Prev</h5>
                        <div className='index-container'>
                
                            {/* {Array.from({ length: Math.ceil(totalCount / 8)}, (_, i) => (
                            
                                <div key={i} className="page-index-container" Style={(i+1 === selectedPageIndex)? 'background-color: var(--accent-color)' : ''}
                                    onClick={()=>{
                                        loadSpecificPage(i+1)
                                        setSelectedPageIndex(i+1)
                                }}>
                                    <h5 className="page-index">{i + 1}</h5>
                                </div>
                         
                            ))}
                            <div className="page-index-container">
                                <h5 className='page-index'>...</h5>
                            </div>
                            <div className="page-index-container">
                                <h5 className='page-index'>{Math.ceil(totalCount/8)}</h5>
                            </div> */}
                            {pager()}
    
                        </div>

                        <h5 className='page-prev-next' onClick={loadNextPage}>Next <MdOutlineKeyboardArrowRight/> </h5>

                </div>


            </div>
  
        </section>
    )
}

export default Therapists;