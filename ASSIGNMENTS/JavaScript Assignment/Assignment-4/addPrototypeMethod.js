// =============== Add a Method to a Prototype =============================
//Create a Prototype object called student

function student(name){
    this.name = name;
}

student.prototype.printDetails = function(){
    console.log(`Hello , My name is ${this.name}`);
}

//instantiat
const studentOne = new student("Tufan");
studentOne.printDetails();


