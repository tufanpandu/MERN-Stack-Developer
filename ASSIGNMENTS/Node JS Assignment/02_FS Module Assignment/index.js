const fs = require("fs");

// Synchronous and Asynchronous approch.

//==================== Asynchronous Non-Blocking ================
// fs.readFile("nodejs_architecture.txt", function(err, data){
//     if(err){
//         console.log("Not able to read the file.");
//     }

//     console.log(data.toString());
// });


//====================  Synchronous Blocking ====================

// let fsSync = fs.readFileSync("nodejs_architecture.txt");
//    console.log(fsSync.toString());



// =======  Reading =========================
const buf = Buffer.alloc(1050);
const str = "Node js is a programming language that utilizes both Javascript and C/C++ to create it's core component . Node js is a platfrom that utilize javascript and is highliy employed for devloping web application that are highly focused for input/Output operations, including but not limited to chat applications and multimedia streming websites. This platfrom is constructed using Google Chrome's V8 Javascript engene. A web applications is a type of software that execute on a server and is displayed by a clint browser that obtain all the operation's resources over the internet. "

fs.open("nodejs_architecture.txt" , "r+", function(err, fd){
     if(err){
        console.log("Not able to open the file. ");
     }
     console.log("Open foleder " + fd);
     fs.read(fd,buf,0,buf.length,0,function(er,byte){
          if(er){
            console.log("Not able to read the file" + er)
          }

          console.log(buf.subarray(0 , byte.length).toString());
     });
   fs.write(fd,str,function(e,bytes){
        if(e){
            console.log("Not able to write.")
        }
        console.log("Writen bytes " + bytes);
   });

});

