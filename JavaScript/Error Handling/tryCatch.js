/// Try ,Catch and finally
//It's helps for exceptional handling.
//Try is for tested the code 
// Catch is for excecute the code
//Finally is print no matter Error is have or not .
/**
 * ->Error are two types in javascript 
 * - (1) Syntax Error:- When you write not proper syntax then javascript interpretor is not able to compail code and throw error.
 * - (2) Runtime Error:- When execute a if variable or function are not found or undefined the throw the runtime error.
 * 
 * - Using Try Catch or finally method we handle Runtime Error and syntax error is by default javascript detect.
 */

try{
    console.log("Tufan") // it's not show any error
    console.log(middle) // I am not define any variabel show it's show error . Now go to the catch block
    console.log("Pandu") // it's not excitue . 
}catch{
    console.log("Chandra")
    console.log("Tufan Chandra pandu")
}finally{
    console.log("My name is Tufan Chandra Pandu");//
}