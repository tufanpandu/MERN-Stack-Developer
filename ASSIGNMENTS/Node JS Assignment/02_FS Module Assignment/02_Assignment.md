# We create a index.js js file and nodejs_architecture file in same folder and added information about nodejs Architecture.

**Step - 1**
For create file and write the node.js architecture information into an nodejs_architecture.txt file.

```node.js

const fs = require("fs");

// =======  Reading =========================


const buf = Buffer.alloc(1050);
const str = "Node js is a programming language that utilizes both Javascript and C/C++ to create it's core component . Node js is a platfrom that utilize javascript and is highliy employed for devloping web application that are highly focused for input/Output operations, including but not limited to chat applications and multimedia streming websites. This platfrom is constructed using Google Chrome's V8 Javascript engene. A web applications is a type of software that execute on a server and is displayed by a clint browser that obtain all the operation's resources over the internet."

fs.open("nodejs_architecture.txt" , "r+", function(err, fd){
     if(err){
        console.log("Not able to open the file. ");
     }
     console.log("Open foleder " + fd);

   fs.write(fd,str,function(e,bytes){
        if(e){
            console.log("Not able to write.")
        }
        console.log("Writen bytes " + bytes);
   });

});

```
