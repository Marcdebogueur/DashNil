import React from "react";
import logNil from './../asset/images/logoNil.png'
import './style.css'



function Sidebar() {
    return (
        
        <div className=" bg-dark text-white sidebar p-2 min-vh-100 sidebar">
            <div className=" d-flex justify-content-center">
                <img src={logNil} className="logo" />
                <div className="user">
                    <i className=" bi bi-bootstrap-fill me-3 fs-4 "></i>
                        <span className="brand-name fs-4 ">Marc</span>
                </div>
                    
            </div>
            <div className="list-group list-group-flush">
                <hr className="text-white hr"/>
                <a href="" className="list-group-item py-2" >
                    <i className="bi bi-speedometer2 fs-5 me-3"></i>
                    <span>Dashboard</span>
                </a>
                <a href="" className="list-group-item py-2" >
                    <i className="bi bi-house fs-4 me-3"></i>
                    <span>Home</span>
                </a>
                <a href="" className="list-group-item py-2" >
                    <i className="bi bi-house fs-4 me-3"></i>
                    <span>Vendeur</span>
                </a>
                <a href="" className="list-group-item py-2" >
                    <i className="bi bi-house fs-4 me-3"></i>
                    <span>Produits</span>
                </a>
                <a href="" className="list-group-item py-2" >
                    <i className="bi bi-house fs-4 me-3"></i>
                    <span>Prestataire</span>
                </a>
                <a href="" className="list-group-item py-2" >
                    <i className="bi bi-house fs-4 me-3"></i>
                    <span>Client</span>
                </a>
               



            </div>
        </div>
    )
}


export default Sidebar