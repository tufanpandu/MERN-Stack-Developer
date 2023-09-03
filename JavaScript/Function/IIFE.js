//======= Immediately invoke function Expression (IIFE) ==================

/**
 * ✅ IIFE function excecute immediately when it defien.
 * ✅Avoid Poluting global variable .
 * ✅If you write TWO IIFE function one by one then don"t forget to give semicolon ";".
 * ✅ In IIFE function we don't need to call the function.
 */

//Naming IIFE 
(function student(){
    console.log("Tufan Ch. Pandu");
})();

//Two IIFE one by one so for avoiding error add ";" to the top function.

//normal IIFE

(()=>{
    console.log("Normal IIFE using Arrow Funciton");
})();

//Pass parameter and argument  like normal funcion

(function chai(name){
    console.log("My fav  Tea is "+name)
})("Red Lebael")

