/*
============== Double using callback. =================
Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback.

*/


function double(num){
    return num *2; //double logic
}
function intDouble(intArr, double ){
    //let result = []; //Initialze the array
 return intArr.map((num)=>{ //You can directly return because map return new Array without modify the original array.
       return double(num);
  })
 
}

const intArr = [2,5,8,6];
console.log(intDouble(intArr,double))