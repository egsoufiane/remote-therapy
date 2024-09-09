import React, { useEffect } from 'react';
import './videocall.css';
import { BiDoughnutChart } from 'react-icons/bi';
import { MdCallEnd } from "react-icons/md";
import ec from '../../assets/circle.png';
import sc from '../../assets/phone-call.png';



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


        document.getElementById('start-btn').addEventListener('click', async () => {
            try {
                // Request access to the camera
             
                document.getElementById('video').style.display = 'flex';
                document.getElementById('stop-btn').style.display = 'flex';
                document.getElementById('start-btn').style.display = 'none';
                stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                video.srcObject = stream; // Set the video element's source to the camera stream
                
                
            } catch (err) {
                console.error('Error accessing the camera: ', err);
            }
        });

        
        document.getElementById('stop-btn').addEventListener('click', () => {
            if (stream) {
                // Stop all tracks (video stream)
        
                stream.getTracks().forEach(track => track.stop());
                video.srcObject = null; // Clear the video element's source
                document.getElementById('video').style.display = 'none';
                document.getElementById('stop-btn').style.display = 'none';
                document.getElementById('start-btn').style.display = 'flex';
            }
        });




    }, []);





    return (
        <section className="apply2-section" Style='display :flex; flex-direction:column; justify-content:center; align-items:center'>
            <h1>Apply 2</h1>
            <div id ="video-container" className="video-container">
                <video id="video" Style='width: 60%; height: auto' autoPlay/>
                <div className='videocall-bar'>
                    <img src={sc} alt='start-call' id="start-btn"  className='call-img'/>
                    <img src={ec} alt='end-call' id="stop-btn"  className='call-img'/>
                </div>

            </div>

                
                     
                
        </section>
    );

}



export default Videocall;