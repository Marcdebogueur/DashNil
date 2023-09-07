import React from "react";
import {Link} from "react-router-dom";
// import General from "./General";
import logNil from './../asset/images/logoNil.png'

import './style.css'


 
function Connexion (){
    return(
        

        <div className=" wrapper d-flex  align-items-center justify-content-center w-100  ">
            <div className="position-absolute   image">
                <img src={logNil} className="logo1" />
            </div>
               

             <div className=" text-white position-absolute tete "> 
                <h2 className="mb-3 text-center ">Nil service</h2>

            </div>
        <div className="login position-relative shadow-sm">
           
            <form className="needs-validation" >
                <div className="form-group  was-validated mb-2">
                    <label htmlFor="name" className="form-label fs-4" >name</label>
                    <input type="text" className="form-control" id="name" autoComplete="off" required />
                </div>
                <div className="form-group  was-validated mb-2">
                    <label htmlFor="email" className="form-label fs-4 "  >email</label>
                    <input type="email" className="form-control " id="email"autoComplete="off" required />
                </div>
                <div className="form-group  was-validated mb-2">
                    <label htmlFor="password" className="form-label fs-4 " >password</label>
                    <input type="password" className="form-control" id="password" autoComplete="off"  required/>
                </div>
                <div className=" mt-5 mb-4 d-flex align-items-center justify-content-center"> 
                    
                <Link to="./General" className="w-50 fs-4 sign btn"> <button type="submit" className="btn sign w-50 fs-4" > Sign In </button></Link>
                   

                    
              
                </div>

            </form>


        </div>
    </div>
    )
}

export default Connexion