import React from "react";
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import GoogleDrive from '@iconscout/react-unicons/icons/uil-youtube'
import Github from '@iconscout/react-unicons/icons/uil-github'

import Wave from '../../img/wave.png'
const Footer = () => {
    return(
        <div className="footer">
            <img src={Wave} alt="" style={{width: '100%'}}/>
            <div className="f-content">
                <span>coveituen85@gmail.com</span>
                <div className="f-icons">
                    <Insta color='white' size='3rem'/>
                    <GoogleDrive color='white' size='3rem'/>
                    <Github color='white' size='3rem'/>
                </div>
            </div>
        </div>
    )
}

export default Footer