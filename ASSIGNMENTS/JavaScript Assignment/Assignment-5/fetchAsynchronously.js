/*
 ========== 6. Fetch results asynchronously.=============
Write a function that asynchronously fetches data from an API
[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.
*/

function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>{
        return response.json();
    }).then((data) =>{
        console.log(data);
    }).catch((error) =>{
        console.log("Showing some Error !")
    })
}

fetchData();