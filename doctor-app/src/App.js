import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Sinup from './comp/Sinup';
import Login from './comp/Login';
import Home from './comp/Home';
import Doctorpag from './comp/Doctorpag';
import MyAppointment from "./comp/MyAppointment"
import HomeIcon from '@mui/icons-material/Home';
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DrSingin from './comp/DrSingin'

function App() {
  return (
    <div>

<BrowserRouter>
{/* <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home"> < Link  className="link"  to="/"><HomeIcon/></Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">    <Link to="/doctor">Doctor</Link></Nav.Link>
      <Nav.Link href="#features">  <Link to="/MyAppointment">My Appointment</Link></Nav.Link>
      <Nav.Link href="#pricing">    <Link to="/signin">SignIn</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}
{/* ================================= */}
<ul>
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
  <li>
    <Link to="/DrSingin"><AdminPanelSettingsIcon /></Link>
  </li>
</ul>

<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/doctor" element={<Doctorpag />}></Route>
  <Route path="/MyAppointment" element={<MyAppointment />}></Route>
  <Route path="/signin" element={<Login />}></Route>
  <Route path="/signup" element={<Sinup />}></Route>
  <Route path="/DrSingin" element={<DrSingin />}></Route>
</Routes>
</BrowserRouter>
</div>

)
}

export default App;