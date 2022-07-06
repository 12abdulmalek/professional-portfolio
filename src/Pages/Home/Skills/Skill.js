import React from 'react';
import './Skill.css'
const Skill = () => {
    function reveal() {
        var reveals = document.querySelectorAll(".t");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
          
            var elementVisible = 0;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

    return (
        <div className='improve pt-5 '>
            <h1 className='text-center about-me professional'>PROFESSIONAL SKILLS</h1>
          
            <div className="text-container ">
                <div className='container'>
                    <div className='row g-5 justify-content-center'>
                        <div className='col-md-6 col-12 d-flex justify-content-center'>
                            <div className='bar'>
                                <div className='info'>
                                    <span className="">HTML 5</span>
                                </div>
                                <div className='progress-line y'>
                                    <span className="t t1"></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 d-flex justify-content-center'>
                            <div className='bar'>
                                <div className='info'>
                                    <span className="">HTML 5</span>
                                </div>
                                <div className='progress-line'>
                                    <span className="t t2"></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 d-flex justify-content-center'>
                            <div className='bar'>
                                <div className='info'>
                                    <span className="">HTML 5</span>
                                </div>
                                <div className='progress-line'>
                                    <span className="t t3"></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 d-flex justify-content-center'>
                            <div className='bar'>
                                <div className='info'>
                                    <span className="">HTML 5</span>
                                </div>
                                <div className='progress-line'>
                                    <span className="t t4"></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 d-flex justify-content-center'>
                            <div className='bar'>
                                <div className='info'>
                                    <span className="">HTML 5</span>
                                </div>
                                <div className='progress-line'>
                                    <span className="t t5"></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 d-flex justify-content-center'>
                            <div className='bar'>
                                <div className='info'>
                                    <span className="">HTML 5</span>
                                </div>
                                <div className='progress-line'>
                                    <span className="t t6"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;