//Catch the elements 
const inputPwd = document.getElementById("pwd");
const inputMatchPwd = document.getElementById("matchPwd") ;
const showStatus = document.getElementById("showStatus");
const submit = document.getElementById("submit");




// Check the condition passward  is match or not
 function matchPwd(){
    if(inputPwd.value === inputMatchPwd.value){
       showStatus.innerText = "Password Matched, Password validation Successful";
    }else{
        showStatus.innerText ="Password didn't match. Password validation unsuccessful.";
    }
 }
submit.addEventListener("click", matchPwd() );



