import React from "react";
import Table from 'react-bootstrap/Table'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import Footer from "./Footer";
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button , Modal,Form} from 'react-bootstrap';


export default function Doctorpag() {
  const [opoim, setOpoim] = useState([])
  const navigate= useNavigate()
  const [add, setadd] = useState({});
  const [Date, setDate] = useState();
  const [Name, setName] = useState();
  const [Reason, setReason] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
    useEffect(() => {
      axios.get("http://localhost:8000/appointment/")
      .then((res) =>{
        console.log(res.data);
        setOpoim(res.data)
      })
     }, [add])

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

const editpag = (e,id) => {
  console.log(id)
  e.preventDefault();

  let Date = e.target[0].value;
  let Name = e.target[1].value;
  let Reason = e.target[2].value;
  console.log(e);

  axios
    .put(`http://localhost:8000/appointment/${id}`, {
      date: Date,
      patientName: Name,
      reasonForAppointment: Reason,
    })
    .then((res) => {
      console.log(res.data);
      setadd(res.data);
      setShow(false)
      updatePage();
    });
   
};

  return (
    <div className="aaaa">
    <div className="DOCTORTABL">
      <img width="500px" src="https://media.istockphoto.com/vectors/online-doctor-women-healthcare-concept-icon-set-doctor-videocalling-vector-id1222062036?k=20&m=1222062036&s=612x612&w=0&h=HJ24L_Cxve37T0H7O2Vqp04dmVcdpY7IRfhZuNlA5gQ="/>
      <div className="Table">
      <AddCircleOutlineIcon onClick={() => addapoint()}/>
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
      <>
      <tr>
        <td><p>{item.date}</p></td>
        <td><p>{item.patientName}</p></td>
        <td><p>{item.reasonForAppointment}</p></td>
        <td><RemoveCircleOutlineIcon onClick={() => deletitem(item._id)}/><EditIcon  onClick={handleShow}/></td>
      </tr>
    
    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Edit Appointment</Modal.Title>
    </Modal.Header>

 <Modal.Body >
     <Form onSubmit={(e) => {editpag(e, item._id)}}> 
<label>Date</label><br/>
<input type="text" /><br/>
<label>Full Name</label><br/>
<input type="text" /><br/>
<label>Reason</label><br/>
<input type="text" />
       
       <Button   variant="primary" type="submit"> Edit</Button>
       </Form>
    </Modal.Body>

  </Modal></>
      ))}
  
      </tbody>
      </Table>

    </div>

    </div>
    <Footer/>
    </div>
  );
}
