const mongoose = require("mongoose");

//Create a connection with mongoDB
const connectDB = async()=>{
     
    mongoose.connect(process.env.MONGODB_URI)
    .then((conn)=>{
        console.log(`Your database is connection successfull with ${conn.connection.host}`);
    }).catch((error)=>{
        console.log("ERROR", error);
        process.exit(1);
    })
}

module.exports = connectDB;