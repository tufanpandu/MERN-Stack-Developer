const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
     name :{
         type: String,
         require:[true, "Name is require"],
         trim:true
     },
     email:{
         type:String,
         require:[true, "Email is require."]
     },
     password:{
         type:String,
         require:[true, "Password is require"]
     }

})


module.exports = mongoose.model("User", userModel);