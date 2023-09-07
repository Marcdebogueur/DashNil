import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Sidebar";
import './style.css'




const View = () =>{
    const [user, setUser]=useState([]);
    const navigate = useNavigate();
    const {id}=useParams();
    
    useEffect(()=>{
        fetchview();
    }, [id])

    const fetchview =async ()=>{
        try{
            const result =await axios.get(`http://localhost:8000/api/searchuser/${id}`);
        
            // console.log(result.data);
            setUser(result.data);
        }
        catch(err){
            console.log("something wronng !!")
        }
    }
    const clickToBackHandler = ()=>{
        navigate('/Vendeur');
    }

    return(
        <div className="container-fluid d-block">
            <div className='col-2 p-0 postion-fixed'>
                
            </div>
            <div className="contaner">
                <div className="row">
                    <div className="col-md-12">
                        <h1>User details</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>S No.</th>
                                    <th>Full name</th>
                                    <th>Email</th>
                                    <th>password</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <th>{user.id}</th>
                                    <th>{user.username}</th>
                                    <th> {user.useremail}</th>
                                    <th> {user.userpassword}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <div >
                    <button onClick={clickToBackHandler} className="btn btn-primary">Back To Home</button>
                    
                </div>
            </div>
        </div>
       
    )
}

export default View;