// Using static method add two Numbers with calculator class 
class Calculator{
  
     //Static method
     static add(num1 ,num2){
        return num1 + num2;
     }
}

//Instantion
//const sum = new Calculator();
 // console.log(sum.add(5,8)); // Static method can not directly acesses.
let result = Calculator.add(76 , 34);
console.log(result);
console.log(Calculator.add(10, 25));