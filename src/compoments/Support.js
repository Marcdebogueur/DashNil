import React from "react";
import Table from 'react-bootstrap/Table';
import Sidebar from './Sidebar';
import Home from './Home';
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function Support() {
    const [userdata, setUserdata]=useState([]);

    useEffect(()=>{
        fetchdata();
    }, [])


    const fetchdata = async() =>{
      try{
        const result = await axios.get(`http://127.0.0.1:8000/api/listesupport`);
        // console.log(result.data.results);
        setUserdata(result.data);
      }catch(err){
        console.log("something wronng !!")
      }
    }


    const deleteBoutique= async (id) =>{
      const isConfirm = await Swal.fire({
          title: 'Etes Vous Sur ?',
          text:'Vous ne pouvez plus faire un retour arriere en acceptant',
          icon:'warning',
          showCancelButton: true,
          confirmButtonColor:'#3085d6',
          cancelButtonColor:'#d33',
          confirmButtonText:'Oui, Supprimer'
      }).then((result) => {
          return result.isConfirmed
      });
  
      if (!isConfirm) {
          return;
      }
  
      await axios.delete(`http://localhost:8000/api/supprimersupport/${id}`).then(({data})=>{
          Swal.fire({
              icon:"success",
              text:data.message
          })
          fetchdata()
      }).catch(({response:{data}})=>{
          Swal.fire({
              text:data.message,
              icon:"error"
          })
      }
          
      )
    }



    const [toggle, setToggle]=useState(true)
     const Toggle =()=>{
        setToggle(!toggle)
    }

  return (
    <div className='container-fluid bg- min-vh-100 general'>
        <div className='row'>
          {toggle &&<div className='col-2 p-0 postion-fixed'>
            <Sidebar/>
          </div>}
          <div className='col p-0'>
            
            <Home Toggle={Toggle} />
            <div className="">
            <Table striped bordered hover className="table1 mt-5">

                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Cathégorie</th>
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
                                  <td>{user.nomSup}</td>
                                  <td>{user.emailSup}</td>
                                  <td>{user.telSup}</td>
                                  <td>{user.positionSup}</td>
                                  <td>
                                      <Button variant="danger" className='btn btn-danger ms-2' onClick={()=>deleteBoutique(user.id)}><i class="bi bi-trash3 text-light"></i></Button>
                                  </td>
                              </tr>
                          )
                      })
                  }
                  
              </tbody>
            </Table>
        </div>

          </div>
        </div>
      </div>
  )
}

export default Support
