const mongoose = require('mongoose');


 const appointmentSchema = new mongoose.Schema({
    date:{
        type: Date,
    },
    patientName:{
        type: String,
    },
    reasonForAppointment: {
        type: String,
    },
    doctorId:{
        type: String,
        required:true,
    }
},
{timestamps:true}
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = {Appointment}