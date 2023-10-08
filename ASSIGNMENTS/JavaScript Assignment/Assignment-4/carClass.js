// ===== Car Description Class ===============
class car{ // Create class using class keyword.
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

const  carInfo = new car( "TATA " , "Harier",2023);
console.log(carInfo.getDescription());