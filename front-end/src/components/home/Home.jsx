import React, { useEffect } from 'react'
import './home.css'
import hp from '../../assets/home3BG.jpg';
import hp1 from '../../assets/home-picture2.jpg';
import hp2 from '../../assets/home4.jpg';
import hp3 from '../../assets/home5.png';
import hp4 from '../../assets/aboutH3.png';
import hp5 from '../../assets/home6.png';
import hp6 from '../../assets/home7.jpg';
import hp7 from '../../assets/home8.png';
import hp8 from '../../assets/home9.jpg';
import hp9 from '../../assets/aboutH2.jpg';

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaCouch } from "react-icons/fa6";
import { MdPrivacyTip } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { VscSmiley } from "react-icons/vsc";
import { RiLoopRightFill } from "react-icons/ri";
import { MdDiversity1 } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { IoEarth } from "react-icons/io5";







const circleClickOne = () => {
    const circle1 = document.querySelector('.circle1');
    const circle2 = document.querySelector('.circle2');
    const circle3 = document.querySelector('.circle3');

    // const img1 = document.querySelector('.hp1');
    // const img2 = document.querySelector('.hp2');
    // const img3 = document.querySelector('.hp3');

    circle1.style.background = 'var(--bar-color)';
    circle2.style.background = 'var(--bar-text-color)';
    circle3.style.background = 'var(--bar-text-color)';

    circle1.style.transform = 'scale(1.2)';
    circle2.style.transform = 'scale(1)';
    circle3.style.transform = 'scale(1)';

    // img1.style.display = 'flex';
    // img2.style.display = 'none';
    // img3.style.display = 'none';

    const imgsContainer = document.querySelector('.slides');

    imgsContainer.scrollTo({
        left: 0,
        behavior: 'smooth'
    });



}

const circleClickTwo = () => {
    const circle1 = document.querySelector('.circle1');
    const circle2 = document.querySelector('.circle2');
    const circle3 = document.querySelector('.circle3');

    // const img1 = document.querySelector('.hp1');
    // const img2 = document.querySelector('.hp2');
    // const img3 = document.querySelector('.hp3');

    circle1.style.background = 'var(--bar-text-color)';
    circle2.style.background = 'var(--bar-color)';
    circle3.style.background = 'var(--bar-text-color)';

    circle1.style.transform = 'scale(1)';
    circle2.style.transform = 'scale(1.2)';
    circle3.style.transform = 'scale(1)';

    // img1.style.display = 'none';
    // img2.style.display = 'flex';
    // img3.style.display = 'none';
    const imgsContainer = document.querySelector('.slides');

    imgsContainer.scrollTo({
        left: (imgsContainer.scrollWidth - imgsContainer.clientWidth)/2,
        behavior: 'smooth'
    });



}

const circleClickThree = () => {
    const circle1 = document.querySelector('.circle1');
    const circle2 = document.querySelector('.circle2');
    const circle3 = document.querySelector('.circle3');

    // const img1 = document.querySelector('.hp1');
    // const img2 = document.querySelector('.hp2');
    // const img3 = document.querySelector('.hp3');

    circle1.style.background = 'var(--bar-text-color)';
    circle2.style.background = 'var(--bar-text-color)';
    circle3.style.background = 'var(--bar-color)';

    circle1.style.transform = 'scale(1)';
    circle2.style.transform = 'scale(1)';
    circle3.style.transform = 'scale(1.2)';

    // img1.style.display = 'none';
    // img2.style.display = 'none';
    // img3.style.display = 'flex';

    const imgsContainer = document.querySelector('.slides');

    imgsContainer.scrollTo({
        left: imgsContainer.scrollWidth - imgsContainer.clientWidth,
        behavior: 'smooth'
    });


}

//confert hex to rgb

const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // return {r, g, b} 
    return { r, g, b };
}

const rgbString = ({ r, g, b }) => {
    
    return 'rgb(${r}, ${g}, ${b})';
}




