import React, {useState, useEffect} from "react";
import Nav from "./Nav";
import axios from "axios";
import { Link } from "react-router-dom";

function Home ({Toggle}){

    const [uservend, setUservend]=useState([]);
    const [userprest, setUserprest]=useState([]);
    const [userprod, setUserprod]=useState([]);
    const [userdata, setUserdata]=useState([]);

    useEffect(()=>{
        fetchvendeur();
    }, [])


    const fetchvendeur = async() =>{
      try{
        const result = await axios.get(`http://localhost:8000/api/listevendeur`);
        setUservend(result.data);
      }catch(err){
        console.log("something wronng !!")
      }
    }
    let compVend=0


    useEffect(()=>{
        fetchprest();
    }, [])


    const fetchprest = async() =>{
      try{
        const result = await axios.get(`http://127.0.0.1:8000/api/listeprestataire`);
        setUserprest(result.data);
      }catch(err){
        console.log("something wronng !!")
      }
    }
    let compPrest=0

    useEffect(()=>{
        fetchprod();
    }, [])


    const fetchprod = async() =>{
      try{
        const result = await axios.get(`http://localhost:8000/api/listeproduit`);
        setUserprod(result.data);
      }catch(err){
        console.log("something wronng !!")
      }
    }
    let compProd=0


    useEffect(()=>{
        fetchdata();
    }, [])


    const fetchdata = async() =>{
      try{
        const result = await axios.get(`http://localhost:8000/api/listeclient`);
        setUserdata(result.data);
      }catch(err){
        console.log("something wronng !!")
      }
    }
    let comp=0
    

    return(
        <div className="px-3">
            <Nav  Toggle={(Toggle)}/>
            <hr className="barre "/>
            <div className="container-fluid">
                <div className="row g-3 my-2">

                    <div className="col-md-3 ">
                        <Link to="/Prestataire" className="text-decoration-none">
                            <div className=" p-3 shadow-sm d-flex justify-content-around align-items-center rounded bg-white">
                                <div>
                                    {
                                
                                userprest.map((user,i)=>{
                                    compPrest=i+1;
                                })
                                
                            }
                                    <h3 className="fs-2">{compPrest}</h3>
                                    <p className="fs-5">Prestataire</p>
                                </div>    
                                <i className="bi bi-cart-plus p-3 fs-1"></i>
                            </div> 
                        </Link>   
                    </div>

                    
                    <div className="col-md-3  ">
                        <Link to="/Vendeur" className="text-decoration-none">
                            <div className=" p-3 shadow-sm d-flex justify-content-around align-items-center rounded bg-white">
                                <div>
                                {
                                
                                uservend.map((user,i)=>{
                                    compVend=i+1;
                                })
                                
                            }
                                    <h3 className="fs-2">{compVend}</h3>
                                    <p className="fs-5">Vendeurs</p>
                                </div>    
                                <i className="bi bi-cart-plus p-3 fs-1"></i>
                            </div> 
                        </Link>
                    </div>

                    <div className="col-md-3  ">
                        <Link to="/Client" className="text-decoration-none">
                            <div className=" p-3 shadow-sm d-flex justify-content-around align-items-center rounded bg-white">
                                <div>
                                {
                                    
                                    userdata.map((user,i)=>{
                                        comp=i+1;
                                    })
                                    
                                }
                                        <h3 className="fs-2">{comp}</h3>
                                    <p className="fs-5">Clients</p>
                                </div>    
                                <i className="bi bi-cart-plus p-3 fs-1"></i>
                            </div>  
                        </Link>  
                    </div>

                    <div className="col-md-3  ">
                        <Link to="/Produit" className="text-decoration-none">
                            <div className=" p-3 shadow-sm d-flex justify-content-around align-items-center rounded bg-white">
                                <div>
                                {
                                    
                                    userprod.map((user,i)=>{
                                        compProd=i+1;
                                    })
                                    
                                }
                                        <h3 className="fs-2">{compProd}</h3>
                                    <p className="fs-5">Produits</p>
                                </div>    
                                <i className="bi bi-cart-plus p-3 fs-1"></i>
                            </div> 
                        </Link>   
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default Home