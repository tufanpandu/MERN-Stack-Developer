const app = require("./app.js");
const PORT = process.env.PORT || 5000; //If you get port at .env file then run with this or run with 5000 .





//listen app.js server
app.listen(PORT, ()=>{
    console.log(`Your server is running at ${PORT}`)
})