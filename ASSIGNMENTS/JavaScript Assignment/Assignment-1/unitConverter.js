/// ===== Unit converter  (Celsius to Fahrenheit) ========

function unitConverter(celsius){
    let Fahrenheit = celsius * 9/5 + 32;
    return Fahrenheit;
}
let celsius = 105;
console.log(celsius + "° Celsius is " + unitConverter(celsius) + "° Fahrenheit .");