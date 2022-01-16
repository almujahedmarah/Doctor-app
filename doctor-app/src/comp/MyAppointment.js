import React from "react";
import Table from "react-bootstrap/Table";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import { Circles } from "react-loading-icons";


export default function MyAppointment() {
  const [opoim, setOpoim] = useState([]);
  const navigate = useNavigate();
  const [add, setadd] = useState({});
  const [Date, setDate] = useState();
  const [AppointmentData, setAppointmentData] = useState({});
  const [appointment, setAppointment] = useState();
  const [Name, setName] = useState();
  const [Reason, setReason] = useState();
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [doctor, setDoctor] = useState();
  const [data, setData] = useState({});
  
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  
  useEffect(() => {
    updatePage();
    
    }, []);




  //======= update============================================================================================================

  const updatePage = () => {
    
    if(document.cookie.includes("patientId")){
      const cookies = document.cookie.split("patientId=");
      const patientId = cookies[1];
      axios.get(`/api/patient/allAppointment/${patientId}`).then((res) => {
        // console.log(res.data);
        setDoctor(res.data);
        console.log(res.data.appointments);
        setAppointment(res.data.appointments);
        setLoading(false);
      });
    }else if(document.cookie.includes("doctorId")){
      const cookies = document.cookie.split("doctorId=");
      const doctorId = cookies[1];
      // console.log(doctorId);
      axios.get(`/api/doctor/allAppointment/${doctorId}`).then((res) => {
        // console.log(res.data);
        setDoctor(res.data);
        console.log(res.data.appointments);
        setAppointment(res.data.appointments);
        setLoading(false);
      });

    }
  };

  //========= delet =========================================================================================================

  const deletitem = (patientId,AppointmentId,doctorId) => {
   
    axios.delete(`api/patient/deleteAppointment/${patientId}/${doctorId}/${AppointmentId}`).then((res) => {
    
      // if(res.data === "deleted")
      updatePage();
    });
  };

  //========= edite ==================================================================================================

  // const editpag = (e, id) => {
  //   console.log(id);
  //   e.preventDefault();

  //   let Date = e.target[0].value;
  //   let Name = e.target[1].value;
  //   let Reason = e.target[2].value;
  //   console.log(e);

  //   axios
  //     .put(``, {
  //       date: Date,
  //       patientName: Name,
  //       reasonForAppointment: Reason,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setadd(res.data);
  //       setShow(false);
  //       updatePage();
  //     });
  // };
  if (loading)
  return (
    <div className="loading">
      <Circles stroke="rgb(50, 93, 141)" />
    </div>
  );
  return (
    <div className="aaaa">
      <div className="DOCTORTABL">
        <img
          width="500px"
          src="https://media.istockphoto.com/vectors/online-doctor-women-healthcare-concept-icon-set-doctor-videocalling-vector-id1222062036?k=20&m=1222062036&s=612x612&w=0&h=HJ24L_Cxve37T0H7O2Vqp04dmVcdpY7IRfhZuNlA5gQ="
        />
        <div className="Table">
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Full Name</th>
                <th>Reason</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                appointment.map((item) => {
                  // let d = new Date(item.date);
                  return(
                
                  <tr>
                    <td>
                      <p>{item.date}</p>
                    </td>
                    <td>
                      <p>{item.patientName}</p>
                    </td>
                    <td>
                      <p>{item.reasonForAppointment}</p>
                    </td>
                    <td>
                      <RemoveCircleOutlineIcon
                          onClick={async() =>{
                            setLoading(true);
                             deletitem(item.patientId,item.AppointmentId,item.doctorId);
                            //  updatePage();
                          // data.dortorId=item.doctorId
                          // setData(data)
                        }
                        }
        
                      />
                      {
                      // <EditIcon onClick={handleShow} />
                      }
                    </td>
                  </tr>

                 
               
                     )
                    
                    })
            
            }
            </tbody>
          </Table>
{
        //   <Modal
        //   show={show}
        //   onHide={handleClose}
        //   backdrop="static"
        //   keyboard={false}
        // >
        //   <Modal.Header closeButton>
        //     <Modal.Title>Edit Appointment</Modal.Title>
        //   </Modal.Header>

        //   <Modal.Body>
        //     <Form
        //       onSubmit={(e) => {
        //         editpag(e, item._id);
        //       }}
        //     >
        //       <label>Date</label>
        //       <br />
        //       <input type="text" />
        //       <br />
        //       <label>Full Name</label>
        //       <br />
        //       <input type="text" />
        //       <br />
        //       <label>Reason</label>
        //       <br />
        //       <input type="text" />

        //       <Button variant="primary" type="submit">
        //         {" "}
        //         Edit
        //       </Button>
        //     </Form>
        //   </Modal.Body>
        // </Modal>

            }
        </div>
      </div>
      <Footer />
    </div>
  );
}
