const express = require("express")
const app = express();
const PORT = 8000;
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const Appointment = require("./routes/appointment")
const Doctors = require("./routes/doctors")

async function main() {
  await mongoose.connect('mongodb+srv://user1:user2022@js.cj74d.mongodb.net/doctorApp?retryWrites=true&w=majority');
}
main().catch((err) => console.log(err));

app.use("/", Appointment)
app.use("/", Doctors)
app.use("/appointment", Appointment);
app.use("/doctorGet", Doctors)
app.use("/doctorAdd", Doctors)
app.use("/doctorUpdate", Doctors)
app.use("/doctorDelete", Doctors)



app.listen(PORT , (err) =>{
    if(err) console.log("ERROR" + err)
    console.log("listening on PORT" + PORT)
})


module.exports = app;