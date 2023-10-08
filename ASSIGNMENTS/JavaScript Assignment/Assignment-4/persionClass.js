// ====== Implementing persion class with default value =======
class Persion{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    //Method
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

//Instation
const persionDetails = new Persion("Tufan Chandra Pandu" , 25);
console.log(persionDetails.getDetails());
