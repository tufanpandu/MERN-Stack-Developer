///====================== Callback ==================

/**
 * -In Example -1  function we give string as argument but Like this you also can pass function as argument to anothor function that's why called callback function.
 *  --
 */
//==== Notes ======
/**
 * ✅--Callback function is a function which is passed as argument to another function in this process function can call another function.
 * ✅-- Using callback function if we want to wait for execute previous function then execute next function that can possible using callback function.
 * ✅-- Using callback we can execute function syncronosly.
 * ✅-- It's helpfull wait for coming result then do next task . EX-1 if some data is coming form sorver because it's take time for arrival we want to wait.
 */

//====Example - 1 ========
//function
function myName(name , callback){
    console.log(name + " ");
    callback();
}
// callback function
function age(){
    console.log("My age is 24 callback function")
}
//passing function as arguments.
myName("Tufan" , age);