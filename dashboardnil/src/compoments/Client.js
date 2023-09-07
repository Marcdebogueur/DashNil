import React from "react";
import General from "./General";
import Table from 'react-bootstrap/Table';
import { NavLink } from "react-router-dom";



function Client() {
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <button className="btn btn-primary ms-5">modifier</button> 
                            <button className="btn btn-success ms-5">voir plus</button> 
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                            <button className="btn btn-secondary ms-5">modifier</button> 
                            <button className="btn btn-danger ms-5">voir plus</button> 
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>
                            <button className="btn btn-primary ms-5">modifier</button> 
                            <button className="btn btn-success ms-5">voir plus</button> 
                        </td>
                    </tr>
                </tbody>
             </Table>

            </div>

            <div className="positon-relative">
                <General/>
            </div>
      
        </div>
    )
}




export default Client