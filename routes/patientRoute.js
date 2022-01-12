const express = require("express");
const router = express.Router();
const randomstring = require("randomstring");
const patients = require("../models/patientModel");
const doctors = require("../models/doctorsModel");

router.use(express.json());

// ROUTER FOR REGISTER NEW PATIENT

router.post("/register", async (req, res) => {
  const { name, email, password, phoneNumber} = req.body;
  let emailExist = await patients.findOne({ email: email.toLowerCase() });

  if (emailExist) {
    res.send("E-mail is already used");
    return;
  }
  patients
    .create({
      name: name,
      email: email.toLowerCase(),
      password: password,
      phoneNumber: phoneNumber
    })
    .then(() => {
      res.send("done");
    })
    .catch((err) => {
      if (err) res.send("email is already used");
    });
});

// ROUTER FOR CHECK SIGN IN

router.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  let patientExist = await patients.findOne({ email: email.toLowerCase() });
  if (patientExist == null) {
    res.send("invalid email/password");
    return;
  }

  if (patientExist.password == password) {
    res.cookie("patientId", patientExist._id.toString());
    res.json(patientExist._id);
  } else {
    res.send("invalid email/password");
    return;
  }
});

// GET patient APPOINTMENT

router.get("/allAppointment/:patientId", async (req, res) => {
  const _id = req.params.patientId;
  const Appointments = await patients.findOne({ _id });
  res.send(Appointments);
});


// ADD APPOINTMENT

router.post("/addAppointment/:patientId/:doctorId", async (req, res) => {
  const { date,reasonForAppointment } = req.body;
  const AppointmentId = randomstring.generate({
    length: 12,
    charset: "alphabetic",
  });
  const d = await doctors.findById(req.params.doctorId);
  const p = await patients.findById(req.params.patientId);
  let patientAppointments = p.appointments;
  patientAppointments.push({
    date,
    doctorId: d._id,
    patientId: p._id,
    doctorName: d.name,
    patientName: p.name,
    reasonForAppointment,
    AppointmentId,
  });
  p.appointments = await patientAppointments;
  p.save();

  let doctorAppointments = d.appointments;
  doctorAppointments.push({
    date,
    doctorId: d._id,
    patientId: p._id,
    doctorName: d.name,
    patientName: p.name,
    reasonForAppointment,
    AppointmentId,
  });
  d.appointments = await doctorAppointments;
  d.save();

  res.send("added");
});

// DELETE APPOINTMENT

router.delete(
  "/deleteAppointment/:patientId/:doctorId/:appointmentId",
  async (req, res) => {
    const d = await doctors.findById(req.params.doctorId);
    const p = await patients.findById(req.params.patientId);
    const _id = req.params.appointmentId;
    let doctorAppointment = d.appointments;
    let patientAppointment = p.appointments;
    doctorAppointment = doctorAppointment.filter((e) => {
      return e.AppointmentId !== _id;
    });
    d.appointments = doctorAppointment;
    d.save();

    patientAppointment = patientAppointment.filter((e) => {
      return e.AppointmentId !== _id;
    });
    p.appointments = patientAppointment;
    p.save();

    res.send("deleted");
  }
);


module.exports = router;
