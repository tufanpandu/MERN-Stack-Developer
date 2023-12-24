require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors"); //For use cross platfrom connection
const connectToDB = require("./config/db.js");
const userRoute = require("./routes/userRoute.js");


//Express middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",userRoute);


//Initialize connection to DB.
connectToDB();

//ES6 have module export.
module.exports  = app;