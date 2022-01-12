
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './CSS/home.css'
import { Card ,Container,Button} from 'react-bootstrap';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {useState,useEffect} from 'react'
import { Button , Modal,Form} from 'react-bootstrap';

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const [drname,setdrname] = useState()
 const [drname,setdrname] = useState()
  const navigate= useNavigate()
 const [es, setEs] = useState()


  const [dr, setdr] = useState([])

  useEffect(() => {
    axios.get("/doctorGet")
    .then((res)=>{
      console.log(res.data);
      setdr(res.data)
    })
  }, [])

  const addDr=(e)=>{
    e.preventDefault();
    let Name = e.target[0].value;
    let spa = e.target[1].value;

    axios.post("doctorAdd", {name:Name,speciality:spa})
    .then((res)=>{
      setShow(false)
    })
  }
    return ( 
    <div className='Home'> 
 

      <div className='homewelcom'>
        <img width="500px" src="https://media.istockphoto.com/vectors/online-doctor-women-healthcare-concept-doctor-videocalling-on-a-vector-id1222063277?k=20&m=1222063277&s=612x612&w=0&h=hELWpR-7XmWUo3n9HwKY_2Eab4kZVAD5GYHjnezXnew=" />
        <div className='homewelcomtext' >
          <h1>Doctor App</h1>
          <h6><b>in this app you can create a doctor and do the crud</b></h6>
          <h6><b>and the doctor can add delet and edite the Appointment</b></h6>
          <h6><b>this app is the best app</b></h6>
        </div>
      </div>

 {/*  */}
<AddCircleOutlineIcon  onClick={handleShow}/>
 <Container>
 {dr.map((dr)=>{
   return( <>
   <Card border="primary" style={{ width: '18rem' }}>
     <Card.Header>Doctor</Card.Header>
     <Card.Body>
       <Card.Title>Dr. {dr.name}</Card.Title>
       <Card.Text>speciality:{dr.speciality}</Card.Text>
     </Card.Body>
   </Card>
   <br />
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
     <Form onSubmit={(e) => {addDr(e)}}> 
<label>Date</label><br/>
<input type="text" /><br/>
<label>Full Name</label><br/>
<input type="text" /><br/>
<label>Reason</label><br/>
<input type="text" />
       
       <Button   variant="primary" type="submit"> Edit</Button>
       </Form>
    </Modal.Body>

  </Modal>
   </>)
 })}
 </Container>
   {/* <>
 <Container className='parentTwo'>
<Card className='doctor'> 
<AddCircleOutlineIcon />
   <Card style={{ width: '17rem' ,height:'11rem'}}  >
   <Button variant="secondary" >Add New Appointment</Button> 
    <Card.Body>
    <Card.Title>Doctor Name:</Card.Title>
    <Card.Text>specialty</Card.Text>
    </Card.Body>
  </Card>



</Card  >


<Card className='appointment' style={{height:'11rem'}}>

<AddCircleOutlineIcon onClick={() => addapoint()}/>

 
    <Card.Body className='Info'>
    <h6>Date</h6>
    <h6>Patient Name</h6>
    <h6>Reason For Appointment</h6>
      <Button variant="danger" className="BTN">Delete</Button>
    </Card.Body>
    
    <Card.Body className='Info'>
    <h6>Date</h6>
    <h6>Patient Name</h6>
    <h6>Reason For Appointment</h6>
      <Button variant="danger" className="BTN">Delete</Button>
    </Card.Body>

<Card.Body className='Info'>
    <h6>Date</h6>
    <h6>Patient Name</h6>
    <h6>Reason For Appointment</h6>
      <Button variant="danger" className="BTN">Delete</Button>
    </Card.Body>


</Card>

</Container> */}
  {/* })} */}

<br></br>
<br></br>
<br></br>
<Footer/>
 
</div>
);
}

export default Home;