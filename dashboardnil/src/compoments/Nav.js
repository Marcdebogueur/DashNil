import React from "react";
import 'bootstrap/js/dist/dropdown'
import './style.css'



function Nav ({Toggle}){
    return(
       <nav className="navbar navbar-expand-sm  bg-transparent wh-100 px-3 ">
           <i className=" i navbar-brand bi bi-justify-left fs-1" onClick={Toggle} ></i>
          
           
           <div className=" d-flex justify-content-center w-100">
            
            <span className="text-center fs-1  p-2 nil">Nil </span>
            <span className="text-center fs-1 p-2 service"> Service</span>
        
           </div>
           


           {/* <div className="collapse navbar-collapse profil" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                   <li className="nav-item dropdown">
                       <a className="nav-link dropdown-toggle" href="#" id="dropdownId" 
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Marc
                        </a>
                       <div className="dropdown-menu" aria-labelledby="dropdownId">
                           <a className="dropdown-item" href="#">profile</a>
                           <a className="dropdown-item" href="#">setting</a>
                           <a className="dropdown-item" href="#">logout</a>
                       </div>
                   </li>
               </ul> 
              
           </div> */}
       </nav>
    )
}



export default Nav;