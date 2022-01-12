const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Doctors = require("../models/doctors.js");

router.use(express.urlencoded({extended: true}));
router.use(express.json());


router.get('/', (req, res) => {
    Doctors.find({}, (err, data) => {
        if(err) console.log(err);
        res.send(data);
        mongoose.connection.close;
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    Doctors.find({_id: id}, (err, data) => {
        if(err) console.log(err);
        res.send(data);
        mongoose.connection.close;
    })
})

router.post("/", (req, res) => {
    const newDoctor = req.body;
    Doctors.create(newDoctor, (err, res) => {
        if(err) console.log(err);
        mongoose.connection.close;
    })
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const updatedDoctor = req.body;
    Doctors.updateOne({_id: id}, updatedDoctor, (err, res) => {
            if(err) console.log(err);
            mongoose.connection.close;
        })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Doctors.deleteOne({_id: id}, (err, res) => {
        if(err) console.log(err);
        mongoose.connection.close;
        })
})



module.exports = router;