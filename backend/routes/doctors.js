const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Doctors = require("../models/doctors.js");

router.use(express.urlencoded({extended: true}));
router.use(express.json());

async function main(){
    await mongoose.connect("mongodb+srv://user1:user2022@js.cj74d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

main().catch(err => console.log(err));

router.get("/getDoctors", (req, res) => {
    Doctors.find({}, (err, data) => {
        if(err) console.log(err);
        res.json(data);
        mongoose.connection.close;
    })
})


module.exports = router;