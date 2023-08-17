//==================================👉 Lexical Scoping // Closure👈================================================


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