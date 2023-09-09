import React from "react";
import logNil from './../asset/images/logoNil.png'
import './style.css'
import { Link } from "react-router-dom";



function Sidebar() {
    return (
        
        <div className=" bg-dark text-white sidebar p-2 min-vh-100 sidebar">
            <div className=" d-flex justify-content-center">
                <img src={logNil} className="logo" />
                <div className="user">
                    <Link to="/" className="text-decoration-none text-none">
                        <i className=" bi bi-bootstrap-fill me-3 fs-4 "></i>
                        <span className="brand-name fs-4 ps-5 ms-5 ">Deconnexion <i class="bi bi-box-arrow-in-left"></i></span>
                    </Link>
                </div>
                    
            </div>
            <div className="list-group list-group-flush">
                <hr className="text-white hr"/>
                <Link to="/Dashboard" className="list-group-item py-2 fs-5" >
                    <i className="bi bi-speedometer2 fs-5 me-3"></i>
                    <span >Dashboard</span>
                </Link>

                <Link to="/Prestataire" className="list-group-item py-2 fs-5" >
                    <i className="bi bi-person-badge fs-4 me-3"></i>
                    <span>Prestataire</span>
                </Link>

                <Link to="/Vendeur" className="list-group-item py-2 fs-5" >
                    <i className="bi bi-shop fs-4 me-3"></i>
                    <span>Vendeur</span>
                </Link>

                <Link to="/Produit" className="list-group-item py-2 fs-5" >
                    <i className="bi bi-diagram-2 fs-4 me-3"></i>
                    <span>Produits</span>
                </Link>

                <Link to="/Support" className="list-group-item py-2 fs-5" >
                    <i className="bi bi-bookmarks fs-4 me-3"></i>
                    <span>Supports</span> 
                </Link>
                
                <Link to="/Client" className="list-group-item py-2 fs-5" >
                    <i className="bi bi-people fs-4 me-3"></i>
                    <span>Clients</span>
                </Link>

                
                
               



            </div>
        </div>
    )
}


export default Sidebar