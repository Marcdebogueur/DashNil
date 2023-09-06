import React from "react";
import Sidebar from './Sidebar';
import Home from './Home';
import { useState } from 'react';




function General(){
    const [toggle, setToggle]=useState(true)
     const Toggle =()=>{
        setToggle(!toggle)
    }
    return(
        <div className='container-fluid bg- min-vh-100 general'>
      <div className='row'>
        {toggle &&<div className='col-2 p-0 postion-fixed'>
          <Sidebar/>
        </div>}
        <div className='col p-0'>
          
          <Home Toggle={Toggle} />
        </div>
      </div>
    </div>
    );
}


export default General
