class Product{
    #name;
    constructor(n,p,r){
        this.#name = n;
        this.price =p;
        this.rating = r;
    }

    static price(){
        console.log("read this" ,this.#name)
    }
  
    get nameGetter(){
        console.log(this.#name);
    }

    set nameSetter(n){
        if( n.length < 0) return;
         this.#name = n;
    }

}
const p = new Product("HP", 25 , 5);
console.log(p)
//p.price();

//Product.price();

// p.setName("Lenovo");
// p.getName();

p.nameSetter = "Tufan";
p.nameGetter;
