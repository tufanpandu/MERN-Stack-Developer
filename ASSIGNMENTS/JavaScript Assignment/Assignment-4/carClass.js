// ===== Car Description Class ===============
class Car{ // Create class using class keyword.
    constructor(company,model,year){ // class constructor
        this.company = company;
        this.model = model;
        this.year = year;
    }
   // Class Method
    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}.`
    }
}
//Instantion of car class
const  carInfo = new Car( "TATA " , "Harier",2023);
console.log(carInfo.getDescription());