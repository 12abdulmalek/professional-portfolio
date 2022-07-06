import React, { useState } from 'react';
import './Project.css'
import pic from '../../../images/profile.png'
const data = [
    { name: '12' },
    { name: '12' },
    { name: '12' },
    { name: '12' },
    { name: '12' },
    { name: '12' },
    { name: '12' },
    { name: '12' }
]
const Project = () => {
    const [toggler , setToggler] = useState(true);
    const load = (e) =>{
     
       if(e){
        setToggler(false)
       }
       else{
        setToggler(true);
       }
    }

    return (
        <div className='container '>
            this is project section


     {
        toggler &&    <div className='row g-5'>
        {
            data.slice(0,4).map(item =>
                <div className='col-lg-3 col-md-6 col-12 d-flex justify-content-center'>
                    <div class="card-img-sec ">

                        <div class="image">
                            <div>
                                <img src={pic} alt="Avatar" />
                            </div>
                        </div>
                        <div className='two'>
                            <div class="overlay">
                                <div class="text">Hello World</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
     }
     {
        !toggler &&    <div className='row'>
        {
            data.map(item =>
                <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-center'>
                    <div class="card-img-sec ">

                        <div class="image">
                            <div>
                                <img src={pic} alt="Avatar" />
                            </div>
                        </div>
                        <div className='two'>
                            <div class="overlay">
                                <div class="text">Hello World</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
     }
         

            <button onClick={()=>load(toggler)}> send data </button>

        </div>
    );
};

export default Project;