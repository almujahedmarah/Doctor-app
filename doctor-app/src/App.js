import './App.css';
import Navbar from './comp/Navbar';
import Sinup from './comp/doctor/Sinup'
import Login from './comp/doctor/Login';
import Home from './comp/Home'
import Doctorpag from './comp/doctor/Doctorpag';
import Edit from './comp/doctor/Edit'
import Addapointmint from './comp/doctor/Addapointmint'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route exact="true" path="/" element={<Home />}></Route>
       <Route path="/Doctorpag" element={<Doctorpag />}></Route>
       <Route path="/Edit" element={<Edit />}></Route>
       <Route path="/Addapointmint" element={<Addapointmint />}></Route>
      </Routes>
      </div>
)
}

export default App;