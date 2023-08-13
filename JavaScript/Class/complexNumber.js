class Complexnumber{
    #real;
    #imgn;
    constructor(r , i){
        this.#real = r;
        this.#imgn =i;

    }

    display(){
        console.log(this.#real + " + i" + this.#imgn);
    }
//  Getter
    get real(){
        return this.#real;
    }

    get imgn(){
        return this.#imgn;
    }
// setter
  addcomplexnumber(c){
       this.#real *= c.real;
       this.#imgn *= c.imgn;
  }


}
const c = new Complexnumber(2 , 5);
c.display();

const c2 = new Complexnumber(5 , 10);
c.addcomplexnumber(c2);
c.display();

