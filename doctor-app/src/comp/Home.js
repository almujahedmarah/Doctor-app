import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {useState,useEffect} from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


function Home() {
  const [show, setShow] = useState(false);
  const [drname,setdrname] = useState()
  const navigate= useNavigate()
  const [es, setEs] = useState()
  const [dr, setdr] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updatePage = () => {
    axios
      .get('doctor')
      .then((res)=>{
        console.log(res.data);
        setdr(res.data)
      })
      .catch((error) => {
        console.log(error.res);
      });
  };
  

  useEffect(() => {
    console.log('res');
    axios.get("/doctor")
    .then((res)=>{
      console.log(res.data);
      setdr(res.data)
    })
  }, [])

  const addDr=(e)=>{
    e.preventDefault();

    let Name = e.target[0].value;
    let spa = e.target[1].value;
    let id = e.target[2].value;

    axios.post("/doctor", {name:Name,speciality:spa, _id: id})
    .then((res)=>{
      console.log(res.data);
      updatePage();

    })
    setShow(false)
  }
  const deletitem =(_id)=>{
    axios.delete(`http://localhost:8000/doctor/${_id}`)
    .then( async (res)=>{
      console.log(res.data);
      updatePage();
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

<Footer/>
 
</div>
);
}

export default Home;