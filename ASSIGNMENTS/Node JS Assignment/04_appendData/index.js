const fs = require("fs");
const data = "Compare to other server side languages, Node has distinct advantages. Its asynchronous models and non-blocking I/O operation improve the scalablity and performance of web application build in other frameworks. Node js can easly handle multiple clint request with out requiring multiple threads,consuming less memory and resourses.Additionaly, it is highly scalable and provide high profomance. Node js is also flexiable with multiple frameworks and make the devlopment process easier. ";
// Asynchronous approch

// fs.appendFile("nodejs_architecture.txt", data, "utf8",function(err){
//  if(err){
//     console.log(err);
//  }
// });


// Synchronous approch
fs.appendFileSync("nodejs_architecture.txt" , data , "utf8");




//Read the file

const info = fs.readFileSync("nodejs_architecture.txt");
console.log(info.toString());