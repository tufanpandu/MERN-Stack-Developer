/////REST

//Arguments
/// 1- Arguments are specal object which is present inside the array.
/// 2 - Arguments object ara not a regular array but it  behave like that it provide access to the argument provide into the function.
/// 3-  Arrow function don't have their own "arguments" object.

/// Array.from()
/// Array.from( ) is used for create new array frome an iterabel object.
// function manyArguments(){
//    let args = Array.from(arguments);
//    let storArgs = args.forEach(el => el);
//    console.log(storArgs);
// }

function manyArguments(){
    let args = Array.from(arguments);
    
    console.log(args);
 }

manyArguments(1,2,4,5,6);



/// REST Example -1
