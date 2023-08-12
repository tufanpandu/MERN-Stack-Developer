
// Classes are first introduce in ES6 at Javascript.
//- 1️⃣ Classes serve as a blueprint of creating Objects.
// -2️⃣ A class is define using the class keywords.
class Product{
    //Properties -> Variable -> data member
    // name;  -> if we directly assessing the value in variable then it's always call same value.
    // price;
    // rating;

    // Useing costom  Constructor
    // We use constructor for assessing the different value into the variable.
    constructor(name , price , rating){
        this.name = name;
        this.price = price;
        this.rating = rating;
        //  return 10; //if  you return premitive in constructor then it avoid.
        //return {a:10 , b:20}; // If you return non premitive then constuctor return the not premitiv and avoid the above pices of code.
    }

    //behavier -> function -> member function
    display(){
        console.log("Tufan ...Display the current product " + this.name , this.price , this.rating);
    }
   
}
//For access the data member
// new -> New keyword create an empty objects.
const p = new Product("Tufan" , 100 , 5);
console.log(p);

// For accessing the function member.
p.display();

