/*
===============4. Arrange in alphabetical order.=============
Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order.

*/


const books =[
    {title:"To Kill a Mockingbird",author: "Harper Lee",year: 1960},
    {title:"1984",author: " George Orwell ",year: 1949},
    {title:"Pride and Prejudice",author: " Jane Austen ",year: 1813},
    {title:"Harry Potter and the Sorcerer's Stone",author: "J.K. Rowling",year: 1997},
    {title:"Brave New World",author: " Aldous Huxley",year: 1932}
];

function alphabeticalOrder(newList){
     return newList.sort((a,b)=>{
        //Use localeCompare() method for correct string comparision.
            return a.localeCompare(b);
        });
}

function arrangeInOrder(books,alphabeticalOrder){
       let newList = []; //Initialize empty array
       books.map((book) => {//Iterate over books
        newList.push(book.title);//Push the titel to the emptey array
       })
       return alphabeticalOrder(newList);
}

console.log(arrangeInOrder(books, alphabeticalOrder));

