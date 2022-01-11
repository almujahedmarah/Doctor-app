import React from "react";
import Table from 'react-bootstrap/Table'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import Footer from "../Footer";
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Doctorpag() {
  const [opoim, setOpoim] = useState([])
  const navigate= useNavigate()
 
    useEffect(() => {
      axios.get("http://localhost:8000/appointment/")
      .then((res) =>{
        console.log(res.data);
        setOpoim(res.data)
      })
     }, [])

//======= update============================================================================================================

const updatePage = () => {
  axios
    .get('http://localhost:8000/appointment/')
    .then((res) => {
      console.log(res.data);
      setOpoim(res.data);
    })
    .catch((error) => {
      console.log(error.res);
    });
};


//========= delet =========================================================================================================

const deletitem =(_id)=>{
  axios.delete(`http://localhost:8000/appointment/${_id}`)
  .then( async (res)=>{
    console.log(res.data);
    updatePage();
  })
}

//========= add and edite ==================================================================================================
const addapoint=()=>{
  navigate(`/Addapointmint`);
}

const editpag = (id) => {
  navigate(`/Edit`);
};

  return (
    <div className="aaaa">
    <div className="DOCTORTABL">
      <img width="500px" src="https://media.istockphoto.com/vectors/online-doctor-women-healthcare-concept-icon-set-doctor-videocalling-vector-id1222062036?k=20&m=1222062036&s=612x612&w=0&h=HJ24L_Cxve37T0H7O2Vqp04dmVcdpY7IRfhZuNlA5gQ="/>
      <div className="Table">
  
  <Table responsive="sm">
    <thead>
      <tr>
        <th >Date</th>
        <th>Full Name</th>
        <th>Reason</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {opoim.map((item)=>(
      
      <tr>
        <td><p>{item.date}</p></td>
        <td><p>{item.patientName}</p></td>
        <td><p>{item.reasonForAppointment}</p></td>
        <td><RemoveCircleOutlineIcon onClick={() => deletitem(item._id)}/><AddCircleOutlineIcon onClick={() => addapoint()}/><EditIcon onClick={() => editpag(item._id)}/></td>
      </tr>

      ))}
  
      </tbody>
      </Table>

    </div>
    </div>
    <Footer/>
    </div>
  );
}
