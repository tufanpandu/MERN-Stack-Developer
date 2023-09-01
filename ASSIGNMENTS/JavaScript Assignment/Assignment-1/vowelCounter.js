// vowels
let vowel = ["a","e","i","o","u"]
let input = "tufan chandra pandu"
let count = 0;
const vowelCount = function(input){
    for(let i =0 ;i< input.length;i++){
        let ch = input.charAt(i)
        for(let j =0 ;j< vowel.length;j++){
           if(ch == vowel[j]){
            count++;
           }
        }
    }

    return count;
}

console.log(vowelCount(input));


///============== Using match() method and regular expression ===================
// match() method returns array
let inputOne ="Tufan Chandraa Pandu"
let pattern = /[aeiou]/gi

const vowelCountOne = function(input){
    let result = input.match(pattern)
    //return result ? result.length : 0
   return result.length;
    
}

console.log(vowelCountOne(inputOne))