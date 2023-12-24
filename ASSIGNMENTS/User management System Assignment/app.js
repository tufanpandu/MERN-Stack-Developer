require("dotenv").config(); 
const express = require("express");
const app = express();
const connectDB = require("./config/db.js")
const route = require("./route/userRoute.js");


//Write middleweare

app.use(express.json()) // It's parse the incomeing requests into the JSON format.
app.use(express.urlencoded({extended:true})) // It's parse the incomeing requests into encoded URL
app.use("/" , route) //Any request to this route path can be handeled.


//call connection db
connectDB(); //Here we call the function to connect database.


module.exports = app;
