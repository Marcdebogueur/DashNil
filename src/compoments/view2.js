import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Sidebar";
import './style.css'




const View2 = () =>{
    const [user, setUser]=useState([]);
    const navigate = useNavigate();
    const {id}=useParams();
    
    useEffect(()=>{
        fetchview();
    }, [id])

    const fetchview =async ()=>{
        try{
            const result =await axios.get(`http://localhost:8000/api/rechercheprestataire/${id}`);
        
            // console.log(result.data);
            setUser(result.data);
        }
        catch(err){
            console.log("something wronng !!")
        }
    }
    const clickToBackHandler = ()=>{
        navigate('/Prestataire');
    }
    let statut=""
    if(user.statut==0){
        statut="Descativé"
    }else{
        statut="Activé"
    }

    return(
        <div className="container-fluid d-block">
            <div className='col-2 p-0 postion-fixed'>
                
            </div>
            <div className="contaner">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Details du Prestataire</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No. Ident</th>
                                    <th>Nom complet</th>
                                    <th>Email</th>
                                    <th>Telephone</th>
                                    <th>Quartier</th>
                                    <th>Ville</th>
                                    <th>Categorie</th>
                                    <th>description</th>
                                    <th>Statut</th>
                                    <th>Ajouter le</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <th>{user.id}</th>
                                    <th>{user.nom}</th>
                                    <th> {user.email}</th>
                                    <th> {user.phone}</th>
                                    <th> {user.quartier}</th>
                                    <th> {user.ville}</th>
                                    <th> {user.categorie}</th>
                                    <th> {user.description}</th>
                                    <th> {statut}</th>
                                    <th> {user.dateCreation}</th>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <div >
                    <button onClick={clickToBackHandler} className="btn btn-primary">Liste Prestataire</button>
                    
                </div>
            </div>
        </div>
       
    )
}

export default View2;