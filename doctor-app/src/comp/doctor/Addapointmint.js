import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Addapointmint() {
  const [add, setadd] = useState({});
  const [Date, setDate] = useState();
  const [Name, setName] = useState();
  const [Reason, setReason] = useState();
  const navigate= useNavigate()

  const Adddata = (e) => {
    e.preventDefault();

    let Date = e.target[0].value;
    let Name = e.target[1].value;
    let Reason = e.target[2].value;
    console.log(e);

    axios
      .post("http://localhost:8000/appointment/", {
        date: Date,
        patientName: Name,
        reasonForAppointment: Reason,
      })
      .then((res) => {
        console.log(res.data);
        setadd(res.data);
      });
      navigate(`/Doctorpag`);
  };

  return (
    <div className="addandedetepage">
      <div>
        <form
          onSubmit={(e) => {
            Adddata(e);
          }}
          className="addpro"
        >
          <label>Date</label>
          <input type="text" />
          <label>Full Name</label>
          <input type="text" />
          <label>Reason</label>
          <input type="text" />
          <button className="singup" type="submit">
            Added
          </button>
        </form>
      </div>
    </div>
  );
}
