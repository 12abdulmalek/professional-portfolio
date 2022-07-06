import React from 'react';
import { FaCloudDownloadAlt, FaMusic , FaCoffee} from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import { MdDraw } from "react-icons/md";
import {GiArtilleryShell } from "react-icons/gi";
import pic from '../../../images/profile.png'
import './introduction.css'
const Introduction = () => {
    return (
        <div className='my-intro pb-'>
            <div className='container pt-5'>
                <div className='container pt-5 row'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='my-img'>
                            <div className='img-border'></div>
                            <img action='' className='my-pic' height="385px" width="365px" src={pic} />
                        </div>
                        <div className='download-btn'>  <a > <FaCloudDownloadAlt /> DOWNLOAD RESUME</a></div>
                    </div>
                    <div className='col-lg-6 col-md-12 '>
                        <div className='profile-text-filed'>
                            <h1 className='about-me'>ABOUT ME</h1>
                            <p className='text-white'>Hello! I’m Abdul Malek Sarkar. Web Developer with over 1 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, react, node js, express js.</p>
                            <div>
                                <h4 className='pro-texts'><span className='pro-text'>NAME: </span> Abdul Malek Sarkar</h4>
                                <h4 className='pro-texts'><span className='pro-text'>DATE OF BIRTH: </span> 1 MAY 2001</h4>
                                <h4 className='pro-texts'><span className='pro-text'>NATIONALITY: </span> Bangladeshi</h4>
                                <h4 className='pro-texts'><span className='pro-text'>PHONE: </span> 01977528702</h4>
                                <h4 className='pro-texts'><span className='pro-text'>E-MAIL: </span> abdmaleksar01a@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* my interest parth code is here  */}

            
            <div className='container pt-5'>

                <div className='interest text-white container pt-5'>
                    <h1 className='ms-2 about-me mb-5'>MY INTEREST</h1>
                    <div className='row g-5'>
                    <div className='col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center align-items-center'>
                    <div >
                    <div className='interest-sec d-flex flex-column justify-content-center align-items-center'>
                        <div className='interest-icon'>
                              <i><FaMusic /> </i>
                        </div>
                        <h3 className='interest-text'>Music</h3>
                        </div>
                    </div>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 '>
                    <div className='interest-sec d-flex flex-column justify-content-center align-items-center'>
                        <div className='interest-icon'>
                              <i  className='interest-icon-1'><GiArtilleryShell/> </i>
                        </div>
                        <h3 className='interest-text'>Art</h3>
                    </div>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 '>
                    <div className='interest-sec d-flex flex-column justify-content-center align-items-center'>
                        <div className='interest-icon'>
                              <i  className='interest-icon-1'><ImAirplane/> </i>
                        </div>
                        <h3 className='interest-text'>Flying</h3>
                    </div>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 '>
                    <div className='interest-sec d-flex flex-column justify-content-center align-items-center'>
                        <div className='interest-icon'>
                              <i ><FaCoffee/> </i>
                        </div>
                        <h3 className='interest-text'>cofee</h3>
                    </div>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 '>
                    <div className='interest-sec d-flex flex-column justify-content-center align-items-center'>
                        <div className='interest-icon'>
                              <i  className='interest-icon-1'><ImAirplane/> </i>
                        </div>
                        <h3 className='interest-text'>Travel</h3>
                    </div>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 '>
                    <div className='interest-sec d-flex flex-column justify-content-center align-items-center'>
                        <div className='interest-icon'>
                              <i  className='interest-icon-1'><MdDraw/> </i>
                        </div>
                        <h3 className='interest-text'>Drawing</h3>
                    </div>
                    </div>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;