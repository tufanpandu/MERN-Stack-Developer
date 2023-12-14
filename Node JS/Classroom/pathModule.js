const path = require("path");
// console.log(path.sep);
// console.log(process.env.PATH);
// console.log(path.delimiter);

const currFilePath = __filename;
console.log(currFilePath); // Full Path name
console.log(__dirname); // Directory name
console.log(path.basename(__filename)); // BaseName

console.log(path.basename(__filename, ".js")); // Without extension name.

console.log(path.extname(__filename)); //Extention name

console.log(path.format({
    dir: "PW skills/Node Js/",
    base: "index.js"
})); // Combain the directory and base  .

console.log(path.isAbsolute(__filename)); // Absolute means start from  c:/ drive  
console.log(path.isAbsolute("../NodeJs/index.js")); //It's not an absolute path . It is relative path.

console.log(path.isAbsolute("/index.js")); // Absolute because it's start with directory and not relative.

console.log(path.join("/pwskills", "nodejs", "index.js"));  // Join all the string combainly.


console.log(path.parse(__filename)); // break the full path .

console.log(path.relative("/pwskills/mern/nodejs","/pwskills/mern/index.js")); // ..\index.js   find the relative path.

console.log(path.resolve()); // like my dir method

console.log(path.normalize("//pwskills//nodejs/// index.js")); // It's normalize the path it's remove the unnessesery  slash forword or backword slash.