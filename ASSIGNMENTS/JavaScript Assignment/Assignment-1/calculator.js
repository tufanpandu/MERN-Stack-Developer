//Take two number
let numOne =10;
let numTwo = 2;
// Take operator for calculation
let operator = "*";


// switch statement
function calculator(numOne, numTwo , operator){
    let result = "";
    switch(operator){
         case "+":  result = numOne + numTwo;
            break;
         case "-":  result = numOne - numTwo;  
         break;
         case "*":  result = numOne * numTwo;
         break;
         case "/": result = numOne / numTwo;
         break;
         default: result = "Not a valid Operator"
                   
    }
  return result;
}
console.log(calculator(10 , 20 , "+"));
console.log(calculator(40, 25 , "-"));
console.log(calculator(5, 25 , "*"));
console.log(calculator(140 , 20, "/"));
console.log(calculator(20 , 50 , "%"));