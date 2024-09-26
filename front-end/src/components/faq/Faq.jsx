import React, { useEffect, useState, useRef } from 'react';
import './faq.css';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

// document.querySelector('.arrow-down').AddEventListener("click", function() {
//     const answer = document.querySelector('.anwser');
//     const arrowDown = document.querySelector('.arrow-down');
//     const arrowUp = document.querySelector('.arrowUp');

//     answer.style.display = 'flex';
//     arrowDown.style.diplsay = 'none';
//     arrowUp.style.display = 'flex';

// });

// document.querySelector('.arrow-up').AddEventListener("click", function() {
//     const answer = document.querySelector('.anwser');
//     const arrowDown = document.querySelector('.arrow-down');
//     const arrowUp = document.querySelector('.arrowUp');

//     answer.style.display = 'none';
//     arrowDown.style.diplsay = 'flex';
//     arrowUp.style.display = 'none';
// });


// const showAnswer = () => {
//     const answer = document.querySelector('.anwser');
//     const arrowDown = document.querySelector('.arrow-down');
//     const arrowUp = document.querySelector('.arrowUp');

//     answer.classList.add('show');
//     arrowUp.classList.add('show');
//     arrowDown.classList.add('hide');
// }

// const hideAnswer = () => {
//     const answer = document.querySelector('.anwser');
//     const arrowDown = document.querySelector('.arrow-down');
//     const arrowUp = document.querySelector('.arrowUp');

//     answer.classList.remove('show');
//     arrowUp.classList.remove('show');
//     arrowDown.classList.remove('hide');

// }



