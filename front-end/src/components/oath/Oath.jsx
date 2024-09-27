import React from 'react'
import fbLogo from '../../assets/facebook-logo.png';
import googleLogo from '../../assets/google-logo.png';
import appleLogo from '../../assets/apple-logo.png';
import './oath.css';


const Oath = () => {
    return(
        <div className='oath'>
            <h4 Style='color: var(--text-color)'>Or</h4>
            <div className='oath-icons'>
                <a className='oath-logo-container'><img src={fbLogo} alt='facebook' className='oath-logo'/></a>
                <a className='oath-logo-container'><img src={googleLogo} alt='google' className='oath-logo'/></a>
                <a className='oath-logo-container'><img src={appleLogo} alt='google' className='oath-logo'/></a>
            </div>
        </div>

    )
}

export default Oath;

