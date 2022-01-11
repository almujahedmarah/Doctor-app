const mongoose = require("mongoose");

const DoctorsSchema = mongoose.Schema({
    name: {type: "string", required: "Doctor name should be provided"},
    speciality: {type: "string", reuqired: "Doctor speciality should be provided"},
    picture: {type: "string" }, 
    appointments: {type: [AppointmentsSchema]}
})

const Doctors = mongoose.model("Doctors", DoctorsSchema);


module.exports = Doctors;