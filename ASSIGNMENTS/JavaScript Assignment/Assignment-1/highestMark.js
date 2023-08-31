// Create an array
const mark = [42 ,50 , 95 , 35 , 55]

//Ternary Operator
// Approch -1
let highestMark =  Math.max(...mark);
console.log(" Highest mark -1" ,highestMark);

//approch -2 
//Array of Student marks
const marks = [85, 40 , 66,98 , 30]
let highestMarkOne = 0;
for(let i =0 ;i< marks.length;i++){
    highestMarkOne = marks[i] > highestMarkOne ? marks[i] : highestMarkOne ;  
}

console.log("Highest Marks One is  " , highestMarkOne);