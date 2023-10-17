/*
========================= 7. Multiple requests. ===============================
Create an asynchronous function that retrieves data from two different API endpoints: "https://
jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
a to-do task, while the second API provides post details. The function should combine the results from both APIs
and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
responses from the respective APIs.

*/

//Example -1
//create async function
async function retrievesData(){
     const responseOne = await fetch("https://jsonplaceholder.typicode.com/todos/1");
     const dataOne = await responseOne.json();

     const responseTwo = await fetch("https://jsonplaceholder.typicode.com/posts/1");
     const dataTwo = await responseTwo.json();
    
     return {todo : dataOne , post: dataTwo};
}

//we write another function for waite for the response of retrievesData() funciton then return the result

async function fetchData(){
    const responseFun = await retrievesData();

    return responseFun;
}

// fetchData().then(function(response){
//     console.log(response);
// })

console.log( "Start Example -2")

// Example -2

const fetchOne = fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(response){return response.json()}).then(function(data){return data}).catch(function(error){return "You get some error form FatchOne."});
const fetchTwo = fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>{return response.json()}).then((data) => {return data}).catch((error) => {return "You get some error form FatchTwo"});

;
function fetchDataTwo(fetchOne, fetchTwo){
    return {todos: fetchOne.then((response)=>{return response;}) , posts: fetchTwo.then((response)=>{return response;})};
}
async function getData(fetchDataTwo){
    const resultTwo = await fetchDataTwo(fetchOne,fetchTwo);

    return resultTwo;
}

console.log(getData(fetchDataTwo));
