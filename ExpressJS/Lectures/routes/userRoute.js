const express = require("express")

const {home , createUser , getUsers ,editUser, deleteUser} = require("../controllers/userController.js")

///create router
const route = express.Router()
route.get("/",home);
route.post("/createUser", createUser);
route.get("/getUsers", getUsers);
route.put("/editUser/:id", editUser );
route.delete("/deleteUser/:id",deleteUser);


module.exports = route;