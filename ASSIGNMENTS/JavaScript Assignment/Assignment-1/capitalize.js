// Capitalize the name first later

// === Ex - 1  using replase() method========
//create a function getFullName()
const getFullName = function(name){
    // check the name string first later is uppercase or not using ternary operator
    //case -1 : if name first char is lower case then return update to upper case and return .
    //Case - 2: if not then return name as it is.
    let result = name.charAt(0) === name.charAt(0).toLowerCase() ? name.replace(name.charAt(0),name.charAt(0).toUpperCase()) : name 

    return result;
}
console.log(getFullName("tufan"))
console.log(getFullName("imran"))
let output = getFullName("pandu")
console.log(output);

/// =======  Ex - 2 using slice() method =============

function getName(name){
    return name.charAt(0) === name.charAt(0).toLowerCase() ? name.charAt(0).toUpperCase() + name.slice(1) : name;
}
console.log("Example -2 " + getName("pankaj"))