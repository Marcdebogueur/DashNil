import React from "react";
import Nav from "./Nav";

function Home ({Toggle}){
    return(
        <div className="px-3">
            <Nav  Toggle={(Toggle)}/>
            <hr className="barre "/>
            <div className="container-fluid">
                <div className="row g-3 my-2">

                    <div className="col-md-3 ">
                        <div className=" p-3 shadow-sm d-flex justify-content-around align-items-center rounded bg-white">
                            <div>
                                <h3 className="fs-2">110</h3>
                                <p className="fs-5">Prestataire</p>
                            </div>    
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>    
                    </div>


                    <div className="col-md-3  ">
                        <div className=" p-3 shadow-sm d-flex justify-content-around align-items-center rounded bg-white">
                            <div>
                                <h3 className="fs-2">178</h3>
                                <p className="fs-5">Vendeurs</p>
                            </div>    
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>    
                    </div>

                    <div className="col-md-3  ">
                        <div className=" p-3 shadow-sm d-flex justify-content-around align-items-center rounded bg-white">
                            <div>
                                <h3 className="fs-2">2000</h3>
                                <p className="fs-5">Clients</p>
                            </div>    
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>    
                    </div>

                    <div className="col-md-3  ">
                        <div className=" p-3 shadow-sm d-flex justify-content-around align-items-center rounded bg-white">
                            <div>
                                <h3 className="fs-2">670</h3>
                                <p className="fs-5">Produits</p>
                            </div>    
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home