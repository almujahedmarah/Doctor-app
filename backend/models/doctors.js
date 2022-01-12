const mongoose = require("mongoose");

const DoctorsSchema = mongoose.Schema({
    _id: {type: "number", required: "ID should be provided"},
    username: {type: "string", required: "Username should be provided"},
    password: {type: "string", required: "Password should be provided"},
    name: {type: "string", required: "Doctor name should be provided"},
    speciality: {type: "string", required: "Doctor speciality should be provided"},
    picture: {type: "string" }
})

const Doctors = mongoose.model("Doctors", DoctorsSchema);

module.exports = Doctors;
