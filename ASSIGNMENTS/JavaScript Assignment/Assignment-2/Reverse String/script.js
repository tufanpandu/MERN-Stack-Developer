
const reverse = document.querySelector("#btn");
//You can use any of one  approch which one you want's to use uncommet that function and comment all

//========== Approch -1 Using reduce() and split() ============== 
/**
 * -split() is used to  convert string into array of string
 * -reduce() method in JavaScript iterates through an array, applying a function to accumulate elements into a single result value
 */

function reverseStringOne(){
    const input = document.querySelector("#inputStr");
    if(input.value.trim() !== ""){
        let char = input.value.split('');
        let reverseChar = char.reduce((str, ch) => ch + str , "");
       const output = document.querySelector("#output");
       output.style.height = "fit-content";
       output.innerHTML = `Reverse string output is: <span class="ans">${reverseChar}</span>`;
      }

      //Reset the input value
      input.value = "";
    
   }

   reverse.addEventListener("click", () => {
     setTimeout(reverseStringOne ,2000);
    });


            
   //==== Approch -2  Using split() , reverse() and join() ================
   /**
    * -reverse():method don't take any parameter .It's reverse the array of element inplace means it's mutetates the original array
    * -toReversed() :method create another array  to give result and they don't mutete the original array.
    * -join() :It's take one parameter to join the elements of array and return string .If any parameter is not given then it's by default havae comma(",").
    */

   function reverseStringTwo(){
    const input = document.querySelector("#inputStr");
     if(input.value.trim() !== ""){
       const strToArr = input.value.split("");// convert to array
        const arrReverse = strToArr.reverse(); // Reverse the array
        const elementsJoin = arrReverse.join(""); //Convert to string
        const output = document.querySelector("#output");
        output.style.height = "fit-content";
        output.innerHTML = `Reverse string output is: <span class="ans">${elementsJoin}</span>`;
     }


     //Reset the input box
     input.value = "";

   }




/// =========== Approch -3 Using Spread Operator ==========


function reverseStringThree(){
  const input = document.querySelector("#inputStr");
  if(input.value.trim() !== ""){
    const convertToArr = [...input.value];
    const arrReverse = convertToArr.reverse(); // Reverse the array
    const elementsJoin = arrReverse.join(""); //Convert to string
    const output = document.querySelector("#output");
    output.style.height = "fit-content";
    output.innerHTML = `Reverse string output is: <span class="ans">${elementsJoin}</span>`;

  }

  //Reset the input boc
  input.value = "";
}


///================Approch-4 Using Array.form() and reverse() ==========


function reverseStringFour(){
  const input = document.querySelector("#inputStr");
  if(input.value.trim() !== ""){
    const convertToArr = Array.from(input.value);
    const arrReverse = convertToArr.reverse(); // Reverse the array.
    const elementsJoin = arrReverse.join(""); //Convert to string
    const output = document.querySelector("#output");
    output.style.height = "fit-content";
    output.innerHTML = `Reverse string output is: <span class="ans">${elementsJoin}</span>`;

  }

  //Reset the input boc
  input.value = "";
}


///=========Approch-5 Using Spread operato and reduce() method ===========


function reverseStringFive(){
  const input = document.querySelector("#inputStr");
  if(input.value.trim() !== ""){
    const convertToArr = [...input.value]; //Convert to array
    const arrReverse = convertToArr.reduce((newArr , ch) => ch + newArr); // Reverse the array and return string.
    const output = document.querySelector("#output");
    output.style.height = "fit-content";
    output.innerHTML = `Reverse string output is: <span class="ans">${arrReverse}</span>`;

  }

  //Reset the input boc
  input.value = "";
}


//========== Approch - 6 Using for loop ========


function reverseStringSix(){
  const input = document.querySelector("#inputStr");
  if(input.value.trim() !== ""){
     
     let result = ""
     for(let i = input.value.length-1; i >= 0;i--){
            result += input.value[i];
        }
    const output = document.querySelector("#output");
    output.style.height = "fit-content";
    output.innerHTML = `Reverse string output is: <span class="ans">${result}</span>`;

  }

  //Reset the input boc
  input.value = "";
}


///=======Approch -7 Using substring and decrementing index ======

function reverseStringSeven(){
  const input = document.querySelector("#inputStr");
  if(input.value.trim() !== ""){
     
     let result = ""

     let i = input.value.length;
     while( i >= 0){
       result += input.value.substring(i , i+1);
       i--;
     }
    
     console.log(result);
    
    const output = document.querySelector("#output");
    output.style.height = "fit-content";
    output.innerHTML = `Reverse string output is: <span class="ans">${result}</span>`;

  }

  //Reset the input box
  input.value = "";
}


///===== Approch - 8  Using recursion =============

// function reverseStringEight(){
//   const input = document.querySelector("#inputStr");
//   if(input.value.trim() !== ""){
     
//      let result = ""

   
//      console.log(result);
    
//     const output = document.querySelector("#output");
//     output.style.height = "fit-content";
//     output.innerHTML = `Reverse string output is: <span class="ans">${result}</span>`;

//   }

//   //Reset the input boc
//   input.value = "";
// }

