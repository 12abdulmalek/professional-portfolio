import React, { useState } from 'react';
import '../../App.css';
import {FaArrowCircleUp} from 'react-icons/fa';
const TopToBottom = () => {
    const [scroll,setScroll] = useState(false);
    
    const checkScroll =() =>{
        if(!scroll&&window.pageYOffset>200){  
            setScroll(true);
        }
        else if(scroll&&window.pageYOffset<=200){
            setScroll(false);
        }
    }
   const showScroll = () =>{
     window.scrollTo({top:0,behavior:'smooth'})
   }
   window.addEventListener('scroll',checkScroll);
 
    return (
        <div>
           <FaArrowCircleUp   className='scroll' onClick={showScroll} style={{height: 40, display: scroll ? 'flex' : 'none'}}/>

        </div>
    );
};

export default TopToBottom;