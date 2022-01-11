

import './CSS/home.css'
import { Card ,Container,Button} from 'react-bootstrap';
import Footer from './Footer';
function Home() {
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
 <Container className='parentTwo'> 

<Card className='doctor'> 
  
   <Card style={{ width: '17rem' ,height:'11rem'}}  >
   <Button variant="secondary" >Add New Appointment</Button> 
  {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
    <Card.Body>
    <Card.Title>Doctor Name</Card.Title>
    <Card.Text>specialty</Card.Text>
    </Card.Body>

  </Card>

{/*  */}

</Card  >

<Card className='appointment' style={{height:'11rem'}}>

 
 
    <Card.Body className='Info'>
    <h6>Date</h6>
    <h6>Patient Name</h6>
    <h6>Reason For Appointment</h6>
      <Button variant="danger" className="BTN">Delete</Button>
    </Card.Body>
    {/*  */}
    <Card.Body className='Info'>
    <h6>Date</h6>
    <h6>Patient Name</h6>
    <h6>Reason For Appointment</h6>
      <Button variant="danger" className="BTN">Delete</Button>
    </Card.Body>
{/*  */}
<Card.Body className='Info'>
    <h6>Date</h6>
    <h6>Patient Name</h6>
    <h6>Reason For Appointment</h6>
      <Button variant="danger" className="BTN">Delete</Button>
    </Card.Body>
{/*  */}

</Card>

</Container>

<br></br>
<br></br>
<br></br>
<Footer/>
 
</div>
);
}

export default Home;