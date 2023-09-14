
//Task Input
const taskInput = document.querySelector(".taskInput");
//add button
const addBtn = document.querySelector(".addBtn");
const ol = document.querySelector("ol");
let listStore = [];
let count = 0;
addBtn.addEventListener("click", function(el){
    
    if(taskInput.value.trim() !== "" ){
        const newLi = document.createElement("li");
        
        newLi.innerHTML = `${taskInput.value}<i class="fa-solid fa-trash-can delete"></i>`;
        listStore.push(newLi);
        count++;
        ol.appendChild(newLi);
     //delete
     const removeBtn = document.querySelectorAll(".delete");
     
     removeBtn.forEach(function(removeBtn , index){
         removeBtn.addEventListener("click", function(){
            //Store parent element
            let clickLi = removeBtn.parentElement;
            //Find parent element index value in ListStore array.
            let clickIndex = listStore.indexOf(clickLi);
            //if index value is not negetive value.
            if(clickIndex !== -1){
                listStore.splice(clickIndex , 1);
                ol.removeChild(clickLi);
                count--; // decrease by one
            }
         })
     });

     //after add the value in to array clear the input field
     taskInput.value = " ";

    }
})










