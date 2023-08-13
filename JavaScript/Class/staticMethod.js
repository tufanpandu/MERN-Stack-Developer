///=========================== Static method =============

//--- static method is a class function.
//=---You can call  the function with Class name.
//--- static method is never call with objects.


class Product{
    #name; //use "#" for making variable private.
    constructor(n ,p , r){
        this.#name =n;
        this.price =p;
        this.rating =r;
    }
    static price(){ /// static method
        console.log("Print static Method");
    }
}
const p = new Product("HP" , 35000, 4);
console.log(p);
//You can't call directly static price function
//p.price();
// ✅👉You can call  the function with Class name.
Product.price();

p.name = "Lenovo";  // we can't update the data from outside
console.log( p)


function Car(n,p,r){
    this.name =n;
    this.price =p;
    this.rating =r;
}

const c = new Car("HONDA" , 10000000 , 8);
console.log(c)





// ================== Private Data ============

 /**
  * If your using public class then anyone can update the data  of class for that we use private class.
  * In private class no one can update the data of class out side.
  *  -- for create private data  you have to declear the variable name which data we don't want to give access the outside of the class.
  * --- for doing private we need to add "#" to the variable name . like #price
  */