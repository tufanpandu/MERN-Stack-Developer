//content
 const paragraphBox = document.querySelector("#contener").querySelectorAll("p");
//  console.log(paragraphBox);

const  btn = document.querySelector(".btn");
btn.addEventListener("click" , function(){

     paragraphBox.forEach(function(paragraph , index){
        const words = paragraph.textContent.split(" ");
    
        for(const word of words){
            const span = document.createElement("span");
             if(word.length > 8){
               span.style.backgroundColor = "yellow";
               span.style.color = "black";
               span.textContent = word;
               paragraph.innerHTML = paragraph.innerHTML.replace(word , span.outerHTML);
               
             }

             span.removeEventListener;
        }
         
     })


 });

 




