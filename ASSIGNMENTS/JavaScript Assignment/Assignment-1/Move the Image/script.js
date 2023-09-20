const img = document.querySelector("#wing");

document.addEventListener("keyup" , function(event){
    if(event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "ArrowRight" && event.key !== "ArrowLeft"){
       // Reset the positon if non-arrow key is released.
        img.style.position = "unset";
        console.log(event.key + "KeyUP")
    }
       
})

document.addEventListener("keydown" , function(event){
    img.style.position = "absolute";
    console.log(event);
    if(event.key === "ArrowDown"){
        img.style.top = "unset";
        img.style.bottom = "0";
        img.style.left = "unset";
        img.style.right = "unset";
    }else if(event.key === "ArrowUp"){
        img.style.top = "0";
        img.style.left = "auto";
        img.style.right = "unset";
        img.style.bottom = "unset";
    }else  if(event.key === "ArrowRight"){
        img.style.left = "unset";
        img.style.bottom = "unset";
        img.style.right = "0";
        img.style.top = "auto";
    }else if(event.key === "ArrowLeft"){
        img.style.right = "unset";
        img.style.bottom = "unset";
        img.style.left = "0";
        img.style.top = "auto";
    }
})
