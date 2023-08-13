//=================== Regular  function ==========================
const Product = function(n,p, r){
    this.name = n ;
    this.price = p;
    this.rating = r;

}

const p = new Product("Mackbook", 100000, 5);
console.log(p);

// =================  Arrow Function ===============================

//if you try to do declar class using arrow function then it's show you can't do class using arrow function.
// - In arrow function "this" not pointing to the calling context.
/*

const Tree = (n,h, c) => {
   this.name =n;
   this.height = h;
   this.colour =c;
}

const t = new Tree("Apple Tree", 20 , "Brown")
console.log(t);

*/

//============== Example -1 (with correct approch) =================
 const Car ={
     name: "Honda",
     fun(){
        console.log(this.name, "Run 100 KM per hours.")
     }
 }

 Car.fun();

 //============= Example -2 (wrong approch) Using Arrow Function ==================
 // Arrow function not take "this" for calling .
  const Car1 = {
    name:"Honda",
    fun : ()=>{
        console.log(this.name , "Run 500 KM per hours");
    }
  }
Car1.fun();



/////=================== Example -3 ===========================

// Define an object named 'Car2'
const Car2 = {
    name: "Honda", // Property: 'name' with value "Honda"
    fun() { // Method: 'fun', a function within the 'Car2' object
        // Define an object named 'oneLiter'
        const oneLiter = {
            // Property: 'run' with an arrow function as its value
            run: () => {
                // Output a message with the value of 'this.name'
                console.log("Arrow function called", this.name);
            }
        }
        // Call the 'run' method of the 'oneLiter' object
        oneLiter.run();
    }
}

// Call the 'fun' method of the 'Car2' object
Car2.fun();
