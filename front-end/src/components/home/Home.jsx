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
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from '../navbar/Navbar';




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

    circle1.style.transform = 'scale(1.3)';
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
    circle2.style.transform = 'scale(1.3)';
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
    circle3.style.transform = 'scale(1.3)';

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
                            prevCircle.style.transform = 'scale(1.3)';
                    
                            
                        }else{
                            currentCircle.style.backgroundColor = 'white';
                            currentCircle.style.transform = 'scale(1)';
                            circles[2].style.backgroundColor = 'var(--bar-color)';
                            circles[2].style.transform = 'scale(1.3)';
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
                            nextCircle.style.transform = 'scale(1.3)';
                    
                            
                        }else{
                            currentCircle.style.backgroundColor = 'white';
                            circles[0].style.backgroundColor = 'var(--bar-color)';
                            currentCircle.style.transform = 'scale(1)';
                            circles[0].style.transform = 'scale(1.3)';
                            imgsContainer.scrollTo({
                                left: 0,
                                behavior: 'smooth'
                            });
                        }
           
                });
                
            }

            const slides = document.querySelector('.slides');
            slides.addEventListener('scroll', ()=> {
                setTimeout(() =>{
                    const slideWidth = slides.clientWidth;
                    const currentScroll = slides.scrollLeft;
                    const halfSlide = slideWidth / 2;

                    if(currentScroll % slideWidth > halfSlide){
                        slides.scrollBy({
                            left: slideWidth - (currentScroll % slideWidth),
                            behavior: 'smooth'
                        });
    
                    }else{
                        slides.scrollBy({
                            left: -(currentScroll % slideWidth),
                            behavior: 'smooth'
                        });
                    }
                }, "500");
                 
            });

    
        }, []);



    return(
        
        <section className='home-section container-h'>

            {/* Firts Layout */}
            
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
                                <h1>Your Path to Healing, Anytime, Anywhere</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus provident sunt aliquam omnis 
                                    esse quidem numquam quo voluptas neque.</p>
                                    <div className='CTA-home'> 
                                        <a onClick={showRegister}><button className='btn btn-primary'> Sign Up </button></a>
                                        <a href='/about'> <button className='btn btn-secondary'>Read More!</button> </a>
                                    </div>
                            </div>

                            <div className='home-img-container'>
                                <img src={hp7} alt="home picture" className='home-picture-3'/>
                            </div>   
                        </div>

                        <div className='slide'>
                            <div className="home-description-3">
                                <h1>Your Path to Healing, Anytime, Anywhere</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus provident sunt aliquam omnis 
                                    esse quidem numquam quo voluptas neque.</p>
                                    <div className='CTA-home'> 
                                        <a onClick={showRegister}><button className='btn btn-primary'> Sign Up </button></a>
                                        <a href='/about'> <button className='btn'>Read More!</button> </a>
                                    </div>
                            </div>

                            <div className='home-img-container'>
                                <img src={hp} alt="home picture" className='home-picture-3'/>
                            </div>   
                        </div>

                        <div className='slide'>
                            <div className="home-description-3">
                                <h1>Your Path to Healing, Anytime, Anywhere</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus provident sunt aliquam omnis 
                                    esse quidem numquam quo voluptas neque.</p>
                                    <div className='CTA-home'> 
                                        <a onClick={showRegister}><button className='btn btn-primary'> Sign Up </button></a>
                                        <a href='/about'> <button className='btn'>Read More!</button> </a>
                                    </div>
                            </div>

                            <div className='home-img-container'>
                                <img src={hp5} alt="home picture" className='home-picture-3'/>
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

                <div id='therapy-types' className='therapy-types-container'>
                    <h1 Style='color:var(--bar-text-color)'>What are you looking for?</h1>

                    <div className="therapy-type-cards">

                        <div className="therapy-type-card">
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

                        <div className="therapy-type-card">
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

                        <div className="therapy-type-card">
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
                <div className='another-section'><h1>More information</h1></div>
            </div>


        </section>
    );
}
    
export default Home;