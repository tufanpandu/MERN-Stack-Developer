const express = require("express");
const app = express();


app.get("/random", (req,res)=>{
    let random = Math.floor(Math.random() * (100 - 1)+1);
    res.json({random:`${random}`});
})

app.listen(1010);