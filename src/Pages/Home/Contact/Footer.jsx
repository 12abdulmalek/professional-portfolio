import React from 'react';
import { TiSocialGithub,TiSocialFacebook,TiSocialLinkedin } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center menubar p-2 container'>
                <div>
                    <div className='social-link  social-footer-link'>
                    <a  href='tel:+8801977528702' title='+8801977528702'><FiPhoneCall/></a>
                        <a target='blank' href=' https://github.com/12abdulmalek'><TiSocialGithub /></a>
                        <a target='blank' href='https://www.facebook.com/profile.php?id=100059345949896 '><TiSocialFacebook /></a>
                        <a target='blank' href=' https://www.linkedin.com/in/abdul-malek-3053271b2/ '><TiSocialLinkedin /></a>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;