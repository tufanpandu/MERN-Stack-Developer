// Build a server using Http module Node JS with api endpoint for getting Product data.

const http = require("http");
const fs = require("fs");


// const content = fs.readFile("menProduct.json" , (err, data)=>{
//     if(err){
//      console.log(err)
//     }
//    console.log(data.toString());
// });








const server = http.createServer((req,res)=>{
     if(req.url == "/"){
         res.statusCode = 200;
         res.setHeader("content-type", "text/html");
         res.end("<h1>Welcome to men and Women Dummy Data.</h1>");
     }else if(req.url == "/men"){
        
         fs.readFile("menProduct.json" , (err, data)=>{
             if(err){
               res.statusCode = 404
               res.setHeader("content-type" , "text/plain");
               res.end("You get some error.");
             }
               res.statusCode = 200
               res.setHeader("content-type", "application/json")
               res.end(data);
         });  
     }else if(req.url == "/women"){
         res.statusCode = 200
         res.setHeader("content-type","application/json");
         let product = dummyProduct("Women", 10)
         res.end(JSON.stringify(product));
     }else{
        res.statusCode = 404
        res.setHeader("content-type", "text/plain")
        res.end("Page is not found !");
     }
});



const PORT = 5000;
server.listen(PORT, ()=>{
    console.log("you'r server is runing at : " + PORT);
})


const dummyProduct = (category, quantity)=>{
     let product = [];
    for(let i =1;i<= quantity;i++){
        const obj ={
            id: `${i}`,
            name:`${category} Tshirts`,
            brand:"Wrogn",
            Price: `${price()} Rupees`,
            category: `${category}`
        }
      product.push(obj);
    }

    return product;
}


const price = ()=>{
    return Math.floor(Math.random()* (500 - 150 ) + 150);
}


