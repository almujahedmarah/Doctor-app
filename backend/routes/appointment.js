const express = require("express");
const Appointment = require("../models/appointment").Appointment;
const router = require("express").Router();
const mongoose = require("mongoose");
router.use(express.json());

router.post("/", async (req, res) => {
  const newAppointment = req.body;
  Appointment.create(newAppointment, (err, appointments) => {
    if (appointments) {
      res.status(200).send(appointments);
    } else {
      res.status(500).send(err);
    }
  });
});


router.get("/", async (req, res) => {
  const id = req.params.id;
  Appointment.find({}, (err, Appointments) => {
    res.status(200).send(Appointments);
  });
});

router.put("/:id", async (req, res) => {
    const newAppointment = req.body;
    Appointment.updateOne({_id: req.params.id} ,newAppointment, (err, appointments) => {
      if (appointments) {
        res.status(200).send(appointments);
      } else {
        res.status(500).send(err);
      }
    });
  });
  
  //====================================================================


  router.delete("/:id", async (req, res) => {
    const newAppointment = req.body;
    Appointment.findByIdAndDelete( req.params.id , (err, appointments) => {
      if (appointments) {
        res.status(200).send(appointments);
      } else {
        res.status(500).send(err);
      }
    });
  });

module.exports = router;
