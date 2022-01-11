import './App.css';
import Navbar from './comp/Navbar';
import Sinup from './comp/doctor/Sinup'
import Login from './comp/doctor/Login';
import Home from './comp/Home'
import Doctorpag from './comp/doctor/Doctorpag';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route exact="true" path="/" element={<Home />}></Route>
       {/* <Route path="/Sinup" element={<Sinup />}></Route>
       <Route path="/Login" element={<Login />}></Route> */}
       <Route path="/Doctorpag" element={<Doctorpag />}></Route>
      </Routes>
      </div>
)
}

export default App;