//Email
const btn = document.querySelector("input[type='button']");

btn.addEventListener("click", function(){
    let email = document.querySelector(".email");
    let pwd = document.querySelector(".pwd");
    let status = document.querySelector(".status");
    //check for email
    if(email.value.includes("@") || pwd.value.length >= 8){
     status.innerHTML = "Valid Email and Password !";
     status.style.color = "green";
    }else if(email.value == 0 && pwd.value == 0){
        status.innerHTML = " ";
    }else{
        status.innerHTML = "Invalid Email or Password !"
        status.style.color = "red";
    }
})