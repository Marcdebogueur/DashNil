import React, {useState, useEffect} from "react";
import General from "./General";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { Link } from "react-router-dom";





function Vendeur() {
    const [userdata, setUserdata]=useState([]);

    useEffect(()=>{
        fetchdata();
    }, [])


    const fetchdata = async() =>{
      try{
        const result = await axios(`http://localhost:8000/api/listuser`);
        // console.log(result.data.results);
        setUserdata(result.data.results);
      }catch(err){
        console.log("something wronng !!")
      }
    }
    return(
        <div className="">
           
           
            <div className=" tableau position-absolute ">
                {/* <h2>Liste des Vendeurs</h2> */}
            <Table striped bordered hover className="table1">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Telephone</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        userdata.map((user,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.useremail}</td>
                                    <td>Actif</td>
                                   <td>
                                        <button className="btn btn-primary ms-5">modifier</button> 
                                        <Link to={`/view/${user.id}`} className="btn btn-success ms-5">voir plus</Link> 
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
             </Table>

            </div>

            <div className="positon-relative">
                <General/>
            </div>
      
        </div>
    )
}




export default Vendeur