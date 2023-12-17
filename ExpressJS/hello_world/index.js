const express = require("express");


const app = express();
const PORT = 2000;
const hostName = "localhost";

app.get("/" , (req, res)=>{
    res.send("Hello Tufan !");
})

app.get("/about", (req,res)=>{
    res.send("You'r in About page");
})
app.get("/contact", (req, res)=>{
    res.send("You'r in contact us page .");
})

app.listen(PORT, (req, res) =>{
    console.log(`This server is running at this port ${hostName}:${PORT}`);
})
