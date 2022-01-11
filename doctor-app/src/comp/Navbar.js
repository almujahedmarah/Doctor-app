import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Sinup from './doctor/Sinup';
import Home from './Home'
import HomeIcon from '@mui/icons-material/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='nav'>
              <ul>
                {/* < Link  className="link"  to="/Sinup">{id ==undefined?<LoginIcon/>:< LogoutIcon onClick={logout}/>}</Link> */}
                {/* < Link  className="link"  to="/Sinup"><LoginIcon/></Link> */}
                < Link  className="link"  to="/Home"><HomeIcon/></Link>
                < Link  className="link"  to="/Doctorpag">DD</Link>
                
            </ul>
        </div>
    )
}

export default Navbar;