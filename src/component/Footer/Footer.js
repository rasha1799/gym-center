import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter,faFacebook,faFacebookMessenger,faInstagram} from '@fortawesome/fontawesome-free-brands';
import './Footer.css'


const Footer = () => {
    return (
        <div className="bg-dark">
            <div>
            <FontAwesomeIcon className="fa" icon={faFacebook } />
            <FontAwesomeIcon className="fa ms-5" icon={faInstagram } />
            <FontAwesomeIcon className=" fa ms-5" icon={faFacebookMessenger } />
            <FontAwesomeIcon className="fa ms-5" icon={faTwitter} />
            </div>
        </div>
    );
};

export default Footer;