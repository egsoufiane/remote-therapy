import React, { useEffect } from 'react';
import './videocall.css';
import { BiDoughnutChart } from 'react-icons/bi';

import ec from '../../assets/circle.png';
import sc from '../../assets/phone-call.png';

import { IoCall } from "react-icons/io5";
import { MdCallEnd } from "react-icons/md";
import { CiMicrophoneOn } from "react-icons/ci";
import { CiMicrophoneOff } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";







//       const video = document.getElementById('video');
//     //     const startButton = document.getElementById('startbutton');
//     //     const stopButton = document.getElementById('stopbutton');
    
//         let stream;

// const startButton = () => {

//     stream = navigator.mediaDevices.getUserMedia({ video: true });
//         video.srcObject = stream;

// }




// const stopButton = () => {

//     if (stream) {
//         // Stop all tracks (video stream)
//         stream.getTracks().forEach(track => track.stop());
//         video.srcObject = null; // Clear the video element's source
//     }

// }


const micOn = () => {
    const micOn = document.getElementById('mic-on');
    const micOff = document.getElementById('mic-off');

    micOn.style.display = 'none';
    micOff.style.display = 'flex';
}


const micOff = () => {

    const micOn = document.getElementById('mic-on');
    const micOff = document.getElementById('mic-off');

    micOn.style.display = 'flex';
    micOff.style.display = 'none';

}












const Videocall = () => {
   
   


    // useEffect(() => {
    //     const video = document.getElementById('video');
    //     const startButton = document.getElementById('startButton');
    //     const stopButton = document.getElementById('stopButton');

    //     let stream;

        // startButton.addEventListener('click', async () => {
        //     try {
        //         // Request access to the camera
        //         stream = await navigator.mediaDevices.getUserMedia({ video: true });
        //         video.srcObject = stream; // Set the video element's source to the camera stream
        //     } catch (err) {
        //         console.error('Error accessing the camera: ', err);
        //     }
        // });
        
        // stopButton.addEventListener('click', () => {
        //     if (stream) {
        //         // Stop all tracks (video stream)
        //         stream.getTracks().forEach(track => track.stop());
        //         video.srcObject = null; // Clear the video element's source
        //     }
        // });


    // }, []);
   
    useEffect(() => {
         const video = document.getElementById('video');
         const videoContainer = document.querySelector('video-container');
        
         
          
         let stream;


        document.getElementById('start-call').addEventListener('click', async () => {
            try {
                // Request access to the camera
             
                document.getElementById('video').style.display = 'flex';
                document.getElementById('stop-call').style.display = 'flex';
                document.getElementById('start-call').style.display = 'none';
                stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                video.srcObject = stream; // Set the video element's source to the camera stream
                
                
            } catch (err) {
                console.error('Error accessing the camera: ', err);
            }
        });

        
        document.getElementById('stop-call').addEventListener('click', () => {
            if (stream) {
                // Stop all tracks (video stream)
          
        
                stream.getTracks().forEach(track => track.stop());
                video.srcObject = null; // Clear the video element's source
 
                document.getElementById('video').style.display = 'none';
                document.getElementById('stop-call').style.display = 'none';
                document.getElementById('start-call').style.display = 'flex';
            }
        });



    }, []);



    

    return (
        <section className="apply2-section" Style='display :flex; flex-direction:column; justify-content:center; align-items:center'>
            <h1>Apply 2</h1>
            <div id ="video-container" className="video-container">
                <video id="video" Style='width: 100%; height: auto' autoPlay/>
                <div className='videocall-bar'>
                    {/* <img src={sc} alt='start-call' id="start-btn"  className='call-img start-call'/>
                    <img src={ec} alt='end-call' id="stop-btn"  className='call-img end-call'/> */}
                        <div className='call-icon-wrapper' id="start-call" ><IoCall className="call-options"/></div>
                        <a className='call-icon-wrapper' id="mic-on" onClick={micOn}><CiMicrophoneOn className="call-options"/> </a>
                        <a className='call-icon-wrapper' id="mic-off" onClick={micOff}><CiMicrophoneOff  className="call-options"/></a>
                        <div className='call-icon-wrapper'><FiMessageSquare id="message" className="call-options"/></div>
                        <div className='call-icon-wrapper'><AiOutlineVideoCamera id="camera" className="call-options"/> </div>
                        <div className='call-icon-wrapper'><IoMdAdd id="add-person" className="call-options"/></div>
                        <div className='call-icon-wrapper' id="stop-call"><MdCallEnd  className="call-options"/></div>

                </div>

            </div>

                
        </section>
    );

}



export default Videocall;