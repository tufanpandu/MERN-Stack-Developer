/*
===============2. String Manipulation.============
Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
with the manipulated string or the new string to the console.

*/
//Logic of convert
function logString(str){
    return str.toUpperCase();
}
//return the logic funciton to the main function.
function manipulateString(str,logString){
      return `The manipulated string is : ${logString(str)} .`;
}


console.log(manipulateString("hello , tufan",logString));