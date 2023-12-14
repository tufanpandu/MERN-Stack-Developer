const http = require("http");

const option = {
    hostname:'fakestoreapi.com',
    path: '/products/1',
    method: "GET"
};
const apiRes = http.request(option,(res)=>{
   res.on("data",(data)=>{
    console.log(data.toString()); // without using toString() mehotd you get the buffer value.
   })
});

apiRes.on("Error" , (er)=>{
    console.log(er);
})

apiRes.end();

