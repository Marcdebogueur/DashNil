import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import Form from 'react-bootstrap/Form'; 
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
// import General from "./General";
import logNil from './../asset/images/logoNil.png'

import './style.css'


 
function Connexion (){
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [motPasse, setPasse] = useState('');
  const [admin, setAdmin] = useState([])

  useEffect(()=>{
    fetchadmin()
  },[])

  const fetchadmin = async (e) =>{

    await axios.get(`http://localhost:8000/api/listeadmin`).then(({data})=>{
      
      setAdmin(data)

    })
  }

  var a = 0;

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (admin.length > 0) {
      admin.map((row,valeur) => {
        if (row.email === `${email}` && row.motPasse === `${motPasse}`) {
          a = 1;
          navigate("/Dashboard", {state : {attribut: row.nom}})
        }
      })
      if (a == 0) {
        Swal.fire({
          icon:"error",
          text:"Erreur d'identifiant"
        });
        setEmail("");
        setPasse("");
      }
      
    }
    else{
      Swal.fire({
        icon:"error",
        text:"Erreur d'identifiant"
      });
      setEmail("");
      setPasse("");
    }
    console.log(`Name:${motPasse}, Email: ${email}`)
  }


    return(
        

        <div className=" wrapper d-flex  align-items-center justify-content-center w-100  ">
            <div className="position-absolute   image">
                <img src={logNil} className="logo1" />
            </div>
               

             <div className=" text-white position-absolute tete "> 
                <h2 className="mb-3 text-center ">Nil service</h2>

            </div>
        <div className="login position-relative shadow-sm">
        



            <form onSubmit={handleSubmit} className="needs-validation" >
                
                <div className="form-group  was-validated mb-2">
                    <label htmlFor="email" className="form-label fs-4 " >email</label>
                    <input type="email" className="form-control " id="email"autoComplete="off" required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group  was-validated mb-2">
                    <label htmlFor="password" className="form-label fs-4 ">password</label>
                    <input type="password" className="form-control" id="password" autoComplete="off"  value={motPasse} onChange={(e) => setPasse(e.target.value)} required/>
                </div>
                <div className=" mt-5 mb-4 d-flex align-items-center justify-content-center"> 
                    
                <button type="submit" className="btn sign w-50 fs-4" > Sign In </button>
                </div>
            </form>


        </div>
    </div>
    )
}

export default Connexion