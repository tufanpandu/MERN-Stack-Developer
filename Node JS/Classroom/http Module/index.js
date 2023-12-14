const http = require("http");


// const server = http.createServer((req , res) => {
//      if(req.url == "/"){ //If end point is "/"
//         res.write("<h1>Hellow , Tufan ! </h1>"); // Write response
//      }else if(req.url == "/about"){
//          res.write("<h1> This is a About Page .</h1>");
//      }
//    res.end() // End the response

// })

// server.listen(5006); //Start server.

// console.log("My Server is sucessfully created. with 5006 ")



// ======================================================================================================

const PORT = 3030;
const hostName = "localhost";
const server = http.createServer((req,res) =>{
       //home page
       //about page
       //contact page
       //products page
       //rest....

       if(req.url == "/"){
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/plain");
                res.end("Welcome to Node JS server Home Page .")
       }else if(req.url == "/about"){
                res.statusCode = 200;
                res.setHeader("Content-Type" , "text/plain");
                res.end("You'r in About page");
       }else if(req.url == "/contact"){
                res.statusCode = 200;
                res.setHeader("Content-Type","text/plain");
                res.end("You'r in contact us page.");
       }else if(req.url == "/product"){
               const option = {
                 hostname:'fakestoreapi.com',
                 path: '/products/1',
                 method: "GET"
             };
             const apiRes = http.request(option,(apiRes)=>{
                apiRes.on("data",(data)=>{ // this apiRes is block scope
                  res.statusCode = 200 ;
                  res.setHeader("Content-Type","application/json") ;
                  res.end(data.toString());
                })
             });
             
             apiRes.on("Error" , (er)=>{
                 console.log(er);
             })
             
             apiRes.end();

             
       }else{
                res.statusCode = 500;
                res.setHeader("Content-Type", "text/plain");
                res.end('HTTP Server Showing Error !'); 
          }
 });

server.listen(PORT, ()=>{
  console.log(`We run this server in ${hostName}:${PORT}`);
})