const express = require("express")
const app = express();
const PORT = 8000;
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const Appointment = require("./routes/appointment")
app.use("/appointment", Appointment);


async function main() {
    await mongoose.connect('mongodb+srv://user1:user2022@js.cj74d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
  }
  main().catch((err) => console.log(err));

app.listen(PORT , (err) =>{
    if(err) console.log("ERROR" + err)
    console.log("listening on PORT" + PORT)
})
