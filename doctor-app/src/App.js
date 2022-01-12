import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Sinup from './comp/Sinup';
import Home from './comp/Home';
import Doctorpag from './comp/Doctorpag';
import MyAppointment from "./comp/MyAppointment"
import HomeIcon from '@mui/icons-material/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='nav'>

  
<BrowserRouter>
<ul >
  <li>
  < Link  className="link"  to="/"><HomeIcon/></Link>
  </li>
  <li>
    <Link to="/doctor">Doctor</Link>
  </li>
  <li>
  <Link to="/MyAppointment">My Appointment</Link>
</li>
  <li>
    <Link to="/signin">SignIn</Link>
  </li>


  <li>
    <Link to="/signup">SignUp</Link>
  </li>
</ul>

<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/doctor" element={<Doctorpag />}></Route>
  <Route path="/MyAppointment" element={<MyAppointment />}></Route>
</Routes>
</BrowserRouter>
</div>

)
}

export default App;