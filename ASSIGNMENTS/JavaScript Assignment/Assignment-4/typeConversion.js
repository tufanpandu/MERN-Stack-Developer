// ============ Type Conversion ==================
// Method - 1
function convertToNumber(str){
   try{
     let num = Number(str); // convert to number
     if(Number.isNaN(num)){ // If Number is not  number 
        throw new Error("INVALID NUMBER"); //We create this error message.
     }
     return num; // return Number
   }catch(error){
     return error.message; // Return Error Massage
   }
  
}

console.log(convertToNumber("125"));
console.log(convertToNumber("tufan"));

// Method - 2

function convertToNumberOne(str){
  try{
     let num = parseInt(str); // convert into number.
     if(isNaN(num)){
       throw new Error("Invalid NUMBER ONE");
      }
       return num;
     
  }catch(error){
    return error.message;
  }
}

console.log(convertToNumberOne("12587"));
console.log(convertToNumberOne("tufan"));

