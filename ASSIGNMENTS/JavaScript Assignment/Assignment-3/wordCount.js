/**
 * /// count the occurrances of word
 * 
 * @param {largeText} Variable for take input string .
 * @param {wordCount} Function for count occurrances for word.
 * - Create Map() data Structure for store key value pair as word and count.
 * @param {largeText.split()} divide the string using pattern and put into the array.
 * @param {for (const word of words) {}} iterate on word of words.
 * - Clean the word with Punctions mark and convert into lowerCase for avoid case sencitive issue.
 * @param {cleanWord != ""} Not equal to empty then you have a valid word.
 * - If valid word then first set the key value into Map() 
 * @param {wordMap.set(cleanWord , wordMap.has(cleanWord) ? wordMap.get(cleanWord) +1 : 1);} pass key word and set value with using some condition . In this case we use Ternary Operator . 
 * - First check word is alredy present in the map or not  if true the which word is present get() the value and update the count as 1 or if false not present then set the word and update count with value 1.
 * 
 * @returns {wordCount} Finaly return wordCount Map().
 * 
 */




const largeText = "This logic allows you to count the occurrences of each word in a given string efficiently. It's a fundamental task in text processing and can be a good starting point for new coders to understand string manipulation and working with data structures like Maps in JavaScript";

//Word count generator

function wordCount(largeText){
    let wordMap = new Map();
   let words = largeText.split(" ");

   for(let word of words){
      let cleanWord = word.replace(/[.,?!]/g , "").toLowerCase(); 
      if(cleanWord != ""){ // if not empty word 
          wordMap.set(cleanWord , wordMap.has(cleanWord) ? wordMap.get(cleanWord) +1 : 1);
      }
   }
return wordMap; // return map.
}

for(let [word , count] of wordCount(largeText)){
    console.log(`${word} ${count}`);
}











