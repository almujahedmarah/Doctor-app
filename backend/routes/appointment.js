const express = require("express");
const Appointment = require("../models/appointment").Appointment;
const router = require("express").Router()
const mongoose = require("mongoose");


router.post("/", async (req, res) => {
    const newAppointment = new Appointment(req.body);
  
    try {
      const savedAppointment = await newAppointment.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  module.exports = router;