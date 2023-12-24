const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    
  name: {
             type: String,
             require:[true, "Name is required"],
             trim:true,
             maxLength:[20, "Name must be lessthan 20 char."]
         },
   age: {
             type :Number,
             required:[true,'Only integer'],
        },
   username:{
         type:String,
         required:[true, "Username is required."],
         unique:true,

        }


})


module.exports = mongoose.model("User", userSchema);