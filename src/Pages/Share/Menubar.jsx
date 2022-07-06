import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { TiSocialGithub,TiSocialFacebook,TiSocialLinkedin } from "react-icons/ti";

import './MenuItem.css'
import Introduce from './Introduce';
const Menubar = () => {
  const [modalShow, setModalShow] = useState(false);
  const props = { show: modalShow, onHide: setModalShow };
const [color,setColor] = useState(false);
useEffect(()=>{
 
const setScroll = () =>{
  if(window.pageYOffset>1){
    setColor(false);
     }
     else{      
      setColor(true)
}
}
window.addEventListener('scroll',setScroll);
},[])
// console.log(color);
  return (
  <div className='menu'>
     <div className={color?'menu-item w-100':'menu-item-1 w-100'}>
     <div className='d-flex justify-content-between align-items-center menubar p-2 container'>
        <div>
           <div className='social-link'>
              <a  target='blank' href=' https://github.com/12abdulmalek'><TiSocialGithub/></a>
              <a  target='blank' href='https://www.facebook.com/profile.php?id=100059345949896 '><TiSocialFacebook/></a>
              <a  target='blank' href=' https://www.linkedin.com/in/abdul-malek-3053271b2/ '><TiSocialLinkedin/></a>
               
           </div>
        </div>
      <div>
        <button className='menu-line-btn' onClick={() => setModalShow(true)}>
          <RiMenu3Fill />
        </button>
        <Modal
          {...props}

          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className='menu-items'
        >
          <Modal.Header closeButton>

          </Modal.Header>
          <Modal.Body >
            <a href='https://www.google.com/'>dd</a> <br/>
            <Link to="https://www.google.com/">google</Link>
          </Modal.Body>

        </Modal>
      </div>
    
    </div>
     </div>
    <Introduce></Introduce>
  </div>
  );
};

export default Menubar;