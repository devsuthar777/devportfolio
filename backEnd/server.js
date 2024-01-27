// step1 create a folder
// step2 move into that folder
//step3 npm init -y
//step4 open folder using VScode
//step5 npm i express
//step6 create server.js

const express = require('express');
const app = express();
const cors = require('cors');
//const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
//importing routes
const recruiterRoute = require('./routes/recruiter');
app.use(express.json());
app.use(cors());

//mount  the recruiter route
app.use("/api/v1",recruiterRoute);


app.listen(PORT, () =>{
    console.log("server started successfully at "+PORT);
})


//connect to database
const dbConnect = require('./config/database');
dbConnect();

router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });


