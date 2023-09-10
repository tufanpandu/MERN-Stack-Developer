
//Task Input
const taskInput = document.querySelector(".taskInput");
//add button
const addBtn = document.querySelector(".addBtn");
const ul = document.querySelector("ul");
let listStore = [];
let count = 0;
addBtn.addEventListener("click", function(el){
    
    if(taskInput.value.trim() !== " " ){
        const newLi = document.createElement("li");
        newLi.innerHTML = `${taskInput.value}<i class="fa-solid fa-trash-can delete"></i>`;
        listStore.push(newLi);
        count++;
        ul.appendChild(newLi);
     //delete
     const remove = document.querySelectorAll(".delete");
     
     remove.forEach(function(dbox){
         dbox.addEventListener("click", function(el){
            console.log(el);
            ul.removeChild(newLi);
            listStore.pop(newLi)
            count--;
         })
     });

     //after add the value in to array clear the input field
     taskInput.value = " ";

    }
})










