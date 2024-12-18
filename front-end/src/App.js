import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import './index.css';
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Services from './components/services/Services';
import Contact from "./components/contact/Contact";
import Loading from "./Loading";
import Faq from "./components/faq/Faq";
import Reviews from "./components/reviews/Reviews";
import Apply from "./components/apply/Apply";
import Apply2 from "./components/apply/Apply2";
import Recap from "./components/apply/recap";



import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation

} from "react-router-dom";
import { useState, useEffect } from "react";

import Videocall from "./components/videocall/Videocall";
import ClientDashboard from "./components/private-components/client-dashboard/ClientDashboard";
import TherapistDashboard from "./components/private-components/therapist-dashboard/TherapistDashboard";


// window.addEventListener('scroll', handleScroll);


const handleLoad = () => {

          const showInElements = document.querySelectorAll('.show-in-element');
                showInElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                        if (rect.top < window.innerHeight ) {
                        el.classList.add('visible');
                        }
                    });
          
  
            const cards = document.querySelectorAll('.review-card');
            cards.forEach(card => {
            const rect = card.getBoundingClientRect();
                    if (rect.top < window.innerHeight ) {
                    card.classList.add('visible');
                    }
                });


            const elements = document.querySelectorAll('.slide-in-element');
            const slideUpElements = document.querySelectorAll('.slide-up-element');
            const sideElements = document.querySelectorAll('.side-slide-left');
                          elements.forEach(el => {
                          const rect = el.getBoundingClientRect();
                                  if (rect.top < window.innerHeight ) {
                                  el.classList.add('visible');
                                  }
                              });
                
                          slideUpElements.forEach(el => {
                            const rect = el.getBoundingClientRect();
                                    if (rect.top < window.innerHeight ) {
                                    el.classList.add('visible');
                                    }
                                  });
                        sideElements.forEach(el => {
                        const rect = el.getBoundingClientRect();
                                if (rect.top < window.innerHeight) {
                                el.classList.add('visible');
                                }
                          });
                                    

}

const handleScroll = () => {
  
            const showInElements = document.querySelectorAll('.show-in-element');
            showInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight ) {
                    el.classList.add('visible');
                    }
                });


            const cards = document.querySelectorAll('.review-card');
            cards.forEach(card => {
            const rect = card.getBoundingClientRect();
                  if (rect.top < window.innerHeight) {
                  card.classList.add('visible');
                  }
              });


            const elements = document.querySelectorAll('.slide-in-element');
            const slideUpElements = document.querySelectorAll('.slide-up-element');
                        const sideElements = document.querySelectorAll('.side-slide-left');
            elements.forEach(el => {
            const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight) {
                    el.classList.add('visible');
                    }
                });
  
            slideUpElements.forEach(el => {
              const rect = el.getBoundingClientRect();
                      if (rect.top < window.innerHeight) {
                      el.classList.add('visible');
                      }
                    });
          sideElements.forEach(el => {
          const rect = el.getBoundingClientRect();
                  if (rect.top < window.innerHeight) {
                  el.classList.add('visible');
                  }
            });

          //stairs sliding animation

          // const stairsElementChilds = document.querySelectorAll('.about-review-card');
          const stairsElementChilds = document.querySelectorAll('.stair-element');
          let delay = 0.2;

          for(let i = 0; i < stairsElementChilds.length; i++){
            delay += 0.2;
    
            stairsElementChilds[i].style.transition = 'all '+delay+'s';
      
          }

          // stairsElementChilds.forEach((stair) => {
          //   const rect = stair.getBoundingClientRect();
   
          //     if(rect.top < window.innerHeight){
          //       stair.classList.add('visible');
          //     }
 
          // });

          for(let i = 0; i < stairsElementChilds.length; i++){
              const rect = stairsElementChilds[i].getBoundingClientRect();
   
              if(rect.top < window.innerHeight){
                stairsElementChilds[i].classList.add('visible');
              }

          }


}



document.addEventListener("DOMContentLoaded", function() {
  // window.addEventListener('load', handleLoad);
  window.addEventListener('scroll', handleScroll);
  // window.addEventListener('load', handleScroll);
  // window.addEventListener('resize', handleLoad);

  setTimeout(handleLoad, 300);

});






/*slide in animation  */
// document.addEventListener("DOMContentLoaded", function() {

//       window.addEventListener('load', () => {
//       const elements = document.querySelectorAll('.show-in-element');
//       elements.forEach(el => {
//       const rect = el.getBoundingClientRect();
//               if (rect.top < window.innerHeight) {
//               el.classList.add('visible');
//               }
//           });


//           const cards = document.querySelectorAll('.review-card');
//           cards.forEach(card => {
//           const rect = card.getBoundingClientRect();
//                   if (rect.top < window.innerHeight) {
//                   card.classList.add('visible');
//                   }
//               });
          
//       });     


//       window.addEventListener('load', () => {

//           const elements = document.querySelectorAll('.slide-in-element');
//           const slideUpElements = document.querySelectorAll('.slide-up-element');
//           const sideElements = document.querySelectorAll('.side-slide-left');
//           elements.forEach(el => {
//           const rect = el.getBoundingClientRect();
//                   if (rect.top < window.innerHeight) {
//                   el.classList.add('visible');
//                   }
//               });

