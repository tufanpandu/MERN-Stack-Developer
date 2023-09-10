//all Box
const allBox = document.querySelectorAll(".box");
//Body
let body = document.querySelector("body");
//function for switch color
function switchColor(boxColor){
   if(boxColor == "rgb(255, 255, 0)"){
   body.style.backgroundColor = "rgb(255, 255, 0)";
   
  }else if(boxColor == "rgb(41, 253, 13)"){
    body.style.backgroundColor = "rgb(41, 253, 13)";
  }else if(boxColor == "rgb(255, 20, 224)"){
    body.style.backgroundColor = "rgb(255, 20, 224)";
  }else if(boxColor == "rgb(10, 10, 0)"){
    body.style.backgroundColor = "rgb(10, 10, 0)";
  } 
}
//Iterate over all boxes
allBox.forEach(function(box){
   let boxColor = getComputedStyle(box).backgroundColor;
 box.addEventListener("click",function(){
   switchColor(boxColor);
 });
})
