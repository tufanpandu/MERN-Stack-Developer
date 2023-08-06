
//This is the First Method How you can define Regular Expression.
const pattern = "Tufan"
const flag = "gi"
const regExOne =new RegExp(pattern , flag)
const content = "Tufan is best Full stack developer .Tufan have no Technical background  but tufan wants to do job on IT filed."
// Check Regular Expression
const resultOne = regExOne.test(content); 
console.log(resultOne); // This is return true or false.


//Second Method 
const regExTwo = /Tufan/g

//How to match the pattern
const resultTwo = content.match(regExTwo);
console.log(resultTwo);

// Replace Methos - which is most of time we use.
//inside the replace function give pattern and  change value.
const resultThree = content.replace(regExTwo, "Pandu")
console.log(resultThree);
//Best Application of replace(pattern , change value) 


let webUrl = "https://github.com/tufan%91pandu"
const resultFour = webUrl.replace(/%\d\d/g, "-")
console.log(resultFour);

