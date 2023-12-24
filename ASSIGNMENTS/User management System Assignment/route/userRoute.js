const express = require("express");
// require controller
const {users , register, login} = require("../controller/userController.js");


//Create Router
const route = express.Router()

route.get("/users", users );
route.post("/register", register);
route.post("/login" ,login);



module.exports = route;



