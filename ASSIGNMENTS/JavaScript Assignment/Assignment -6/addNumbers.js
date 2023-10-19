/* 
  - In javascript Hoisting is an behavior. where using variable and function before declaration is called hoisting..
*/
console.log(addNumber(5, 10));
function addNumber(num1, num2){
    return num1 + num2;
}

console.log(addNumber(5, 10));