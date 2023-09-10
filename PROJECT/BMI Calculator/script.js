
//Calculate button
const form = document.querySelector("form");
const btn =document.querySelector("button");

//add click evernt
btn.addEventListener("click", function(element){
 //Select weight
const weight = parseInt(document.querySelector("#weight").value);
//height
const height = parseInt(document.querySelector("#height").value);
//result =
const result = document.querySelector(".result");
//check conditon
 if(weight === " " || isNaN(weight) || weight < 0){
  result.innerHTML = `Please enter valid Weight ${weight}`;
 }else if(height === " " || isNaN(height) || height < 0){
    result.innerHTML = `Please enter valid Height ${height}`;
 }else{
    let bmi =( weight/((height*height) / 10000)).toFixed(2);
    result.innerText = `Your BMI is : ${bmi}`;
    const overview = document.querySelectorAll(".info");
    
     if(bmi < 18.6){
       overview[0].style.backgroundColor = "Green";
     }else if(bmi >= 18.5 || bmi <=24.9){
        overview[1].style.backgroundColor = "Green";
     }else{
        overview[2].style.backgroundColor = "Green";
     }

    }

});

