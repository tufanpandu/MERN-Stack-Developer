//======Filtering and capitalizing : Books Published After 2010 with author names. ======

const bookList = [
      { book:"Lipika", author : "Rabindranath Tagor",  publication : 1945 },
      {book:"Doglapan",author:"Ashneer Grover",publication:2022},
      {book:"A Changed Man",author:"T.Hardy",publication:1913},
      {book:"Rich Dad Poor Dad",author:"Robart Kiosaky",publication:2020 },
      {book:"Ramayan",author:"Balmiki",publication:1900}
];

//Book filters functions
//filter() return new array and find value eassly.
  let filterBook= bookList.filter((book) => book.publication > 2010);

//convert author name into UpperCase
 const capitalizeAuthor = filterBook.map((bookObj) =>{
   return { book: `${bookObj.book}`,author:`${bookObj.author.toUpperCase()}` ,  publication : `${bookObj.publication}`}
});
   
console.log(capitalizeAuthor);