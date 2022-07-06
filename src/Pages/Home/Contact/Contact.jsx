import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css'
import Footer from './Footer';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        // console.log(form.current.email);
        emailjs.sendForm('service_89s8p7s', 'template_5t50x1k', e.target, 'rTHMfUWGlEfqc0KuI')
            .then((result) => {
                // console.log(result.text);
            }, (error) => {
                // console.log(error.text);
            });
            e.target.reset();
        e.preventDefault();
    };
    return (
        <div className='p-5'>

            <div><h1 className='about-me text-center'>CONTACT ME</h1></div>
            <form ref={form} onSubmit={sendEmail}>
                <div className='row g-5'>
                    <div className='col-lg-6 col-md-12'>
                        <div class="form w-100">
                            <input type="text" id="name" name="user_name" class="form__input input" placeholder=" " />
                            <label for="name" class="form__label label">NAME *</label>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div class="form w-100">
                            <input type="email" id="email" name="user_email" class="form__input input"  placeholder=" " />
                            <label for="email" class="form__label label">EMAIL *</label>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div class="form w-100">
                            <textarea rows='10' id="email" name="message" style={{ height: '140px' }} class="form__input input scrolls" placeholder=" " />
                            <label for="email" class="form__label label">MESSAGE *</label>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <input type='submit' className='submit-btn text-center ' value='SEND MESSAGE' />

                </div>

            </form>

            <div>
            </div>
            <Footer></Footer>
           
        </div>
    );
};

export default Contact;