//           slideUpElements.forEach(el => {
//             const rect = el.getBoundingClientRect();
//                     if (rect.top < window.innerHeight) {
//                     el.classList.add('visible');
//                     }
//               });


//           sideElements.forEach(el => {
//             const rect = el.getBoundingClientRect();
//                     if (rect.top < window.innerHeight) {
//                     el.classList.add('visible');
//                     }
//               });

          

            
//         });     
  



//       window.addEventListener('scroll', () => {
//       const elements = document.querySelectorAll('.slide-in-element');
//       elements.forEach(el => {
//       const rect = el.getBoundingClientRect();
//               if (rect.top < window.innerHeight) {
//               el.classList.add('visible');
//               }
//           });


//           const cards = document.querySelectorAll('.review-card');
//           cards.forEach(card => {
//           const rect = card.getBoundingClientRect();
//                   if (rect.top < window.innerHeight) {
//                   card.classList.add('visible');
//                   }
//               });
            
//           //.stats-card
//           const statsCards = document.querySelectorAll('.stats-card');
//           statsCards.forEach(statsCard => {
//           const rect = statsCard.getBoundingClientRect();
//                   if (rect.top < window.innerHeight) {
//                   statsCard.classList.add('visible');
//                   }
//               });

          
//           //stairs sliding animation

//           // const stairsElementChilds = document.querySelectorAll('.about-review-card');
//           const stairsElementChilds = document.querySelectorAll('.stair-element');
//           let delay = 0.2;

//           for(let i = 0; i < stairsElementChilds.length; i++){
//             delay += 0.2;
    
//             stairsElementChilds[i].style.transition = 'all '+delay+'s';
      
//           }

//           // stairsElementChilds.forEach((stair) => {
//           //   const rect = stair.getBoundingClientRect();
   
//           //     if(rect.top < window.innerHeight){
//           //       stair.classList.add('visible');
//           //     }
 
//           // });

//           for(let i = 0; i < stairsElementChilds.length; i++){
//               const rect = stairsElementChilds[i].getBoundingClientRect();
   
//               if(rect.top < window.innerHeight){
//                 stairsElementChilds[i].classList.add('visible');
//               }

//           }

          
          
//       });     


      

// });

//Show register here to be able to click get started
const showRegister = () => {
  const logincontainer = document.querySelector('.login-container');
  const overlay = document.querySelector('.overlay');
  const registercontainer = document.querySelector('.register-pop');


  registercontainer.style.display = 'flex';
  overlay.style.display = 'flex';
  logincontainer.style.display = 'none';

  const forceReflow = registercontainer.offsetHeight;
  registercontainer.classList.add('slide-in');
  logincontainer.classList.remove('slide-in');

}



  

function App(){

    const [loading, setLoading] = useState(true);

    
    // const [data, setData] = useState(null);

    // useEffect(() => {

    //   // to simulate data fetching 
    //   // setTimeout(() => {
    //   //   setLoading(false);
    //   // }, 2000);

    //   setLoading(false);
  
    // }, []);




    useEffect(() => {

        setLoading(false); 
   
      
    }, []);

    
    if(loading) {
        return (<Loading/>);
    }else{
        return (
          <Router>
            <Main/>
          </Router>
        );
    }

    // return (
    //   <Router>
    //     <Main/>
    //   </Router>
    // );

 
}



function Main() {

  const location = useLocation();

  // React.useEffect(() => {
  //   if (location.pathname === '/about') {
  //     document.body.style.background = 'var(--secondary-color)'; // Change to your desired color
  //   } else {
  //     // document.body.style.background = 'red'; // Default color for other routes
  //   }
  // }, [location.pathname]);
  const authToken = localStorage.getItem('accessToken');
  const isClient = localStorage.getItem('isClient')==='true';
  const isTherapist = localStorage.getItem('isTherapist')==='true';
  



  return (
    <div className="App">
  
 
      {/* <Navbar/>
      <Home/>
      <Login />
      <Register/>
      <Footer /> */}
    

        {/* <Navbar className='navbar'/> */}
      
        {/* {(location.pathname !== '/login' && location.pathname !== '/register' && <Navbar/>)} */}

        <div className="content">

          {authToken && isClient &&
          
            // <Routes>
            //   <Route path="/" element={<ClientDashboard />} />
            //   <Route path="*" element={<Navigate to="/"/>} />            
            // </Routes>

            <ClientDashboard />
          
          }
          
          {authToken && isTherapist &&
          
          // <Routes>
          //   <Route path="/" element={<ClientDashboard />} />
          //   <Route path="*" element={<Navigate to="/"/>} />            
          // </Routes>
         
           <TherapistDashboard/>
            
        }
        


            {!authToken &&
                  <>
                    <Navbar/>
                    <Routes>
                    <Route path="/" element={<Home  showRegister={showRegister} />} />
                    <Route path="/reviews" element={<Reviews/>}/>
                    <Route path="/about" element={<About/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path='/services' element={<Services showRegister={showRegister}/>}/>
                    <Route path='/apply' element={<Apply/>}/>
                    <Route path="/apply2" element={<Apply2/>}/>
                    <Route path="/faq" element={<Faq/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/recap" element={<Recap/>}/>
                  
                    <Route path="*" element={<Navigate to="/"/>} />            
                  </Routes>
                  <Footer className='footer'/> 
                  </>
                
            }
    

        
    
      
        </div>
        
   

    </div>
  );
}

export default App;
