/// Spread Operator
//Example - 1
const numOne = [1,2,3,4]
const numTwo = [5,6,7,8]

const resultOne = [...numOne , ...numTwo]
console.log(resultOne); // OutPUt [1,2,3,4,5,6,7,8]

// Example -2

const strOne = "Tufan"
console.log([...strOne]);  // Output should be ["T","u","f","a","n"]

// Another method
const strTwo = ["Tufan" , "Sai", "Kranti" , "Jyotsna"]
console.log(...strTwo)

//Example -3 for Object to array

const student = {
    name : "Tufan Pandu",
    village : "Balipet",
    pinCode : 764014
}
const contact = {
    cell : 7846897624,
    alter : 8658737005
}
const regester = {...student , ...contact}
console.log(regester);

