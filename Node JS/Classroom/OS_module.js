const os = require("os");

console.log("CPU Architecture:  " + os.arch()); //Return OS CPU Architecture.

console.log("Free Memory : " + os.freemem());

console.log("Total Memory : "+ os.totalmem());

console.log("Network Interfases: " + JSON.stringify(os.networkInterfaces())); // JSON.stringify() method on fold the object.

console.log("Operating System default  directory : " +  os.tmpdir());


console.log("Endianness :  " + os.endianness());

console.log("OS hostname : " + os.hostname());

console.log("OS Type : " + os.type());
console.log("OS Platform: " + os.platform());

console.log("OS Release : " + os.release());