const PORT = process.env.PORT || 3000;
const app = require("./app.js");




app.listen(PORT , ()=>{
    console.log(`Your server is running at ${PORT} .`)
})


