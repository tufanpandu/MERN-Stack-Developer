//create pre-existing array
const nameList =["Tufan" , "Imran" , "Gulu" , "Sai","Litun", "Protap", "Lipsa","Nibedita"];
let count =0;
//button
const btn = document.querySelector("#btn");
//orderlist
let orderlist = document.querySelector(".orderList");

//funciton for add item list dynamically
function addItemList(){
    //Create Element for HTML
    let newElement = document.createElement("li");
   if(count < nameList.length){
    newElement.textContent = nameList[count] ;
    orderlist.appendChild(newElement);
   }else{
       alert("All item have been added.")
   }
   count++;
 
}

  const reset = document.querySelector("#reset");
    reset.addEventListener("click", function(){
        orderlist.innerHTML = " ";
        count =0;
    })

btn.addEventListener("click", addItemList);