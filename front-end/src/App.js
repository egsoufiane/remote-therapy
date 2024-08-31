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


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation

} from "react-router-dom";
import { useState, useEffect } from "react";



const body = document.querySelector('body');

/*slide in animation  */
document.addEventListener("DOMContentLoaded", function() {

      window.addEventListener('load', () => {
      const elements = document.querySelectorAll('.show-in-element');
      elements.forEach(el => {
      const rect = el.getBoundingClientRect();
              if (rect.top < window.innerHeight) {
              el.classList.add('visible');
              }
          });
      });     



      window.addEventListener('scroll', () => {
      const elements = document.querySelectorAll('.slide-in-element');
      elements.forEach(el => {
      const rect = el.getBoundingClientRect();
              if (rect.top < window.innerHeight) {
              el.classList.add('visible');
              }
          });
      });     

});




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



  return (
    <div className="App">
  
 
      {/* <Navbar/>
      <Home/>
      <Login />
      <Register/>
      <Footer /> */}
    

        {/* <Navbar className='navbar'/> */}
      
        {(location.pathname !== '/login' && location.pathname !== '/register' && <Navbar />)}

        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
        
            <Route path="/reviews" element={<Reviews/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/apply' element={<Apply/>}/>
            <Route path="/apply2" element={<Apply2/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Navigate to="/"/>} />
            
            
          </Routes>
        </div>
        <Footer className='footer'/> 
   

    </div>
  );
}

export default App;
