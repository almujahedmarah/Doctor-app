const mongoose = require('mongoose');


 const appointmentSchema = new mongoose.Schema({
    date:{
        type: String,
    },
    patientName:{
        type: String,
    },
    reasonForAppointment: {
        type: String,
    },
    doctorId:{
        type: String,
    }
},
{timestamps:true}
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = {Appointment}