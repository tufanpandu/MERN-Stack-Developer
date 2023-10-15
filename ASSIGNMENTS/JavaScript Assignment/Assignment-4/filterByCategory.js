/**
 10. Filter by Category.

Write a function that takes an array of products and returns a function that filters the array by a given product category. The function must filter an eCommerce products array by a specific category. The closure filters products using the filter() method. Finally, it returns a new array containing only the products with the same category as the input

 */
//Object contain array // Simple list of Products
const products  = [
    {name: "Shirt", category:"Clothing"},
    {name:"Pant", category:"Clothing"},
    {name: "Hat", category:"Accessories"},
    {name:"Sunglasses", category:"Accessories"},
];

// Create a function called filterdByCategory that takes an array of products as its argument
function filterByCategory(products){
  return function (category){ //Return an inner function that takes a "category argument"
     return products.filter((item)=>{ //return a product using filter method based on category
         return  item.category === category; // Check the array of category and input category is eaual or not and return.
     })
  }
}

//call the filterByCategory function with product array as argumend and immediately ivoike the returned function with the "Category " argument "Accessories"
const output = filterByCategory(products)("Accessories");
console.log(output);


