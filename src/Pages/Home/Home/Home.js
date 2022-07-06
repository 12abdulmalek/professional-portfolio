import React from 'react';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Introduction from '../Introduction/Introduction';
import Project from '../Projects/Project';
import Skill from '../Skills/Skill';


const Home = () => {
    return (
        <div>
            <Introduction></Introduction>
            {/* <Education></Education> */}
            <Skill></Skill>
           <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;