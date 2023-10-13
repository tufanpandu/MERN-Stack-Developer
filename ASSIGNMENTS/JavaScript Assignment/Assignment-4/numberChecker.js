//============ Check the presence using Closures ==============


// Define a function called numberChecker that takes an array 'arr' as an argument
function numberChecker(arr) {
   // Return a function named 'hasNum' that takes a parameter 'num'
   return function hasNum(num) {
       // Check if the 'arr' includes the 'num'
       if (arr.includes(num)) {
         // If 'num' is found in 'arr', return true
         return true;
       } else {
         // If 'num' is not found in 'arr', return false
         return false;
       }
   }
}
