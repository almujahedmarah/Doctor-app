const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const appointmentModel = require("./appointmentModel");

const PatientSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a name"],
    },
    email: {
      type: String,
      required: [true, "please enter an email"],
      unique: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "please enter a Phone"],
    },
    password: {
      type: String,
      required: [true, "please enter an password"],
      minlength: [6, "enter more than 6"],
    },
    appointments: { type: [appointmentModel], default: [] },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("patient", PatientSchema);
module.exports = Patient;