const Home = ({showRegister}) => {



    // Sliding and Scrolling For First Layout
    // useEffect(() => {

    //     const arrowLeft = document.querySelector('.arrow-home-left');
    //     const arrowRight = document.querySelector('.arrow-home-right');
    //     const imgsContainer = document.querySelector('.imgs-container');
    //     // const barColorRGB = hex2rgb('var(--bar-color)'); 
    //     const rgbS = "rgb(27, 38, 59)";
    
    //     if (arrowLeft && arrowRight && imgsContainer) {

    //         arrowLeft.addEventListener("click", () => {
    //             imgsContainer.scrollBy({
    //                 left: -imgsContainer.clientWidth,
    //                 behavior: 'smooth'
    //             });

    //             let circles = document.querySelectorAll('.circle');
    //             let currentCircle = null;
    //             let prevCircle = null;

    //                 circles.forEach((circle) => {

    //                     const bgColor = window.getComputedStyle(circle).backgroundColor;
    //                     if(bgColor === rgbS){
    //                         currentCircle = circle;
    //                         prevCircle = currentCircle.previousElementSibling;
    //                     }

                        
    //                 });

    //                 if(currentCircle){
    //                     currentCircle.style.backgroundColor = 'white';
    //                     currentCircle.style.transform = 'scale(1)';

    //                 }

    //                 if(prevCircle && prevCircle.classList.contains('circle')){
                        
    //                     prevCircle.style.backgroundColor = 'var(--bar-color)';
    //                     prevCircle.style.transform = 'scale(1.3)';
                
                        
    //                 }else{
    //                     currentCircle.style.backgroundColor = 'white';
    //                     currentCircle.style.transform = 'scale(1)';
    //                     circles[2].style.backgroundColor = 'var(--bar-color)';
    //                     circles[2].style.transform = 'scale(1.3)';
    //                     imgsContainer.scrollTo({
    //                         left: imgsContainer.scrollWidth - imgsContainer.clientWidth,
    //                         behavior: 'smooth'
    //                     });
    //                 }
    //         });
            

    //         arrowRight.addEventListener("click", () => {
    //             imgsContainer.scrollBy({
    //                 left: imgsContainer.clientWidth,
    //                 behavior: 'smooth'
    //             });

   
    //             let circles = document.querySelectorAll('.circle');
    //             let currentCircle = null;
    //             let nextCircle = null;

    //                 circles.forEach((circle) => {

    //                     const bgColor = window.getComputedStyle(circle).backgroundColor;
    //                     if(bgColor === rgbS){
    //                         currentCircle = circle;
    //                         nextCircle = currentCircle.nextElementSibling;
    //                     }

                        
    //                 });

    //                 if(currentCircle){
    //                     currentCircle.style.backgroundColor = 'white';
    //                     currentCircle.style.transform = 'scale(1)';
    //                 }

    //                 if(nextCircle && nextCircle.classList.contains('circle')){
                        
    //                     nextCircle.style.backgroundColor = 'var(--bar-color)';
    //                     nextCircle.style.transform = 'scale(1.3)';
                
                        
    //                 }else{
    //                     currentCircle.style.backgroundColor = 'white';
    //                     circles[0].style.backgroundColor = 'var(--bar-color)';
    //                     currentCircle.style.transform = 'scale(1)';
    //                     circles[0].style.transform = 'scale(1.3)';
    //                     imgsContainer.scrollTo({
    //                         left: 0,
    //                         behavior: 'smooth'
    //                     });
    //                 }
       
    //         });
            
    //     }

    // }, []);



    // Sliding and Scrolling For First Layout
    // useEffect(() => {

    //         const arrowLeft = document.querySelector('.arrow-home-left');
    //         const arrowRight = document.querySelector('.arrow-home-right');
    //         const imgsContainer = document.querySelector('.slides-container');
    //         // const barColorRGB = hex2rgb('var(--bar-color)'); 
    //         const rgbS = "rgb(27, 38, 59)";
        
    //         if (arrowLeft && arrowRight && imgsContainer) {
    
    //             arrowLeft.addEventListener("click", () => {
    //                 imgsContainer.scrollBy({
    //                     left: -imgsContainer.clientWidth,
    //                     behavior: 'smooth'
    //                 });
    
    //                 let circles = document.querySelectorAll('.circle');
    //                 let currentCircle = null;
    //                 let prevCircle = null;
    
    //                     circles.forEach((circle) => {
    
    //                         const bgColor = window.getComputedStyle(circle).backgroundColor;
    //                         if(bgColor === rgbS){
    //                             currentCircle = circle;
    //                             prevCircle = currentCircle.previousElementSibling;
    //                         }
    
                            
    //                     });
    
    //                     if(currentCircle){
    //                         currentCircle.style.backgroundColor = 'white';
    //                         currentCircle.style.transform = 'scale(1)';
    
    //                     }
    
    //                     if(prevCircle && prevCircle.classList.contains('circle')){
                            
    //                         prevCircle.style.backgroundColor = 'var(--bar-color)';
    //                         prevCircle.style.transform = 'scale(1.3)';
                    
                            
    //                     }else{
    //                         currentCircle.style.backgroundColor = 'white';
    //                         currentCircle.style.transform = 'scale(1)';
    //                         circles[2].style.backgroundColor = 'var(--bar-color)';
    //                         circles[2].style.transform = 'scale(1.3)';
    //                         imgsContainer.scrollTo({
    //                             left: imgsContainer.scrollWidth - imgsContainer.clientWidth,
    //                             behavior: 'smooth'
    //                         });
    //                     }
    //             });
                
    
    //             arrowRight.addEventListener("click", () => {
    //                 imgsContainer.scrollBy({
    //                     left: imgsContainer.clientWidth,
    //                     behavior: 'smooth'
    //                 });
    
       
    //                 let circles = document.querySelectorAll('.circle');
    //                 let currentCircle = null;
    //                 let nextCircle = null;
    
    //                     circles.forEach((circle) => {
    
    //                         const bgColor = window.getComputedStyle(circle).backgroundColor;
    //                         if(bgColor === rgbS){
    //                             currentCircle = circle;
    //                             nextCircle = currentCircle.nextElementSibling;
    //                         }
    
                            
    //                     });
    
    //                     if(currentCircle){
    //                         currentCircle.style.backgroundColor = 'white';
    //                         currentCircle.style.transform = 'scale(1)';
    //                     }
    
    //                     if(nextCircle && nextCircle.classList.contains('circle')){
                            
    //                         nextCircle.style.backgroundColor = 'var(--bar-color)';
    //                         nextCircle.style.transform = 'scale(1.3)';
                    
                            
    //                     }else{
    //                         currentCircle.style.backgroundColor = 'white';
    //                         circles[0].style.backgroundColor = 'var(--bar-color)';
    //                         currentCircle.style.transform = 'scale(1)';
    //                         circles[0].style.transform = 'scale(1.3)';
    //                         imgsContainer.scrollTo({
    //                             left: 0,
    //                             behavior: 'smooth'
    //                         });
    //                     }
           
    //             });
                
    //         }
    
    //     }, []);



    // Sliding scrolling Thrid Layout
     
    useEffect(() => {

            const arrowLeft = document.querySelector('.arrow-home-left');
            const arrowRight = document.querySelector('.arrow-home-right');
            const imgsContainer = document.querySelector('.slides');
            // const barColorRGB = hex2rgb('var(--bar-color)'); 
            const rgbS = "rgb(27, 38, 59)";
        
            if (arrowLeft && arrowRight && imgsContainer) {
    
                arrowLeft.addEventListener("click", () => {
                    imgsContainer.scrollBy({
                        left: -imgsContainer.clientWidth,
                        behavior: 'smooth'
                    });
    
                    let circles = document.querySelectorAll('.circle');
                    let currentCircle = null;
                    let prevCircle = null;
    
                        circles.forEach((circle) => {
    
                            const bgColor = window.getComputedStyle(circle).backgroundColor;
                            if(bgColor === rgbS){
                                currentCircle = circle;
                                prevCircle = currentCircle.previousElementSibling;
                            }
    
                            
                        });
    
                        if(currentCircle){
                            currentCircle.style.backgroundColor = 'white';
                            currentCircle.style.transform = 'scale(1)';
    
                        }
    
                        if(prevCircle && prevCircle.classList.contains('circle')){
                            
                            prevCircle.style.backgroundColor = 'var(--bar-color)';
                            prevCircle.style.transform = 'scale(1.2)';
                    
                            
                        }else{
                            currentCircle.style.backgroundColor = 'white';
                            currentCircle.style.transform = 'scale(1)';
                            circles[2].style.backgroundColor = 'var(--bar-color)';
                            circles[2].style.transform = 'scale(1.2)';
                            imgsContainer.scrollTo({
                                left: imgsContainer.scrollWidth - imgsContainer.clientWidth,
                                behavior: 'smooth'
                            });
                        }
                });
                
    
                arrowRight.addEventListener("click", () => {
                    imgsContainer.scrollBy({
                        left: imgsContainer.clientWidth,
                        behavior: 'smooth'
                    });
    
       
                    let circles = document.querySelectorAll('.circle');
                    let currentCircle = null;
                    let nextCircle = null;
    
                        circles.forEach((circle) => {
    
                            const bgColor = window.getComputedStyle(circle).backgroundColor;
                            if(bgColor === rgbS){
                                currentCircle = circle;
                                nextCircle = currentCircle.nextElementSibling;
                            }
    
                            
                        });
    
                        if(currentCircle){
                            currentCircle.style.backgroundColor = 'white';
                            currentCircle.style.transform = 'scale(1)';
                        }
    
                        if(nextCircle && nextCircle.classList.contains('circle')){
                            
                            nextCircle.style.backgroundColor = 'var(--bar-color)';
                            nextCircle.style.transform = 'scale(1.2)';
                    
                            
                        }else{
                            currentCircle.style.backgroundColor = 'white';
                            circles[0].style.backgroundColor = 'var(--bar-color)';
                            currentCircle.style.transform = 'scale(1)';
                            circles[0].style.transform = 'scale(1.2)';
                            imgsContainer.scrollTo({
                                left: 0,
                                behavior: 'smooth'
                            });
                        }
           
                });
                
            }

            //Automatic scrolling - Trigger Right Click Logic 
            const autoScroll = () => {
                setTimeout(() => {
              
                        imgsContainer.scrollBy({
                            left: imgsContainer.clientWidth,
                            behavior: 'smooth'
                        });
        
           
                        let circles = document.querySelectorAll('.circle');
                        let currentCircle = null;
                        let nextCircle = null;
        
                            circles.forEach((circle) => {
        
                                const bgColor = window.getComputedStyle(circle).backgroundColor;
                                if(bgColor === rgbS){
                                    currentCircle = circle;
                                    nextCircle = currentCircle.nextElementSibling;
                                }
        
                                
                            });
        
                            if(currentCircle){
                                currentCircle.style.backgroundColor = 'white';
                                currentCircle.style.transform = 'scale(1)';
                            }
        
                            if(nextCircle && nextCircle.classList.contains('circle')){
                                
                                nextCircle.style.backgroundColor = 'var(--bar-color)';
                                nextCircle.style.transform = 'scale(1.2)';
                        
                                
                            }else{
                                currentCircle.style.backgroundColor = 'white';
                                circles[0].style.backgroundColor = 'var(--bar-color)';
                                currentCircle.style.transform = 'scale(1)';
                                circles[0].style.transform = 'scale(1.2)';
                                imgsContainer.scrollTo({
                                    left: 0,
                                    behavior: 'smooth'
                                });
                            }
               
                    // To keep scrolling
                    autoScroll();
               
                }, 8000);
            }

            //Calling autoScroll
            autoScroll();
           

            //Handling swiping

            // const slides = document.querySelector('.slides');
            // slides.addEventListener('scroll', ()=> {
            //     setTimeout(() =>{
            //         const slideWidth = slides.clientWidth;
            //         const currentScroll = slides.scrollLeft;
            //         const halfSlide = slideWidth / 2;

            //         if(currentScroll % slideWidth > halfSlide){
            //             slides.scrollBy({
            //                 left: slideWidth - (currentScroll % slideWidth),
            //                 behavior: 'smooth'
            //             });
    
            //         }else{
            //             slides.scrollBy({
            //                 left: -(currentScroll % slideWidth),
            //                 behavior: 'smooth'
            //             });
            //         }
            //     }, 1000);
                 
            // });

     

            // Debouncing function to avoid excessive scrolling make it not clungy

            let debounceTimeout;
            const debounce = (func, delay) => {
                clearTimeout(debounceTimeout);
                debounceTimeout = setTimeout(func, delay);
            };

            const slides = document.querySelector('.slides');
            slides.addEventListener('scroll', () => {
                debounce(() => {
                    const slideWidth = slides.clientWidth;
                    const currentScroll = slides.scrollLeft;
                    const halfSlide = slideWidth / 2;
                                
                    if (currentScroll % slideWidth > halfSlide) {
                        slides.scrollBy({
                            left: slideWidth - (currentScroll % slideWidth),
                            behavior: 'smooth'
                        });
                    } else {
                        slides.scrollBy({
                            left: -(currentScroll % slideWidth),
                            behavior: 'smooth'
                        });

                    }
 
                    //Style circles when scrolling
                    const circles = document.querySelectorAll('.circle');

                    // Calculate the current slide index
                    const currentSlideIndex = Math.round(currentScroll / slideWidth);
                    console.log("currentScroll / slideWidth: ", currentScroll / slideWidth,"currentSlideIndex", currentSlideIndex);


                    // Reset all circles to default 
                    circles.forEach(circle => {
                        circle.style.backgroundColor = "var(--white-color)";
                        circle.style.transform = "scale(1)";

                    });
                    
                    // Highlight the circle corresponding to the current slide
                    if (currentSlideIndex < circles.length) {
                        circles[currentSlideIndex].style.backgroundColor = "var(--bar-color)";
                        circles[currentSlideIndex].style.transform = "scale(1.2)";
                    }

                }, 200);
            });

    
        }, []);



    return(
        
        <section className='home-section container-h'>

            {/* First Layout */}
            
            {/* <div className='container home-container'>
                <div className='home-slogan'>
                    <h1 >Connecting You To </h1>
                    <h1>Better Mental Health</h1>
                    <h1 Style="color:var(--accent-color);" >THERAPYNOW</h1>

                    <a href='/about'><button className='btn btn-secondary' > Read More! </button></a>

                </div>

                <MdKeyboardArrowLeft size={50}  className='arrow-home arrow-home-left'/>
                
                <div className="imgs-container-outer">
                    <div className='imgs-container'>
                        <img  src={hp} alt='Home Picture' className='home-picture hp1'/>
                        <img  src={hp2} alt='Home Picture' className='home-picture hp2'/>
                        <img  src={hp3} alt='Home Picture' className='home-picture hp3'/>
                    </div>

                    <div className='circles'>
                      
                        <div className='circle circle1' onClick={circleClickOne}/>
                        <div className='circle circle2' onClick={circleClickTwo}/>
                        <div className='circle circle3' onClick={circleClickThree}/>
                    
                    </div>
                    
                </div>

                <MdKeyboardArrowRight  size={50} className='arrow-home arrow-home-right'/>

            </div> */}



                {/* Second Layout */}


            {/* <div className="home-container">
                <div className="home-header-container">
                    <div className="slides-container">
                        <div className="slide-container">
                            <div className='slide-description'>
                                <h1>Remote therapy</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quaerat repellendus natus modi rem 
                                    deleniti accusantium atque necessitatibus magni voluptates accusamus nobis earum quod velit, sit 
                                    quos voluptate, labore mollitia?
                                </p>
                                <a href='/about'><button className='btn btn-primary' > Read More! </button></a>

                            </div>
                            <img src={hp} alt='home image' className='slide-image'/>
                        </div>

                        <div Style='background-color:var(--secondary-color);' className="slide-container">
                            <div className='slide-description'>
                                <h1>Big Title</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quaerat repellendus natus modi rem 
                                    deleniti accusantium atque necessitatibus magni voluptates accusamus nobis earum quod velit, sit 
                                    quos voluptate, labore mollitia?
                                </p>
                            </div>
                            <img src={hp4} alt='home image' className='image slide-image'/>
                        </div>

                        <div   className="slide-container">
                            <div className='slide-description'>
                                <h1>Big Title</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quaerat repellendus natus modi rem 
                                    deleniti accusantium atque necessitatibus magni voluptates accusamus nobis earum quod velit, sit 
                                    quos voluptate, labore mollitia?
                                </p>
                            </div>
                            <img src={hp3} alt='home image' className='image slide-image'/>
                        </div>
                   
                    </div>


                    <div className='slides-nav'>
                        <MdKeyboardArrowLeft size={30}  className='arrow-home arrow-home-left'/>
                        <div className='circles'>
                            <div className='circle circle1' onClick={circleClickOne}/>
                            <div className='circle circle2' onClick={circleClickTwo}/>
                            <div className='circle circle3' onClick={circleClickThree}/>
                        </div>
                        <MdKeyboardArrowRight size={30}  className='arrow-home arrow-home-right'/>
                    </div>
              

                </div>
            </div> */}


            {/* Third Layout */}

            
            <div className='home-container-3'>
                <div className="header-container-3">

                    <MdKeyboardArrowLeft size={40} className='arrow-home arrow-home-left'/>

                    <div className="slides">
                        <div className='slide'>
                            <div className="home-description-3">
                                <h2 Style='font-weight: 400'>Your Path to Healing, <b>Anytime, Anywhere</b></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus soluta dolorum quas reiciendis 
                                    quia tempore minima, magnam vitae itaque exercitationem corrupti nobis, adipisci expedita quis velit.
                                     Ipsam tempora inventore molestiae.
                                </p>
                                <div className='CTA-home'> 
                                    <button className='btn btn-primary' onClick={showRegister}> Sign Up </button>
                                    <button className='btn btn-secondary'><a href='/about'>Read More! </a></button> 
                                </div>
                            </div>

                            <div className='home-img-container'>
                                <img src={hp5} alt="home" className='home-picture-3'/>
                            </div>   
                        </div>

                        <div className='slide'>
                            <div className="home-description-3">
                                <h2>A divers Group of Therapists</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus soluta dolorum quas reiciendis 
                                    quia tempore minima, magnam vitae itaque exercitationem corrupti nobis, adipisci expedita quis velit.
                                     Ipsam tempora inventore molestiae.
                                </p>
                                    <div className='CTA-home'>
                                        <button className='btn btn-primary' onClick={showRegister}> Sign Up </button> 
                                        <button className='btn btn-secondary'><a href='/reviews'> Our Therapists </a></button>
                                    </div>
                            </div>

                            <div className='home-img-container'>
                                <img src={hp8} alt="home" className='home-picture-3'/>
                            </div>   
                        </div>

                        <div className='slide'>
                        <div className="home-description-3">
                                    <h2 Style='font-weight: 400'>Your Safe <b> Space Online</b></h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae unde quibusdam esse, a commodi 
                                    veniam praesentium enim ex incidunt impedit ea vel cupiditate. Incidunt atque voluptas sit
                                     cumque exercitationem in?
                                    </p>
                                    <div className='CTA-home'> 
                                        <button className='btn btn-primary' onClick={showRegister}> Sign Up </button>
                                        <button className='btn btn-secondary'><a href='/about'>Read More! </a></button> 
                                    </div>
                            </div>
                            <div className='home-img-container'>
                                <img src={hp7} alt="home" className='home-picture-3'/>
                            </div>   
                        </div>
                    </div>
             
                  

                    <div className='circles'>
                            <div className='circle circle1' onClick={circleClickOne}/>
                            <div className='circle circle2' onClick={circleClickTwo}/>
                            <div className='circle circle3' onClick={circleClickThree}/>
                    </div>

                    <MdKeyboardArrowRight size={40}  className='arrow-home arrow-home-right'/>

                </div>

                {/* <a href='#therapy-types' > <IoIosArrowDown size={40} className='arrow-next-section' /></a> */}

                <div id='therapy-types' className='therapy-types-container slide-in-element'>
                    <h2 Style='color: var(--bar-text-color)'>What are you looking for?</h2>

                    <div className="therapy-type-cards">

                        <div className="therapy-type-card stair-element">
                            <div className='img-therapy-container'>
                                <img src={hp} alt="therapy type" className="img-therapy-type" />
                            </div>
                            <div className="therapy-type-description">
                                    <h2>Individual Therapy</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, illum omnis! Earum at minus
                                        obcaecati omnis corrupti voluptatibus saepe! Rerum, praesentium at sequi nostrum enim
                                        molestias? Deserunt, hic quam? Animi.</p>
                                    <a className='CTA-home' onClick={showRegister}>Get Started <MdKeyboardArrowRight/></a>
                            </div>
                        </div>

                        <div className="therapy-type-card stair-element">
                            <div className='img-therapy-container'>
                                <img src={hp2} alt="therapy type" className="img-therapy-type" />
                            </div>
                            <div className="therapy-type-description">
                                    <h2>Family Therapy</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, illum omnis! Earum at minus
                                        obcaecati omnis corrupti voluptatibus saepe! Rerum, praesentium at sequi nostrum enim
                                        molestias? Deserunt, hic quam? Animi.</p>
                                    <a className='CTA-home' onClick={showRegister}>Get Started <MdKeyboardArrowRight/></a>
                            </div>
                        </div>

                        <div className="therapy-type-card stair-element">
                            <div className='img-therapy-container'>
                                <img src={hp3} alt="therapy type" className="img-therapy-type" />
                            </div>
                            <div className="therapy-type-description">
                                    <h2>Kids Therapy</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, illum omnis! Earum at minus
                                        obcaecati omnis corrupti voluptatibus saepe! Rerum, praesentium at sequi nostrum enim
                                        molestias? Deserunt, hic quam? Animi.</p>
                                    <a className='CTA-home' onClick={showRegister}>Get Started <MdKeyboardArrowRight/></a>
                            </div>
                        </div>

                    </div>
                    <a  href="/services"> <button className='btn btn-secondary'>More services</button> </a>
                </div>

                <div className='therapy-benefits-section slide-in-element'>
                    <h2 Style='font-size: 2rem; font-weight: 400; text-align:center'>Benefits of <b>THERAPYNOW</b></h2>
                    <div className="therapy-benefits-container">

                        <div className='therapy-benefits-cards'>
                            <div className="therapy-benefits-card card stair-element">
                                <div className='benefits-icon'><FaCouch/></div>
                                <p className='benefits-description'>
                                    Clients can access therapy from the comfort of their homes, which is especially beneficial for
                                    people living in rural or remote areas, or those with mobility issues.
                                </p>
                            </div>

                            <div className="therapy-benefits-card card stair-element">
                                <div className='benefits-icon'><FaRegCalendarAlt/></div>
                                <p className='benefits-description'>
                                    Flexible scheduling allows clients to fit sessions into their busy lives without needing to 
                                    commute, saving both time and money.
                                </p>
                            </div>

                            <div className="therapy-benefits-card card stair-element">
                                <div className='benefits-icon'><MdPrivacyTip/></div>
                                <p className='benefits-description'>
                                    Remote therapy can provide a higher level of privacy for those who may feel uncomfortable visiting a therapist's 
                                    office.
                                </p>
                            </div>

                            <div className="therapy-benefits-card card stair-element">
                                <div className='benefits-icon'><VscSmiley/></div>
                                <p className='benefits-description'>
                                    Being in a familiar environment can help reduce anxiety for clients who might find in-person sessions 
                                    intimidating
                                </p>
                            </div>

                            <div className="therapy-benefits-card card stair-element">
                                <div className='benefits-icon'><RiLoopRightFill  /></div>
                                <p className='benefits-description'>
                                    It allows clients to continue therapy during times of travel, relocation, or global events like
                                     a pandemic, ensuring consistent support
                                </p>
                            </div>

                            <div className="therapy-benefits-card card stair-element">
                                <div className='benefits-icon'><MdDiversity1/></div>
                                <p className='benefits-description'>
                                    Clients have access to a larger pool of therapists, as geographic location is no longer a 
                                    barrier.
                                </p>
                            </div>

                            <div className="therapy-benefits-card card stair-element">
                                <div className='benefits-icon'><FaClock /></div>
                                <p className='benefits-description'>
                                    Clients can choose the most comfortable setting, even participating in sessions while traveling or during work
                                     breaks.
                                </p>
                            </div>

                            <div className="therapy-benefits-card card stair-element">
                                <div className='benefits-icon'><IoEarth/></div>
                                <p className='benefits-description'>
                                    With remote therapy, geographical boundaries are no longer a limitation. 
                                </p>
                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>


        </section>
    );
}
    
export default Home;