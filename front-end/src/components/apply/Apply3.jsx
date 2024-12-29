import React, {useEffect} from 'react'
import { FaCloudArrowUp } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

const Apply3 = (props) => {
  
  

    // useEffect(()=> {
    //     document.getElementById('id').addEventListener('change', (event) => {
    //         const file = event.target.files[0];
    //         const fileNameDisplay = document.getElementById('file-name');
    //         const fileSizeDisplay = document.getElementById('file-size');
    //         const uploadFile = document.querySelector('.uploaded-file');
      

    //         if(file) {
               
    //             // const fileSize = file.size;

    //             uploadFile.style.display = 'flex';
    //             const fileName = file.name;
    //             const fileSize = ((file.size / 1024)/1000).toFixed(2);
    //             fileNameDisplay.textContent = fileName;
    //             fileSizeDisplay.textContent = fileSize+"MB";
                
    //         }
    //         else{  

    //             fileNameDisplay.textContent('no file uploaded')

    //         }

    //     });

    //     // Handle delete file button
    //     document.querySelector('.delete-icon').addEventListener('click', () => {
       
    //             const uploadFile = document.querySelector('.uploaded-file');
    //             const file = document.getElementById('id');
    //             if(file){
    //                 file.value = '';

    //                 uploadFile.style.display = 'none';
    //             }
        
    //     });

    // }, []);

    //handle uploaded files infos 

    useEffect(() => {

        //handle displaying file infos
        const files = document.querySelectorAll('.upload-file');
        files.forEach((file) => {
            file.addEventListener("change", (event) => {
                const fileUp = event.target.files[0];
                // const fileNameDisplay = document.querySelector('.file-name');
                // const fileSizeDisplay = document.querySelector('.file-size');
                // const fileUploaded = document.querySelector('.uploaded-file');
                const fileUploaded = file.nextElementSibling;
                const fileNameDisplay = file.nextElementSibling.firstChild.firstChild;
                const fileSizeDisplay = file.nextElementSibling.firstChild.lastChild;


                if(file){
                    const fileName = fileUp.name;
                    const fileSize = ((fileUp.size / 1024)/1000).toFixed(2);

                    fileUploaded.style.display = 'flex';
                    fileNameDisplay.textContent = fileName;
                    fileSizeDisplay.textContent = fileSize+ "MB";
                }
                
            });
        });

        //delete uploaded file
        const deleteIcons = document.querySelectorAll('.delete-icon');

        deleteIcons.forEach((deleteIcon) => {
            deleteIcon.addEventListener('click', () => {

                const uploadedFile = deleteIcon.parentElement;
                const file = deleteIcon.previousElementSibling

                    if(file){
                        uploadedFile.style.display = 'none';
                        file.value = '';
                    }
                    

            });

        });

        
    }, []);



    const iconSize = 25;


    return (
        <div className='apply2-container'>
            <h2 Style='width 100%; display: flex, flex-wrap: wrap;'>Upload the neccessary documents</h2>
           
            <form className="application-form3" onSubmit={props.nextForm}>

                    <div className="entryareaa"> 
                        <p>Upload your ID</p>  
                        <label htmlFor='id'>
                            <FaCloudArrowUp fill='var(--black-color)' size={iconSize} className='upload-icon'/>
                            <h3>Upload a File</h3>
                            <p>Drag and drop file here</p>
                            </label>
                        <input type="file" id="id" name="id" accept='.pdf,.png,.jpg,.jpeg' className='file-field upload-file'/>
                        <div className='uploaded-file'>
                            <div className='file'>
                                <p id='file-name' className='file-name'></p>
                                <p id='file-size' className='file-size'></p>
                            </div>
                            <div className='delete-icon'>
                                <RiDeleteBinLine size={20}/>
                            </div>
                        </div>
                    </div>

                    <div className="entryareaa"> 
                        <p>Upload your License</p>  
                        <label htmlFor='license'>
                            <FaCloudArrowUp fill='var(--black-color)' size={iconSize} className='upload-icon'/>
                            <h3>Upload a File</h3>
                            <p>Drag and drop file here</p>
                            </label>
                        <input type="file" id="license" name="license" accept='.pdf,.docx' className='file-field upload-file'/>
                        <div className='uploaded-file'>
                            <div className='file'>
                                <p id='file-name' className='file-name'></p>
                                <p id='file-size' className='file-size'></p>
                            </div>
                            <div className='delete-icon'>
                                <RiDeleteBinLine size={20}/>
                            </div>
                        </div>
                    </div>

                    <div className="entryareaa"> 
                        <p>Upload your CV</p>  
                        <label htmlFor='cv'>
                            <FaCloudArrowUp fill='var(--black-color)' size={iconSize} className='upload-icon'/>
                            <h3>Upload a File</h3>
                            <p>Drag and drop file here</p>
                            </label>
                        <input type="file" id="cv" name="cv" accept='.pdf,.docx' className='file-field upload-file'/>
                        <div className='uploaded-file'>
                            <div className='file'>
                                <p id='file-name' className='file-name'></p>
                                <p id='file-size' className='file-size'></p>
                            </div>
                            <div className='delete-icon'>
                                <RiDeleteBinLine size={20}/>
                            </div>
                        </div>
                    </div>


                    <div className="entryareaa"> 

                        <p>Bio</p>
                        <textarea id='bio' name="bio" cols="40" rows="8" maxlength="600"onChange={props.handleInput} Style='background-color: rgb(237, 237, 237)'/>
                    </div>
                    <div className='entryareaa'>
                        <p>Years of Experience:</p>
                        <input type='number' min='0' name='experienceyears' onChange={props.handleInput} Style="display: inline-block; width: 5ch; padding: 2px; text-align: center;" />
                    </div>


                    <input type='submit' value='Next' className='btn btn-primary' Style='align-self: flex-end; width: 20%;'/>
                
    
            </form>

            <h3>02/03</h3>

        </div>

    );
}

export default Apply3;

