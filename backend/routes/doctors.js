const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Doctors = require("../models/doctors.js");

router.use(express.urlencoded({extended: true}));
router.use(express.json());


router.get('/', (req, res) => {
    res.send("You cannot access this page")
})

router.get("/doctorGet", (req, res) => {
    Doctors.find({}, (err, data) => {
        if(err) console.log(err);
        res.send(data);
        mongoose.connection.close;
    })
})

router.get("/doctorAdd", (req, res) => {
    Doctors.create({
        _id: req.body.id,
        name: req.body.name,
        speciality: req.body.speciality,
    }, (err, res) => {
        if(err) console.log(err);
        mongoose.connection.close;
    })
})

router.get("/doctorUpdate", (req, res) => {
    Doctors.updateOne({_id: req.body.id}, 
        {
            name: req.body.name,
            speciality: req.body.speciality
        }, (err, res) => {
            if(err) console.log(err);
            mongoose.connection.close;
        })
})

router.get("/doctorDelete", (req, res) => {
    Doctors.deleteOne({_id: req.body.id}, (err, res) => {
        if(err) console.log(err);
        mongoose.connection.close;
        })
})


module.exports = router;