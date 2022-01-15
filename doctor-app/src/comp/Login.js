import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  function signIn(e) {
    axios.post("/api/patient/signIn", userData).then((res) => {
                if (res.data === "invalid email/password") {
                  setErrorMessage("invalid email/password");
                } else {
                  navigate("/doctor");
                }
              });
    //   if(e == patient){
    //     axios.post("/api/patient/signIn", userData).then((res) => {
    //         if (res.data === "invalid email/password") {
    //           setErrorMessage("invalid email/password");
    //         } else {
    //           navigate("/doctor");
    //         }
    //       });
    //   }else{
    //     axios.post("/api/doctor/signIn", userData)
    //     .then((res)=>{
    //         if (res.data === "invalid email/password"){
    //             setErrorMessage("invalid email/password"); 
    //         }else {
    //             navigate("/doctor");
    //           }
    //     })
    //   }
  }

//   axios.post("/api/patient/signIn", userData).then((res) => {
//     if (res.data === "invalid email/password") {
//       setErrorMessage("invalid email/password");
//     } else {
//         axios.post("/api/doctor/signIn", userData).then((res) => {
//             if (res.data === "invalid email/password") {
//               setErrorMessage("invalid email/password"); 
//     }
  return (
    <div className="logsinup">
      <div className="sup-main">
        <div className="input">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            <h2>Login</h2>
            <div className="oo">
              {errorMessage !== "" ? <p>{errorMessage}</p> : null}
              <div>
                <input
                  className="input"
                  type="email"
                  placeholder="email"
                  className="name"
                  onChange={(e) => {
                    userData.email = e.target.value;
                    setUserData(userData);
                  }}
                />
              </div>
              <div className="s-input">
                <input
                  className="input"
                  type="password"
                  placeholder="password"
                  className="name"
                  onChange={(e) => {
                    userData.password = e.target.value;
                    setUserData(userData);
                  }}
                />
              </div>
              {/* ============================================================= */}
              <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                  onChange={(e)=>signIn(e.target.value)}
                    value="Doctor"
                    control={<Radio />}
                    label="Doctor"
                  />
                  <FormControlLabel
                  onChange={(e)=>signIn(e.target.value)}
                    value="patient"
                    control={<Radio />}
                    label="patient"
                  />
                
             
                </RadioGroup>
              </FormControl>
              {/* ============================================================= */}
            </div>
            <button className="singup" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <img
        width="500px"
        src="https://media.istockphoto.com/vectors/online-doctor-women-healthcare-concept-icon-set-doctor-videocalling-vector-id1222425820?k=20&m=1222425820&s=612x612&w=0&h=PUeDd8QbdtUbyUCAga2tftMeIqFgDcjiYdRLURGWpQs="
      />
    </div>
  );
}
