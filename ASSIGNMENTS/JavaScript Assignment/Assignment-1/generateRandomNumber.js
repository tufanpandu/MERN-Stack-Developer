//============ Generat a Random Number ==================
//IIFE (Immediately Invoke Function Expression)

// all time formula for geting random number in range
// Formula = Math.floor(Math.random() * (max - min + 1) + min);

((min , max)=>{
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(result);
})(5 ,10);