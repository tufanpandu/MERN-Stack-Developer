const express = require("express");
const app = express();


let counter = 0;
app.get("/", (req,res) =>{
        counter = 0;
        res.send(`counter : ${counter}`);
})

app.get("/increment", (req, res)=>{
        counter++;
        res.send(`counter : ${counter}`);
})
app.get("/decrement",(req,res)=>{
        counter--;
        res.send(`counter : ${counter}`);
})

app.get("*", (req,res)=>{
    res.status(404).send("404- Page is not found.")
});



const hostName = "localhost"
const PORT = 4000;

app.listen(PORT, ()=>{
    console.log(`Your server is running at this port ${hostName}:${PORT}`);
})

