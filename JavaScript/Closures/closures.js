//==================================👉 Lexical Scoping // Closure👈================================================
//Defination :- Closure in javascript allows an inner function to remembar it's outer function variable even after complete the code excetions.
// closure use case is create private variable and function.
//Closure : It is an inner function that has access to the outer function's variables and parameters.

///==== Example -1 =====

/**
 * - In this below example  nested function can access outer variable .
 * - But inside the nested function variable can't be access by outer function.
 * (Chote bache bado se ice creame le sakte hai but Bado chote bache se ice creame nehi le sakte.)
 */
function school(){
    let room = "Office , classroom"
    function office(){
        let godrej = "Govt files are avilable"
        console.log(room);
    }
  console.log(godrej);
  return office();
}

school();