const Faq = () => {

    // const [isRotated, setIsRotated] = useState(false);
    

    // useEffect(()=>{
    //     const arrowFaq = document.querySelector('.arrow-faq');

    //     if(arrowFaq){   
    //         if(arrowFaq.style.transform === 'rotate(180deg)'){
    //             arrowFaq.style.transform = 'rotate(0deg)';
    //             arrowFaq.parentElement.nextElementSibling.style.display = 'none';
    //         }else{
    //             arrowFaq.style.transform = 'rotate(180deg)';
    //             arrowFaq.parentElement.nextElementSibling.style.display = 'flex';

    //         }
            
    //     }
        
    // }, [isRotated]);

    
    /* Handle showing and hiding answers when clicking arrows */

    // const answerRef = useRef(null);
    // const arrowDownRef = useRef(null);
    // const arrowUpRef = useRef(null);


    // useEffect(() => {
    //     const answer = answerRef.current;
    //     const arrowDown = arrowDownRef.current;
    //     const arrowUp = arrowUpRef.current;

    //     if(answer && arrowDown && arrowUp) {
    //         arrowDown.addEventListener("click", () => {
    //             answer.classList.add("show");
    //             arrowDown.classList.add("hide");
    //             arrowUp.classList.add("show");
    //         });

    //         arrowUp.addEventListener("click", () => {
    //             answer.classList.remove("show");
    //             arrowDown.classList.remove("hide");
    //             arrowUp.classList.remove("show");
    //         })
    //     }


        
    //     // Cleanup the event listeners on component unmount
    //     return () => {
    //       
    //         if (arrowDown) arrowDown.removeEventListener("click", () => {});
    //         if (arrowUp) arrowUp.removeEventListener("click", () => {});
           
    //     };


    // }, []);


    // Clicking arrows Up and Down

    // useEffect( () => {
    //     const questions = document.querySelectorAll(".question");
        
    //     questions.forEach((question) => {
    //         const arrowDown = question.querySelector(".arrow-down");
    //         const arrowUp = question.querySelector(".arrow-up");
    //         const answer = question.nextElementSibling;
    //         if(arrowDown && arrowUp && answer){
    //             arrowDown.addEventListener('click', () => {
    //                     answer.classList.add("show");
    //                     arrowUp.classList.add('show');
    //                     arrowDown.classList.add('hide');

    //             });

    //             arrowUp.addEventListener('click', () => {
    //                 answer.classList.remove('show');
    //                 arrowUp.classList.remove('show');
    //                 arrowDown.classList.remove('hide');

    //             })
    //         }
            
    //     return () => {
    //         if(arrowDown) arrowDown.removeEventListener("click", () => {});
    //         if(arrowUp) arrowDown.removeEventListener("click", () => {});
            
    //     }
        
    //     });

    
    // }, []);


    // const [isRotated, setIsRotated] = useState(false);

    // useEffect(() => {

    //     const questions = document.querySelectorAll('.question');

    //     questions.forEach((question) => {
    //         const arrowFaq = question.firstElementChild.nextElementSibling;
    //         question.addEventListener('click', ()=> {
                
    //             if(arrowFaq.style.transform === 'rotate(180deg)'){
    //                 arrowFaq.style.transform = 'rotate(0)';
    
    //             }else{
    //                 arrowFaq.style.transform ='rotate(180)';
    
    //             }
    //         });
    //     });
    // }, [isRotated]);

    // const [isRotated, setIsRotated] = useState(false);

    // useEffect(()=>{
    //     const questions = document.querySelectorAll('.question');
        
    //     questions.forEach((question) => {
    //         question.addEventListener('click', () => {
         
    //             const arrowFaq = question.firstElementChild.nextElementSibling;
    //             const answer = question.nextElementSibling;
    //             if(arrowFaq.style.transform === 'rotate(180deg)'){
    //                 arrowFaq.style.transform = 'rotate(0deg)';
    //                 answer.classList.add('show');
    //             }else{
    //                 arrowFaq.style.transform = 'rotate(180deg)';
    //                 answer.classList.remove('show');
    //             }
    //         });
            
    //     });
   
        
    // }, []);

    const [clicked, setClicked] = useState(null);

    //setClicked to clicked question
    const toggle = (i) => {
        if(clicked == i){
            setClicked(null);
        }else{
            setClicked(i);
        }

        
    }
    


    return(
        <section className='faq-section'>
            <div className="faq-container">
                <h2 className='center'>Frequencty Asked Questions?</h2>
                <div className='questions-container'>

                   
                    {/* <a className="question">
                        <h4>Question number 1?</h4>
                        <a className='arrow-down' > <FaArrowDown/> </a>
                        <a className='arrow-up'> <FaArrowUp/> </a>
                    </a>
                    
                    <div className="answer" >
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto.
                        </p>
                    </div>

                    <a className="question">
                        <h4>Question number 2?</h4>
                        <a className='arrow-down'> <FaArrowDown/> </a>
                        <a className='arrow-up'> <FaArrowUp/> </a>
                        
                    </a>  
                    <div className="answer" >
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto.                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto.
                            
                        </p>
                    </div>

                    
                    <div className="question">
                        <h4>Question number 2?</h4>
                        <a className='arrow-down'> <FaArrowDown/> </a>
                        <a className='arrow-up' > <FaArrowUp/> </a>
                        
                    </div>  
                    <div className="answer" >
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto. Lorem ipsum dolor, sit 
                            amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto.
                            
                        </p>
                    </div> */}

                    {/* <div className="question" onClick={() => setIsRotated(!isRotated)}>
                        <h4>Question number 2?</h4>
                        <a className='arrow-faq' > <IoIosArrowDown/></a>
                   
                    </div>  
                    <div className="answer" >
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto. Lorem ipsum dolor, sit 
                            amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto.
                            
                        </p>
                    </div> */}
{/* 
                    <div className="question">
                        <h4>Question number 2?</h4>
                        <a className='arrow-faq' > <IoIosArrowDown/></a>
                   
                    </div>  
                    <div className="answer" >
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto. Lorem ipsum dolor, sit 
                            amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto.
                            
                        </p>
                    </div>

                    <div className="question" >
                        <h4>Question number 2?</h4>
                        <a className='arrow-faq' > <IoIosArrowDown/></a>
                   
                    </div>  
                    <div className="answer" >
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto. Lorem ipsum dolor, sit 
                            amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum tenetur earum quidem, ut, natus repudiandae 
                            iure itaque, quos consequatur quam! Numquam a dolores modi aliquam magnam asperiores quasi iusto.
                            
                        </p>
                    </div> */}

                    {/* <div className="faq" >
                         <div className="question" >
                            <h4>Question 1?</h4>
                            <IoIosArrowDown/>
                        </div>
                        <div className="answer">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum animi dolor molestias tenetur dolorem 
                            soluta, alias temporibus doloribus laudantium corporis autem, nobis aut accusamus veniam fuga 
                            perferendis, beatae eum quia?
                        </div>
                    </div>

                    <div className="faq" >
                        <div className="question">
                            <h4>Question 2?</h4>
                            <IoIosArrowDown/>
                        </div>
                        <div className="answer">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum animi dolor molestias tenetur dolorem 
                            soluta, alias temporibus doloribus laudantium corporis autem, nobis aut accusamus veniam fuga 
                            perferendis, beatae eum quia?
                        </div>
                    </div> */}


                    {fqData.map((item, i) => (
                        <div className='faq'> 
                            <div className="question" onClick = {() => toggle(i)}>
                                <h4>{item.question} </h4> 
                                <a className={clicked === i ? 'arrow-faq clicked': 'arrow-faq'} ><IoIosArrowDown/> </a>
                                {/* Style={ clicked === i ? 'transform: rotate(180deg)' : 'transform:rotate(0deg)'} */}
            
                            </div>
                             <div className={clicked === i ? 'answer show': 'answer'}>
                                {item.answer}
                            </div>

                        </div>

                    
                    ))}


                </div>

                <div className="new-question">
                    <h2>Submit A New Question</h2>
                    <form className='new-question-form'>
                        <input type="text" placeholder="What's your question" className='textfield'/>
                        <input type="submit" value="Submit" className='btn btn-primary'/>
                    </form>
                </div>
            </div>
        </section>
    );
}


