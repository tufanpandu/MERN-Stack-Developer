const mongoose = require("mongoose"); //Mongoose module is imported


//Create connection with atls mongodb
const connectToDb =  async ()=>{ // Asyn function wait while connection is either successfulle or not.
    mongoose.connect(process.env.MONGODB_URI)
    .then((conn)=>{
         console.log(`Connection DB is Sucessfully ${conn.connection.host}`);
    }).catch((err)=>{
        console.error("ERROR", err);
        process.exit(1)
    })
}

module.exports = connectToDb;