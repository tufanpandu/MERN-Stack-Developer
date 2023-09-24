const generate = document.querySelector("#btn");
const message = document.querySelector(".message");
const inputTime = document.querySelector("#inputTime");
let countdown = document.querySelector("#countdown");


//function to generate a random number
function getRandomNum(){
  message.innerHTML = `Random Number: ${Math.floor(Math.random() * 101)}`;
};


  //display countdown funciton
  function displayCountdown(inputSec){
    countdown.style.visibility = "visible";
    countdown.textContent = `Time Remaining : ${inputSec} second`;
    inputSec--;

    if(inputSec >= 0 && inputSec <= 60){
        setTimeout(()=>{
            displayCountdown(inputSec);
        }, 1000);
    }else{
        getRandomNum();
        countdown.style.visibility = "hidden";
    }
}




//Random Number Generator 
function randomNumber(){
    //let second = `${inputTime.value}${'0'.repeat(3)}`
    let inputSec = parseInt(inputTime.value);

 if(!isNaN(inputSec) && inputSec >= 0 && inputSec <= 60){
    setTimeout(()=>{
        displayCountdown(inputSec);
    } ,2000);

 // Reset 
    message.innerHTML = "Generating...";
    inputTime.value ="";
 }else{
    message.innerHTML = "Please enter a valid time between 0 and 60 seconds.";
 }
}

generate.addEventListener("click", randomNumber);




