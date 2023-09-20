const img = document.querySelector("#wing");
//Vertical 
let positionY = 0;
//Horizontal
let positionX =0;
//========= First approch =====================


document.addEventListener("keydown" , function(event){

    if(event.key === "ArrowDown"){
       positionY += 10;
    }else if(event.key === "ArrowUp"){
       positionY -= 10;
    }else  if(event.key === "ArrowRight"){
        positionX +=10;
    }else if(event.key === "ArrowLeft"){
        positionX -= 10;
    }else{
        return;
    }
    img.style.transform = `translate(${positionX}px , ${positionY}px)`;
})


////================== Scecond approch =======================



// document.addEventListener("keydown" , function(event){

//     switch (event.key){
//         case "ArrowUp":
//            positionY -= 10;
//            break;
//         case "ArrowDown":
//            positionY += 10;
//            break; 
//         case "ArrowLeft":
//            positionX -= 10;
//            break;   
//         case "ArrowRight":
//            positionX += 10;
//            break; 
//         default:
//             return;   
    
//     }

//     //update the position of image
//     img.style.transform = `translate(${positionX}px , ${positionY}px)`;
// })