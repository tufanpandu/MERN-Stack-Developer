
let btn = document.querySelector("button");

let heading = document.querySelector("h1");
heading.style.color = "yellow";
document.body.style.backgroundColor = "green";
btn.addEventListener("click" , function(){
     //alert(heading);
     if(heading.innerHTML === "The most affordable learning platform"){
        heading.innerHTML = "PW Skills";
        heading.style.color = "green";
        document.body.style.backgroundColor = "yellow";
     }else{
        heading.innerHTML = "The most affordable learning platform";
        heading.style.color = "yellow";
        document.body.style.backgroundColor = "green";
     }
} );