const fqData = [
    {
      question: "What is remote therapy?",
      answer: "Remote therapy allows you to receive professional counseling from licensed therapists via video calls or phone sessions."
    },
    {
      question: "How do I book a session?",
      answer: "You can book a session by visiting our scheduling page, selecting an available time, and completing the booking form."
    },
    {
      question: "Is remote therapy secure?",
      answer: "Yes, we use encrypted platforms to ensure your privacy and confidentiality during sessions."
    },
    {
      question: "What should I prepare for my first session?",
      answer: "For your first session, make sure you have a stable internet connection and a quiet, private space where you feel comfortable talking."
    },
    {
      question: "Can I reschedule or cancel my appointment?",
      answer: "Yes, you can reschedule or cancel your appointment up to 24 hours in advance without any fees."
    },
    {
      question: "How long does a typical session last?",
      answer: "A typical therapy session lasts about 50 minutes, but this can vary depending on your therapist and your needs."
    },
    {
      question: "Do you offer therapy for couples or families?",
      answer: "Yes, we offer remote therapy sessions for individuals, couples, and families. You can choose the type of session when booking."
    },
    {
      question: "What types of therapy do you offer?",
      answer: "We offer a wide range of therapy options including cognitive behavioral therapy (CBT), psychodynamic therapy, mindfulness-based therapy, and more."
    },
    {
      question: "Is therapy covered by insurance?",
      answer: "Coverage for therapy depends on your insurance provider. We recommend checking with your insurance company to see if remote therapy is covered."
    },
    {
      question: "How do I know if remote therapy is right for me?",
      answer: "Remote therapy is a great option if you prefer the convenience of accessing therapy from home, have a busy schedule, or live in an area with limited access to therapists."
    },
    {
      question: "What if I have technical difficulties during the session?",
      answer: "If you experience technical difficulties, your therapist will help you troubleshoot or reschedule the session as needed."
    },
    {
      question: "Can I choose my therapist?",
      answer: "Yes, you can choose a therapist based on their profile, specialties, and availability. We also offer assistance in matching you with a therapist that fits your needs."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer a free initial consultation to help you decide if remote therapy is right for you and to match you with the appropriate therapist."
    },
    {
      question: "How do I pay for my sessions?",
      answer: "You can pay for your sessions through our secure online payment system. We accept all major credit cards and some digital payment methods."
    },
    {
      question: "Can I get a refund if I cancel my session?",
      answer: "Refunds are available if you cancel your session at least 24 hours in advance. Cancellations made less than 24 hours before the session may incur a fee."
    },
    {
      question: "How often should I attend therapy sessions?",
      answer: "The frequency of therapy sessions depends on your needs and goals. Some people prefer weekly sessions, while others may meet less frequently."
    }
  ]
  




export default Faq;