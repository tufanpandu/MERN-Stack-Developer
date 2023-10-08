/////REST  is ES6 morden method

//Arguments it's ES5 old method 
/// 1- Arguments are specal object which is present inside the array.
/// 2 - Arguments object ara not a regular array but it  behave like that it provide access to the argument provide into the function.
/// 3-  Arrow function don't have their own "arguments" object.

/// Array.from()
/// Array.from() is used for create new array from an iterabel object.
// function manyArguments(){
//    let args = Array.from(arguments);
//    let storArgs = args.forEach(el => el);
//    console.log(storArgs);
// }

function manyArguments(){
    let args = Array.from(arguments);
    
    console.log(args);
 }

manyArguments(1,2,4,5,6);



/// REST Example -1
function addNum(...other){
    let sum = 0
    other.map((el) =>  sum+=el);
    return sum;
}
console.log(addNum(4,5,8, 10))
console.log(addNum(2,3,4 ,10 , 20 ,50)) // you can add unlimited vlaue.

/// Example -2
function students(a , b , ...c){
    console.log(`${a} ${b} ${ c}`)
    console.log(`${a} ${b} ${c.length}`)
    console.log(c) // combine in array
}

students("Tufan", "Sai" , "Imran", "Nibedita", "Tina")


/////+++++++++++++++++++++++  Destructuring  +++++++++++++++
//Ex -1
let student = {
    name: "Tufan",
    age : 25,
    village : "Balipeta",
    pin : 765013
    
}
console.log(student)
console.log({...student , village:"Kakiriguma" , pin : 764014})

// Ex -2
const car  = ["Wagnor", "Fortuner" , "Honda"]
const [suzke , For , H] = car

console.log(suzke)
console.log(H)
console.log(For)
