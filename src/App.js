import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Menubar from './Pages/Share/Menubar';
import React from 'react';
import ProgressBar from 'react-progressbar-on-scroll'
import TopToBottom from './Pages/TopToBottom/TopToBottom';

function App() {
  return (
    <div className="App ">
        <TopToBottom></TopToBottom>
        <ProgressBar
        className='progressBar-line'
        color="green"
        height={4}
        direction="right"
        position="top"
        gradient={true}
        gradientColor="green"
        />
     <BrowserRouter>
     <Menubar    />
     
        <Routes>
          <Route path="/"   element={<Home></Home>}/>
        </Routes>
      
     </BrowserRouter>
    
   
    </div>
  );
}

export default App;
