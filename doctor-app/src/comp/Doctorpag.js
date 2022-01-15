import React from "react";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button,Form, Modal, Card } from "react-bootstrap";
import { Circles } from "react-loading-icons";
// import e from "express";

export default function Doctorpag() {
  const [dr, setDR] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);


  const [smShow, setSmShow] = useState(false);

  useEffect(() => {
    axios.get("/api/doctor/allDoctors").then((res) => {
      console.log(res.data);
      setDR(res.data);
      setLoading(false);

    });
  }, []);

  //======= update============================================================================================================

  // const updatePage = () => {
  //   axios
  //     .get("/api/doctor/allDoctors")
  //     .then((res) => {
  //       console.log(res.data);
  //       setDR(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.res);
  //     });
  // };

  //========= add Appointment ==================================================================================================
    const add =(e)=>{

      e.preventDefault();

      let Date = e.target[0].value;
      let Reason = e.target[1].value;
      console.log(data);
  
      const cookies = document.cookie.split("patientId=");
      const patientId = cookies[1];
    
      axios
        .post(`/api/patient/addAppointment/${patientId}/${data.dortorId}`,data)
        .then((res) => {
          console.log(res.data);

        });
    }
 
    if (loading)
    return (
      <div className="loading">
        <Circles stroke="rgb(50, 93, 141)" />
      </div>
    );
  return (
    <div className="aaaa">
      <div className="DOCTORTABL">
        {dr.map((dr) => (
          <>
            <Card style={{ width: "150px" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/7gbjLTG/Screenshot-2022-01-13-102629-1.jpg"
              />
              <Card.Body>
                <Card.Title>{dr.name}</Card.Title>
                <Card.Text>{dr.specialty}</Card.Text>
                <Button variant="primary" onClick={() => {
                  setSmShow(true)
                  data.dortorId=dr._id
                  setData(data)
                }}>
                  Add Appointment
                </Button>
                </Card.Body>
                </Card>
                </>
                ))}
                </div>
                <Modal
                 size="sm"
                 show={smShow}
                 onHide={() => setSmShow(false)}
                 aria-labelledby="example-modal-sizes-title-sm"
               >
                 <Modal.Header closeButton>
                   <Modal.Title id="example-modal-sizes-title-sm">
                    Book Appointment
                   </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                   <Form
                    onSubmit={(e)=>{
                      add(e)
                    setSmShow(false)
                    }}
                    >
                   <label>date</label>
                   <input className="input"  type="text" placeholder="ex: 2021-10-3" 
                    required onChange={(e)=>{ 
                     data.date=e.target.value;
                     setData(data)
                  }}
                  />
                   <label>resone</label>
                   <input className="input"  type="text" 
                   required onChange={(e)=>{
                     data.reasonForAppointment=e.target.value;
                     setData(data)
                  }}
                  />
                   <Button type="Submit">Booked</Button>
                   </Form>
                 </Modal.Body>
               </Modal> 
                <Footer />
                </div>
  );
}