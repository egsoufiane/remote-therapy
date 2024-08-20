import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import './index.css';
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import Loading from "./Loading";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation

} from "react-router-dom";
import { useState, useEffect } from "react";


const body = document.querySelector('body');




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
      
    });

    
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

  React.useEffect(() => {
    if (location.pathname === '/about') {
      document.body.style.background = 'var(--secondary-color)'; // Change to your desired color
    } else {
      // document.body.style.background = 'red'; // Default color for other routes
    }
  }, [location.pathname]);



  return (
    <div className="App">
  
 
      {/* <Navbar/>
      <Home/>
      <Login />
      <Register/>
      <Footer /> */}
    

        {/* <Navbar className='navbar'/> */}
      
        {(location.pathname !== '/login' && location.pathname !== '/register') && <Navbar />}

        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Navigate to="/"/>} />
            
          </Routes>
        </div>
        <Footer className='footer'/> 
   

    </div>
  );
}

export default App;
