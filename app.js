const express = require("express")
const app = express();
const PORT =  process.env.PORT || 8000;
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
// const path = reqiure("path");
app.use(cors());
const mongoose = require("mongoose");

// ROUTERS IMPORTS
const Patient = require("./routes/patientRoute")
const Doctors = require("./routes/doctorsRoute")

// CONNECT WITH MONGODB
async function main() {
  await mongoose.connect(process.env.DB_URL);
}
main().catch((err) => console.log(err));

// USE ROUTERS WITH PATHS
app.use("/api/patient", Patient)
app.use("/api/doctor", Doctors)

// FOR DEPLOYMENT
app.use(express.static("doctor-app/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "doctor-app/build/index.html"));
});


app.listen(PORT , (err) =>{
    if(err) console.log("ERROR" + err)
    console.log("listening on PORT" + PORT)
})



module.exports = app;