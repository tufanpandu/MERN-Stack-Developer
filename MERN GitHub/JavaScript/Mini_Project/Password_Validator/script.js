//catch the tags

const showStatus = document.getElementById("showStatus");
const submit = document.getElementById("submit");


/// Write Match function
function matchPwd(){

   const inputPwd = document.getElementById("pwd").value.trim();
const inputMatchPwd = document.getElementById("matchPwd").value.trim();
   // Check the box is empty or not 
   //If box is not empty
   if(inputPwd != 0 && inputMatchPwd != 0){
      //Check   both box have the value is strictly equal 
      if ( inputPwd === inputMatchPwd){
         showStatus.innerText = "Password Matched. Password validation Successful."
         showStatus.style.color = " #08ec14eb"
      }else {
         // for not equal 
         showStatus.innerText = "Password didn't match. Password validation unsuccessful"
         showStatus.style.color = "#ff0000"

      }
   }else{
      //Blank space
      showStatus.innerText = "Please don't leave Empty box."
      showStatus.style.color = "#00ffff"
   }
}

submit.addEventListener("click" , matchPwd)


