import React, { useEffect, useRef } from 'react';
import './faq.css';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

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

    useEffect( () => {
        const questions = document.querySelectorAll(".question");
        
        questions.forEach((question) => {
            const arrowDown = question.querySelector(".arrow-down");
            const arrowUp = question.querySelector(".arrow-up");
            const answer = question.nextElementSibling;
            if(arrowDown && arrowUp && answer){
                arrowDown.addEventListener('click', () => {
                        answer.classList.add("show");
                        arrowUp.classList.add('show');
                        arrowDown.classList.add('hide');

                });

                arrowUp.addEventListener('click', () => {
                    answer.classList.remove('show');
                    arrowUp.classList.remove('show');
                    arrowDown.classList.remove('hide');

                })
            }
            
        return () => {
            if(arrowDown) arrowDown.removeEventListener("click", () => {});
            if(arrowUp) arrowDown.removeEventListener("click", () => {});
            
        }
        
        });


    }, []);


   

    return(
        <section className='faq-section'>
            <div className="faq-container">
                <h2 className='center'>Frequencty Asked Questions?</h2>
                <div className='questions-container'>

                   
                    <a className="question">
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
                    </div>

                </div>

                <div className="new-question">
                    <h2>Submit A New Question</h2>
                    <form>
                        <input type="text" placeholder="What's your question" className='textfield'/>
                        <input type="submit" value="Submit" className='btn btn-primary'/>
                    </form>
                </div>
            </div>
        </section>
    );
}


export default Faq;