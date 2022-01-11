

import './CSS/home.css'
import { Card ,Container,Button} from 'react-bootstrap';

function Home() {
    return ( <>
    
 

<div className='parent'>

<div className='partone'>
    <h1 className='title'>Doctor App</h1>

    <button className='singup' >Get Start</button>
</div>

<div className='parttwo'>

 
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
<div><h1>Footer</h1></div>
 
 

    </> );
}

export default Home;