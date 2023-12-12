const fs = require("fs");

fs.readFile("nodejs_architecture.txt", function(err,data){
    if(err){
          console.log("Not able to read file : " +  err);
    }else{
        console.log(data.toString());
    }
})