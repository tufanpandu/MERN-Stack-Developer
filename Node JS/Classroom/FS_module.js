const { log } = require("console");
const fs = require("fs");

/*
console.log("START");
//Asynchronous module
fs.readFile("text.txt" , function(err , data){
    if(err){
         console.log("Can't read the file.");
    }
   console.log("END");
    console.log(data.toString());
});

console.log("OTHER STEP");

*/

/*

// Synchronous modules
console.log('START');
 let result = fs.readFileSync("text.txt");
 console.log(result.toString());
console.log('END');
*/





let buf = Buffer.alloc(1045); // it's store in byte form.
console.log(buf);

fs.open("text.txt",'r+', function(err, fd){
    if(err){
        console.log("Geting some error while open file" + err)
    }
    console.log("File is successfully open.");

    fs.read(fd,buf, 0 , buf.length, 0,function(er, byte){
      if(er){
        console.log("Getting issues on while reading file " + er);
      }
      console.log("File is successfully read.");
      console.log("DATA :" + buf.subarray(0,byte.length).toString());
    })
});








